'use client';

import React from 'react';
import { ImageToPDFTool } from '@/components/tools/image-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function HeicToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="heic-to-pdf" className={className}>
      <ImageToPDFTool imageType="heic" />
    </V2ToolHero>
  );
}

export default HeicToPdfToolV2;
