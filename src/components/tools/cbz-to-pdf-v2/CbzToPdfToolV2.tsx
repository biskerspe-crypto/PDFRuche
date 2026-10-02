'use client';

import React from 'react';
import { CBZToPDFTool } from '@/components/tools/cbz-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function CbzToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="cbz-to-pdf" className={className}>
      <CBZToPDFTool />
    </V2ToolHero>
  );
}

export default CbzToPdfToolV2;
