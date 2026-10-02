'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Triggers animation classes when an element scrolls into view.
 * Usage: const [ref, visible] = useAnimationOnView<HTMLDivElement>();
 * then apply `visible ? 'animate-moonrise' : 'opacity-0'` on the element.
 */
export function useAnimationOnView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options?.rootMargin, options?.threshold]);

  return [ref, visible] as const;
}

export default useAnimationOnView;