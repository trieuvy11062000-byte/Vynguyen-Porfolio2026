import { useEffect, useState } from 'react';

/** Counts 0 → target over 1.6s ease-out-cubic once `active` becomes true. `decimals` controls fractional precision (e.g. 7.9). */
export function useCountUp(target: number, active: boolean, decimals = 0) {
  const [value, setValue] = useState('0');
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const t0 = performance.now();
    const D = 1600;
    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / D);
      const e = 1 - Math.pow(1 - k, 3);
      setValue((target * e).toFixed(decimals));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, decimals]);
  return value;
}
