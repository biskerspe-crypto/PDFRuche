'use client';

import React from 'react';
import { AnnotationExporterTool } from '@/components/tools/annotation-exporter/AnnotationExporterTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function AnnotationExporterToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="annotation-exporter" className={className}>
      <AnnotationExporterTool />
    </V2ToolHero>
  );
}

export default AnnotationExporterToolV2;
