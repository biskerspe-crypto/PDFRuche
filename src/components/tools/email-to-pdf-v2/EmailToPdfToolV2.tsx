'use client';

import React from 'react';
import { EmailToPDFTool } from '@/components/tools/email-to-pdf';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function EmailToPdfToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="email-to-pdf" className={className}>
      <EmailToPDFTool />
    </V2ToolHero>
  );
}

export default EmailToPdfToolV2;
