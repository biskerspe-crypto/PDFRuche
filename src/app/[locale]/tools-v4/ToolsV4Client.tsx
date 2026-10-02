'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Search, X, ArrowRight } from 'lucide-react';
import V4Header from '@/components/home/v4/V4Header';
import { FooterMinimal } from '@/components/layout/FooterMinimal';
import { getDisplayTools, getDisplayToolsByCategory } from '@/config/tools';
import { searchTools } from '@/lib/utils/search';
import { getToolIcon } from '@/config/icons';
import { type Locale } from '@/lib/i18n/config';
import { type Tool, type ToolCategory } from '@/types/tool';

interface ToolsV4ClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

const CATEGORIES: ToolCategory[] = [
  'edit-annotate',
  'organize-manage',
  'convert-from-pdf',
  'convert-to-pdf',
  'optimize-repair',
  'secure-pdf',
];

/** Compact uniform tool card — [icon] / name / short description */
function ToolCardV4({
  tool,
  locale,
  title,
  description,
  popular,
}: {
  tool: Tool;
  locale: string;
  title: string;
  description: string;
  popular: boolean;
}) {
  const Icon = getToolIcon(tool.icon);

  return (
    <Link
      href={`/${locale}/tools/${tool.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="lv4-card group flex flex-col p-4.5 focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] outline-none"
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className="w-10 h-10 rounded-xl bg-[hsl(var(--color-secondary)/0.09)] border border-[hsl(var(--color-secondary)/0.15)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <Icon className="w-5 h-5 text-[hsl(var(--color-primary))]" />
        </span>
        {popular && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-[hsl(var(--color-accent))] bg-[hsl(var(--color-accent)/0.08)] rounded-full px-2 py-0.5">
            ★
          </span>
        )}
      </div>
      <h3 className="text-sm font-semibold text-[hsl(var(--color-foreground))] leading-snug group-hover:text-[hsl(var(--color-secondary))] transition-colors line-clamp-2">
        {title}
      </h3>
      <p className="mt-1 text-xs text-[hsl(var(--color-muted-foreground))] line-clamp-2 leading-relaxed">
        {description}
      </p>
    </Link>
  );
}

export default function ToolsV4Client({ locale, localizedToolContent }: ToolsV4ClientProps) {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const allTools = useMemo(() => getDisplayTools(), []);

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ToolCategory | 'all'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  /* Sync initial state from URL (?q= / ?category=) */
  useEffect(() => {
    const q = searchParams.get('q');
    const c = searchParams.get('category') as ToolCategory | null;
    if (q) setQuery(q);
    if (c && CATEGORIES.includes(c)) setCategory(c);
    if (q || c) inputRef.current?.focus();
  }, [searchParams]);

  const titleOf = (tool: Tool) => localizedToolContent?.[tool.id]?.title ?? tool.id;

  const searching = query.trim().length > 0;

  /* Instant results */
  const searchResults = useMemo(() => {
    if (!searching) return [];
    return searchTools(query, Object.fromEntries(allTools.map((tool) => [
      tool.id,
      { title: titleOf(tool), description: localizedToolContent?.[tool.id]?.description ?? '' },
    ])))
      .map((r) => r.tool);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, allTools, localizedToolContent]);

  const filteredByCategory = useMemo(() => {
    if (searching || category === 'all') return null;
    return getDisplayToolsByCategory(category);
  }, [searching, category]);

  const popularIds = new Set(['merge-pdf-v2', 'split-pdf-v2', 'compress-pdf-v2', 'edit-pdf-v2', 'jpg-to-pdf-v2', 'pdf-to-jpg-v2', 'pdf-to-docx-v2', 'word-to-pdf-v2', 'sign-pdf-v2', 'encrypt-pdf-v2', 'ocr-pdf-v2']);

  const categoryTranslationKeys: Record<ToolCategory, string> = {
    'edit-annotate': 'editAnnotate',
    'convert-to-pdf': 'convertToPdf',
    'convert-from-pdf': 'convertFromPdf',
    'organize-manage': 'organizeManage',
    'optimize-repair': 'optimizeRepair',
    'secure-pdf': 'securePdf',
  };

  const clearAll = () => {
    setQuery('');
    setCategory('all');
    inputRef.current?.focus();
  };

  const renderGrid = (tools: Tool[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5">
      {tools.map((tool) => (
        <ToolCardV4
          key={tool.id}
          tool={tool}
          locale={locale}
          // Localized href uses real slug below via wrapper fix
          title={titleOf(tool)}
          description={localizedToolContent?.[tool.id]?.description ?? ''}
          popular={popularIds.has(tool.id)}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--color-background))]">
      <V4Header locale={locale} active="tools" />

      <main id="main-content" className="flex-1 pt-28 pb-20" tabIndex={-1}>
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[hsl(var(--color-foreground))] mb-2.5">
              {t('home.v4.toolsTitle')}
            </h1>
            <p className="text-[hsl(var(--color-muted-foreground))]">{t('home.v4.toolsSub')}</p>
          </div>

          {/* Big search */}
          <div className="relative max-w-2xl mx-auto mb-7">
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[hsl(var(--color-muted-foreground))] pointer-events-none"
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('home.v4.searchPh')}
              aria-label={t('home.v4.searchPh')}
              className="lv4-card w-full h-14 pl-13 pr-12 text-base font-medium bg-[hsl(var(--color-card))] rounded-2xl outline-none placeholder:text-[hsl(var(--color-muted-foreground))] focus-visible:ring-2 focus-visible:ring-[hsl(var(--color-ring))] focus-visible:border-transparent"
            />
            {searching && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center bg-[hsl(var(--color-muted)/0.7)] hover:bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] transition-colors"
                aria-label={t('home.v4.clearSearch')}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category filter chips */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide justify-start sm:justify-center pb-2 mb-9 -mx-4 px-4 sm:flex-wrap">
            <button
              type="button"
              onClick={() => setCategory('all')}
              className={`lv4-chip ${!searching && category === 'all' ? 'lv4-chip-active' : ''}`}
            >
              {t('home.v4.filterAll')}
              <span className="text-xs opacity-70">{allTools.length}</span>
            </button>
            {CATEGORIES.map((cat) => {
              const count = getDisplayToolsByCategory(cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`lv4-chip ${!searching && category === cat ? 'lv4-chip-active' : ''}`}
                >
                  {t(`home.categories.${categoryTranslationKeys[cat]}`)}
                  <span className="text-xs opacity-70">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Results */}
          {searching ? (
            <section aria-live="polite">
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-5">
                {t('home.v4.resultsCount', { count: searchResults.length })}
              </p>
              {searchResults.length === 0 ? (
                <div className="text-center py-16 lv4-card max-w-md mx-auto p-10">
                  <p className="text-sm text-[hsl(var(--color-muted-foreground))]">{t('home.v4.noResults')}</p>
                </div>
              ) : (
                renderGrid(searchResults)
              )}
            </section>
          ) : filteredByCategory ? (
            <section key={category} className="lv4-fade-up" aria-live="polite">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-display text-xl font-bold text-[hsl(var(--color-foreground))]">
                  {category !== 'all' ? t(`home.categories.${categoryTranslationKeys[category]}`) : t('home.v4.filterAll')}
                </h2>
                <span className="text-xs font-semibold text-[hsl(var(--color-secondary))] bg-[hsl(var(--color-secondary)/0.09)] rounded-full px-3 py-1">
                  {filteredByCategory.length}
                </span>
              </div>
              {renderGrid(filteredByCategory)}
            </section>
          ) : (
            /* Default browse: grouped by category sections */
            <div className="space-y-14">
              {CATEGORIES.map((cat) => {
                const tools = getDisplayToolsByCategory(cat);
                if (tools.length === 0) return null;
                return (
                  <section key={cat} id={cat} className="scroll-mt-28">
                    <div className="flex items-center justify-between mb-5">
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-[hsl(var(--color-foreground))]">
                        {t(`home.categories.${categoryTranslationKeys[cat]}`)}
                      </h2>
                      <Link
                        href={`/${locale}#studio-section`}
                        className="group hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--color-secondary))]"
                      >
                        {t('common.navigation.tools')}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:flip" aria-hidden="true" />
                      </Link>
                    </div>
                    {renderGrid(tools)}
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <FooterMinimal locale={locale} />
    </div>
  );
}
