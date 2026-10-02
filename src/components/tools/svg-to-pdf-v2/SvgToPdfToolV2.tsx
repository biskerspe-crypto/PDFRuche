'use client';

import React from 'react';
import { ImageToPDFTool } from '@/components/tools/image-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function SvgToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="svg-to-pdf" className={className}>
      <ImageToPDFTool imageType="svg" />
    </V2ToolHero>
  );
}

export default SvgToPdfToolV2;
