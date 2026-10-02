'use client';

import React from 'react';
import { PDFVectorExtractorTool } from '@/components/tools/vector-extractor/PDFVectorExtractorTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function VectorExtractorToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="vector-extractor" className={className}>
      <PDFVectorExtractorTool />
    </V2ToolHero>
  );
}

export default VectorExtractorToolV2;
