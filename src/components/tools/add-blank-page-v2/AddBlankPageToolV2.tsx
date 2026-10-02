'use client';

import React from 'react';
import { AddBlankPageTool } from '@/components/tools/add-blank-page';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function AddBlankPageToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="add-blank-page" className={className}>
      <AddBlankPageTool />
    </V2ToolHero>
  );
}

export default AddBlankPageToolV2;
