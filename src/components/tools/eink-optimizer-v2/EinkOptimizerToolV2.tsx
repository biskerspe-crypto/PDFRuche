'use client';

import React from 'react';
import { EinkOptimizerTool } from '@/components/tools/eink-optimizer/EinkOptimizerTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function EinkOptimizerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="eink-optimizer" className={className}>
      <EinkOptimizerTool />
    </V2ToolHero>
  );
}

export default EinkOptimizerToolV2;
