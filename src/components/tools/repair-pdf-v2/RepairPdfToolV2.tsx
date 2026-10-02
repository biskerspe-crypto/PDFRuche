'use client';

import React from 'react';
import { RepairPDFTool } from '@/components/tools/repair';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function RepairPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="repair-pdf" className={className}>
      <RepairPDFTool />
    </V2ToolHero>
  );
}

export default RepairPdfToolV2;
