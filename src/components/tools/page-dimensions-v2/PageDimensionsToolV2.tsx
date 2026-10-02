'use client';

import React from 'react';
import { PageDimensionsTool } from '@/components/tools/page-dimensions';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PageDimensionsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="page-dimensions" className={className}>
      <PageDimensionsTool />
    </V2ToolHero>
  );
}

export default PageDimensionsToolV2;
