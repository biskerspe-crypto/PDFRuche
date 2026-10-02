'use client';

import React from 'react';
import { OCRPDFTool } from '@/components/tools/ocr';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function OcrPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="ocr-pdf" className={className}>
      <OCRPDFTool />
    </V2ToolHero>
  );
}

export default OcrPdfToolV2;
