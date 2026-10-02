'use client';

import React from 'react';
import { PdfSpineBookbinderTool } from '@/components/tools/pdf-spine-bookbinder/PdfSpineBookbinderTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfSpineBookbinderToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-spine-bookbinder" className={className}>
      <PdfSpineBookbinderTool />
    </V2ToolHero>
  );
}

export default PdfSpineBookbinderToolV2;
