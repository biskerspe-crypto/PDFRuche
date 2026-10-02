'use client';

import React from 'react';
import { RemoveBlankPagesTool } from '@/components/tools/remove-blank-pages';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function RemoveBlankPagesToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="remove-blank-pages" className={className}>
      <RemoveBlankPagesTool />
    </V2ToolHero>
  );
}

export default RemoveBlankPagesToolV2;
