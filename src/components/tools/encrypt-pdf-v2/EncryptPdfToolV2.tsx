'use client';

import React from 'react';
import { EncryptPDFTool } from '@/components/tools/encrypt';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function EncryptPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="encrypt-pdf" className={className}>
      <EncryptPDFTool />
    </V2ToolHero>
  );
}

export default EncryptPdfToolV2;
