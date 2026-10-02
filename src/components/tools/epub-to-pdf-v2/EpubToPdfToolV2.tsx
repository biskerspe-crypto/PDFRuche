'use client';

import React from 'react';
import { EPUBToPDFTool } from '@/components/tools/epub-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function EpubToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="epub-to-pdf" className={className}>
      <EPUBToPDFTool />
    </V2ToolHero>
  );
}

export default EpubToPdfToolV2;
