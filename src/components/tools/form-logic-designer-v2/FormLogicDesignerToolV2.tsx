'use client';

import React from 'react';
import { FormLogicDesignerTool } from '@/components/tools/form-logic-designer/FormLogicDesignerTool';
import { V2ToolHero } from '@/components/tools/v2/V2ToolHero';

export function FormLogicDesignerToolV2({ className = '' }: { className?: string }) {
  return (
    <V2ToolHero toolId="form-logic-designer" className={className}>
      <FormLogicDesignerTool />
    </V2ToolHero>
  );
}

export default FormLogicDesignerToolV2;
