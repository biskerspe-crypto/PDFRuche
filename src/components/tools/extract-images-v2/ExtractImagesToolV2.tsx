'use client';

import React from 'react';
import { ExtractImagesTool } from '@/components/tools/extract-images';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function ExtractImagesToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="extract-images" className={className}>
      <ExtractImagesTool />
    </V2ToolHero>
  );
}

export default ExtractImagesToolV2;
