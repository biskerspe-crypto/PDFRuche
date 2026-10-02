'use client';

import React, { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type PageSelectionMode } from '@/hooks/usePageSelection';

export interface ApplyToSelectorProps {
  mode: PageSelectionMode;
  onModeChange: (mode: PageSelectionMode, customRange?: string) => void;
  pageCount: number;
  className?: string;
}

const OPTIONS: { id: PageSelectionMode; label: string }[] = [
  { id: 'current', label: 'Current page' },
  { id: 'selected', label: 'Selected pages' },
  { id: 'even', label: 'Even pages' },
  { id: 'odd', label: 'Odd pages' },
  { id: 'all', label: 'All pages' },
  { id: 'custom', label: 'Custom range…' },
];

/**
 * Generic "Apply to…" dropdown. Works with any page-range operation:
 * rotation, watermark, page numbers, headers/footers, cropping…
 */
export const ApplyToSelector: React.FC<ApplyToSelectorProps> = ({
  mode,
  onModeChange,
  pageCount,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [rangeText, setRangeText] = useState('');

  const activeLabel = OPTIONS.find((o) => o.id === mode)?.label ?? 'All pages';

  const parsedCount = useMemo(() => {
    const parts = rangeText.split(',');
    let count = 0;
    for (const part of parts) {
      const t = part.trim();
      if (!t) continue;
      const m = t.match(/^(\d+)\s*-\s*(\d+)$/);
      if (m) {
        const lo = Math.min(Number(m[1]), Number(m[2]));
        const hi = Math.min(pageCount, Math.max(Number(m[1]), Number(m[2])));
        count += Math.max(0, hi - lo + 1);
      } else if (/^\d+$/.test(t) && Number(t) >= 1 && Number(t) <= pageCount) {
        count += 1;
      }
    }
    return count;
  }, [rangeText, pageCount]);

  return (
    <div className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-3 py-2 text-sm text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))]"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate">{activeLabel}</span>
        <ChevronDown className={cn('h-4 w-4 shrink-0 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-50 mt-1 w-full min-w-[180px] rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] p-1.5 shadow-xl animate-fade-scale"
        >
          {OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              role="option"
              aria-selected={mode === opt.id}
              onClick={() => {
                onModeChange(opt.id, opt.id === 'custom' ? rangeText : undefined);
                setOpen(false);
              }}
              className={cn(
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors',
                mode === opt.id
                  ? 'bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] font-medium'
                  : 'text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))]'
              )}
            >
              {opt.label}
            </button>
          ))}

          {mode === 'custom' && (
            <div className="mt-1.5 border-t border-[hsl(var(--color-border))] px-1 pt-1.5">
              <input
                type="text"
                value={rangeText}
                onChange={(e) => {
                  setRangeText(e.target.value);
                  onModeChange('custom', e.target.value);
                }}
                placeholder='e.g. "1-3, 5, 8-12"'
                className="w-full rounded-lg border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] px-3 py-1.5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))]"
                aria-label="Custom page range"
              />
              {parsedCount > 0 && (
                <p className="mt-1 text-xs text-[hsl(var(--color-muted-foreground))]">{parsedCount} page(s)</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ApplyToSelector;