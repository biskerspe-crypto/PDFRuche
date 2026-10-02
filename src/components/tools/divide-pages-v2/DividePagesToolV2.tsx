'use client';

import React from 'react';
import { DividePagesTool } from '@/components/tools/divide';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function DividePagesToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="divide-pages" className={className}>
      <DividePagesTool />
    </V2ToolHero>
  );
}

export default DividePagesToolV2;
