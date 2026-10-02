'use client';

import React from 'react';
import { RotateCustomTool } from '@/components/tools/rotate-custom/RotateCustomTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function RotateCustomToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="rotate-custom" className={className}>
      <RotateCustomTool />
    </V2ToolHero>
  );
}

export default RotateCustomToolV2;
