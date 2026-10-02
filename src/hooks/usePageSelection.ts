'use client';

import { useCallback, useMemo, useState } from 'react';

export type PageSelectionMode =
  | 'current'
  | 'selected'
  | 'even'
  | 'odd'
  | 'all'
  | 'custom';

export interface PageSelectionState {
  mode: PageSelectionMode;
  selected: number[];
  customRange: string;
}

export interface UsePageSelectionOptions {
  pageCount: number;
  selectedPages?: number[];
  onSelectionChange?: (pages: number[]) => void;
}

/**
 * Hook managing page selection across PDF operations.
 * Pages are 1-indexed.
 */
export function usePageSelection({ pageCount, selectedPages = [], onSelectionChange }: UsePageSelectionOptions) {
  const [selected, setSelected] = useState<number[]>(selectedPages);
  const [mode, setMode] = useState<PageSelectionMode>('all');
  const [customRange, setCustomRange] = useState('');

  const updateSelection = useCallback(
    (pages: number[]) => {
      setSelected(pages);
      onSelectionChange?.(pages);
    },
    [onSelectionChange]
  );

  const togglePage = useCallback(
    (page: number) => {
      updateSelection(
        selected.includes(page) ? selected.filter((p) => p !== page) : [...selected, page].sort((a, b) => a - b)
      );
    },
    [selected, updateSelection]
  );

  const selectAll = useCallback(() => {
    updateSelection(Array.from({ length: pageCount }, (_, i) => i + 1));
    setMode('all');
  }, [pageCount, updateSelection]);

  const deselectAll = useCallback(() => {
    updateSelection([]);
    setMode('current');
  }, [updateSelection]);

  const selectRange = useCallback(
    (start: number, end: number) => {
      const lo = Math.max(1, Math.min(start, end));
      const hi = Math.min(pageCount, Math.max(start, end));
      const pages = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
      updateSelection([...new Set([...selected, ...pages])].sort((a, b) => a - b));
    },
    [pageCount, selected, updateSelection]
  );

  const selectEven = useCallback(() => {
    updateSelection(Array.from({ length: Math.floor(pageCount / 2) }, (_, i) => (i + 1) * 2));
    setMode('even');
  }, [pageCount, updateSelection]);

  const selectOdd = useCallback(() => {
    updateSelection(Array.from({ length: Math.ceil(pageCount / 2) }, (_, i) => i * 2 + 1));
    setMode('odd');
  }, [pageCount, updateSelection]);

  const setModeAndCustom = useCallback((nextMode: PageSelectionMode, range = '') => {
    setMode(nextMode);
    setCustomRange(range);
  }, []);

  /**
   * Parse a custom range string like "1-3, 5, 8-12" into 1-indexed page numbers.
   * Invalid parts are ignored.
   */
  const parseCustomRange = useCallback(
    (range: string): number[] => {
      const parts = range.split(',');
      const pages = new Set<number>();
      for (const part of parts) {
        const trimmed = part.trim();
        if (!trimmed) continue;
        const rangeMatch = trimmed.match(/^(\d+)\s*-\s*(\d+)$/);
        if (rangeMatch) {
          const lo = Math.max(1, Math.min(Number(rangeMatch[1]), Number(rangeMatch[2])));
          const hi = Math.min(pageCount, Math.max(Number(rangeMatch[1]), Number(rangeMatch[2])));
          for (let i = lo; i <= hi; i++) pages.add(i);
        } else if (/^\d+$/.test(trimmed)) {
          const page = Number(trimmed);
          if (page >= 1 && page <= pageCount) pages.add(page);
        }
      }
      return [...pages].sort((a, b) => a - b);
    },
    [pageCount]
  );

  const applyMode = useCallback(
    (nextMode: PageSelectionMode, currentPage?: number) => {
      switch (nextMode) {
        case 'all':
          selectAll();
          break;
        case 'even':
          selectEven();
          break;
        case 'odd':
          selectOdd();
          break;
        case 'current':
          updateSelection(currentPage ? [currentPage] : selected.length ? [selected[0]] : []);
          break;
        case 'custom':
          updateSelection(parseCustomRange(customRange));
          break;
        case 'selected':
          break;
      }
    },
    [selectAll, selectEven, selectOdd, updateSelection, selected, customRange, parseCustomRange]
  );

  const effectivePages = useMemo(() => {
    if (mode === 'custom' && customRange) return parseCustomRange(customRange);
    return selected;
  }, [mode, customRange, selected, parseCustomRange]);

  return {
    mode,
    setMode: setModeAndCustom,
    selected,
    effectivePages,
    togglePage,
    selectAll,
    deselectAll,
    selectRange,
    selectEven,
    selectOdd,
    applyMode,
    parseCustomRange,
    customRange,
    setCustomRange,
  };
}

export default usePageSelection;