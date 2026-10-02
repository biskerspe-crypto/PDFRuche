'use client';

import React from 'react';
import { PDFToCBZTool } from '@/components/tools/pdf-to-cbz/PDFToCBZTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToCbzToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-cbz" className={className}>
      <PDFToCBZTool />
    </V2ToolHero>
  );
}

export default PdfToCbzToolV2;
