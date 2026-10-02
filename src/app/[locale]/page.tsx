import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import HomePageV4Client from './home-v4/HomePageV4Client';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

/**
 * Page principale — Home V4 (Aurora Studio) promue en page d'accueil par défaut.
 * home-v2 et home-v3 supprimées.
 */
export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Get localized content for display tools (V2 only — V1 pages removed)
  const { getDisplayTools } = await import('@/config/tools');
  const { getToolContent } = await import('@/config/tool-content');

  const localizedToolContent = getDisplayTools().reduce((acc, tool) => {
    const content = getToolContent(locale as Locale, tool.id);
    if (content) {
      acc[tool.id] = {
        title: content.title,
        description: content.metaDescription,
      };
    }
    return acc;
  }, {} as Record<string, { title: string; description: string }>);

  return <HomePageV4Client locale={locale as Locale} localizedToolContent={localizedToolContent} />;
}
