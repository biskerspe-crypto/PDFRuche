'use client';

import React from 'react';
import { FixPageSizeTool } from '@/components/tools/fix-page-size';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function FixPageSizeToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="fix-page-size" className={className}>
      <FixPageSizeTool />
    </V2ToolHero>
  );
}

export default FixPageSizeToolV2;
