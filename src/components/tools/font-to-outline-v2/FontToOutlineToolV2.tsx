'use client';

import React from 'react';
import { FontToOutlineTool } from '@/components/tools/font-to-outline';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function FontToOutlineToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="font-to-outline" className={className}>
      <FontToOutlineTool />
    </V2ToolHero>
  );
}

export default FontToOutlineToolV2;
