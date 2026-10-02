'use client';

import React from 'react';
import { DigitalSignPDFTool } from '@/components/tools/digital-sign';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function DigitalSignPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="digital-sign-pdf" className={className}>
      <DigitalSignPDFTool />
    </V2ToolHero>
  );
}

export default DigitalSignPdfToolV2;
