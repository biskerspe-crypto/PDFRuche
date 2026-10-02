'use client';

import React from 'react';
import { TextToPDFTool } from '@/components/tools/text-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function TxtToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="txt-to-pdf" className={className}>
      <TextToPDFTool />
    </V2ToolHero>
  );
}

export default TxtToPdfToolV2;
