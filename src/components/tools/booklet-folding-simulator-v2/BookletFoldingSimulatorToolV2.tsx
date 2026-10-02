'use client';

import React from 'react';
import { BookletFoldingSimulatorTool } from '@/components/tools/booklet-folding-simulator/BookletFoldingSimulatorTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function BookletFoldingSimulatorToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="booklet-folding-simulator" className={className}>
      <BookletFoldingSimulatorTool />
    </V2ToolHero>
  );
}

export default BookletFoldingSimulatorToolV2;
