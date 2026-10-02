'use client';

import React from 'react';
import { FormFillerTool } from '@/components/tools/form-filler';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function FormFillerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="form-filler" className={className}>
      <FormFillerTool />
    </V2ToolHero>
  );
}

export default FormFillerToolV2;
