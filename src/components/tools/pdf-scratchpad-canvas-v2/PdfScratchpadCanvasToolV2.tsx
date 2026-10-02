'use client';

import React from 'react';
import { PdfScratchpadCanvasTool } from '@/components/tools/pdf-scratchpad-canvas/PdfScratchpadCanvasTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfScratchpadCanvasToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-scratchpad-canvas" className={className}>
      <PdfScratchpadCanvasTool />
    </V2ToolHero>
  );
}

export default PdfScratchpadCanvasToolV2;
