'use client';

import React from 'react';
import { ExtractAttachmentsTool } from '@/components/tools/extract-attachments';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function ExtractAttachmentsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="extract-attachments" className={className}>
      <ExtractAttachmentsTool />
    </V2ToolHero>
  );
}

export default ExtractAttachmentsToolV2;
