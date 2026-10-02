'use client';

import React from 'react';
import { EditAttachmentsTool } from '@/components/tools/edit-attachments';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function EditAttachmentsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="edit-attachments" className={className}>
      <EditAttachmentsTool />
    </V2ToolHero>
  );
}

export default EditAttachmentsToolV2;
