'use client';

import React from 'react';
import { PDFToImageTool } from '@/components/tools/pdf-to-image';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToPngToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-png" className={className}>
      <PDFToImageTool outputFormat="png" />
    </V2ToolHero>
  );
}

export default PdfToPngToolV2;
