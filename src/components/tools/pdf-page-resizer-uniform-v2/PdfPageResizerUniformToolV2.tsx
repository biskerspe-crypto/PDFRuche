'use client';

import React from 'react';
import { PdfPageResizerUniformTool } from '@/components/tools/pdf-page-resizer-uniform/PdfPageResizerUniformTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfPageResizerUniformToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-page-resizer-uniform" className={className}>
      <PdfPageResizerUniformTool />
    </V2ToolHero>
  );
}

export default PdfPageResizerUniformToolV2;
