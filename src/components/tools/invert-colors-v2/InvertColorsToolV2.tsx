'use client';

import React from 'react';
import { InvertColorsTool } from '@/components/tools/invert-colors';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function InvertColorsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="invert-colors" className={className}>
      <InvertColorsTool />
    </V2ToolHero>
  );
}

export default InvertColorsToolV2;
