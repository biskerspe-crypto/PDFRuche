'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { adConfig } from '@/config/ads';

export interface AdContextValue {
  enabled: boolean;
  clientId: string;
  scriptLoaded: boolean;
}

const AdContext = createContext<AdContextValue>({
  enabled: false,
  clientId: '',
  scriptLoaded: false,
});

export const useAds = () => useContext(AdContext);

/**
 * Loads the AdSense script exactly once when ads are enabled.
 * Renders children regardless; advertising only activates when configured.
 */
export const AdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!adConfig.enabled) return;
    if (document.querySelector('script[data-adsense]')) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adConfig.clientId}`;
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.adsense = 'true';
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => setScriptLoaded(false);
    document.head.appendChild(script);
  }, []);

  const value = useMemo<AdContextValue>(
    () => ({
      enabled: adConfig.enabled,
      clientId: adConfig.clientId,
      scriptLoaded,
    }),
    [scriptLoaded]
  );

  return <AdContext.Provider value={value}>{children}</AdContext.Provider>;
};

export default AdProvider;