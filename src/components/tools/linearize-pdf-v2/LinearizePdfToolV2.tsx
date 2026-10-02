'use client';

import React from 'react';
import { LinearizePDFTool } from '@/components/tools/linearize';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function LinearizePdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="linearize-pdf" className={className}>
      <LinearizePDFTool />
    </V2ToolHero>
  );
}

export default LinearizePdfToolV2;
