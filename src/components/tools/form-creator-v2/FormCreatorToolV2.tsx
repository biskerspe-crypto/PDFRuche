'use client';

import React from 'react';
import { FormCreatorTool } from '@/components/tools/form-creator';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function FormCreatorToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="form-creator" className={className}>
      <FormCreatorTool />
    </V2ToolHero>
  );
}

export default FormCreatorToolV2;
