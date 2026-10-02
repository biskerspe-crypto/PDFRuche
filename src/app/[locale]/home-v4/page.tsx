import { setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import HomePageV4Client from './HomePageV4Client';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface HomePageV4Props {
  params: Promise<{ locale: string }>;
}

/**
 * Home V4 — "Aurora Studio": Complete fusion of Home-V3 storytelling and the Tools
 * exploration workstation. Inspired by 1lookup.io energy, dynamic colorful gradients,
 * smart file drop detection, client-side WebAssembly architecture and interactive exploration.
 */
export default async function HomePageV4({ params }: HomePageV4Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  // Get localized content for tools
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

  return <HomePageV4Client locale={locale as Locale} localizedToolContent={localizedToolContent} />;
}
