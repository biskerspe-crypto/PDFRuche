'use client';

import React from 'react';
import { ViewMetadataTool } from '@/components/tools/view-metadata';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function ViewMetadataToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="view-metadata" className={className}>
      <ViewMetadataTool />
    </V2ToolHero>
  );
}

export default ViewMetadataToolV2;
