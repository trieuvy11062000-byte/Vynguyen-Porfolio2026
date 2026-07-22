import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useThemeLang } from '../context/ThemeLangContext';
import { useCountUp } from '../hooks/useCountUp';
import { MARQUEE_WORDS } from '../data/content';

function CounterCard({ target, suffix, label, active }: { target: number; suffix: string; label: string; active: boolean }) {
  const { c, gA, gB } = useThemeLang();
  const value = useCountUp(target, active);
  return (
    <div style={{ background: c.glass, border: `1px solid ${c.border}`, borderRadius: 24, padding: '32px 28px', backdropFilter: 'blur(12px)' }}>
      <div
        className="font-mono-vy"
        style={{
          fontWeight: 700,
          fontSize: 'clamp(44px,5vw,68px)',
          lineHeight: 1,
          backgroundImage: `linear-gradient(180deg,${gA},${gB})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {value}
        {suffix}
      </div>
      <div style={{ marginTop: 10, fontSize: 12, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: c.sub }}>{label}</div>
    </div>
  );
}

export function MarqueeCounters() {
  const { c, t, mqDur } = useThemeLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <section style={{ padding: '0 0 72px', borderTop: `1px solid ${c.border}` }}>
      <div style={{ overflow: 'hidden', padding: '26px 0', borderBottom: `1px solid ${c.border}` }}>
        <div className="animate-marquee" style={{ ['--mq-dur' as string]: `${mqDur}s`, display: 'flex', width: 'max-content', gap: 0 }}>
          {words.map((w, i) => (
            <span
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 28,
                paddingRight: 28,
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '.1em',
                fontSize: 'clamp(16px,2.2vw,26px)',
                color: c.sub,
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ color: '#B600A8', fontSize: '.6em' }}>✦</span>
              {w}
            </span>
          ))}
        </div>
      </div>
      <div
        id="vy-counters"
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
          gap: 20,
          maxWidth: 1100,
          margin: '56px auto 0',
          padding: '0 clamp(16px,4vw,48px)',
        }}
      >
        <CounterCard target={200} suffix="+" label={t.c1} active={inView} />
        <CounterCard target={3} suffix="M+" label={t.c2} active={inView} />
        <CounterCard target={20} suffix="+" label={t.c3} active={inView} />
      </div>
    </section>
  );
}
