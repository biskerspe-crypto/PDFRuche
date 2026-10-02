'use client';

import React from 'react';
import { PSDToPDFTool } from '@/components/tools/psd-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PsdToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="psd-to-pdf" className={className}>
      <PSDToPDFTool />
    </V2ToolHero>
  );
}

export default PsdToPdfToolV2;
