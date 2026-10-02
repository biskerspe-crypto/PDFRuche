'use client';

import React from 'react';
import { RasterizePDFTool } from '@/components/tools/rasterize';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function RasterizePdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="rasterize-pdf" className={className}>
      <RasterizePDFTool />
    </V2ToolHero>
  );
}

export default RasterizePdfToolV2;
