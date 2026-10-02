'use client';

import React from 'react';
import { ReversePagesTool } from '@/components/tools/reverse';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function ReversePagesToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="reverse-pages" className={className}>
      <ReversePagesTool />
    </V2ToolHero>
  );
}

export default ReversePagesToolV2;
