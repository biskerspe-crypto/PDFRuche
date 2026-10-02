'use client';

import React from 'react';
import { EditPDFTool } from '@/components/tools/edit-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function EditPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="edit-pdf" className={className}>
      <EditPDFTool />
    </V2ToolHero>
  );
}

export default EditPdfToolV2;
