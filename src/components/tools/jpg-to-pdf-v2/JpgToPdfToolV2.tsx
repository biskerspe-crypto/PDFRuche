'use client';

import React from 'react';
import { ImageToPDFTool } from '@/components/tools/image-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function JpgToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="jpg-to-pdf" className={className}>
      <ImageToPDFTool imageType="jpg" />
    </V2ToolHero>
  );
}

export default JpgToPdfToolV2;
