'use client';

import React from 'react';
import { PDFToExcelTool } from '@/components/tools/pdf-to-excel';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToExcelToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-excel" className={className}>
      <PDFToExcelTool />
    </V2ToolHero>
  );
}

export default PdfToExcelToolV2;
