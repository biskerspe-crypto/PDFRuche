/**
 * Advertising configuration (Google AdSense)
 * Disabled by default — enable by setting NEXT_PUBLIC_ADSENSE_CLIENT_ID
 */

export interface AdSlotConfig {
  enabled: boolean;
  slotId: string;
  format: 'horizontal' | 'rectangle' | 'vertical' | 'auto';
  responsive: boolean;
}

export type AdPlacement = keyof AdConfig['placements'];

export interface AdConfig {
  enabled: boolean;
  provider: 'adsense';
  clientId: string;
  placements: {
    headerBanner: AdSlotConfig;
    sidebarRect: AdSlotConfig;
    toolPageBottom: AdSlotConfig;
    betweenSections: AdSlotConfig;
    mobileInFeed: AdSlotConfig;
  };
}

const slot = (envKey: string, format: AdSlotConfig['format'], enabled: boolean): AdSlotConfig => ({
  enabled: enabled && !!process.env[envKey],
  slotId: process.env[envKey] ?? '',
  format,
  responsive: true,
});

const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? '';
const providerEnabled = !!clientId;

export const adConfig: AdConfig = {
  enabled: providerEnabled,
  provider: 'adsense',
  clientId,
  placements: {
    headerBanner: slot('NEXT_PUBLIC_ADSENSE_SLOT_HEADER', 'horizontal', providerEnabled),
    sidebarRect: slot('NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR', 'rectangle', providerEnabled),
    toolPageBottom: slot('NEXT_PUBLIC_ADSENSE_SLOT_TOOL_BOTTOM', 'horizontal', providerEnabled),
    betweenSections: slot('NEXT_PUBLIC_ADSENSE_SLOT_BETWEEN_SECTIONS', 'horizontal', providerEnabled),
    mobileInFeed: slot('NEXT_PUBLIC_ADSENSE_SLOT_MOBILE_IN_FEED', 'auto', providerEnabled),
  },
};

/**
 * During development (no client ID), AdSlots render placeholders.
 * Data attributes for AdSense are set via environment variables at build time.
 */
export function getAdSlotConfig(placement: AdPlacement): AdSlotConfig {
  return adConfig.placements[placement];
}