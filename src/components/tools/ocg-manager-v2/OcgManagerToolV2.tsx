'use client';

import React from 'react';
import { OCGManagerTool } from '@/components/tools/ocg-manager';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function OcgManagerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="ocg-manager" className={className}>
      <OCGManagerTool />
    </V2ToolHero>
  );
}

export default OcgManagerToolV2;
