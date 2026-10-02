'use client';

import React from 'react';
import { PDFToTIFFTool } from '@/components/tools/pdf-to-tiff/PDFToTIFFTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToTiffToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-tiff" className={className}>
      <PDFToTIFFTool />
    </V2ToolHero>
  );
}

export default PdfToTiffToolV2;
