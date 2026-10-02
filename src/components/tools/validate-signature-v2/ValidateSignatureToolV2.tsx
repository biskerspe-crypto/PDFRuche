'use client';

import React from 'react';
import { ValidateSignatureTool } from '@/components/tools/validate-signature';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function ValidateSignatureToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="validate-signature" className={className}>
      <ValidateSignatureTool />
    </V2ToolHero>
  );
}

export default ValidateSignatureToolV2;
