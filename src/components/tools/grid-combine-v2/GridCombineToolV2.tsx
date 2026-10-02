'use client';

import React from 'react';
import { GridCombineTool } from '@/components/tools/grid-combine';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function GridCombineToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="grid-combine" className={className}>
      <GridCombineTool />
    </V2ToolHero>
  );
}

export default GridCombineToolV2;
