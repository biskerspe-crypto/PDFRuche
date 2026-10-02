'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Check, Trash2, Copy, FileOutput, RotateCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ThumbnailPage {
  id: string;
  pageNumber: number;
  renderUrl?: string;
}

export interface PageThumbnailsProps {
  pages: ThumbnailPage[];
  selected: number[];
  onSelectionChange: (selected: number[]) => void;
  onReorder?: (fromIndex: number, toIndex: number) => void;
  onContextAction?: (action: 'delete' | 'duplicate' | 'extract' | 'rotate', pageNumbers: number[]) => void;
}

/**
 * Sidebar thumbnails panel with multi-selection (Ctrl/Shift click),
 * select-all, drag-to-reorder and a right-click context menu.
 */
export const PageThumbnails: React.FC<PageThumbnailsProps> = ({
  pages,
  selected,
  onSelectionChange,
  onReorder,
  onContextAction,
}) => {
  const [menu, setMenu] = useState<{ x: number; y: number; pages: number[] } | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = () => setMenu(null);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  useEffect(() => {
    if (menu) {
      const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(null);
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }
  }, [menu]);

  const togglePage = (pageNumber: number, ctrl = false) => {
    if (ctrl) {
      onSelectionChange(
        selected.includes(pageNumber)
          ? selected.filter((p) => p !== pageNumber)
          : [...selected, pageNumber].sort((a, b) => a - b)
      );
    } else {
      onSelectionChange([pageNumber]);
    }
  };

  const handleShiftClick = (index: number, anchor: number) => {
    const lo = Math.min(anchor, index);
    const hi = Math.max(anchor, index);
    const range = pages.slice(lo, hi + 1).map((p) => p.pageNumber);
    onSelectionChange([...new Set([...selected, ...range])].sort((a, b) => a - b));
  };

  const handleContextMenu = (e: React.MouseEvent, pageNumber: number) => {
    e.preventDefault();
    const inSelection = selected.includes(pageNumber);
    setMenu({ x: e.clientX, y: e.clientY, pages: inSelection ? selected : [pageNumber] });
  };

  const handleDrop = (targetIndex: number) => {
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      return;
    }
    onReorder?.(draggedIndex, targetIndex);
    setDraggedIndex(null);
  };

  return (
    <div className="flex flex-col gap-2" onContextMenu={(e) => e.preventDefault()}>
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--color-muted-foreground))]">
          {pages.length} pages
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => onSelectionChange(pages.map((p) => p.pageNumber))}
            className="rounded px-3 py-2 text-xs text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-foreground))] transition-colors"
          >
            Select all
          </button>
          <button
            onClick={() => onSelectionChange([])}
            className="rounded px-3 py-2 text-xs text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] hover:text-[hsl(var(--color-foreground))] transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      <ul className="flex flex-col gap-2" role="list" aria-label="Page thumbnails">
        {pages.map((page, index) => {
          const isSelected = selected.includes(page.pageNumber);
          return (
            <li
              key={page.id}
              draggable={!!onReorder}
              onDragStart={() => setDraggedIndex(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              onClick={(e) => {
                if (e.shiftKey && selected.length > 0) {
                  handleShiftClick(index, pages.findIndex((p) => p.pageNumber === selected[selected.length - 1]));
                } else {
                  togglePage(page.pageNumber, e.ctrlKey || e.metaKey);
                }
              }}
              onContextMenu={(e) => handleContextMenu(e, page.pageNumber)}
              className={cn(
                'relative cursor-pointer rounded-xl border-2 overflow-hidden transition-all select-none',
                isSelected
                  ? 'border-[hsl(var(--color-secondary))] shadow-lg shadow-[hsl(var(--color-secondary)/0.2)]'
                  : 'border-transparent hover:border-[hsl(var(--color-border))]',
                draggedIndex === index && 'opacity-50'
              )}
            >
              {/* Thumbnail */}
              <div className="flex h-40 w-full items-center justify-center bg-[hsl(var(--color-muted))]">
                {page.renderUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={page.renderUrl}
                    alt={`Page ${page.pageNumber}`}
                    className="h-full w-full object-contain"
                    draggable={false}
                  />
                ) : (
                  <span className="text-2xl font-bold text-[hsl(var(--color-muted-foreground))]">
                    {page.pageNumber}
                  </span>
                )}
              </div>

              {/* Page number badge */}
              <span className="absolute bottom-1 left-1 rounded-md bg-black/60 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                {page.pageNumber}
              </span>

              {/* Selection checkbox */}
              <span
                className={cn(
                  'absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-md border transition-colors',
                  isSelected
                    ? 'border-[hsl(var(--color-secondary))] bg-[hsl(var(--color-secondary))] text-white'
                    : 'border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))]'
                )}
                aria-hidden="true"
              >
                {isSelected && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Context menu */}
      {menu && (
        <div
          ref={menuRef}
          className="fixed z-[80] w-44 rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] p-1 shadow-xl animate-fade-scale"
          style={{ left: menu.x, top: menu.y }}
          role="menu"
        >
          <button
            role="menuitem"
            onClick={(e) => {
              e.stopPropagation();
              onContextAction?.('delete', menu.pages);
              setMenu(null);
            }}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] transition-colors"
          >
            <Trash2 className="h-4 w-4 text-[hsl(var(--color-destructive))]" aria-hidden="true" />
            Delete
          </button>
          <button
            role="menuitem"
            onClick={(e) => {
              e.stopPropagation();
              onContextAction?.('duplicate', menu.pages);
              setMenu(null);
            }}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] transition-colors"
          >
            <Copy className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
            Duplicate
          </button>
          <button
            role="menuitem"
            onClick={(e) => {
              e.stopPropagation();
              onContextAction?.('extract', menu.pages);
              setMenu(null);
            }}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] transition-colors"
          >
            <FileOutput className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
            Extract
          </button>
          <button
            role="menuitem"
            onClick={(e) => {
              e.stopPropagation();
              onContextAction?.('rotate', menu.pages);
              setMenu(null);
            }}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))] transition-colors"
          >
            <RotateCw className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
            Rotate
          </button>
        </div>
      )}
    </div>
  );
};

export default PageThumbnails;