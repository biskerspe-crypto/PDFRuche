'use client';

import React from 'react';
import { TextColorTool } from '@/components/tools/text-color';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function TextColorToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="text-color" className={className}>
      <TextColorTool />
    </V2ToolHero>
  );
}

export default TextColorToolV2;
