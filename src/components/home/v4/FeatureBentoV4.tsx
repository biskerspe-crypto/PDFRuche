'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import {
  ShieldCheck,
  Cpu,
  Layers,
  FileCheck2,
  Lock,
  Zap,
  Globe,
  Sparkles,
  HardDrive,
} from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';

interface FeatureBentoV4Props {
  locale: Locale;
}

export const FeatureBentoV4: React.FC<FeatureBentoV4Props> = ({ locale: _locale }) => {
  const t = useTranslations();

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('home.v4.bento.badge') || 'Architecture & Valeurs'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t('home.v4.bento.title') || 'Conçu pour'} <span className="lv4-text-aurora">{t('home.v4.bento.titleAccent') || 'La Performance & L\'Écologie'}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 font-light">
            {t('home.v4.bento.subtitle') || 'Nous avons réinventé le traitement documentaire en éliminant les serveurs intermédiaires. Rapide, privé, souverain et sans empreinte carbone inutile.'}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          
          {/* Card 1: Local Privacy Architecture (Span 2 cols on md) */}
          <div className="md:col-span-2 lv4-studio-card p-8 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/30 via-slate-900/60 to-slate-950/80 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-colors" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-lg shadow-emerald-950/50">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-2">
                {t('home.v4.bento.card1.badge') || 'Racines Sécurisées : 100% Moteur Local'}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {t('home.v4.bento.card1.title') || 'Confidentialité Zéro Téléversement Serveur'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl font-light">
                {t('home.v4.bento.card1.desc') || "Contrairement aux convertisseurs en ligne conventionnels, vos documents confidentiels ne quittent jamais votre machine. Tout s'exécute directement dans le bac à sable isolé de votre navigateur via WebAssembly."}
              </p>
            </div>

            {/* Visual simulation badge strip */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                {t('home.v4.bento.card1.tag1') || 'No Server Uploads'}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                {t('home.v4.bento.card1.tag2') || 'GDPR & HIPAA Compliant'}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                {t('home.v4.bento.card1.tag3') || 'Mémoire Éphémère'}
              </span>
            </div>
          </div>

          {/* Card 2: Lightning WASM Engine */}
          <div className="lv4-studio-card p-8 rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-950/30 to-slate-950/80 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/20 transition-colors" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center mb-6 shadow-lg shadow-teal-950/50">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-teal-400 mb-2">
                {t('home.v4.bento.card2.badge') || 'Sève Numérique : WebAssembly'}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t('home.v4.bento.card2.title') || 'Vitesse Native Sans File d\'Attente'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {t('home.v4.bento.card2.desc') || 'Les moteurs C++ et Rust compilés s\'exécutent nativement sur votre processeur avec une latence quasi nulle.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-teal-300 font-semibold">
              <span>{t('home.v4.bento.card2.tag1') || '0s Temps d\'Attente'}</span>
              <span>{t('home.v4.bento.card2.tag2') || 'Calcul CPU Direct'}</span>
            </div>
          </div>

          {/* Card 3: Batch Operations */}
          <div className="lv4-studio-card p-8 rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-950/20 to-slate-950/80 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-colors" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-6 shadow-lg shadow-amber-950/50">
                <Layers className="w-6 h-6" />
              </div>
              <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                {t('home.v4.bento.card3.badge') || 'Feuillage Riche : 131 Outils'}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t('home.v4.bento.card3.title') || 'Multi-File Batch Reactor'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {t('home.v4.bento.card3.desc') || 'Combine, extract, or convert dozens of documents simultaneously with intelligent multi-threaded chunking.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-fuchsia-300 font-semibold">
              <span>{t('home.v4.bento.card3.tag1') || 'Up to 100 Files'}</span>
              <span>{t('home.v4.bento.card3.tag2') || '1-Click ZIP Export'}</span>
            </div>
          </div>

          {/* Card 4: Universal File Support & Freedom (Span 2 cols on md) */}
          <div className="md:col-span-2 lv4-studio-card p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-amber-950/30 via-slate-900/60 to-slate-950/80 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-colors" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-6 shadow-lg">
                <HardDrive className="w-6 h-6" />
              </div>
              <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-2">
                {t('home.v4.bento.card4.badge') || 'Unlimited Freedom'}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {t('home.v4.bento.card4.title') || 'No Accounts, No Paywalls, No File Limits'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl font-light">
                {t('home.v4.bento.card4.desc') || 'No credit cards, no subscriptions, and no arbitrary file size caps. Everything is ready immediately whenever you need it, and can even function offline as an installed PWA.'}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">{t('home.v4.bento.card4.formatsLabel') || 'Supported formats:'}</span>
                <span className="text-xs font-mono font-bold text-amber-300">PDF, DOCX, XLSX, PPTX, JPG, PNG, WEBP, SVG, TXT</span>
              </div>
              <span
                className="inline-flex items-center text-xs font-bold text-amber-400 cursor-default select-none"
                aria-disabled="true"
              >
                <span>{t('home.v4.bento.card4.browseAll') || 'Browse All Formats'}</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureBentoV4;
