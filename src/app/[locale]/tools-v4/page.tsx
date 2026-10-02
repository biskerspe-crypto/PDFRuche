import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import ToolsV4Client from './ToolsV4Client';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface ToolsV4PageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Tools V4 — SaaS catalog: big instant search, category filter chips and
 * compact uniform tool cards across the full library.
 */
export default async function ToolsV4Page({ params }: ToolsV4PageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const { tools } = await import('@/config/tools');
  const { getToolContent } = await import('@/config/tool-content');

  const localizedToolContent = tools.reduce((acc, tool) => {
    const content = getToolContent(locale as Locale, tool.id);
    if (content) {
      acc[tool.id] = {
        title: content.title,
        description: content.metaDescription,
      };
    }
    return acc;
  }, {} as Record<string, { title: string; description: string }>);

  return (
    <Suspense fallback={null}>
      <ToolsV4Client locale={locale as Locale} localizedToolContent={localizedToolContent} />
    </Suspense>
  );
}
