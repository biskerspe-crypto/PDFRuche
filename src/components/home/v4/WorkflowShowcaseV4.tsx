'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Upload,
  SlidersHorizontal,
  Download,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  FileText,
} from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';

interface WorkflowShowcaseV4Props {
  locale: Locale;
}

export const WorkflowShowcaseV4: React.FC<WorkflowShowcaseV4Props> = ({ locale }) => {
  const t = useTranslations();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: t('home.v4.workflow.step1.title') || 'Pick or Drop Your File',
      description: t('home.v4.workflow.step1.desc') || 'Select your PDF, Office document or image. The smart auto-detector matches the ideal tool immediately.',
      icon: Upload,
      color: 'from-cyan-500 to-blue-500',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      highlight: t('home.v4.workflow.step1.highlight') || 'Zero latency file ingest',
    },
    {
      number: '02',
      title: t('home.v4.workflow.step2.title') || 'Adjust, Edit & Optimize',
      description: t('home.v4.workflow.step2.desc') || 'Rearrange pages, customize compression ratio, draw electronic signatures, or encrypt with 256-bit AES security.',
      icon: SlidersHorizontal,
      color: 'from-indigo-500 to-fuchsia-500',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      highlight: t('home.v4.workflow.step2.highlight') || 'Client-side WASM engine',
    },
    {
      number: '03',
      title: t('home.v4.workflow.step3.title') || 'Instant Local Download',
      description: t('home.v4.workflow.step3.desc') || 'Get your pristine document saved straight to your disk without waiting for remote server queues or email links.',
      icon: Download,
      color: 'from-fuchsia-500 to-rose-500',
      badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
      highlight: t('home.v4.workflow.step3.highlight') || 'Direct memory streaming',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('home.v4.workflow.badge') || 'Effortless Journey'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {t('home.v4.workflow.title') || 'How It Works in'}{' '}
            <span className="lv4-text-prism">{t('home.v4.workflow.titleAccent') || '3 Simple Beats'}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 font-light">
            {t('home.v4.workflow.subtitle') || 'No complicated settings, no accounts, no delays. From file to result in under 5 seconds.'}
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            return (
              <div
                key={step.number}
                onMouseEnter={() => setActiveStep(idx)}
                className={`lv4-studio-card p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isCurrent
                    ? 'border-indigo-500/60 bg-slate-900/90 shadow-[0_0_30px_rgba(99,102,241,0.2)]'
                    : 'border-white/10 bg-slate-950/60 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-black text-white/20">
                      {step.number}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${step.badgeColor}`}>
                      {step.highlight}
                    </span>
                  </div>

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-cyan-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{t('home.v4.workflow.tag') || 'Interactive & Automatic'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <a
            href="#studio-section"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 text-white font-bold text-sm shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
          >
            <span>{t('home.v4.workflow.cta') || 'Launch the Interactive Studio'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default WorkflowShowcaseV4;
