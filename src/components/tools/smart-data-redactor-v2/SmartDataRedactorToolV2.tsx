'use client';

import React from 'react';
import { SmartDataRedactorTool } from '@/components/tools/smart-data-redactor/SmartDataRedactorTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function SmartDataRedactorToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="smart-data-redactor" className={className}>
      <SmartDataRedactorTool />
    </V2ToolHero>
  );
}

export default SmartDataRedactorToolV2;
