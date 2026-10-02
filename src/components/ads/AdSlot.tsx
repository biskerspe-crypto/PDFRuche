'use client';

import React, { useEffect, useRef, useState } from 'react';
import { adConfig, getAdSlotConfig, type AdPlacement } from '@/config/ads';
import { cn } from '@/lib/utils';

export interface AdSlotProps {
  placement: AdPlacement;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const HEIGHTS: Record<AdSlotProps['placement'], string> = {
  headerBanner: 'min-h-[90px]',
  sidebarRect: 'min-h-[250px]',
  toolPageBottom: 'min-h-[90px]',
  betweenSections: 'min-h-[90px]',
  mobileInFeed: 'min-h-[100px]',
};

/**
 * Generic ad container.
 * - Renders a "Sponsored" placeholder when ads are disabled (dev mode).
 * - Loads the AdSense push mechanism lazily when enabled.
 * - Never overlaps the PDF workspace or tool controls.
 */
export const AdSlot: React.FC<AdSlotProps> = ({ placement, className }) => {
  const config = getAdSlotConfig(placement);
  const [loaded, setLoaded] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (!adConfig.enabled) return;
    if (!config.enabled || initialized.current) return;
    initialized.current = true;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      setLoaded(true);
    } catch {
      setLoaded(false);
    }
  }, [config.enabled]);

  if (!adConfig.enabled || !config.enabled) {
    return (
      <div
        className={cn(
          'flex w-full items-center justify-center rounded-xl border-2 border-dashed border-[hsl(var(--color-border))] bg-[hsl(var(--color-muted)/0.4)] text-xs text-[hsl(var(--color-muted-foreground))] select-none',
          HEIGHTS[placement],
          className
        )}
        role="complementary"
        aria-label="Advertising placeholder"
      >
        <span className="uppercase tracking-widest opacity-60">Sponsored — Ad Space</span>
      </div>
    );
  }

  return (
    <div className={cn('w-full overflow-hidden', className)} role="complementary" aria-label="Sponsored content">
      <div className="mb-1 flex items-center justify-between px-1">
        <span className="text-[10px] uppercase tracking-widest text-[hsl(var(--color-muted-foreground))]">
          Sponsored
        </span>
      </div>
      <ins
        className={cn('adsbygoogle block', HEIGHTS[placement])}
        data-ad-client={adConfig.clientId}
        data-ad-slot={config.slotId}
        data-ad-format={config.format === 'auto' ? 'auto' : undefined}
        data-full-width-responsive={config.responsive ? 'true' : 'false'}
        aria-hidden={!loaded}
      />
    </div>
  );
};

export default AdSlot;