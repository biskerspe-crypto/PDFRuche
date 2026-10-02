'use client';

import React from 'react';
import { DeepSanitizeTool } from '@/components/tools/deep-sanitize/DeepSanitizeTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function DeepSanitizeToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="deep-sanitize" className={className}>
      <DeepSanitizeTool />
    </V2ToolHero>
  );
}

export default DeepSanitizeToolV2;
