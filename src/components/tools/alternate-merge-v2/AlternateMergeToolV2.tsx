'use client';

import React from 'react';
import { AlternateMergeTool } from '@/components/tools/alternate-merge';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function AlternateMergeToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="alternate-merge" className={className}>
      <AlternateMergeTool />
    </V2ToolHero>
  );
}

export default AlternateMergeToolV2;
