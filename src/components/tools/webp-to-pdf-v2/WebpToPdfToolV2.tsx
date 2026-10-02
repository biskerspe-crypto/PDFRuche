'use client';

import React from 'react';
import { ImageToPDFTool } from '@/components/tools/image-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function WebpToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="webp-to-pdf" className={className}>
      <ImageToPDFTool imageType="webp" />
    </V2ToolHero>
  );
}

export default WebpToPdfToolV2;
