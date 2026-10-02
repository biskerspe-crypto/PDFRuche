'use client';

import React from 'react';
import { PDFsToZipTool } from '@/components/tools/pdf-to-zip';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PdfToZipToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="pdf-to-zip" className={className}>
      <PDFsToZipTool />
    </V2ToolHero>
  );
}

export default PdfToZipToolV2;
