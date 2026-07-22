import { type CSSProperties, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ImageSlotProps {
  /** design-slot id, used to label the placeholder and as alt text fallback */
  id: string;
  src?: string;
  alt?: string;
  shape?: 'circle' | 'rect';
  fit?: 'cover' | 'contain';
  placeholder: string;
  /** parallax drift strength (matches original data-plx), omit for no parallax */
  parallax?: number;
  className?: string;
  style?: CSSProperties;
  /** fires with the image's natural aspect ratio (w/h) once loaded */
  onRatio?: (ratio: number) => void;
}

/**
 * Production replacement for the prototype's drag-drop <image-slot> web
 * component: renders a real <img> when an asset is wired up in
 * imageAssets.ts, otherwise a labeled placeholder so empty slots stay
 * legible instead of showing a broken-image icon.
 */
export function ImageSlot({ src, alt, shape = 'rect', fit = 'cover', placeholder, parallax, className, style, onRatio }: ImageSlotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? [`${parallax * 50}%`, `${-parallax * 50}%`] : ['0%', '0%']);
  // imageAssets.ts pre-wires every slot to its expected filename, even ones
  // not dropped in /public/assets yet — fall back to the placeholder if that
  // file 404s instead of showing a broken-image icon.
  const [failed, setFailed] = useState(false);

  const radius = shape === 'circle' ? '50%' : undefined;

  if (!src || failed) {
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

  return (
    <div ref={ref} className={className} style={{ ...style, borderRadius: style?.borderRadius ?? radius, overflow: 'hidden' }}>
      <motion.img
        src={src}
        alt={alt ?? placeholder}
        onLoad={(e) => {
          const img = e.currentTarget;
          if (onRatio && img.naturalWidth && img.naturalHeight) onRatio(img.naturalWidth / img.naturalHeight);
        }}
        onError={() => setFailed(true)}
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
    </div>
  );
}
