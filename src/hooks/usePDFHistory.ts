'use client';

import { useState, useCallback, useRef } from 'react';

export type HistoryAction =
  | 'add'
  | 'remove'
  | 'edit'
  | 'rotate'
  | 'move'
  | 'transform'
  | 'text'
  | 'image'
  | 'shape'
  | 'page'
  | 'other';

export interface PDFHistoryEntry<T = unknown> {
  id: number;
  label: string;
  action: HistoryAction;
  snapshot: T;
  timestamp: number;
}

export interface UsePDFHistoryReturn<T = unknown> {
  entries: PDFHistoryEntry<T>[];
  index: number;
  canUndo: boolean;
  canRedo: boolean;
  push: (label: string, action: HistoryAction, snapshot: T, replace?: boolean) => void;
  undo: () => PDFHistoryEntry<T> | null;
  redo: () => PDFHistoryEntry<T> | null;
  jumpTo: (index: number) => PDFHistoryEntry<T> | null;
  clear: () => void;
}

const DEFAULT_LIMIT = 50;

const ACTION_ICONS: Record<HistoryAction, string> = {
  add: '➕',
  remove: '🗑️',
  edit: '✏️',
  rotate: '🔄',
  move: '↔️',
  transform: '🔧',
  text: '🔤',
  image: '🖼️',
  shape: '⬜',
  page: '📄',
  other: '•',
};

export function getActionIcon(action: HistoryAction): string {
  return ACTION_ICONS[action] ?? '•';
}

/**
 * PDF-operation-specific undo/redo history.
 * Stores labeled snapshots of the document state ("Texte ajouté",
 * "Page supprimée", "Rotation 90°", ...) with a configurable limit.
 */
export function usePDFHistory<T = unknown>(limit = DEFAULT_LIMIT): UsePDFHistoryReturn<T> {
  const [entries, setEntries] = useState<PDFHistoryEntry<T>[]>([]);
  const [index, setIndex] = useState(-1);
  const idRef = useRef(0);

  const canUndo = index > 0;
  const canRedo = index < entries.length - 1;

  const push = useCallback(
    (label: string, action: HistoryAction, snapshot: T, replace = false) => {
      idRef.current += 1;
      const entry: PDFHistoryEntry<T> = {
        id: idRef.current,
        label,
        action,
        snapshot,
        timestamp: Date.now(),
      };

      setEntries((prev) => {
        let next = prev;
        if (replace && prev.length > 0) {
          next = [...prev.slice(0, index), entry, ...prev.slice(index + 1)];
        } else {
          next = [...prev.slice(0, index + 1), entry];
        }
        if (next.length > limit) {
          next = next.slice(next.length - limit);
        }
        return next;
      });
      setIndex((prev) => {
        if (replace && prev >= 0) return prev;
        const next = prev + 1;
        return Math.min(next, limit - 1);
      });
    },
    [index, limit]
  );

  const undo = useCallback((): PDFHistoryEntry<T> | null => {
    if (index <= 0) return null;
    const newIndex = index - 1;
    setIndex(newIndex);
    return entries[newIndex];
  }, [index, entries]);

  const redo = useCallback((): PDFHistoryEntry<T> | null => {
    if (index < 0 || index >= entries.length - 1) return null;
    const newIndex = index + 1;
    setIndex(newIndex);
    return entries[newIndex];
  }, [index, entries]);

  const jumpTo = useCallback(
    (target: number): PDFHistoryEntry<T> | null => {
      if (target < 0 || target >= entries.length) return null;
      setIndex(target);
      return entries[target];
    },
    [entries]
  );

  const clear = useCallback(() => {
    setEntries([]);
    setIndex(-1);
  }, []);

  return { entries, index, canUndo, canRedo, push, undo, redo, jumpTo, clear };
}

export default usePDFHistory;