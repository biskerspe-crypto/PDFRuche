'use client';

import React from 'react';
import { TreeLogo, type TreeLogoProps } from './TreeLogo';

export interface LogoV2Props {
  variant?: 'full' | 'icon' | 'image';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  tone?: 'auto' | 'light';
  className?: string;
  withSparkle?: boolean;
  centered?: boolean;
}

/**
 * PDFRuche Logo (backward-compatible LogoV2 proxy)
 * Adopts the golden bee identity.
 */
export const LogoV2: React.FC<LogoV2Props> = ({
  variant = 'image',
  size = 'md',
  tone = 'auto',
  className,
  centered = false,
}) => {
  return (
    <div className={centered ? 'flex justify-center items-center w-full' : 'inline-flex'}>
      <TreeLogo
        variant={variant === 'icon' ? 'icon' : 'image'}
        size={size}
        tone={tone}
        className={className}
      />
    </div>
  );
};

export default LogoV2;
