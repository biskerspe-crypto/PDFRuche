'use client';

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Moon } from 'lucide-react';

/**
 * Real moon phase card — computes the current lunar phase locally
 * (synodic cycle ≈ 29.530588853 days, reference new moon: 2000-01-06 18:14 UTC).
 * Renders an exact SVG of tonight's moon with its localized name and
 * illumination percentage.
 */

const SYNODIC_MONTH = 29.530588853;
// Known new moon: 2000-01-06 18:14 UTC
const NEW_MOON_EPOCH_MS = Date.UTC(2000, 0, 6, 18, 14);

const PHASE_KEYS = [
  'new',
  'waxingCrescent',
  'firstQuarter',
  'waxingGibbous',
  'full',
  'waningGibbous',
  'lastQuarter',
  'waningCrescent',
] as const;

type PhaseKey = (typeof PHASE_KEYS)[number];

interface MoonInfo {
  fraction: number; // 0..1 cycle position
  illumination: number; // 0..1
  phaseKey: PhaseKey;
}

function computeMoonPhase(date: Date): MoonInfo {
  const daysSinceEpoch = (date.getTime() - NEW_MOON_EPOCH_MS) / 86400000;
  const age = ((daysSinceEpoch % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  const fraction = age / SYNODIC_MONTH;
  const illumination = (1 - Math.cos(fraction * 2 * Math.PI)) / 2;
  const phaseKey = PHASE_KEYS[Math.round(fraction * 8) % 8];
  return { fraction, illumination, phaseKey };
}

/**
 * Exact parametric moon path.
 * fraction 0 → new (empty), 0.25 → first quarter (right lit),
 * 0.5 → full, 0.75 → last quarter (left lit).
 */
function litMoonPath(fraction: number, cx: number, cy: number, r: number): string {
  const theta = fraction * 2 * Math.PI;
  // Terminator ellipse x-radius: +r (new) → 0 (quarters) → -r (full)
  const rx = r * Math.cos(theta);
  const waxing = fraction <= 0.5;

  if (waxing) {
    // Lit limb on the right: outer arc top→bottom on the right side
    const limbSweep = 1;
    // Terminator back up: bulge right when rx>0 (crescent), left when rx<0 (gibbous)
    const termSweep = rx > 0 ? 1 : 0;
    return [
      `M ${cx} ${cy - r}`,
      `A ${r} ${r} 0 0 ${limbSweep} ${cx} ${cy + r}`,
      `A ${Math.abs(rx).toFixed(3)} ${r} 0 0 ${termSweep} ${cx} ${cy - r}`,
      'Z',
    ].join(' ');
  }
  // Lit limb on the left
  const limbSweep = 0;
  const termSweep = rx > 0 ? 0 : 1;
  return [
    `M ${cx} ${cy - r}`,
    `A ${r} ${r} 0 0 ${limbSweep} ${cx} ${cy + r}`,
    `A ${Math.abs(rx).toFixed(3)} ${r} 0 0 ${termSweep} ${cx} ${cy - r}`,
    'Z',
  ].join(' ');
}

export default function MoonPhaseCard() {
  const t = useTranslations();
  const [moon, setMoon] = useState<MoonInfo | null>(null);

  useEffect(() => {
    setMoon(computeMoonPhase(new Date()));
  }, []);

  const R = 34;
  const CX = 40;
  const CY = 40;

  return (
    <div className="relative overflow-hidden rounded-3xl glass-card p-7 flex items-center gap-6">
      {/* Mini starfield backdrop */}
      <div className="lv2-stars-sm absolute inset-0 opacity-50 rounded-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative shrink-0" aria-hidden="true">
        {moon ? (
          <svg viewBox="0 0 80 80" width="84" height="84" role="img">
            <defs>
              <linearGradient id="lv3-moon-lit" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#BAE6FD" />
              </linearGradient>
              <radialGradient id="lv3-moon-halo" cx="50%" cy="50%" r="50%">
                <stop offset="60%" stopColor="rgba(186,230,253,0.25)" />
                <stop offset="100%" stopColor="rgba(186,230,253,0)" />
              </radialGradient>
            </defs>
            <circle cx={CX} cy={CY} r={R + 9} fill="url(#lv3-moon-halo)" />
            {/* Dark disc */}
            <circle cx={CX} cy={CY} r={R} fill="#1E293B" opacity="0.85" />
            {/* Lit region */}
            <path d={litMoonPath(moon.fraction, CX, CY, R)} fill="url(#lv3-moon-lit)" />
            {/* Craters hint on the lit part */}
            <g fill="#94A3B8" opacity="0.35">
              <circle cx={CX + 10} cy={CY - 12} r="4.5" />
              <circle cx={CX - 8} cy={CY + 10} r="3" />
            </g>
          </svg>
        ) : (
          <div className="w-[84px] h-[84px] flex items-center justify-center text-slate-300 dark:text-slate-600">
            <Moon className="h-10 w-10 animate-pulse" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="relative min-w-0">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2 rounded-full bg-[hsl(var(--color-secondary)/0.1)] border border-[hsl(var(--color-secondary)/0.25)]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
          <span className="text-[11px] font-semibold tracking-wide uppercase text-[hsl(var(--color-secondary))]">
            {t('home.v3.moonTonight')}
          </span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[hsl(var(--color-foreground))] leading-tight">
          {moon ? t(`home.v3.phase.${moon.phaseKey}`) : '…'}
        </h3>
        {moon && (
          <p className="text-sm text-[hsl(var(--color-muted-foreground))] mt-1">
            {t('home.v3.moonIllumination', { percent: Math.round(moon.illumination * 100) })}
          </p>
        )}
      </div>
    </div>
  );
}
