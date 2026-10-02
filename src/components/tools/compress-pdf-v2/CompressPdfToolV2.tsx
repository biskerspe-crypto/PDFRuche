'use client';

import React from 'react';
import { CompressPDFTool } from '@/components/tools/compress';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function CompressPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="compress-pdf" className={className}>
      <CompressPDFTool />
    </V2ToolHero>
  );
}

export default CompressPdfToolV2;
