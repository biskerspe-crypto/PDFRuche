'use client';

import React from 'react';
import { MOBIToPDFTool } from '@/components/tools/mobi-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function MobiToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="mobi-to-pdf" className={className}>
      <MOBIToPDFTool />
    </V2ToolHero>
  );
}

export default MobiToPdfToolV2;
