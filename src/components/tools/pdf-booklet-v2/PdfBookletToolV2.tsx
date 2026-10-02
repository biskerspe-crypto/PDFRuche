'use client';

import React from 'react';
import { PDFBookletTool } from '@/components/tools/pdf-booklet';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfBookletToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-booklet" className={className}>
      <PDFBookletTool />
    </V2ToolHero>
  );
}

export default PdfBookletToolV2;
