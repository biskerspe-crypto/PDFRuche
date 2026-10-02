'use client';

import React from 'react';
import { PDFToSVGTool } from '@/components/tools/pdf-to-svg';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToSvgToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-svg" className={className}>
      <PDFToSVGTool />
    </V2ToolHero>
  );
}

export default PdfToSvgToolV2;
