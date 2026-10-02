'use client';

import React from 'react';
import { RemoveRestrictionsTool } from '@/components/tools/remove-restrictions';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function RemoveRestrictionsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="remove-restrictions" className={className}>
      <RemoveRestrictionsTool />
    </V2ToolHero>
  );
}

export default RemoveRestrictionsToolV2;
