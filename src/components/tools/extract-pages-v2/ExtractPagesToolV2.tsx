'use client';

import React from 'react';
import { ExtractPagesTool } from '@/components/tools/extract';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function ExtractPagesToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="extract-pages" className={className}>
      <ExtractPagesTool />
    </V2ToolHero>
  );
}

export default ExtractPagesToolV2;
