'use client';

import React from 'react';
import { PhotoTilingPrepressTool } from '@/components/tools/photo-tiling-prepress/PhotoTilingPrepressTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PhotoTilingPrepressToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="photo-tiling-prepress" className={className}>
      <PhotoTilingPrepressTool />
    </V2ToolHero>
  );
}

export default PhotoTilingPrepressToolV2;
