import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import { getToolById } from '@/config/tools';
import { getToolContent } from '@/config/tool-content';
import { generateToolMetadata } from '@/lib/seo/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  generateSoftwareApplicationSchema,
  generateFAQPageSchema,
  generateHowToSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo/structured-data';
import { Header } from '@/components/layout/Header';
import { FooterMinimal } from '@/components/layout/FooterMinimal';
import { ImageToPdfToolV2 } from '@/components/tools/image-to-pdf-v2';
import AuroraBackground from '@/components/home/v4/AuroraBackground';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const tool = getToolById('image-to-pdf-v2') || getToolById('image-to-pdf')!;
  const content = getToolContent(locale, 'image-to-pdf-v2') || getToolContent(locale, 'image-to-pdf')!;
  return generateToolMetadata({
    tool: { ...tool, slug: 'image-to-pdf-v2' },
    content: { ...content, title: `${content.title} — Atelier V2` },
    locale,
    path: '/tools/image-to-pdf-v2',
  });
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function MergePDFV2Page({ params }: PageProps) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations();

  const tool = getToolById('image-to-pdf-v2') || getToolById('image-to-pdf')!;
  const content = getToolContent(locale, 'image-to-pdf-v2') || getToolContent(locale, 'image-to-pdf')!;

  const toolStructuredData = generateSoftwareApplicationSchema(tool, content, locale);
  const faqStructuredData = content.faq && content.faq.length > 0 ? generateFAQPageSchema(content.faq) : null;
  const howToStructuredData = generateHowToSchema(tool, content, locale);
  const webPageStructuredData = generateWebPageSchema(tool, content, locale);
  const breadcrumbStructuredData = generateBreadcrumbSchema(
    [
      { name: 'Home', path: '' },
      { name: 'Tools', path: '/tools' },
      { name: `${content.title} V2`, path: '/tools/image-to-pdf-v2' },
    ],
    locale
  );

  return (
    <>
      <JsonLd data={toolStructuredData} />
      <JsonLd data={webPageStructuredData} />
      <JsonLd data={breadcrumbStructuredData} />
      {faqStructuredData && <JsonLd data={faqStructuredData} />}
      {howToStructuredData && <JsonLd data={howToStructuredData} />}

      <div className="relative min-h-screen flex flex-col text-slate-100 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
        <AuroraBackground />
        <Header locale={locale} />
        <main id="main-content" className="flex-1 relative z-10" tabIndex={-1}>
          {/* V2 Tool - full artistic layout, no ToolPage wrapper */}
          <div className="max-w-[1280px] mx-auto px-4 pt-24 pb-8">
            {/* subtle top breadcrumb - hidden per global, but keep for SEO a11y */}
            <nav aria-label="Breadcrumb" className="hidden">
              <a href={`/${locale}`}>Home</a>
            </nav>

            <ImageToPdfToolV2 />


            {/* SEO content - dark glass */}
            <div className="mt-12 prose prose-invert prose-sm max-w-none text-slate-400 bg-slate-900/40 backdrop-blur border border-white/10 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white !mt-0">{content.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: content.description }} />
            </div>
          </div>
        </main>
        <FooterMinimal locale={locale} />
      </div>
    </>
  );
}