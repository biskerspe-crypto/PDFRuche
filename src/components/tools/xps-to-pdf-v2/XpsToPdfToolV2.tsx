'use client';

import React from 'react';
import { XPSToPDFTool } from '@/components/tools/xps-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function XpsToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="xps-to-pdf" className={className}>
      <XPSToPDFTool />
    </V2ToolHero>
  );
}

export default XpsToPdfToolV2;
