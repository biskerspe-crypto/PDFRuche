'use client';

import React from 'react';
import { DeadLinkDebuggerTool } from '@/components/tools/dead-link-debugger/DeadLinkDebuggerTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function DeadLinkDebuggerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="dead-link-debugger" className={className}>
      <DeadLinkDebuggerTool />
    </V2ToolHero>
  );
}

export default DeadLinkDebuggerToolV2;
