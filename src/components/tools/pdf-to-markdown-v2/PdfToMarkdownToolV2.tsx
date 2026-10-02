'use client';

import React from 'react';
import { PDFToMarkdownTool } from '@/components/tools/pdf-to-markdown';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToMarkdownToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-markdown" className={className}>
      <PDFToMarkdownTool />
    </V2ToolHero>
  );
}

export default PdfToMarkdownToolV2;
