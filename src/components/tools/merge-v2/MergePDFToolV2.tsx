'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';
import { mergePDFs } from '@/lib/pdf';
import type { MergeOptions, UploadedFile } from '@/types/pdf';
import { Sparkles, Layers, FileText, GripVertical, Trash2, ArrowUp, ArrowDown, Bookmark, Check, FileStack } from 'lucide-react';

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

interface ExtendedFile extends UploadedFile {
  pageCount?: number;
}

export function MergePDFToolV2({ className = '' }: { className?: string }) {
  const tTools = useTranslations('tools');
  const tV2 = useTranslations('toolsV2');
  const [files, setFiles] = useState<ExtendedFile[]>([]);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preserveBookmarks, setPreserveBookmarks] = useState(true);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const cancelledRef = useRef(false);
  const [totalPages, setTotalPages] = useState(0);

  const handleFilesSelected = useCallback(async (newFiles: File[]) => {
    const uploaded: ExtendedFile[] = newFiles.map((file) => ({
      id: generateId(),
      file,
      status: 'pending' as const,
    }));
    // optimistic add
    setFiles(prev => [...prev, ...uploaded]);
    setError(null);
    setResult(null);
    // enrich page counts async
    try {
      const { PDFDocument } = await import('pdf-lib');
      for (const uf of uploaded) {
        try {
          const buf = await uf.file.arrayBuffer();
          const pdf = await PDFDocument.load(buf, { ignoreEncryption: true });
          const pc = pdf.getPageCount();
          setFiles(prev => prev.map(p => p.id === uf.id ? { ...p, pageCount: pc } : p));
        } catch {}
      }
    } catch {}
  }, [files.length]);

  const handleUploadError = useCallback((msg: string) => setError(msg), []);
  const handleRemoveFile = useCallback((id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setResult(null);
  }, []);
  const handleClearAll = useCallback(() => {
    setFiles([]);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setTotalPages(0);
  }, []);
  const handleDragStart = useCallback((i: number) => setDraggedIndex(i), []);
  const handleDragOver = useCallback((e: React.DragEvent, i: number) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== i) setDragOverIndex(i);
  }, [draggedIndex]);
  const handleDragEnd = useCallback(() => {
    if (draggedIndex !== null && dragOverIndex !== null && draggedIndex !== dragOverIndex) {
      setFiles(prev => {
        const n = [...prev];
        const [d] = n.splice(draggedIndex, 1);
        n.splice(dragOverIndex, 0, d);
        return n;
      });
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [draggedIndex, dragOverIndex]);
  const handleMoveUp = useCallback((i: number) => {
    if (i === 0) return;
    setFiles(prev => {
      const n = [...prev];
      [n[i - 1], n[i]] = [n[i], n[i - 1]];
      return n;
    });
  }, []);
  const handleMoveDown = useCallback((i: number) => {
    setFiles(prev => {
      if (i === prev.length - 1) return prev;
      const n = [...prev];
      [n[i], n[i + 1]] = [n[i + 1], n[i]];
      return n;
    });
  }, []);

  const handleMerge = useCallback(async () => {
    if (files.length < 2) {
      setError(tV2('merge.errMinFiles'));
      return;
    }
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);
    const options: MergeOptions = { preserveBookmarks, pageOrder: 'sequential' };
    try {
      const output = await mergePDFs(files.map(f => f.file), options, (prog, msg) => {
        if (!cancelledRef.current) {
          setProgress(prog);
          setProgressMessage(msg || '');
        }
      });
      if (cancelledRef.current) { setStatus('idle'); return; }
      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || tV2('merge.errMergeFailed'));
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : tV2('merge.errUnexpected'));
        setStatus('error');
      }
    }
  }, [files, preserveBookmarks, tV2]);

  const handleCancel = useCallback(() => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  }, []);

  const formatSize = (b: number) => b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB` : `${(b / (1024 * 1024)).toFixed(1)} MB`;
  const isProcessing = status === 'processing' || status === 'uploading';
  const canMerge = files.length >= 2 && !isProcessing;
  const estimatedPages = files.reduce((acc, f) => acc + (f.pageCount || 1), 0);

  return (
    <V2ToolHero toolId="merge-pdf" className={className}>
      <div className="mb-6">
      <FileUploader
        accept={['application/pdf', '.pdf']}
        multiple
        maxFiles={100}
        onFilesSelected={handleFilesSelected}
        onError={handleUploadError}
        disabled={isProcessing}
        label={tTools('mergePdf.uploadLabel') || 'Upload PDF Files'}
        description={tTools('mergePdf.uploadDescription') || 'Drag and drop PDF files here, or click to browse.'}
      />
      </div>

      {error && (
        <div
          className="mb-6 p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700"
          role="alert"
        >
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* ===== FILE LIST ===== */}
      {files.length > 0 && (
        <Card variant="outlined" className="mb-6">
          {/* header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] leading-none">{tV2('merge.filesTitle', { count: files.length })}</h3>
                <p className="text-sm text-[hsl(var(--color-muted-foreground))] mt-1">{tV2('merge.filesSub', { pages: estimatedPages })}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[hsl(var(--color-muted)/0.5)] border border-[hsl(var(--color-border))] text-xs font-medium text-[hsl(var(--color-muted-foreground))]">
                <FileText className="w-3.5 h-3.5" /> {files.length} PDF
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearAll}
                disabled={isProcessing}
              >
                {tV2('merge.clearAll')}
              </Button>
            </div>
          </div>

            <ul className="space-y-2" role="list" aria-label={tV2('merge.filesAria')}>
              {files.map((file, index) => {
                const isDragged = draggedIndex === index;
                const isOver = dragOverIndex === index;
                return (
                  <li
                    key={file.id}
                    draggable={!isProcessing}
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDragEnd={handleDragEnd}
                    className={`flex items-center gap-3 p-3 rounded-[var(--radius-md)] border transition-all
                      ${isDragged ? 'opacity-40 border-dashed' : 'border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.3)]'}
                      ${isOver ? 'ring-2 ring-[hsl(var(--color-primary))] border-[hsl(var(--color-primary))]' : ''}
                      ${!isProcessing ? 'cursor-grab active:cursor-grabbing' : ''}
                    `}
                  >
                    {/* drag handle */}
                    <div className="hidden md:flex items-center justify-center text-[hsl(var(--color-muted-foreground))]">
                      <GripVertical className="w-4 h-4" />
                    </div>
                    {/* number */}
                    <div className="w-8 h-8 rounded-lg bg-[hsl(var(--color-primary))] text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    {/* icon */}
                    <div className="w-10 h-10 rounded-lg bg-[hsl(var(--color-muted)/0.5)] flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-red-500" />
                    </div>
                    {/* info */}
                    <div className="flex-1 min-w-0 text-left">
                      <p className="text-sm font-medium text-[hsl(var(--color-foreground))] truncate pr-2">{file.file.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))]">{formatSize(file.file.size)}</span>
                        {file.pageCount ? (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] font-medium">{tV2('merge.statPages', { count: file.pageCount })}</span>
                        ) : (
                          <span className="text-xs text-[hsl(var(--color-muted-foreground))]">{tV2('merge.analyzing')}</span>
                        )}
                        <span className="hidden sm:inline text-[11px] text-[hsl(var(--color-muted-foreground))]">{tV2('merge.sheetLabel', { index: index + 1 })}</span>
                      </div>
                    </div>
                    {/* actions */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <div className="hidden md:flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => handleMoveUp(index)}
                          disabled={index === 0 || isProcessing}
                          aria-label={tV2('merge.moveUp')}
                        >
                          <ArrowUp className="w-4 h-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => handleMoveDown(index)}
                          disabled={index === files.length - 1 || isProcessing}
                          aria-label={tV2('merge.moveDown')}
                        >
                          <ArrowDown className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveFile(file.id)}
                        disabled={isProcessing}
                        aria-label={tV2('merge.removeFile', { name: file.file.name })}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
        </Card>
      )}

      {/* ===== OPTIONS ===== */}
      {files.length >= 2 && (
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 mb-6">
          <Card variant="outlined">
            <h3 className="text-lg font-medium text-[hsl(var(--color-foreground))] flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] flex items-center justify-center">
                <Bookmark className="w-4 h-4" />
              </span>
              {tV2('merge.optionsTitle')}
            </h3>
            <label className={`mt-4 flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${preserveBookmarks ? 'border-[hsl(var(--color-primary))] bg-[hsl(var(--color-primary)/0.05)]' : 'border-[hsl(var(--color-border))]'}`}>
              <input
                type="checkbox"
                checked={preserveBookmarks}
                onChange={(e) => setPreserveBookmarks(e.target.checked)}
                disabled={isProcessing}
                className="mt-0.5 w-4 h-4 accent-[hsl(var(--color-primary))]"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-[hsl(var(--color-foreground))]">{tV2('merge.keepBookmarks')}</div>
                <div className="text-xs text-[hsl(var(--color-muted-foreground))] mt-0.5">{tV2('merge.keepBookmarksDesc')}</div>
              </div>
              {preserveBookmarks && <Check className="w-5 h-5 text-[hsl(var(--color-primary))] mt-0.5" />}
            </label>
            <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-3">
              {tV2('merge.localNote')}
            </p>
          </Card>

          <Card variant="outlined">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[hsl(var(--color-muted)/0.5)] border border-[hsl(var(--color-border))] text-[11px] font-bold tracking-widest uppercase text-[hsl(var(--color-muted-foreground))]">
              <Sparkles className="w-3 h-3" /> {tV2('merge.previewTitle')}
            </div>
            <div className="mt-4 flex items-end gap-1.5">
              <div className="text-3xl font-bold leading-none text-[hsl(var(--color-foreground))]">{files.length}</div>
              <div className="text-sm text-[hsl(var(--color-muted-foreground))] mb-1">{tV2('merge.filesTo')}</div>
              <div className="text-3xl font-bold leading-none text-[hsl(var(--color-primary))]">1</div>
              <div className="text-sm text-[hsl(var(--color-muted-foreground))] mb-1">PDF</div>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-[hsl(var(--color-muted-foreground))]">
              <FileStack className="w-3.5 h-3.5" /> {tV2('merge.totalPages', { count: estimatedPages })}
            </div>
            <div className="mt-4 h-2 rounded-full bg-[hsl(var(--color-muted))] overflow-hidden">
              <div className="h-full bg-[hsl(var(--color-primary))] transition-all duration-500" style={{ width: `${Math.min(100, (files.length / 5) * 100)}%` }} />
            </div>
          </Card>
        </div>
      )}

      {isProcessing && (
        <div className="mb-6">
          <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={handleCancel} showPercentage />
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-4">
        <Button
          variant="primary"
          size="lg"
          onClick={handleMerge}
          disabled={!canMerge}
          loading={isProcessing}
        >
          {isProcessing ? tV2('merge.actionMerging') : (files.length > 1 ? tV2('merge.actionMergeN', { count: files.length }) : tV2('merge.actionMergeOne'))}
        </Button>

        {result && (
          <DownloadButton file={result} filename="pdfruche-assemblage.pdf" variant="secondary" size="lg" showFileSize />
        )}
      </div>

      {status === 'complete' && result && (
        <div
          className="mt-6 p-4 rounded-[var(--radius-md)] bg-green-50 border border-green-200 text-green-700"
          role="status"
        >
          <p className="text-sm font-medium">{tV2('merge.successTitle')}</p>
          <p className="text-xs mt-0.5">{tV2('merge.successDesc')}</p>
        </div>
      )}
    </V2ToolHero>
  );
}

export default MergePDFToolV2;
