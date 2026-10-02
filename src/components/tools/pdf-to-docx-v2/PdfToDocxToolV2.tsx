'use client';

import React from 'react';
import { PDFToDocxTool } from '@/components/tools/pdf-to-docx';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToDocxToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-docx" className={className}>
      <PDFToDocxTool />
    </V2ToolHero>
  );
}

export default PdfToDocxToolV2;
