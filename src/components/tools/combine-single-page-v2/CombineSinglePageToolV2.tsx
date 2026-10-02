'use client';

import React from 'react';
import { CombineSinglePageTool } from '@/components/tools/combine-single-page';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function CombineSinglePageToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="combine-single-page" className={className}>
      <CombineSinglePageTool />
    </V2ToolHero>
  );
}

export default CombineSinglePageToolV2;
