'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { getToolContent } from '@/config/tool-content';
import { getToolById, toV2Id } from '@/config/tools';
import { getToolIcon } from '@/config/icons';
import { useFavorites } from '@/hooks/useFavorites';
import { Sparkles, Zap, Star, ShieldCheck, Wand2 } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';

export interface V2HeroFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color?: 'orange' | 'yellow' | 'blue' | 'emerald' | 'purple' | 'cyan';
  iconClassName?: string;
  cardClassName?: string;
}

const FEATURE_COLOR_STYLES: Record<string, {
  card: string;
  iconBox: string;
  icon: string;
  glow: string;
}> = {
  orange: {
    card: 'border-orange-500/25 bg-gradient-to-b from-orange-500/[0.08] via-white/[0.02] to-transparent hover:border-orange-500/50 hover:shadow-[0_8px_24px_rgba(249,115,22,0.15)]',
    iconBox: 'bg-gradient-to-br from-orange-500/25 via-amber-500/15 to-transparent border-orange-500/40 shadow-[0_0_18px_rgba(249,115,22,0.3)] group-hover:shadow-[0_0_24px_rgba(249,115,22,0.5)]',
    icon: 'text-orange-400 fill-orange-400/10 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]',
    glow: 'from-orange-500/20',
  },
  yellow: {
    card: 'border-yellow-400/25 bg-gradient-to-b from-yellow-400/[0.08] via-white/[0.02] to-transparent hover:border-yellow-400/50 hover:shadow-[0_8px_24px_rgba(234,179,8,0.15)]',
    iconBox: 'bg-gradient-to-br from-yellow-400/25 via-amber-400/15 to-transparent border-yellow-400/40 shadow-[0_0_18px_rgba(234,179,8,0.3)] group-hover:shadow-[0_0_24px_rgba(234,179,8,0.5)]',
    icon: 'text-yellow-400 fill-yellow-400/10 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]',
    glow: 'from-yellow-400/20',
  },
  blue: {
    card: 'border-sky-400/25 bg-gradient-to-b from-sky-400/[0.08] via-white/[0.02] to-transparent hover:border-sky-400/50 hover:shadow-[0_8px_24px_rgba(56,189,248,0.15)]',
    iconBox: 'bg-gradient-to-br from-sky-400/25 via-blue-500/15 to-transparent border-sky-400/40 shadow-[0_0_18px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_24px_rgba(56,189,248,0.5)]',
    icon: 'text-sky-400 fill-sky-400/10 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]',
    glow: 'from-sky-400/20',
  },
  emerald: {
    card: 'border-emerald-500/25 bg-gradient-to-b from-emerald-500/[0.08] via-white/[0.02] to-transparent hover:border-emerald-500/50 hover:shadow-[0_8px_24px_rgba(16,185,129,0.15)]',
    iconBox: 'bg-gradient-to-br from-emerald-500/25 via-teal-500/15 to-transparent border-emerald-500/40 shadow-[0_0_18px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_24px_rgba(16,185,129,0.5)]',
    icon: 'text-emerald-400 fill-emerald-400/10 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]',
    glow: 'from-emerald-500/20',
  },
  purple: {
    card: 'border-purple-500/25 bg-gradient-to-b from-purple-500/[0.08] via-white/[0.02] to-transparent hover:border-purple-500/50 hover:shadow-[0_8px_24px_rgba(168,85,247,0.15)]',
    iconBox: 'bg-gradient-to-br from-purple-500/25 via-indigo-500/15 to-transparent border-purple-500/40 shadow-[0_0_18px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_24px_rgba(168,85,247,0.5)]',
    icon: 'text-purple-400 fill-purple-400/10 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]',
    glow: 'from-purple-500/20',
  },
  cyan: {
    card: 'border-cyan-400/25 bg-gradient-to-b from-cyan-400/[0.08] via-white/[0.02] to-transparent hover:border-cyan-400/50 hover:shadow-[0_8px_24px_rgba(6,182,212,0.15)]',
    iconBox: 'bg-gradient-to-br from-cyan-400/25 via-teal-500/15 to-transparent border-cyan-400/40 shadow-[0_0_18px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_24px_rgba(6,182,212,0.5)]',
    icon: 'text-cyan-400 fill-cyan-400/10 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]',
    glow: 'from-cyan-400/20',
  },
  default: {
    card: 'border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.06]',
    iconBox: 'bg-white/10 border-white/15 text-white shadow-sm',
    icon: 'text-white',
    glow: 'from-white/10',
  },
};

interface V2ToolHeroProps {
  /** Base tool id (e.g. 'compress-pdf'). Title is resolved via getToolContent for the active locale. */
  toolId: string;
  className?: string;
  /** Badges affichés à droite. Par défaut : les 3 badges génériques traduits (heroFeatures). */
  features?: V2HeroFeature[];
  children: React.ReactNode;
}

