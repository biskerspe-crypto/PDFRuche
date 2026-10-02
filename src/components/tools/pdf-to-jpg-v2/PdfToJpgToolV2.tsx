'use client';

import React from 'react';
import { PDFToImageTool } from '@/components/tools/pdf-to-image';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToJpgToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-jpg" className={className}>
      <PDFToImageTool outputFormat="jpg" />
    </V2ToolHero>
  );
}

export default PdfToJpgToolV2;
