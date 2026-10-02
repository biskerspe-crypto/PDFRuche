'use client';

import React from 'react';
import { ImageToPDFTool } from '@/components/tools/image-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PngToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="png-to-pdf" className={className}>
      <ImageToPDFTool imageType="png" />
    </V2ToolHero>
  );
}

export default PngToPdfToolV2;
