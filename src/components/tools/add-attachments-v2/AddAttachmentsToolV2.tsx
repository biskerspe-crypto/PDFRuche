'use client';

import React from 'react';
import { AddAttachmentsTool } from '@/components/tools/add-attachments';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function AddAttachmentsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="add-attachments" className={className}>
      <AddAttachmentsTool />
    </V2ToolHero>
  );
}

export default AddAttachmentsToolV2;
