'use client';

import React from 'react';
import { PageNumbersTool } from '@/components/tools/page-numbers';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PageNumbersToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="page-numbers" className={className}>
      <PageNumbersTool />
    </V2ToolHero>
  );
}

export default PageNumbersToolV2;
