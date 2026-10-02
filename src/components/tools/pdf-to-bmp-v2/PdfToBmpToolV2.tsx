'use client';

import React from 'react';
import { PDFToImageTool } from '@/components/tools/pdf-to-image';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToBmpToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-bmp" className={className}>
      <PDFToImageTool outputFormat="bmp" />
    </V2ToolHero>
  );
}

export default PdfToBmpToolV2;
