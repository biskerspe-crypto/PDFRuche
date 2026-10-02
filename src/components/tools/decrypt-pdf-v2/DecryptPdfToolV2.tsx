'use client';

import React from 'react';
import { DecryptPDFTool } from '@/components/tools/decrypt';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function DecryptPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="decrypt-pdf" className={className}>
      <DecryptPDFTool />
    </V2ToolHero>
  );
}

export default DecryptPdfToolV2;
