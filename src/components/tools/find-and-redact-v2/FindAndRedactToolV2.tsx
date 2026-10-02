'use client';

import React from 'react';
import { FindAndRedactTool } from '@/components/tools/find-and-redact';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function FindAndRedactToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="find-and-redact" className={className}>
      <FindAndRedactTool />
    </V2ToolHero>
  );
}

export default FindAndRedactToolV2;
