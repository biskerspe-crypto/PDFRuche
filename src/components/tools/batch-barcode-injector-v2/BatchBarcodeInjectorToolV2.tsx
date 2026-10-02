'use client';

import React from 'react';
import { BatchBarcodeInjectorTool } from '@/components/tools/batch-barcode-injector/BatchBarcodeInjectorTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function BatchBarcodeInjectorToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="batch-barcode-injector" className={className}>
      <BatchBarcodeInjectorTool />
    </V2ToolHero>
  );
}

export default BatchBarcodeInjectorToolV2;
