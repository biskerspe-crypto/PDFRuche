'use client';

import React from 'react';
import { BackgroundColorTool } from '@/components/tools/background-color';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function BackgroundColorToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="background-color" className={className}>
      <BackgroundColorTool />
    </V2ToolHero>
  );
}

export default BackgroundColorToolV2;
