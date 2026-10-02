'use client';

import React from 'react';
import { WordToPDFTool } from '@/components/tools/word-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function WordToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="word-to-pdf" className={className}>
      <WordToPDFTool />
    </V2ToolHero>
  );
}

export default WordToPdfToolV2;
