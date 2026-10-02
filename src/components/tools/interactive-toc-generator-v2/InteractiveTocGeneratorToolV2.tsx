'use client';

import React from 'react';
import { InteractiveTocGeneratorTool } from '@/components/tools/interactive-toc-generator/InteractiveTocGeneratorTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function InteractiveTocGeneratorToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="interactive-toc-generator" className={className}>
      <InteractiveTocGeneratorTool />
    </V2ToolHero>
  );
}

export default InteractiveTocGeneratorToolV2;
