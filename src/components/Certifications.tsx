import { useState } from 'react';
import { useThemeLang } from '../context/ThemeLangContext';
import { ImageSlot } from './ImageSlot';
import { CERTS } from '../data/content';

export function Certifications() {
  const { t, mqDur } = useThemeLang();
  const [cert, setCert] = useState<number | null>(null);
  const certsLoop = [...CERTS, ...CERTS];

  return (
    <section id="certificates" style={{ background: '#0C0C0C', color: '#D7E2EA', padding: '40px 0 90px', borderTop: '1px solid rgba(255,255,255,.08)' }}>
      <h2
        style={{
          margin: '0 0 36px',
          textAlign: 'center',
          fontWeight: 900,
          textTransform: 'uppercase',
          fontSize: 'clamp(28px,4.5vw,56px)',
          backgroundImage: 'linear-gradient(180deg,#646973,#BBCCD7)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Certifications
      </h2>
      <div style={{ overflow: 'hidden' }}>
        <div
          className="animate-marquee pause-on-hover"
          style={{ ['--mq-dur' as string]: `${mqDur}s`, display: 'flex', width: 'max-content', gap: 18, padding: '6px 0' }}
        >
          {certsLoop.map((ce, i) => {
            const idx = i % CERTS.length;
            return (
              <button
                key={i}
                onClick={() => setCert(idx)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  textAlign: 'left',
                  minWidth: 300,
                  background: 'rgba(255,255,255,.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,.14)',
                  borderRadius: 16,
                  padding: '14px 22px 14px 14px',
                  color: '#D7E2EA',
                  fontFamily: 'Kanit,sans-serif',
                  transition: 'border-color .3s,box-shadow .3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#B600A8';
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(182,0,168,.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.14)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span style={{ pointerEvents: 'none', flex: '0 0 92px', height: 66, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,.12)', display: 'block' }}>
                  <ImageSlot id={`cert-${idx}`} fit="cover" placeholder="cert" style={{ width: '100%', height: '100%' }} />
                </span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{ce.n}</span>
                  <span className="font-mono-vy" style={{ fontSize: 10, color: '#7A8591' }}>
                    {ce.o} · {t.certHint}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {cert !== null && (
        <div
          onClick={() => setCert(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(6,6,8,.75)',
            backdropFilter: 'blur(10px)',
            display: 'grid',
            placeItems: 'center',
            padding: 24,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(680px,94vw)',
              background: 'rgba(20,22,26,.9)',
              border: '1px solid rgba(255,255,255,.16)',
              borderRadius: 24,
              padding: 24,
              boxShadow: '0 40px 90px rgba(0,0,0,.6)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, marginBottom: 16 }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: 18 }}>{CERTS[cert].n}</div>
                <div className="font-mono-vy" style={{ fontSize: 11, color: '#7A8591' }}>
                  {CERTS[cert].o}
                </div>
              </div>
              <button
                onClick={() => setCert(null)}
                style={{
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,.2)',
                  background: 'rgba(255,255,255,.06)',
                  color: '#D7E2EA',
                  borderRadius: 999,
                  width: 34,
                  height: 34,
                  fontSize: 14,
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)' }}>
              <ImageSlot
                id={`cert-${cert}`}
                fit="contain"
                placeholder="drop certificate image / PDF page"
                style={{ width: '100%', height: 'min(60vh,440px)' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
