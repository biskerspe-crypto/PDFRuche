'use client';

import React from 'react';
import { GlobalInvoiceParserTool } from '@/components/tools/global-invoice-parser/GlobalInvoiceParserTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function GlobalInvoiceParserToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="global-invoice-parser" className={className}>
      <GlobalInvoiceParserTool />
    </V2ToolHero>
  );
}

export default GlobalInvoiceParserToolV2;
