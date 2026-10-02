'use client';

import React from 'react';
import { PDFToGreyscaleTool } from '@/components/tools/pdf-to-greyscale';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToGreyscaleToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-greyscale" className={className}>
      <PDFToGreyscaleTool />
    </V2ToolHero>
  );
}

export default PdfToGreyscaleToolV2;
