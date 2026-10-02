'use client';

import React from 'react';
import { PDFToImageTool } from '@/components/tools/pdf-to-image';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToWebpToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-webp" className={className}>
      <PDFToImageTool outputFormat="webp" />
    </V2ToolHero>
  );
}

export default PdfToWebpToolV2;
