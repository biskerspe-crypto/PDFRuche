'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { type Locale } from '@/lib/i18n/config';

export interface FooterMinimalProps {
  locale: Locale;
}

export const FooterMinimal: React.FC<FooterMinimalProps> = ({ locale }) => {
  const t = useTranslations();

  return (
    <footer className="relative z-10 border-t border-white/5 py-6 px-4" role="contentinfo">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>{t('common.footer.copyright', { year: new Date().getFullYear() }) || `© ${new Date().getFullYear()} PDFRuche. All rights reserved.`}</p>
        <div className="flex items-center gap-5">
          <a href={`/${locale}/about`} className="hover:text-slate-300 transition-colors">
            {t('common.navigation.about') || 'About'}
          </a>
          <a href={`/${locale}/privacy`} className="hover:text-slate-300 transition-colors">
            {t('common.navigation.privacy') || 'Privacy'}
          </a>
          <a href={`/${locale}/faq`} className="hover:text-slate-300 transition-colors">
            {t('common.navigation.faq') || 'FAQ'}
          </a>
          <a href={`/${locale}/contact`} className="hover:text-slate-300 transition-colors">
            {t('common.navigation.contact') || 'Contact'}
          </a>
          <a href="/LICENSE.txt" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
            LICENSE
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-slate-400 mt-3 leading-relaxed">
        PDFRuche is based on{' '}
        <a href="https://github.com/PDFCraftTool/pdfcraft" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">
          PDFCraft
        </a>{' '}
        (AGPL-3.0) — Source available under{' '}
        <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">
          GNU AGPL v3
        </a>{' '}
        at{' '}
        <a href="https://github.com/biskerspe-crypto/PDFRuche" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-300">
          GitHub
        </a>{' '}
        and{' '}
        <a href={`/${locale}/source`} className="underline hover:text-slate-300">
          /{locale}/source
        </a>
        .
      </p>
    </footer>
  );
};

export default FooterMinimal;
