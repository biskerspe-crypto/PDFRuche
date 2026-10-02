'use client';

import React from 'react';
import { PosterizePDFTool } from '@/components/tools/posterize';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PosterizePdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="posterize-pdf" className={className}>
      <PosterizePDFTool />
    </V2ToolHero>
  );
}

export default PosterizePdfToolV2;
