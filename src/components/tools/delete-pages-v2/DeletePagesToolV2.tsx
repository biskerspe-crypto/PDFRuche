'use client';

import React from 'react';
import { DeletePagesTool } from '@/components/tools/delete';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function DeletePagesToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="delete-pages" className={className}>
      <DeletePagesTool />
    </V2ToolHero>
  );
}

export default DeletePagesToolV2;
