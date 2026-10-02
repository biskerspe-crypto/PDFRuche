'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/Header';
import { FooterMinimal } from '@/components/layout/FooterMinimal';
import AuroraBackground from '@/components/home/v4/AuroraBackground';
import HeroCommandCenter from '@/components/home/v4/HeroCommandCenter';
import StatsCounterV4 from '@/components/home/v4/StatsCounterV4';
import InteractiveToolsStudio from '@/components/home/v4/InteractiveToolsStudio';
import FeatureBentoV4 from '@/components/home/v4/FeatureBentoV4';
import WorkflowShowcaseV4 from '@/components/home/v4/WorkflowShowcaseV4';
import QuickFaqV4 from '@/components/home/v4/QuickFaqV4';
import { getDisplayTools } from '@/config/tools';
import { type Locale } from '@/lib/i18n/config';

interface HomePageV4ClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

export default function HomePageV4Client({
  locale,
  localizedToolContent,
}: HomePageV4ClientProps) {
  const t = useTranslations();
  const allTools = getDisplayTools();

  return (
    <div className="relative min-h-screen flex flex-col text-slate-100 overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      {/* Background Aurora System */}
      <AuroraBackground />

      {/* Global Header */}
      <Header locale={locale} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Command Center & Smart File Sandbox */}
        <HeroCommandCenter
          locale={locale}
          localizedToolContent={localizedToolContent}
        />

        {/* 2. Live Animated Stats Strip */}
        <StatsCounterV4 toolCount={allTools.length} />

        {/* 3. The Core Fusion: Complete Interactive Tools Studio */}
        <InteractiveToolsStudio
          locale={locale}
          localizedToolContent={localizedToolContent}
        />

        {/* 4. Artistic Bento Grid (Performance & Privacy Showcase) */}
        <FeatureBentoV4 locale={locale} />

        {/* 5. 3-Step Interactive Workflow */}
        <WorkflowShowcaseV4 locale={locale} />

        {/* 6. Frequently Asked Questions */}
        <QuickFaqV4 locale={locale} />
      </main>

      <FooterMinimal locale={locale} />
    </div>
  );
}
