'use client';

import React from 'react';
import { ExtractTablesTool } from '@/components/tools/extract-tables';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function ExtractTablesToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="extract-tables" className={className}>
      <ExtractTablesTool />
    </V2ToolHero>
  );
}

export default ExtractTablesToolV2;
