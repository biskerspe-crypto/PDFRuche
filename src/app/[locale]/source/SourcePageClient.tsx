'use client';

import { useTranslations } from 'next-intl';
import { Github, Scale, Download, FileText, Code, ExternalLink, Copy } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { FooterMinimal } from '@/components/layout/FooterMinimal';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { type Locale } from '@/lib/i18n/config';
import { siteConfig } from '@/config/site';

interface SourcePageClientProps {
  locale: Locale;
}

export default function SourcePageClient({ locale }: SourcePageClientProps) {
  const t = useTranslations('sourcePage');
  const tCommon = useTranslations('common');
  const githubUrl = siteConfig.links.github;
  const licenseUrl = siteConfig.links.license;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[hsl(var(--color-primary)/0.1)] via-[hsl(var(--color-background))] to-[hsl(var(--color-secondary)/0.1)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--color-primary)/0.1)] mb-6">
                <Code className="h-8 w-8 text-[hsl(var(--color-primary))]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-4">
                {t('title')}
              </h1>
              <p className="text-lg text-[hsl(var(--color-muted-foreground))] mb-2">
                {t('subtitle')}
              </p>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
                {t('heroDescription')}
              </p>
            </div>
          </div>
        </section>

        {/* Offer */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6" hover>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(var(--color-foreground))] flex items-center justify-center flex-shrink-0">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-1">{t('githubTitle')}</h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-4">{t('githubDescription')}</p>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" size="sm" className="gap-1.5">
                        {t('githubButton')} <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6" hover>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(var(--color-primary))] flex items-center justify-center flex-shrink-0">
                    <Download className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-1">{t('downloadTitle')}</h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-4">{t('downloadDescription')}</p>
                    <a href={`${githubUrl}/archive/refs/heads/main.zip`} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1.5">
                        {t('downloadButton')} <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6" hover>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(var(--color-success)/0.15)] flex items-center justify-center flex-shrink-0">
                    <Scale className="h-5 w-5 text-[hsl(var(--color-success))]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-1">{t('licenseTitle')}</h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-4">{t('licenseDescription')}</p>
                    <div className="flex flex-wrap gap-2">
                      <a href="/LICENSE.txt" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="gap-1.5">
                          <FileText className="h-4 w-4" /> {t('licenseButton')}
                        </Button>
                      </a>
                      <a href={licenseUrl} target="_blank" rel="noopener noreferrer" className="text-xs underline underline-offset-2 text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))] self-center">
                        {t('licenseLink')}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6" hover>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(var(--color-muted))] flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-[hsl(var(--color-foreground))]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[hsl(var(--color-foreground))] mb-1">{t('modificationsTitle')}</h3>
                    <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-4">{t('modificationsDescription')}</p>
                    <a href="/MODIFICATIONS.txt" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1.5">
                        {t('modificationsButton')} <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    </a>
                    <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-2">Also available at PDFRUCHE_MODIFICATIONS.md in repo.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How to */}
        <section className="py-12 bg-[hsl(var(--color-muted)/0.3)]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-6 text-center">{t('howToTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Code className="h-4 w-4" /> {t('howToClone')}
                  </h3>
                  <div className="flex items-center gap-2 bg-[hsl(var(--color-muted))] rounded-lg px-3 py-2 font-mono text-sm">
                    <span className="flex-1 truncate">git clone {githubUrl}.git</span>
                    <button
                      onClick={() => handleCopy(`git clone ${githubUrl}.git`)}
                      className="p-1 rounded hover:bg-[hsl(var(--color-border))] transition-colors"
                      aria-label="Copy"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-[hsl(var(--color-muted-foreground))] mt-3">
                    {t('correspondingSourceNote')}
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="font-semibold mb-3">{t('offerTitle')}</h3>
                  <p className="text-sm text-[hsl(var(--color-muted-foreground))] mb-4">{t('offerText')}</p>
                  <p className="text-xs text-[hsl(var(--color-muted-foreground))] p-3 bg-[hsl(var(--color-muted))] rounded-lg border">
                    {tCommon('brand')} is free software: you can redistribute it and/or modify it under the terms of the GNU AGPL v3 as published by the Free Software Foundation, either version 3 or any later version. No warranty.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMinimal locale={locale} />
    </div>
  );
}
