import { useEffect, useState } from 'react';

/** Confirms a static asset actually exists (HEAD + content-type check, since
 * some hosts return 200+HTML for missing paths instead of a real 404). */
export function useFileExists(url: string) {
  const [exists, setExists] = useState(false);
  useEffect(() => {
    let cancelled = false;
    fetch(url, { method: 'HEAD' })
      .then((res) => {
        if (cancelled) return;
        setExists(res.ok && !(res.headers.get('content-type') || '').includes('text/html'));
      })
      .catch(() => {
        if (!cancelled) setExists(false);
      });
    return () => {
      cancelled = true;
    };
  }, [url]);
  return exists;
}
