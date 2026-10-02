'use client';

import React from 'react';
import { ImageToPDFTool } from '@/components/tools/image-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function TiffToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="tiff-to-pdf" className={className}>
      <ImageToPDFTool imageType="tiff" />
    </V2ToolHero>
  );
}

export default TiffToPdfToolV2;
