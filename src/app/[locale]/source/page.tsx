import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import SourcePageClient from './SourcePageClient';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
  const t = await getTranslations({ locale: validLocale, namespace: 'sourcePage' });
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

interface SourcePageProps {
  params: Promise<{ locale: string }>;
}

export default async function SourcePage({ params }: SourcePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SourcePageClient locale={locale as Locale} />;
}
