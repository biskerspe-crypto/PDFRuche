'use client';

import React from 'react';
import { SignPDFTool } from '@/components/tools/sign';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function SignPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="sign-pdf" className={className}>
      <SignPDFTool />
    </V2ToolHero>
  );
}

export default SignPdfToolV2;
