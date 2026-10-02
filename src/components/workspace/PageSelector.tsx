'use client';

import React, { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  type PageSelectionMode,
  usePageSelection,
} from '@/hooks/usePageSelection';

export interface PageSelectorProps {
  pageCount: number;
  currentPage?: number;
  selected?: number[];
  onSelectionChange?: (pages: number[]) => void;
  label?: string;
  className?: string;
}

/**
 * Reusable page selector used by: rotate, delete, extract, watermark,
 * page numbers, header/footer and every "apply to" operation.
 */
export const PageSelector: React.FC<PageSelectorProps> = ({
  pageCount,
  currentPage = 1,
  selected = [],
  onSelectionChange,
  label,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [rangeText, setRangeText] = useState('');
  const selection = usePageSelection({ pageCount, selectedPages: selected, onSelectionChange });

  const options: { id: PageSelectionMode; label: string; hint?: string }[] = useMemo(
    () => [
      { id: 'all', label: 'All pages' },
      { id: 'current', label: 'Current page' },
      { id: 'selected', label: 'Selected pages', hint: String(selection.selected.length) },
      { id: 'even', label: 'Even pages' },
      { id: 'odd', label: 'Odd pages' },
      { id: 'custom', label: 'Custom range' },
    ],
    [selection.selected.length]
  );

  const activeLabel = options.find((o) => o.id === selection.mode)?.label ?? 'All pages';

  return (
    <div className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-3 py-2 text-sm text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate">{label ? `${label}: ` : ''}{activeLabel}</span>
        <ChevronDown className={cn('h-4 w-4 shrink-0 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-50 mt-1 w-full rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] p-1.5 shadow-xl animate-fade-scale"
        >
          {options.map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="option"
              aria-selected={selection.mode === opt.id}
              onClick={() => {
                if (opt.id === 'selected' && selection.selected.length === 0) return;
                if (opt.id === 'custom' && rangeText) {
                  selection.setMode('custom', rangeText);
                  selection.applyMode('custom');
                } else {
                  selection.setMode(opt.id);
                  selection.applyMode(opt.id, currentPage);
                }
                setOpen(false);
              }}
              className={cn(
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors',
                selection.mode === opt.id
                  ? 'bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-medium'
                  : 'text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))]'
              )}
            >
              <span>{opt.label}</span>
              {opt.hint && <span className="text-xs text-[hsl(var(--color-muted-foreground))]">{opt.hint}</span>}
            </button>
          ))}

          {selection.mode === 'custom' && (
            <div className="border-t border-[hsl(var(--color-border))] mt-1.5 pt-1.5 px-1">
              <input
                type="text"
                value={rangeText}
                onChange={(e) => {
                  setRangeText(e.target.value);
                  selection.setCustomRange(e.target.value);
                  selection.applyMode('custom');
                }}
                placeholder='e.g. "1-3, 5, 8-12"'
                className="w-full rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-3 py-1.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))]"
                aria-label="Custom page range"
              />
              {selection.parseCustomRange(rangeText).length > 0 && (
                <p className="mt-1 text-xs text-[hsl(var(--color-muted-foreground))]">
                  {selection.parseCustomRange(rangeText).length} page(s)
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PageSelector;