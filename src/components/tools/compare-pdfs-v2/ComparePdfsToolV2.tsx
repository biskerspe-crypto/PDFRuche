'use client';

import React from 'react';
import { ComparePDFsTool } from '@/components/tools/compare-pdfs';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function ComparePdfsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="compare-pdfs" className={className}>
      <ComparePDFsTool />
    </V2ToolHero>
  );
}

export default ComparePdfsToolV2;
