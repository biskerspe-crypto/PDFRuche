'use client';

import React from 'react';
import { PDFToJSONTool } from '@/components/tools/pdf-to-json';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToJsonToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-json" className={className}>
      <PDFToJSONTool />
    </V2ToolHero>
  );
}

export default PdfToJsonToolV2;
