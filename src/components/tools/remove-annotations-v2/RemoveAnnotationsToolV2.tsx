'use client';

import React from 'react';
import { RemoveAnnotationsTool } from '@/components/tools/remove-annotations';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function RemoveAnnotationsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="remove-annotations" className={className}>
      <RemoveAnnotationsTool />
    </V2ToolHero>
  );
}

export default RemoveAnnotationsToolV2;
