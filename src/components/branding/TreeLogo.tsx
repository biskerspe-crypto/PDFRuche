'use client';

import React, { useId } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface TreeLogoProps {
  variant?: 'image' | 'full' | 'icon' | 'badge' | 'svg';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  tone?: 'auto' | 'light' | 'dark';
  className?: string;
  withGlow?: boolean;
}

const SIZES = {
  sm: { width: 44, height: 38 },
  md: { width: 62, height: 54 },
  lg: { width: 84, height: 74 },
  xl: { width: 114, height: 100 },
  hero: { width: 180, height: 158 },
} as const;

/**
 * PDFRuche Brand Logo Component
 * Uses the official PDFRuche logo graphic:
 * - Golden bee + "PDFRuche" wordmark
 */
export const TreeLogo: React.FC<TreeLogoProps> = ({
  variant = 'image',
  size = 'md',
  tone = 'auto',
  className,
  withGlow = true,
}) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const emeraldGradId = `tree-em-${uid}`;
  const amberGradId = `tree-am-${uid}`;
  const trunkGradId = `tree-tr-${uid}`;
  const glowFilterId = `tree-glow-${uid}`;

  const { width, height } = SIZES[size] || SIZES.md;

  // Authentic Image mode (default): renders PDFRuche-logo.png with transparent background
  if (variant === 'image' || variant === 'full' || variant === 'badge') {
    return (
      <div
        className={cn(
          'relative inline-flex items-center justify-center select-none overflow-hidden group transition-all duration-300 hover:scale-[1.02]',
          withGlow && 'drop-shadow-[0_0_20px_rgba(16,185,129,0.35)]',
          className
        )}
        style={{ height: `${height}px` }}
      >
        <Image
          src="/images/brand/PDFRuche-logo.png"
          alt="PDFRuche"
          width={width * 3}
          height={height * 3}
          className="w-auto h-full object-contain"
          priority
        />
      </div>
    );
  }

  // Icon only mode: renders the botanical tree emblem with PDF leaves
  if (variant === 'icon') {
    return (
      <div
        className={cn(
          'relative inline-flex items-center justify-center shrink-0 select-none group',
          className
        )}
        style={{ width: `${height}px`, height: `${height}px` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-full h-full overflow-visible transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={emeraldGradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id={amberGradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id={trunkGradId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1E4E63" />
              <stop offset="100%" stopColor="#0F2F4A" />
            </linearGradient>
            {withGlow && (
              <filter id={glowFilterId} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#10B981" floodOpacity="0.4" />
              </filter>
            )}
          </defs>

          {/* Tree Trunk & Organic Roots */}
          <path
            d="M32,38 C30,44 26,52 18,56 C26,54 30,51 31.5,45 C32.5,51 36.5,54 44.5,56 C37.5,53 33.5,45 32.5,39 Z"
            fill={`url(#${trunkGradId})`}
          />
          <path
            d="M30,26 C28,32 28,38 29.5,45 C31,45 33.5,45 34.5,45 C35.5,38 34.5,32 33,26 Z"
            fill={`url(#${trunkGradId})`}
          />

          {/* Left Branch & Document Leaf */}
          <path d="M29,33 C23,32 17,28 13,22 C16,27 22,31 29,31 Z" fill="#14532D" />
          <path
            d="M9,18 C9,11 16,9 22,15 C22,22 15,25 9,18 Z"
            fill={`url(#${emeraldGradId})`}
            filter={withGlow ? `url(#${glowFilterId})` : undefined}
          />
          <rect x="12" y="13" width="7" height="9" rx="1.5" fill="#FFFFFF" opacity="0.95" />
          <path d="M14,16 L17,16 M14,19 L16,19" stroke="#059669" strokeWidth="1" strokeLinecap="round" />

          {/* Center Main Canopy & PDF Badge */}
          <path
            d="M32,8 C23,8 19,16 24,24 C30,30 35,27 40,22 C44,16 40,8 32,8 Z"
            fill={`url(#${emeraldGradId})`}
            filter={withGlow ? `url(#${glowFilterId})` : undefined}
          />
          <rect x="27" y="11" width="10" height="12" rx="2" fill="#FFFFFF" />
          <text
            x="32"
            y="19.5"
            fontFamily="system-ui, sans-serif"
            fontSize="6.5"
            fontWeight="900"
            fill="#0F2F4A"
            textAnchor="middle"
          >
            PDF
          </text>

          {/* Right Branch & Amber Leaf */}
          <path d="M34,31 C39,30 45,27 49,21 C46,26 40,30 34,31 Z" fill="#065F46" />
          <path
            d="M42,16 C46,11 53,13 54,20 C49,24 43,22 42,16 Z"
            fill={`url(#${amberGradId})`}
          />

          {/* Sprouting Leaves at top */}
          <path d="M29,6 C31,2 34,2 35,6 C33,8 30,8 29,6 Z" fill="#34D399" />
          <circle cx="21" cy="9" r="1.8" fill="#FBBF24" />
          <circle cx="43" cy="10" r="1.8" fill="#38BDF8" />
        </svg>
      </div>
    );
  }

  // Full Wordmark + Tree Emblem
  return (
    <div
      className={cn(
        'relative inline-flex items-center gap-2 select-none group',
        className
      )}
      style={{ height: `${height}px` }}
    >
      {/* SVG Tree Emblem */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        style={{ width: `${height}px`, height: `${height}px` }}
        className="shrink-0 overflow-visible transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={emeraldGradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id={amberGradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id={trunkGradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0F2F4A" />
          </linearGradient>
        </defs>

        {/* Tree Roots and Trunk */}
        <path
          d="M32,38 C30,44 26,52 18,56 C26,54 30,51 31.5,45 C32.5,51 36.5,54 44.5,56 C37.5,53 33.5,45 32.5,39 Z"
          fill={`url(#${trunkGradId})`}
        />
        <path
          d="M30,26 C28,32 28,38 29.5,45 C31,45 33.5,45 34.5,45 C35.5,38 34.5,32 33,26 Z"
          fill={`url(#${trunkGradId})`}
        />

        {/* Left Leaf (Green Document) */}
        <path
          d="M9,18 C9,11 16,9 22,15 C22,22 15,25 9,18 Z"
          fill={`url(#${emeraldGradId})`}
        />
        <rect x="12" y="13" width="7" height="9" rx="1.5" fill="#FFFFFF" opacity="0.95" />
        <path d="M14,16 L17,16 M14,19 L16,19" stroke="#059669" strokeWidth="1" strokeLinecap="round" />

        {/* Center Main Leaf (PDF) */}
        <path
          d="M32,8 C23,8 19,16 24,24 C30,30 35,27 40,22 C44,16 40,8 32,8 Z"
          fill={`url(#${emeraldGradId})`}
        />
        <rect x="27" y="11" width="10" height="12" rx="2" fill="#FFFFFF" />
        <text
          x="32"
          y="19.5"
          fontFamily="system-ui, sans-serif"
          fontSize="6.5"
          fontWeight="900"
          fill="#0F2F4A"
          textAnchor="middle"
        >
          PDF
        </text>

        {/* Right Leaf (Amber) */}
        <path
          d="M42,16 C46,11 53,13 54,20 C49,24 43,22 42,16 Z"
          fill={`url(#${amberGradId})`}
        />

        {/* Small top leaves */}
        <path d="M29,6 C31,2 34,2 35,6 C33,8 30,8 29,6 Z" fill="#34D399" />
        <circle cx="21" cy="9" r="1.8" fill="#FBBF24" />
        <circle cx="43" cy="10" r="1.8" fill="#38BDF8" />
      </svg>

      {/* Styled Wordmark: "my" (Amber) + "PDF" (Navy/White) + "tree" (Emerald with 2 sprouting leaves) */}
      <div className="flex items-baseline font-display tracking-tight leading-none">
        {/* "my" in Warm Golden Amber */}
        <span
          className="text-amber-400 font-extrabold"
          style={{
            fontSize: `${Math.round(height * 0.62)}px`,
            filter: 'drop-shadow(0 1px 2px rgba(217, 119, 6, 0.4))',
          }}
        >
          my
        </span>

        {/* "PDF" in Deep Navy / Crisp White */}
        <span
          className={cn(
            'font-black ml-0.5 tracking-tight',
            tone === 'light' ? 'text-white' : 'text-slate-900 dark:text-white'
          )}
          style={{
            fontSize: `${Math.round(height * 0.68)}px`,
            letterSpacing: '-0.03em',
          }}
        >
          PDF
        </span>

        {/* "tree" in Forest Emerald with twin leaves decoration */}
        <span
          className="relative inline-flex items-center text-emerald-500 font-extrabold ml-0.5"
          style={{
            fontSize: `${Math.round(height * 0.68)}px`,
            letterSpacing: '-0.02em',
          }}
        >
          tree
          {/* Twin Sprouting Leaf Accents above 'ee' */}
          <span
            className="absolute -top-1.5 -right-2 text-emerald-400 pointer-events-none select-none transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            style={{ fontSize: `${Math.max(10, Math.round(height * 0.28))}px` }}
            aria-hidden="true"
          >
            🍃
          </span>
        </span>
      </div>
    </div>
  );
};

export default TreeLogo;
