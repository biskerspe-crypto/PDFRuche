'use client';

import React, { useCallback, useRef } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /** Pull strength toward the cursor (0..1). */
  strength?: number;
}

/**
 * Magnetic wrapper — the content gently follows the cursor while hovered
 * and springs back on leave. Desktop pointers only; transform-only (GPU).
 */
export default function MagneticButton({ children, className, strength = 0.32 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      if (!window.matchMedia('(pointer: fine)').matches) return;

      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);

      el.style.transition = 'transform 120ms ease-out';
      el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 480ms cubic-bezier(0.22, 1.4, 0.36, 1)';
    el.style.transform = 'translate3d(0, 0, 0)';
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block will-change-transform ${className ?? ''}`}
    >
      {children}
    </div>
  );
}
