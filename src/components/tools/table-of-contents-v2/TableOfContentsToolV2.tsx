'use client';

import React from 'react';
import { TableOfContentsTool } from '@/components/tools/table-of-contents';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function TableOfContentsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="table-of-contents" className={className}>
      <TableOfContentsTool />
    </V2ToolHero>
  );
}

export default TableOfContentsToolV2;
