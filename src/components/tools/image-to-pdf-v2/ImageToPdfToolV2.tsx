'use client';

import React from 'react';
import { ImageToPDFTool } from '@/components/tools/image-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function ImageToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="image-to-pdf" className={className}>
      <ImageToPDFTool />
    </V2ToolHero>
  );
}

export default ImageToPdfToolV2;
