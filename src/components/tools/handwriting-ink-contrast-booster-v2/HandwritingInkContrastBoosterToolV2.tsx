'use client';

import React from 'react';
import { HandwritingInkContrastBoosterTool } from '@/components/tools/handwriting-ink-contrast-booster/HandwritingInkContrastBoosterTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function HandwritingInkContrastBoosterToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="handwriting-ink-contrast-booster" className={className}>
      <HandwritingInkContrastBoosterTool />
    </V2ToolHero>
  );
}

export default HandwritingInkContrastBoosterToolV2;
