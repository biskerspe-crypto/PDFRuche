'use client';

import React from 'react';
import { BatchWatermarkRemoverTool } from '@/components/tools/batch-watermark-remover/BatchWatermarkRemoverTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function BatchWatermarkRemoverToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="batch-watermark-remover" className={className}>
      <BatchWatermarkRemoverTool />
    </V2ToolHero>
  );
}

export default BatchWatermarkRemoverToolV2;
