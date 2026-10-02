'use client';

import React from 'react';
import { PDFToSlideTool } from '@/components/tools/pdf-to-slide/PDFToSlideTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToSlideToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-slide" className={className}>
      <PDFToSlideTool />
    </V2ToolHero>
  );
}

export default PdfToSlideToolV2;
