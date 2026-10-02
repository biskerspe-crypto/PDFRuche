'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Sparkles, Shield, Cpu, Globe } from 'lucide-react';

function AnimatedCounter({ value, suffix = '', duration = 1600 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            const easeOutQuad = 1 - (1 - progress) * (1 - progress);
            setCount(Math.round(easeOutQuad * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export const StatsCounterV4: React.FC<{ toolCount: number }> = ({ toolCount }) => {
  const t = useTranslations();

  const stats = [
    {
      icon: Sparkles,
      value: toolCount || 131,
      suffix: '+',
      label: t('home.v4.stats.toolsLabel') || '131+ Outils Gratuits',
      subtext: t('home.v4.stats.toolsSubtext') || '100% gratuits, sans limite ni abonnement',
      color: 'text-indigo-400',
      gradient: 'from-indigo-500/20 to-indigo-500/5',
    },
    {
      icon: Shield,
      value: 100,
      suffix: '%',
      label: t('home.v4.stats.privacyLabel') || 'Client-Side Privacy',
      subtext: t('home.v4.stats.privacySubtext') || 'Documents never leave your device',
      color: 'text-emerald-400',
      gradient: 'from-emerald-500/20 to-emerald-500/5',
    },
    {
      icon: Cpu,
      value: 0,
      suffix: 's',
      label: t('home.v4.stats.speedLabel') || 'Server Waiting Time',
      subtext: t('home.v4.stats.speedSubtext') || 'Instant WebAssembly execution',
      color: 'text-cyan-400',
      gradient: 'from-cyan-500/20 to-cyan-500/5',
    },
    {
      icon: Globe,
      value: 14,
      suffix: '',
      label: t('home.v4.stats.languagesLabel') || 'Supported Languages',
      subtext: t('home.v4.stats.languagesSubtext') || 'Full localized international interface',
      color: 'text-fuchsia-400',
      gradient: 'from-fuchsia-500/20 to-fuchsia-500/5',
    },
  ];

  return (
    <section className="relative py-12 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className="lv4-glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 flex items-center gap-4 sm:gap-5 group hover:border-white/20 transition-all duration-300"
              >
                {/* Icône agrandie — point visuel fort à gauche */}
                <div className={`p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br ${st.gradient} ${st.color} shrink-0 flex items-center justify-center shadow-lg`}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                {/* 3 lignes empilées à droite, alignées et centrées verticalement avec l'icône */}
                <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5 sm:gap-1 text-left">
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                    <AnimatedCounter value={st.value} suffix={st.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 leading-tight">
                    {st.label}
                  </div>
                  <div className="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-medium">
                    {st.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounterV4;
