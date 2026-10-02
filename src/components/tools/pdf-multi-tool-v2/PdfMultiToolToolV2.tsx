'use client';

import React from 'react';
import { PDFMultiTool } from '@/components/tools/pdf-multi-tool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfMultiToolToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-multi-tool" className={className}>
      <PDFMultiTool />
    </V2ToolHero>
  );
}

export default PdfMultiToolToolV2;
