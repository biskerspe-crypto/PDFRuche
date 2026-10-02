'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import {
  FileEdit,
  FileBox,
  FileDown,
  FolderOpen,
  Wrench,
  ShieldCheck,
  ChevronDown,
  X,
  PanelLeftClose,
} from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import { cn } from '@/lib/utils';

export interface SidebarProps {
  locale: Locale;
  open?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ locale, open = true, onClose }) => {
  const t = useTranslations('home.categories');
  const tCommon = useTranslations('common');
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'edit-annotate', labelKey: 'editAnnotate', icon: <FileEdit className="h-4 w-4" aria-hidden="true" /> },
    { id: 'convert-to-pdf', labelKey: 'convertToPdf', icon: <FileDown className="h-4 w-4" aria-hidden="true" /> },
    { id: 'convert-from-pdf', labelKey: 'convertFromPdf', icon: <FileBox className="h-4 w-4" aria-hidden="true" /> },
    { id: 'organize-manage', labelKey: 'organizeManage', icon: <FolderOpen className="h-4 w-4" aria-hidden="true" /> },
    { id: 'optimize-repair', labelKey: 'optimizeRepair', icon: <Wrench className="h-4 w-4" aria-hidden="true" /> },
    { id: 'secure-pdf', labelKey: 'securePdf', icon: <ShieldCheck className="h-4 w-4" aria-hidden="true" /> },
  ];

  const isActiveCategory = (id: string) => pathname.includes(`category=${id}`);

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          'fixed z-50 top-16 bottom-0 left-0 w-64 bg-[hsl(var(--color-background))] border-r border-[hsl(var(--color-border))] transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label="Sidebar navigation"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-[hsl(var(--color-border))]">
          <span className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--color-muted-foreground))]">
            {tCommon('navigation.tools')}
          </span>
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-muted))] transition-colors"
            aria-label="Close sidebar"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 overflow-y-auto h-[calc(100%-49px)] p-3">
          <Link
            href={`/${locale}/tools`}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
              pathname === `/${locale}/tools`
                ? 'bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))]'
                : 'text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))]'
            )}
          >
            <PanelLeftClose className="h-4 w-4" aria-hidden="true" />
            {tCommon('navigation.tools')}
          </Link>

          {categories.map((cat) => {
            const isExpanded = expanded[cat.id] ?? isActiveCategory(cat.id);
            return (
              <div key={cat.id}>
                <button
                  onClick={() => setExpanded((prev) => ({ ...prev, [cat.id]: !prev[cat.id] }))}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    isActiveCategory(cat.id)
                      ? 'bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))]'
                      : 'text-[hsl(var(--color-foreground))] hover:bg-[hsl(var(--color-muted))]'
                  )}
                  aria-expanded={isExpanded}
                >
                  {cat.icon}
                  {t(cat.labelKey)}
                  <ChevronDown
                    className={cn('ml-auto h-4 w-4 transition-transform', isExpanded && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                {isExpanded && (
                  <Link
                    href={`/${locale}/tools?category=${cat.id}`}
                    className="ml-6 mb-1 block rounded-md px-3 py-1.5 text-xs text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-muted))] transition-colors"
                  >
                    View all
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;