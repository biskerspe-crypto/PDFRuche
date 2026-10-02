'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Shield, Lock, FileCheck, Globe, Code, Github, Scale } from 'lucide-react';
import { type Locale, locales, localeConfig, getLocalizedPath } from '@/lib/i18n/config';
import { saveLanguagePreference } from './LanguageSelector';
import { Logo } from '@/components/branding/Logo';
import { siteConfig } from '@/config/site';

export interface FooterProps {
  locale: Locale;
  hideInfoSections?: boolean;
  hideLanguageSwitcher?: boolean;
  hideBrand?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ locale, hideInfoSections = false, hideLanguageSwitcher = false, hideBrand = false }) => {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const pathname = usePathname();

  const footerLinks = [
    { href: `/${locale}/about`, label: t('navigation.about') },
    { href: `/${locale}/faq`, label: t('navigation.faq') },
    { href: `/${locale}/privacy`, label: t('navigation.privacy') },
    { href: `/${locale}/contact`, label: t('navigation.contact') },
  ];

  const handleLanguageChange = (newLocale: Locale) => {
    saveLanguagePreference(newLocale);
    const newPath = getLocalizedPath(pathname, newLocale);
    router.push(newPath);
  };

  return (
    <footer
      className="w-full border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] pt-16 pb-8"
      role="contentinfo"
    >
      <div className="container mx-auto px-4">
        {!hideInfoSections ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
              <Link
                href={`/${locale}`}
                className="group flex items-center gap-2.5 text-xl font-bold text-[hsl(var(--color-foreground))]"
                aria-label={`${t('brand')} - ${t('navigation.home')}`}
              >
                <Logo size="sm" className="transition-transform group-hover:scale-105" />
                <span data-testid="footer-brand-name">{t('brand')}</span>
              </Link>
              <p className="text-sm text-[hsl(var(--color-muted-foreground))] leading-relaxed max-w-xs">
                {t('tagline') || 'Professional, secure, and free PDF tools for everyone. No installation required.'}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--color-foreground))] mb-6">
                Resources
              </h3>
              <ul className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-primary))] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[hsl(var(--color-muted-foreground))] group-hover:bg-[hsl(var(--color-primary))] transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Features */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--color-foreground))] mb-6">
                Security
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded bg-[hsl(var(--color-success)/0.1)] text-[hsl(var(--color-success))]">
                    <Lock className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-[hsl(var(--color-foreground))]">Client-side processing</span>
                    <span className="text-xs text-[hsl(var(--color-muted-foreground))]">Files never leave your device</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))]">
                    <FileCheck className="h-3 w-3" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-[hsl(var(--color-foreground))]">No file uploads</span>
                    <span className="text-xs text-[hsl(var(--color-muted-foreground))]">100% private & secure</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Privacy Badge Block */}
            <div className="flex flex-col justify-start gap-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[hsl(var(--color-foreground))] mb-6">
                Compliance
              </h3>
              <div
                className="flex items-center gap-3 p-4 bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-xl shadow-sm"
              >
                <div className="h-10 w-10 rounded-full bg-[hsl(var(--color-success)/0.1)] flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-[hsl(var(--color-success))]" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[hsl(var(--color-foreground))]">GDPR Compliant</div>
                  <div className="text-xs text-[hsl(var(--color-muted-foreground))]">{t('footer.privacyBadge')}</div>
                </div>
              </div>
              <Link
                href={`/${locale}/source`}
                className="flex items-center gap-3 p-4 bg-[hsl(var(--color-card))] border border-[hsl(var(--color-border))] rounded-xl shadow-sm hover:border-[hsl(var(--color-primary)/0.3)] transition-colors group"
              >
                <div className="h-10 w-10 rounded-full bg-[hsl(var(--color-primary)/0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--color-primary)/0.15)] transition-colors">
                  <Code className="h-5 w-5 text-[hsl(var(--color-primary))]" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[hsl(var(--color-foreground))] flex items-center gap-1">
                    AGPL-3.0 — Open Source <span className="text-[10px] px-1.5 py-0.5 rounded bg-[hsl(var(--color-primary))] text-white font-bold">SOURCE</span>
                  </div>
                  <div className="text-xs text-[hsl(var(--color-muted-foreground))]">View source & license</div>
                </div>
              </Link>
            </div>
          </div>
        ) : hideBrand ? null : (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <Link
              href={`/${locale}`}
              className="group flex items-center gap-2.5 text-xl font-bold text-[hsl(var(--color-foreground))]"
              aria-label={`${t('brand')} - ${t('navigation.home')}`}
            >
              <Logo size="sm" className="transition-transform group-hover:scale-105" />
              <span data-testid="footer-brand-name">{t('brand')}</span>
            </Link>
            <p className="text-sm text-[hsl(var(--color-muted-foreground))] text-center md:text-right max-w-md">
              {t('tagline') || 'Professional, secure, and free PDF tools for everyone.'}
            </p>
          </div>
        )}

        {!hideLanguageSwitcher && (
          <div className="py-6 border-t border-[hsl(var(--color-border))]">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" />
              <span className="text-sm font-medium text-[hsl(var(--color-foreground))]">
                {t('buttons.selectLanguage')}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {locales.map((loc) => {
                const config = localeConfig[loc];
                const isActive = loc === locale;
                return (
                  <button
                    key={loc}
                    onClick={() => handleLanguageChange(loc)}
                    className={`
                      px-3 py-1.5 text-sm rounded-full transition-all
                      ${isActive
                        ? 'bg-[hsl(var(--color-primary))] text-white font-medium'
                        : 'bg-[hsl(var(--color-muted))] text-[hsl(var(--color-muted-foreground))] hover:bg-[hsl(var(--color-primary)/0.1)] hover:text-[hsl(var(--color-primary))]'
                      }
                    `}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {config.nativeName}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="pt-8 border-t border-[hsl(var(--color-border))] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[hsl(var(--color-muted-foreground))]">
            &copy; {currentYear} {t('brand')}. {t('footer.copyright', { year: '' }).replace(/^\d{4}\s*/, '')}
          </p>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}/terms`} className="text-xs text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]">Terms</Link>
            <Link href={`/${locale}/privacy`} className="text-xs text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]">Privacy</Link>
            <Link href={`/${locale}/cookies`} className="text-xs text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]">Cookies</Link>
          </div>
        </div>

        {/* AGPL Attribution — Appropriate Legal Notices (AGPL §0, §13) */}
        <div className="mt-6 pt-6 border-t border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.3)] -mx-4 px-4 py-5 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2 text-[hsl(var(--color-foreground))] font-medium flex-wrap justify-center md:justify-start">
              <Scale className="h-4 w-4 text-[hsl(var(--color-muted-foreground))]" aria-hidden="true" />
              <span>
                © {currentYear} {t('brand')} — Based on{' '}
                <a
                  href="https://github.com/PDFCraftTool/pdfcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[hsl(var(--color-primary))]"
                >
                  PDFCraft
                </a>{' '}
                (AGPL-3.0)
              </span>
            </div>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[hsl(var(--color-foreground))] text-[hsl(var(--color-background))] text-xs font-medium hover:opacity-90 transition-opacity"
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                {t('footer.viewSource') || 'View source'}
              </a>
              <Link
                href={`/${locale}/source`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] text-xs font-medium hover:bg-[hsl(var(--color-muted))] transition-colors"
              >
                <Code className="h-3.5 w-3.5" aria-hidden="true" />
                {t('footer.source') || 'Source'} & {t('footer.license') || 'License'}
              </Link>
              <a
                href="/LICENSE.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline underline-offset-2 text-[hsl(var(--color-muted-foreground))] hover:text-[hsl(var(--color-foreground))]"
              >
                LICENSE
              </a>
            </div>
          </div>
          <p className="text-xs text-center md:text-left text-[hsl(var(--color-muted-foreground))] mt-3 leading-relaxed">
            This program is free software under{' '}
            <a
              href="https://www.gnu.org/licenses/agpl-3.0.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[hsl(var(--color-foreground))]"
            >
              GNU AGPL v3
            </a>{' '}
            — no warranty. Corresponding Source available at{' '}
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[hsl(var(--color-foreground))]">
              GitHub
            </a>{' '}
            and{' '}
            <Link href={`/${locale}/source`} className="underline underline-offset-2 hover:text-[hsl(var(--color-foreground))]">
              /{locale}/source
            </Link>{' '}
            (AGPL §13). See{' '}
            <a href="/LICENSE.txt" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[hsl(var(--color-foreground))]">
              LICENSE
            </a>{' '}
            for details.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

