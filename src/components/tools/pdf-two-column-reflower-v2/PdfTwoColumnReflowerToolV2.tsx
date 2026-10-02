'use client';

import React from 'react';
import { PdfTwoColumnReflowerTool } from '@/components/tools/pdf-two-column-reflower/PdfTwoColumnReflowerTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfTwoColumnReflowerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-two-column-reflower" className={className}>
      <PdfTwoColumnReflowerTool />
    </V2ToolHero>
  );
}

export default PdfTwoColumnReflowerToolV2;
