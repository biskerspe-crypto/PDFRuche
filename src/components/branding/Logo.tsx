'use client';

import React from 'react';
import { TreeLogo } from './TreeLogo';

export interface LogoProps {
  variant?: 'full' | 'icon' | 'dark' | 'gimini' | 'gemini' | 'hero' | 'image';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  withGlow?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'image',
  size = 'md',
  className,
  withGlow = false,
}) => {
  return (
    <TreeLogo
      variant={variant === 'icon' ? 'icon' : 'image'}
      size={size}
      withGlow={withGlow}
      className={className}
    />
  );
};

export default Logo;