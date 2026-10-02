'use client';

import React from 'react';
import { SanitizePDFTool } from '@/components/tools/sanitize';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function SanitizePdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="sanitize-pdf" className={className}>
      <SanitizePDFTool />
    </V2ToolHero>
  );
}

export default SanitizePdfToolV2;
