'use client';

import React from 'react';
import { RTFToPDFTool } from '@/components/tools/rtf-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function RtfToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="rtf-to-pdf" className={className}>
      <RTFToPDFTool />
    </V2ToolHero>
  );
}

export default RtfToPdfToolV2;
