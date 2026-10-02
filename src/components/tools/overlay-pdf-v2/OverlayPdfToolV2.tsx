'use client';

import React from 'react';
import { OverlayPDFTool } from '@/components/tools/overlay/OverlayPDFTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function OverlayPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="overlay-pdf" className={className}>
      <OverlayPDFTool />
    </V2ToolHero>
  );
}

export default OverlayPdfToolV2;
