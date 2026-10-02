'use client';

import React from 'react';
import { PdfLosslessSlicerTool } from '@/components/tools/pdf-lossless-slicer/PdfLosslessSlicerTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfLosslessSlicerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-lossless-slicer" className={className}>
      <PdfLosslessSlicerTool />
    </V2ToolHero>
  );
}

export default PdfLosslessSlicerToolV2;
