'use client';

import React from 'react';
import { ImageToPDFTool } from '@/components/tools/image-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function BmpToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="bmp-to-pdf" className={className}>
      <ImageToPDFTool imageType="bmp" />
    </V2ToolHero>
  );
}

export default BmpToPdfToolV2;
