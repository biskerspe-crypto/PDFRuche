'use client';

import React from 'react';
import { PdfDeskewAlignerTool } from '@/components/tools/pdf-deskew-aligner/PdfDeskewAlignerTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfDeskewAlignerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-deskew-aligner" className={className}>
      <PdfDeskewAlignerTool />
    </V2ToolHero>
  );
}

export default PdfDeskewAlignerToolV2;
