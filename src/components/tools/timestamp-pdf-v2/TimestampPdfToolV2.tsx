'use client';

import React from 'react';
import { TimestampPDFTool } from '@/components/tools/timestamp/TimestampPDFTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function TimestampPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="timestamp-pdf" className={className}>
      <TimestampPDFTool />
    </V2ToolHero>
  );
}

export default TimestampPdfToolV2;
