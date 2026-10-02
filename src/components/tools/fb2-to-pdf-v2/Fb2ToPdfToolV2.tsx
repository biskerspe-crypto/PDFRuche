'use client';

import React from 'react';
import { FB2ToPDFTool } from '@/components/tools/fb2-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function Fb2ToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="fb2-to-pdf" className={className}>
      <FB2ToPDFTool />
    </V2ToolHero>
  );
}

export default Fb2ToPdfToolV2;
