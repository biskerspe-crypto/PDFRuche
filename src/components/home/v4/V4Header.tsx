'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { type Locale } from '@/lib/i18n/config';
import { LogoV2 } from '@/components/branding/LogoV2';

export interface V4HeaderProps {
  locale: Locale;
  active?: 'home' | 'tools';
}

// Minimal stub restored after home-v4 deletion — preserves tools-v4 functionality
// Original V4Header had premium SaaS styling; this stub keeps same interface
export const V4Header: React.FC<V4HeaderProps> = ({ locale, active }) => {
  const t = useTranslations('common');

  return (
    <header className="fixed top-0 z-50 w-full bg-[hsl(var(--color-background))]/80 backdrop-blur-md border-b border-[hsl(var(--color-border))/0.5] shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-3 py-1" aria-label="PDFRuche">
            <LogoV2 size="sm" tone="auto" className="!w-auto !h-14 sm:!h-16 aspect-auto max-w-[370px] object-contain shrink-0 select-none" aria-label="PDFRuche" />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <Link href={`/${locale}`} className={`px-4 py-1.5 text-sm font-medium rounded-full ${active === 'home' ? 'bg-[hsl(var(--color-primary))] text-white' : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'}`}>
              {t('navigation.home')}
            </Link>
            <Link href={`/${locale}#studio-section`} className={`px-4 py-1.5 text-sm font-medium rounded-full ${active === 'tools' ? 'bg-[hsl(var(--color-primary))] text-white' : 'text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]'}`}>
              {t('navigation.tools')}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default V4Header;
