'use client';

import React from 'react';
import { SplitPDFTool } from '@/components/tools/split';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function SplitPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="split-pdf" className={className}>
      <SplitPDFTool />
    </V2ToolHero>
  );
}

export default SplitPdfToolV2;
