'use client';

import React from 'react';
import { AddPageLabelsTool } from '@/components/tools/page-labels/AddPageLabelsTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function AddPageLabelsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="add-page-labels" className={className}>
      <AddPageLabelsTool />
    </V2ToolHero>
  );
}

export default AddPageLabelsToolV2;
