'use client';

import React from 'react';
import { ExcelToPDFTool } from '@/components/tools/excel-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function ExcelToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="excel-to-pdf" className={className}>
      <ExcelToPDFTool />
    </V2ToolHero>
  );
}

export default ExcelToPdfToolV2;
