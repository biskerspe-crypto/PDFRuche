'use client';

import React from 'react';
import { DeskewPDFTool } from '@/components/tools/deskew';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function DeskewPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="deskew-pdf" className={className}>
      <DeskewPDFTool />
    </V2ToolHero>
  );
}

export default DeskewPdfToolV2;
