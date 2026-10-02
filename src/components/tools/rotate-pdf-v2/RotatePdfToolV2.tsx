'use client';

import React from 'react';
import { RotatePDFTool } from '@/components/tools/rotate';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function RotatePdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="rotate-pdf" className={className}>
      <RotatePDFTool />
    </V2ToolHero>
  );
}

export default RotatePdfToolV2;
