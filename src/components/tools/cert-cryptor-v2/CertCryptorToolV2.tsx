'use client';

import React from 'react';
import { CertCryptorTool } from '@/components/tools/cert-cryptor/CertCryptorTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function CertCryptorToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="cert-cryptor" className={className}>
      <CertCryptorTool />
    </V2ToolHero>
  );
}

export default CertCryptorToolV2;
