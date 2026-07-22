import { type CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getMediaCandidates, mediaKind } from '../data/mediaAssets';

interface PlayIconConfig {
  size: number;
  background: string;
  border: string;
  fontSize: number;
  paddingLeft: number;
  boxShadow?: string;
}

interface ImageSlotProps {
  /** design-slot id — resolved to a file automatically via getMediaCandidates() */
  id: string;
  alt?: string;
  shape?: 'circle' | 'rect';
  /** 'natural' renders at full width and intrinsic height (no cropping, no letterboxing) — for tall images like the email preview */
  fit?: 'cover' | 'contain' | 'natural';
  placeholder: string;
  /** parallax drift strength (matches original data-plx), omit for no parallax */
  parallax?: number;
  className?: string;
  style?: CSSProperties;
  /** fires with the media's natural aspect ratio (w/h) once known */
  onRatio?: (ratio: number) => void;
  /** shows a centered play button; if the resolved file is a real video it controls playback */
  playIcon?: PlayIconConfig;
}

/**
 * Production replacement for the prototype's drag-drop <image-slot> web
 * component. For each candidate file for `id` (see mediaAssets.ts), sends a
 * HEAD request to confirm it actually exists (checking content-type, not
 * just HTTP status — dev servers and SPA hosts often answer missing paths
 * with a 200 + index.html instead of a real 404) and renders the first
 * match — photo, video, or PDF — falling back to a labeled placeholder if
 * none of them do.
 */
export function ImageSlot({ id, alt, shape = 'rect', fit = 'cover', placeholder, parallax, className, style, onRatio, playIcon }: ImageSlotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? [`${parallax * 50}%`, `${-parallax * 50}%`] : ['0%', '0%']);

  const candidates = useMemo(() => getMediaCandidates(id), [id]);
  const [resolved, setResolved] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [everPlayed, setEverPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let cancelled = false;
    setResolved(null);
    setPlaying(false);
    setEverPlayed(false);

    Promise.all(
      candidates.map(async (url) => {
        try {
          const res = await fetch(url, { method: 'HEAD' });
          const ct = res.headers.get('content-type') || '';
          return res.ok && !ct.includes('text/html') ? url : null;
        } catch {
          return null;
        }
      }),
    ).then((results) => {
      if (cancelled) return;
      setResolved(results.find((r): r is string => !!r) ?? null);
    });

    return () => {
      cancelled = true;
    };
  }, [id, candidates]);

  const radius = shape === 'circle' ? '50%' : undefined;
  const kind = resolved ? mediaKind(resolved) : null;

  if (!resolved) {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          ...style,
          borderRadius: style?.borderRadius ?? radius,
          background: 'rgba(255,255,255,.04)',
          border: '1px dashed rgba(255,255,255,.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 12,
          color: '#5C6670',
          fontSize: 11,
          letterSpacing: '.04em',
          lineHeight: 1.4,
        }}
      >
        {placeholder}
      </div>
    );
  }

  const showIcon = playIcon && kind !== 'pdf' && !playing;

  return (
    <div ref={ref} className={className} style={{ ...style, borderRadius: style?.borderRadius ?? radius, overflow: 'hidden' }}>
      {kind === 'pdf' && (
        <>
          <iframe
            src={resolved}
            title={alt ?? placeholder}
            onLoad={() => onRatio?.(1 / Math.SQRT2)}
            onError={() => setResolved(null)}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block', background: '#fff' }}
          />
          <a
            href={resolved}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              right: 10,
              top: 10,
              zIndex: 5,
              fontSize: 11,
              fontWeight: 600,
              padding: '6px 12px',
              borderRadius: 999,
              background: 'rgba(12,12,12,.7)',
              color: '#D7E2EA',
              backdropFilter: 'blur(6px)',
            }}
          >
            Mở tab mới ↗
          </a>
        </>
      )}

      {kind === 'video' && (
        <video
          ref={videoRef}
          src={resolved}
          muted={!everPlayed}
          loop
          playsInline
          preload="metadata"
          controls={everPlayed}
          onError={() => setResolved(null)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onLoadedMetadata={(e) => {
            const v = e.currentTarget;
            if (onRatio && v.videoWidth && v.videoHeight) onRatio(v.videoWidth / v.videoHeight);
          }}
          style={{ width: '100%', height: '100%', objectFit: fit === 'natural' ? 'contain' : fit, objectPosition: 'center', display: 'block' }}
        />
      )}

      {kind === 'image' && fit === 'natural' && (
        <img
          src={resolved}
          alt={alt ?? placeholder}
          onLoad={(e) => {
            const img = e.currentTarget;
            if (onRatio && img.naturalWidth && img.naturalHeight) onRatio(img.naturalWidth / img.naturalHeight);
          }}
          onError={() => setResolved(null)}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      )}

      {kind === 'image' && fit !== 'natural' && (
        <motion.img
          src={resolved}
          alt={alt ?? placeholder}
          onLoad={(e) => {
            const img = e.currentTarget;
            if (onRatio && img.naturalWidth && img.naturalHeight) onRatio(img.naturalWidth / img.naturalHeight);
          }}
          onError={() => setResolved(null)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: fit,
            objectPosition: 'center',
            y: parallax ? y : undefined,
            scale: parallax ? 1.14 : 1,
            display: 'block',
          }}
        />
      )}

      {showIcon && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (kind === 'video' && videoRef.current) {
              setEverPlayed(true);
              videoRef.current.play();
            }
          }}
          aria-label="Play"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            cursor: kind === 'video' ? 'pointer' : 'default',
            width: playIcon!.size,
            height: playIcon!.size,
            borderRadius: '50%',
            background: playIcon!.background,
            backdropFilter: 'blur(8px)',
            border: playIcon!.border,
            display: 'grid',
            placeItems: 'center',
            color: '#fff',
            fontSize: playIcon!.fontSize,
            paddingLeft: playIcon!.paddingLeft,
            boxShadow: playIcon!.boxShadow,
          }}
        >
          ▶
        </button>
      )}
    </div>
  );
}
