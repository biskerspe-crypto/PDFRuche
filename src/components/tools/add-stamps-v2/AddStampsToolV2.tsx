'use client';

import React from 'react';
import { StampsTool } from '@/components/tools/stamps';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function AddStampsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="add-stamps" className={className}>
      <StampsTool />
    </V2ToolHero>
  );
}

export default AddStampsToolV2;
