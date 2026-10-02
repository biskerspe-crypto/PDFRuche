'use client';

import React from 'react';
import { PDFToPptxTool } from '@/components/tools/pdf-to-pptx';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToPptxToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-pptx" className={className}>
      <PDFToPptxTool />
    </V2ToolHero>
  );
}

export default PdfToPptxToolV2;
