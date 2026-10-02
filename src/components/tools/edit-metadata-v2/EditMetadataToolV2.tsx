'use client';

import React from 'react';
import { EditMetadataTool } from '@/components/tools/edit-metadata';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function EditMetadataToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="edit-metadata" className={className}>
      <EditMetadataTool />
    </V2ToolHero>
  );
}

export default EditMetadataToolV2;
