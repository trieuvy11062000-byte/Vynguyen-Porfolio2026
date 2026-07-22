import { useState, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { useThemeLang } from '../context/ThemeLangContext';
import { ImageSlot } from './ImageSlot';
import { IMAGE_ASSETS } from '../data/imageAssets';

export function Hero() {
  const { t, c, gA, gB, ctaGlow } = useThemeLang();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setOffset({ x: (e.clientX - r.left - r.width / 2) * 0.18, y: (e.clientY - r.top - r.height / 2) * 0.18 });
  };
  const handleLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <section
      id="top"
      style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px clamp(16px,4vw,64px) 60px',
        position: 'relative',
      }}
    >
      <h1
        style={{
          margin: 0,
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-.03em',
          lineHeight: 0.95,
          fontSize: 'clamp(36px,7.5vw,120px)',
          backgroundImage: `linear-gradient(180deg,${gA} 0%,${gB} 100%)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          textWrap: 'balance',
        }}
      >
        {t.heroH}
      </h1>

      <div onMouseMove={handleMove} onMouseLeave={handleLeave} style={{ padding: 36, margin: '-8px 0 4px' }}>
        <motion.div animate={{ x: offset.x, y: offset.y }} transition={{ duration: 0.5, ease: [0.2, 1.2, 0.3, 1] }}>
          <div style={{ position: 'relative', width: 'clamp(160px,22vw,240px)', height: 'clamp(160px,22vw,240px)' }}>
            <div
              className="animate-pulse-glow"
              style={{
                position: 'absolute',
                inset: '-3px',
                borderRadius: '50%',
                background: 'linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)',
                filter: 'blur(14px)',
              }}
            />
            <ImageSlot
              id="portrait"
              src={IMAGE_ASSETS.portrait}
              shape="circle"
              placeholder="portrait photo"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: '1px solid rgba(255,255,255,.2)' }}
            />
          </div>
        </motion.div>
      </div>

      <p style={{ maxWidth: 720, margin: '0 0 32px', fontWeight: 300, letterSpacing: '.14em', fontSize: 'clamp(11px,1.4vw,14px)', color: c.sub, textWrap: 'pretty' }}>
        {t.heroSub}
      </p>

      <a
        href="#projects"
        style={{
          display: 'inline-block',
          padding: '16px 40px',
          borderRadius: 999,
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: '.04em',
          color: '#fff',
          background: 'linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)',
          boxShadow: ctaGlow,
          transition: 'transform .3s,box-shadow .3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
      >
        {t.cta}
      </a>
    </section>
  );
}
