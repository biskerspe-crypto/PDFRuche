'use client';

import React from 'react';
import { MarkdownToPDFTool } from '@/components/tools/markdown-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function MarkdownToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="markdown-to-pdf" className={className}>
      <MarkdownToPDFTool />
    </V2ToolHero>
  );
}

export default MarkdownToPdfToolV2;
