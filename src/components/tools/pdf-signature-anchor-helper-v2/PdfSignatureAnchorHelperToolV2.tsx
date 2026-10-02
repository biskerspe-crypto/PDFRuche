'use client';

import React from 'react';
import { PdfSignatureAnchorHelperTool } from '@/components/tools/pdf-signature-anchor-helper/PdfSignatureAnchorHelperTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfSignatureAnchorHelperToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-signature-anchor-helper" className={className}>
      <PdfSignatureAnchorHelperTool />
    </V2ToolHero>
  );
}

export default PdfSignatureAnchorHelperToolV2;
