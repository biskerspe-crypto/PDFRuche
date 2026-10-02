'use client';

import React from 'react';
import { HeaderFooterTool } from '@/components/tools/header-footer';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function HeaderFooterToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="header-footer" className={className}>
      <HeaderFooterTool />
    </V2ToolHero>
  );
}

export default HeaderFooterToolV2;
