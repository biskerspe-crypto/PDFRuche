'use client';

import React from 'react';
import { PDFToPDFATool } from '@/components/tools/pdf-to-pdfa';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToPdfaToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-pdfa" className={className}>
      <PDFToPDFATool />
    </V2ToolHero>
  );
}

export default PdfToPdfaToolV2;
