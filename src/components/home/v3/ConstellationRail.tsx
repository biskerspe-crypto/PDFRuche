'use client';

import React, { useEffect, useRef } from 'react';

interface ConstellationRailProps {
  /** Number of constellation nodes (evenly distributed along the rail). */
  nodes?: number;
  className?: string;
}

/**
 * Vertical "constellation" rail — an SVG line that draws itself as the user
 * scrolls (pathLength normalized), with star nodes that ignite one by one.
 * Pure DOM/SVG updates via refs: zero React re-renders while scrolling.
 */
export default function ConstellationRail({ nodes = 4, className }: ConstellationRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<SVGLineElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let raf = 0;

    const update = () => {
      const rect = rail.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress: how far the viewport "focus line" (~58% height) crossed the rail
      const progress = Math.min(1, Math.max(0, (vh * 0.58 - rect.top) / rect.height));

      const line = progressLineRef.current;
      if (line) {
        line.style.strokeDashoffset = `${1 - progress}`;
      }

      for (let i = 0; i < nodes; i++) {
        const dot = nodesRef.current[i];
        if (!dot) continue;
        const fraction = nodes === 1 ? 1 : i / (nodes - 1);
        dot.classList.toggle('lv3-node-active', progress >= fraction);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [nodes]);

  const fractions = Array.from({ length: nodes }, (_, i) => (nodes === 1 ? 0.5 : i / (nodes - 1)));

  return (
    <div
      ref={railRef}
      className={`pointer-events-none hidden xl:block absolute top-0 bottom-0 w-10 ${className ?? ''}`}
      aria-hidden="true"
    >
      <div className="relative h-full w-full">
        <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 10 100">
          <defs>
            <linearGradient id="lv3-rail-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="55%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>

          {/* Base track */}
          <line
            x1="5"
            y1="0"
            x2="5"
            y2="100"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.14"
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            strokeDasharray="0.008 0.008"
          />

          {/* Progress line that draws itself */}
          <line
            ref={progressLineRef}
            x1="5"
            y1="0"
            x2="5"
            y2="100"
            stroke="url(#lv3-rail-grad)"
            strokeWidth="1.6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            pathLength={1}
            strokeDasharray="1"
            strokeDashoffset="1"
          />
        </svg>

        {/* Star nodes */}
        {fractions.map((fraction, i) => (
          <div
            key={i}
            ref={(el) => {
              nodesRef.current[i] = el;
            }}
            className="lv3-node absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ top: `${fraction * 100}%` }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z"
                className="lv3-node-star"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
