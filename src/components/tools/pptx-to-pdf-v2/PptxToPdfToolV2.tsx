'use client';

import React from 'react';
import { PPTXToPDFTool } from '@/components/tools/pptx-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PptxToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pptx-to-pdf" className={className}>
      <PPTXToPDFTool />
    </V2ToolHero>
  );
}

export default PptxToPdfToolV2;
