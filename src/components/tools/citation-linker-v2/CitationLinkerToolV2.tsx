'use client';

import React from 'react';
import { CitationLinkerTool } from '@/components/tools/citation-linker/CitationLinkerTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function CitationLinkerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="citation-linker" className={className}>
      <CitationLinkerTool />
    </V2ToolHero>
  );
}

export default CitationLinkerToolV2;
