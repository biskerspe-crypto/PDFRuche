'use client';

import React from 'react';
import { PassportIdComposerTool } from '@/components/tools/passport-id-composer/PassportIdComposerTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function PassportIdComposerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="passport-id-composer" className={className}>
      <PassportIdComposerTool />
    </V2ToolHero>
  );
}

export default PassportIdComposerToolV2;
