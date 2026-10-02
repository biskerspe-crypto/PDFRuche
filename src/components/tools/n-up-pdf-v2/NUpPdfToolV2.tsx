'use client';

import React from 'react';
import { NUpPDFTool } from '@/components/tools/n-up';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function NUpPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="n-up-pdf" className={className}>
      <NUpPDFTool />
    </V2ToolHero>
  );
}

export default NUpPdfToolV2;
