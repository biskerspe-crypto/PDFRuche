'use client';

import React from 'react';
import { OrganizePDFTool } from '@/components/tools/organize';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function OrganizePdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="organize-pdf" className={className}>
      <OrganizePDFTool />
    </V2ToolHero>
  );
}

export default OrganizePdfToolV2;
