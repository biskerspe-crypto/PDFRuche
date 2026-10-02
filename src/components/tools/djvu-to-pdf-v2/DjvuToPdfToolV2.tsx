'use client';

import React from 'react';
import { DJVUToPDFTool } from '@/components/tools/djvu-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function DjvuToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="djvu-to-pdf" className={className}>
      <DJVUToPDFTool />
    </V2ToolHero>
  );
}

export default DjvuToPdfToolV2;
