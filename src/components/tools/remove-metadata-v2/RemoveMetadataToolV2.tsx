'use client';

import React from 'react';
import { RemoveMetadataTool } from '@/components/tools/remove-metadata';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function RemoveMetadataToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="remove-metadata" className={className}>
      <RemoveMetadataTool />
    </V2ToolHero>
  );
}

export default RemoveMetadataToolV2;
