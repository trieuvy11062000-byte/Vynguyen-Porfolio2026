import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-driven reveal progress (0-1) for the About paragraph, matching the
 * prototype's formula: progress = (0.9*vh - rect.top) / (0.65*vh), clamped.
 */
export function useRevealProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const pr = Math.max(0, Math.min(1, (vh * 0.9 - r.top) / (vh * 0.65)));
        setProgress(pr);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return { ref, progress };
}
