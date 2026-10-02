'use client';

import React, { createContext, useContext, useCallback, useMemo, useState } from 'react';
import { CheckCircle2, AlertTriangle, Info, XCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: number;
  variant: ToastVariant;
  message: string;
}

export interface ToastContextValue {
  toast: (variant: ToastVariant, message: string) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
  info: (message: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
};

const ICONS: Record<ToastVariant, React.ReactNode> = {
  success: <CheckCircle2 className="h-5 w-5 text-green-500" aria-hidden="true" />,
  error: <XCircle className="h-5 w-5 text-[hsl(var(--color-destructive))]" aria-hidden="true" />,
  warning: <AlertTriangle className="h-5 w-5 text-yellow-500" aria-hidden="true" />,
  info: <Info className="h-5 w-5 text-[hsl(var(--color-secondary))]" aria-hidden="true" />,
};

const STYLES: Record<ToastVariant, string> = {
  success: 'border-green-500/30',
  error: 'border-[hsl(var(--color-destructive)/0.3)]',
  warning: 'border-yellow-500/30',
  info: 'border-[hsl(var(--color-secondary)/0.3)]',
};

const AUTO_DISMISS_MS = 4000;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (variant: ToastVariant, message: string) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev.slice(-3), { id, variant, message }]);
      window.setTimeout(() => dismiss(id), AUTO_DISMISS_MS);
    },
    [dismiss]
  );

  const value = useMemo<ToastContextValue>(
    () => ({
      toast,
      success: (m: string) => toast('success', m),
      error: (m: string) => toast('error', m),
      warning: (m: string) => toast('warning', m),
      info: (m: string) => toast('info', m),
    }),
    [toast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Toast Viewport */}
      <div
        className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-[calc(100vw-2rem)] max-w-sm"
        role="region"
        aria-label="Notifications"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={cn(
              'flex items-start gap-3 rounded-xl border bg-[hsl(var(--color-card))] px-4 py-3 shadow-xl animate-slide-up',
              STYLES[t.variant]
            )}
          >
            <span className="mt-0.5 flex-shrink-0">{ICONS[t.variant]}</span>
            <span className="flex-1 text-sm text-[hsl(var(--color-foreground))] leading-snug">
              {t.message}
            </span>
            <button
              onClick={() => dismiss(t.id)}
              className="flex-shrink-0 text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;