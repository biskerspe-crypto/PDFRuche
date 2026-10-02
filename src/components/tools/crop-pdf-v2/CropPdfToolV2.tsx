'use client';

import React from 'react';
import { CropPDFTool } from '@/components/tools/crop';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function CropPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="crop-pdf" className={className}>
      <CropPDFTool />
    </V2ToolHero>
  );
}

export default CropPdfToolV2;
