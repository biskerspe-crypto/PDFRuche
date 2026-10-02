'use client';

import React from 'react';
import { SignatureInkOptimizerTool } from '@/components/tools/signature-ink-optimizer/SignatureInkOptimizerTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function SignatureInkOptimizerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="signature-ink-optimizer" className={className}>
      <SignatureInkOptimizerTool />
    </V2ToolHero>
  );
}

export default SignatureInkOptimizerToolV2;
