'use client';

import React from 'react';
import { FlattenPDFTool } from '@/components/tools/flatten';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function FlattenPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="flatten-pdf" className={className}>
      <FlattenPDFTool />
    </V2ToolHero>
  );
}

export default FlattenPdfToolV2;
