'use client';

import React from 'react';
import { JSONToPDFTool } from '@/components/tools/json-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function JsonToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="json-to-pdf" className={className}>
      <JSONToPDFTool />
    </V2ToolHero>
  );
}

export default JsonToPdfToolV2;
