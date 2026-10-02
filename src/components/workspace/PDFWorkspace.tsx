'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, RotateCw } from 'lucide-react';
import type { PDFPageProxy } from 'pdfjs-dist';
import { loadPdfjs } from '@/lib/pdf/loader';
import { cn } from '@/lib/utils';

export interface PDFWorkspaceProps {
  file: File | ArrayBuffer | Uint8Array;
  fileName?: string;
  className?: string;
  onPageCount?: (count: number) => void;
  onOpen?: (pageCount: number) => void;
  allowNavigation?: boolean;
}

const ZOOM_STEP = 0.25;
const MIN_ZOOM = 0.25;
const MAX_ZOOM = 4;

/**
 * Central PDF viewing/editing zone: PDF.js rendering with
 * zoom controls, page navigation and a contextual toolbar.
 */
export const PDFWorkspace: React.FC<PDFWorkspaceProps> = ({
  file,
  fileName,
  className,
  onPageCount,
  onOpen,
  allowNavigation = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const docRef = useRef<{ destroy: () => void } | null>(null);
  const pageNumRef = useRef(1);
  const zoomRef = useRef(1);

  const renderPage = useCallback(async (pageNum: number, scale: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !docRef.current) return;

    const doc = docRef.current as unknown as { getPage: (n: number) => Promise<PDFPageProxy> };
    try {
      const page = await doc.getPage(pageNum);
      const viewport = page.getViewport({ scale });
      const outputScale = window.devicePixelRatio || 1;

      const context = canvas.getContext('2d');
      if (!context) return;

      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      const renderContext = {
        canvasContext: context,
        viewport,
        transform:
          outputScale !== 1 ? ([outputScale, 0, 0, outputScale, 0, 0] as number[]) : undefined,
      };
      await page.render(renderContext).promise;
    } catch {
      setError('Failed to render page');
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    const open = async () => {
      setLoading(true);
      setError(null);
      try {
        const pdfjsLib = await loadPdfjs();
        const data = file instanceof File ? await file.arrayBuffer() : file;
        const doc = await pdfjsLib.getDocument({ data }).promise;
        if (cancelled) {
          doc.destroy();
          return;
        }
        docRef.current = doc;
        setPageCount(doc.numPages);
        setCurrentPage(1);
        pageNumRef.current = 1;
        zoomRef.current = 1;
        setZoom(1);
        onPageCount?.(doc.numPages);
        onOpen?.(doc.numPages);
        await renderPage(1, 1);
      } catch {
        setError('Failed to open PDF document');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    open();

    return () => {
      cancelled = true;
      docRef.current?.destroy();
      docRef.current = null;
    };
  }, [file, renderPage, onPageCount, onOpen]);

  const goToPage = useCallback(
    async (page: number) => {
      const clamped = Math.max(1, Math.min(page, pageCount));
      if (clamped === pageNumRef.current) return;
      pageNumRef.current = clamped;
      setCurrentPage(clamped);
      zoomRef.current = zoom;
      await renderPage(clamped, zoom);
    },
    [pageCount, zoom, renderPage]
  );

  const changeZoom = useCallback(
    async (delta: number) => {
      const next = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomRef.current + delta));
      zoomRef.current = next;
      setZoom(next);
      await renderPage(pageNumRef.current, next);
    },
    [renderPage]
  );

  const zoomToFit = useCallback(async () => {
    const container = containerRef.current;
    if (!container) return;
    const ratio = (container.clientWidth - 48) / 595;
    const next = Math.max(MIN_ZOOM, Math.min(1, ratio));
    zoomRef.current = next;
    setZoom(next);
    await renderPage(pageNumRef.current, next);
  }, [renderPage]);

  useEffect(() => {
    zoomToFit();
  }, [zoomToFit]);

  const rotate = useCallback(() => {
    setRotation((r) => r + 90);
  }, []);

  const [rotation, setRotation] = useState(0);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex h-full min-h-[420px] w-full flex-col overflow-hidden rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.4)]',
        className
      )}
      tabIndex={allowNavigation ? 0 : -1}
      onKeyDown={
        allowNavigation
          ? (e) => {
              if (e.key === 'ArrowLeft') goToPage(currentPage - 1);
              if (e.key === 'ArrowRight') goToPage(currentPage + 1);
              if (e.key === '+' || e.key === '=') changeZoom(ZOOM_STEP);
              if (e.key === '-') changeZoom(-ZOOM_STEP);
            }
          : undefined
      }
    >
      {/* Toolbar */}
      {allowNavigation && (
        <div className="flex items-center justify-between gap-2 border-b border-[hsl(var(--color-border))] bg-[hsl(var(--color-card))] px-3 py-2">
          <div className="flex items-center gap-1">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage <= 1}
              className="p-2 rounded-md text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] disabled:opacity-40 transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <span className="text-xs font-medium text-[hsl(var(--color-foreground))] min-w-[64px] text-center">
              {currentPage} / {pageCount || '–'}
            </span>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage >= pageCount}
              className="p-2 rounded-md text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] disabled:opacity-40 transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {fileName && (
            <span className="hidden sm:block max-w-[200px] truncate text-xs text-[hsl(var(--color-muted-foreground))]">
              {fileName}
            </span>
          )}

          <div className="flex items-center gap-1">
            <button
              onClick={() => changeZoom(-ZOOM_STEP)}
              disabled={zoom <= MIN_ZOOM}
              className="p-2 rounded-md text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] disabled:opacity-40 transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut className="h-4 w-4" aria-hidden="true" />
            </button>
            <span className="text-xs font-medium text-[hsl(var(--color-muted-foreground))] min-w-[44px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              onClick={() => changeZoom(ZOOM_STEP)}
              disabled={zoom >= MAX_ZOOM}
              className="p-2 rounded-md text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] disabled:opacity-40 transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              onClick={zoomToFit}
              className="p-2 rounded-md text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] transition-colors"
              aria-label="Fit to width"
              title="Fit to width"
            >
              <Maximize className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              onClick={rotate}
              className="p-2 rounded-md text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] transition-colors"
              aria-label="Rotate view"
              title="Rotate view"
            >
              <RotateCw className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* Document area */}
      <div className="flex-1 overflow-auto flex items-start justify-center p-6">
        {loading && (
          <div className="flex items-center gap-3 pt-10 text-sm text-[hsl(var(--color-muted-foreground))] animate-pulse">
            <span className="h-4 w-4 rounded-full border-2 border-[hsl(var(--color-secondary))] border-t-transparent animate-spin" aria-hidden="true" />
            Opening document…
          </div>
        )}
        {error && (
          <p className="pt-10 text-sm text-[hsl(var(--color-destructive))]">{error}</p>
        )}
        <canvas
          ref={canvasRef}
          className={cn('shadow-xl bg-white rounded-sm transition-transform', loading && 'invisible')}
          style={{ transform: `rotate(${rotation}deg)` }}
          aria-label={`Page ${currentPage} preview`}
        />
      </div>
    </div>
  );
};

export default PDFWorkspace;