'use client';

import React from 'react';
import { WatermarkTool } from '@/components/tools/watermark';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function AddWatermarkToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="add-watermark" className={className}>
      <WatermarkTool />
    </V2ToolHero>
  );
}

export default AddWatermarkToolV2;
