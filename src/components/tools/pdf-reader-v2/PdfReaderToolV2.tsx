'use client';

import React from 'react';
import { PDFReaderTool } from '@/components/tools/pdf-reader';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfReaderToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-reader" className={className}>
      <PDFReaderTool />
    </V2ToolHero>
  );
}

export default PdfReaderToolV2;
