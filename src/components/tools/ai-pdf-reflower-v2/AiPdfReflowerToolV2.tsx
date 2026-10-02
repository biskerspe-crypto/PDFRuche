'use client';

import React from 'react';
import { AIPDFReflowerTool } from '@/components/tools/ai-pdf-reflower/AIPDFReflowerTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function AiPdfReflowerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="ai-pdf-reflower" className={className}>
      <AIPDFReflowerTool />
    </V2ToolHero>
  );
}

export default AiPdfReflowerToolV2;
