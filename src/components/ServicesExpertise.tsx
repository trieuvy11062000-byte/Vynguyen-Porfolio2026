import { useState } from 'react';
import { useThemeLang } from '../context/ThemeLangContext';
import { SVC_TITLES, SKILLS } from '../data/content';

export function ServicesExpertise() {
  const { c, t } = useThemeLang();
  const [open, setOpen] = useState(0);

  const descriptions = [t.s1, t.s2, t.s3, t.s4, t.s5];

  return (
    <section
      id="services"
      style={{
        position: 'relative',
        zIndex: 2,
        background: c.srvBg,
        color: c.srvText,
        borderRadius: 'clamp(40px,5vw,60px) clamp(40px,5vw,60px) 0 0',
        padding: '90px clamp(16px,4vw,64px) 110px',
        transition: 'background .4s,color .4s',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ margin: '0 0 48px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-.02em', fontSize: 'clamp(36px,6vw,84px)' }}>
          Services &amp; Expertise
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {SVC_TITLES.map((title, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                onClick={() => setOpen(isOpen ? -1 : i)}
                style={{ cursor: 'pointer', borderTop: `1px solid ${c.srvBorder}`, padding: '26px 8px', transition: 'background .3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = c.srvGlass)}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(16px,3vw,36px)' }}>
                  <span
                    className="font-mono-vy"
                    style={{
                      fontWeight: 700,
                      fontSize: 'clamp(28px,4vw,52px)',
                      opacity: isOpen ? 1 : 0.45,
                      backgroundImage: 'linear-gradient(123deg,#B600A8,#7621B0,#BE4C00)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                    }}
                  >
                    0{i + 1}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0, fontSize: 'clamp(20px,2.6vw,30px)', fontWeight: 700 }}>{title}</h3>
                    <div style={{ overflow: 'hidden', maxHeight: isOpen ? 140 : 0, transition: 'max-height .45s ease,opacity .45s', opacity: isOpen ? 1 : 0 }}>
                      <p style={{ margin: '12px 0 0', fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: c.srvSub, maxWidth: 640, textWrap: 'pretty' }}>
                        {descriptions[i]}
                      </p>
                    </div>
                  </div>
                  <span style={{ fontSize: 22, fontWeight: 300, transform: `rotate(${isOpen ? 45 : 0}deg)`, transition: 'transform .35s' }}>+</span>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: `1px solid ${c.srvBorder}` }} />
        </div>
        <div style={{ marginTop: 60, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {SKILLS.map((s) => (
            <span
              key={s}
              style={{
                padding: '10px 20px',
                borderRadius: 999,
                border: `1px solid ${c.srvBorder}`,
                fontSize: 13,
                fontWeight: 500,
                transition: 'all .3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#B600A8';
                e.currentTarget.style.boxShadow = '0 0 18px rgba(182,0,168,.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = c.srvBorder;
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
