'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Sparkles, ArrowRight, Trees } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';

interface HeroCommandCenterProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
  onSelectCategory?: (category: string) => void;
}

export const HeroCommandCenter: React.FC<HeroCommandCenterProps> = ({
  locale,
  localizedToolContent: _localizedToolContent,
  onSelectCategory: _onSelectCategory,
}) => {
  const t = useTranslations();

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Logo central — image fournie PDFRuche */}
          <div className="relative mb-6 sm:mb-8 flex justify-center items-center w-full">
            <div
              className="absolute w-[92%] max-w-3xl h-36 sm:h-52 bg-gradient-to-r from-emerald-500/25 via-teal-400/20 to-amber-500/20 blur-[80px] rounded-full pointer-events-none -z-10"
              aria-hidden="true"
            />
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-2">
              <Image
                src="/images/brand/PDFRuche-logo.png"
                alt="PDFRuche — L'Écosystème Vivant pour Tous vos PDF"
                width={784}
                height={308}
                priority
                unoptimized
                className="w-full h-auto object-contain mx-auto select-none opacity-95 hover:opacity-100 transition-all duration-500 drop-shadow-[0_4px_35px_rgba(16,185,129,0.4)] hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Top Live Pill — Highlighting 131+ free tools & 100% ecological local engine */}
          <div className="flex justify-center mb-8">
            <a
              href="#studio-section"
              className="group inline-flex items-center gap-2 sm:gap-2.5 p-1 sm:p-1.5 pr-4 sm:pr-5 rounded-full border border-emerald-500/30 bg-emerald-950/40 hover:bg-emerald-900/50 backdrop-blur-md text-xs sm:text-sm font-medium text-emerald-200 shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:shadow-[0_0_35px_rgba(52,211,153,0.45)] hover:border-emerald-400/60 transition-all duration-300 cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide bg-gradient-to-r from-amber-200 via-emerald-200 to-teal-200 text-slate-950 shadow-[0_0_16px_rgba(52,211,153,0.45)] group-hover:scale-105 transition-transform">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950 text-slate-950 animate-pulse" />
                <span>{t('home.v4.hero.freeToolsPill') || '131+ outils gratuits'}</span>
              </span>

              <span className="text-emerald-300 font-medium hidden sm:inline">
                {t('home.v4.hero.localEngine') || '100% Moteur Local Sécurisé'}
              </span>
              <span className="text-white/30 hidden md:inline">•</span>
              <span className="text-amber-300 hidden md:inline">
                {t('home.v4.hero.zeroUploads') || 'Zéro Téléversement Serveur'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform ml-0.5" />
            </a>
          </div>

          {/* Master Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            {t('home.v4.hero.titlePrefix') || 'L\'Écosystème Vivant pour'}{' '}
            <span className="lv4-text-aurora">{t('home.v4.hero.titleAccent') || 'Tous vos PDF'}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            {t('home.v4.hero.subtitle') || 'Manipulez, convertissez, compressez, organisez et sécurisez vos documents avec une confidentialité absolue. Propulsé par WebAssembly dans votre navigateur — instantané, souverain et gratuit.'}
          </p>

          {/* Main Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#studio-section"
              className="lv4-sheen inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-amber-600 shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_45px_rgba(16,185,129,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group border border-white/20"
            >
              <Trees className="w-4 h-4 text-emerald-200 group-hover:rotate-12 transition-transform" />
              <span>{t('home.v4.hero.ctaExplore') || 'Explorer les 131+ outils gratuits'}</span>
              <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`/${locale}/workflow`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm sm:text-base text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 hover:border-emerald-500/30 backdrop-blur-md transition-all duration-300 shadow-lg"
            >
              <span>{t('home.v4.hero.ctaWorkflow') || 'Flux de travail'}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroCommandCenter;