/** Fallback display name when no translated content exists (e.g. 'compress-pdf' -> 'Compress Pdf'). */
function formatToolId(id: string): string {
  return id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Shared dark-aurora hero banner for all V2 tool wrappers.
 * Replaces the 130+ duplicated French-only banners: every label goes through
 * the `toolsV2` namespace and the tool title through getToolContent(locale).
 */
export function V2ToolHero({ toolId, className = '', features = [], children }: V2ToolHeroProps) {
  const t = useTranslations('toolsV2');
  const tRoot = useTranslations();
  const locale = useLocale() as Locale;
  const { isFavorite, toggleFavorite } = useFavorites();
  const favoriteId = toV2Id(toolId);
  const isFav = isFavorite(favoriteId);
  const content = getToolContent(locale, toolId);
  const title = content?.title ?? formatToolId(toolId);
  const description = content?.metaDescription ?? '';
  const toolIconName = getToolById(`${toolId}-v2`)?.icon ?? getToolById(toolId)?.icon ?? 'wrench';
  const Icon = getToolIcon(toolIconName);
  /** Badges génériques partagés par toutes les pages V2 (sauf override via prop `features`). */
  const resolvedFeatures: V2HeroFeature[] = features.length > 0 ? features : [
    { icon: ShieldCheck, title: t('heroFeatures.privacyTitle'), description: t('heroFeatures.privacyDesc'), color: 'orange' },
    { icon: Zap, title: t('heroFeatures.speedTitle'), description: t('heroFeatures.speedDesc'), color: 'yellow' },
    { icon: Sparkles, title: t('heroFeatures.qualityTitle'), description: t('heroFeatures.qualityDesc'), color: 'blue' },
  ];

  return (
      <div className={`relative ${className}`}>
        {/* ===== HERO TITLE CARD + FEATURES (invisible: ni bordure ni fond ni décors) ===== */}
        <div className="relative mb-4">
          <div className="relative p-5 md:p-6 flex flex-col md:flex-row md:items-stretch gap-4 md:gap-6">
            <div className="flex items-center gap-4 md:w-[55%] shrink-0">
              <div className="group/toolicon relative w-[88px] h-[88px] md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-950/90 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_25px_rgba(99,102,241,0.2)] flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-white/25 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)]">
                {/* Lueur d'ambiance d'arrière-plan */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 via-transparent to-sky-400/10 pointer-events-none" />
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-sky-500/15 rounded-full blur-xl pointer-events-none" />
                <Icon className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover/toolicon:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]" />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <h1 className="flex-1 min-w-0 text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight">{title}</h1>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavorite(favoriteId);
                    }}
                    onKeyDown={(e) => {
                      e.stopPropagation();
                    }}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer shrink-0 ${
                      isFav
                        ? 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400'
                        : 'bg-white/5 border-white/10 text-slate-500 hover:text-yellow-400 hover:bg-white/10'
                    }`}
                    aria-label={isFav ? (tRoot('home.v4.studio.favRemove') || 'Remove from favorites') : (tRoot('home.v4.studio.favAdd') || 'Add to favorites')}
                    aria-pressed={isFav}
                    title={isFav ? (tRoot('home.v4.studio.favRemove') || 'Remove from favorites') : (tRoot('home.v4.studio.favAdd') || 'Add to favorites')}
                  >
                    <Star className={`w-5 h-5 ${isFav ? 'fill-yellow-400' : ''}`} />
                  </button>
                </div>
                {description ? (
                  <p className="mt-1.5 text-sm md:text-base text-slate-300 leading-relaxed">{description}</p>
                ) : null}
              </div>
            </div>
            <div className="hidden md:block w-px bg-white/10" aria-hidden="true" />
            <div className="md:w-[45%] grid grid-cols-1 sm:grid-cols-3 gap-3">
              {resolvedFeatures.map((feature) => {
                const FeatureIcon = feature.icon;
                const style = feature.color && FEATURE_COLOR_STYLES[feature.color]
                  ? FEATURE_COLOR_STYLES[feature.color]
                  : FEATURE_COLOR_STYLES.default;

                return (
                  <div
                    key={feature.title}
                    className={`group relative flex flex-col items-center justify-between text-center p-3.5 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${style.card} ${feature.cardClassName || ''}`}
                  >
                    {/* Glow radial au sommet de la carte */}
                    <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-b ${style.glow} to-transparent blur-xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Conteneur d'icône stylisé avec glow et micro-animation */}
                    <div className={`relative w-11 h-11 rounded-2xl border flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110 ${style.iconBox}`}>
                      <FeatureIcon className={`w-5 h-5 shrink-0 transition-transform duration-300 ${style.icon} ${feature.iconClassName || ''}`} />
                    </div>

                    {/* Titre et description */}
                    <div className="relative flex-1 flex flex-col justify-start">
                      <div className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug">
                        {feature.title}
                      </div>
                      <div className="mt-1 text-[11px] text-slate-300/85 leading-snug">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===== ORIGINAL TOOL — PRESERVED (forced dark) ===== */}
        <div className="rounded-[2rem] bg-slate-900/40 backdrop-blur border border-white/10 p-4 md:p-6 dark">
          <div className="flex items-center gap-2 mb-4 text-[11px] font-bold tracking-widest uppercase text-slate-400">
            <Wand2 className="w-3.5 h-3.5 text-violet-400" /> {t('footer', { slug: toolId })}
          </div>
          <div className="dark">
            {children}
          </div>
        </div>
      </div>
    );
}

export default V2ToolHero;
