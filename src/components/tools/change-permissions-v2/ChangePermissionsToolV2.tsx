'use client';

import React from 'react';
import { ChangePermissionsTool } from '@/components/tools/change-permissions';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function ChangePermissionsToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="change-permissions" className={className}>
      <ChangePermissionsTool />
    </V2ToolHero>
  );
}

export default ChangePermissionsToolV2;
