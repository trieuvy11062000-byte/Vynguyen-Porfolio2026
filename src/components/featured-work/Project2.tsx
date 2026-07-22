import { useState, type MouseEvent } from 'react';
import { useThemeLang } from '../../context/ThemeLangContext';
import { ImageSlot } from '../ImageSlot';
import { CarouselNav } from '../CarouselNav';
import { ProjectHeader } from './ProjectHeader';
import { MP } from '../../data/content';

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const STATUS_ROWS: { label: string; status: string; color: string }[] = [
  { label: 'Sarene 6.8 Launch — PR', status: '● Published', color: '#4ADE80' },
  { label: 'THISO Mall — Website', status: '● Scheduled', color: '#60A5FA' },
  { label: 'Pop Mart Recap — Social', status: '● Review', color: '#FBBF24' },
];

const CHIP_STYLE: Record<'website' | 'newsletter' | 'email', { bg: string; border: string; color: string; label: string }> = {
  website: { bg: 'rgba(45,212,191,.16)', border: 'rgba(45,212,191,.4)', color: '#5EEAD4', label: 'Website' },
  newsletter: { bg: 'rgba(182,0,168,.16)', border: 'rgba(182,0,168,.5)', color: '#E45CFF', label: 'Newsletter' },
  email: { bg: 'rgba(190,76,0,.18)', border: 'rgba(190,76,0,.5)', color: '#FDBA74', label: 'Email Campaign' },
};

function Chip({ kind }: { kind: 'website' | 'newsletter' | 'email' }) {
  const s = CHIP_STYLE[kind];
  return (
    <span style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color, borderRadius: 6, padding: '5px 8px' }}>{s.label}</span>
  );
}

export function Project2() {
  const { t } = useThemeLang();
  const [mag, setMag] = useState(0);
  const [tilt, setTilt] = useState({ mx: 0, my: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ mx: (e.clientX - r.left) / r.width - 0.5, my: (e.clientY - r.top) / r.height - 0.5 });
  };
  const handleLeave = () => setTilt({ mx: 0, my: 0 });

  return (
    <article style={{ maxWidth: 1280, margin: '0 auto 140px' }}>
      <ProjectHeader num="02" title="Multi-Channel Brand Communications" category="Brand Strategy & Content Marketing" goal={t.p2goal} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 32, alignItems: 'start' }}>
        {/* Left: 3 stacked modules */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Module 1: CMS */}
          <div style={{ background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 24, padding: 20 }}>
            <div style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A8591', marginBottom: 12 }}>CMS / Website Editorial Portal</div>
            <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)' }}>
              <ImageSlot id="p2-cms" placeholder="CMS screenshot" style={{ width: '100%', height: 170, filter: 'blur(4px)', opacity: 0.7 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(12,12,12,.25),rgba(12,12,12,.7))', pointerEvents: 'none' }} />
              <div
                className="font-mono-vy"
                style={{ position: 'absolute', inset: 12, display: 'flex', flexDirection: 'column', gap: 7, justifyContent: 'flex-end', pointerEvents: 'none', fontSize: 10 }}
              >
                {STATUS_ROWS.map((row) => (
                  <div
                    key={row.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'rgba(20,22,26,.8)',
                      border: '1px solid rgba(255,255,255,.1)',
                      borderRadius: 8,
                      padding: '6px 10px',
                    }}
                  >
                    <span>{row.label}</span>
                    <span style={{ color: row.color }}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Module 2: Content Plan */}
          <div style={{ background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 24, padding: 20 }}>
            <div style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A8591', marginBottom: 12 }}>Content Plan — Editorial Calendar</div>
            <div className="font-mono-vy" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, fontSize: 9 }}>
              <div style={{ color: '#7A8591', textTransform: 'uppercase', letterSpacing: '.1em' }}>Week 1</div>
              <div style={{ color: '#7A8591', textTransform: 'uppercase', letterSpacing: '.1em' }}>Week 2</div>
              <div style={{ color: '#7A8591', textTransform: 'uppercase', letterSpacing: '.1em' }}>Week 3</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Chip kind="website" />
                <Chip kind="newsletter" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Chip kind="email" />
                <Chip kind="website" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Chip kind="newsletter" />
                <Chip kind="email" />
              </div>
            </div>
            <div style={{ marginTop: 12, borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,.1)' }}>
              <ImageSlot id="p2-plan" placeholder="content plan — cropped Excel area (calendar / timeline)" style={{ width: '100%', height: 110 }} />
            </div>
          </div>

          {/* Module 3: Email Marketing Preview */}
          <div style={{ background: 'rgba(255,255,255,.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 24, padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A8591' }}>Email Marketing Preview</div>
              <div className="font-mono-vy" style={{ fontSize: 9, color: '#7A8591' }}>
                scroll ↓
              </div>
            </div>
            <div className="thin-scroll" style={{ height: 420, overflowY: 'auto', overflowX: 'hidden', borderRadius: 16, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(12,12,12,.4)' }}>
              <ImageSlot id="p2-email" fit="natural" placeholder="long-form email screenshot (full vertical)" style={{ width: '100%', minHeight: 300 }} />
            </div>
          </div>
        </div>

        {/* Right: Digital Publication Experience */}
        <div style={{ position: 'sticky', top: 'clamp(120px,16vh,170px)', alignSelf: 'start' }}>
          <div style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A8591', marginBottom: 16 }}>
            Digital Publication Experience — Internal Newsletter
          </div>
          <div
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{
              position: 'relative',
              height: 'min(78vh,820px)',
              perspective: 1400,
              borderRadius: 24,
              background: 'radial-gradient(ellipse at 50% 60%,rgba(118,33,176,.18),transparent 65%)',
            }}
          >
            {MP.map((ph, i) => {
              const d = i - mag;
              const ad = Math.abs(d);
              const transform =
                d === 0
                  ? `translate(-50%,-50%) rotateY(${(tilt.mx * 10).toFixed(1)}deg) rotateX(${(-tilt.my * 10).toFixed(1)}deg)`
                  : `translate(calc(-50% + ${d * 52}px), calc(-50% + ${ad * 14}px)) scale(${1 - ad * 0.09}) rotateY(${d * 9}deg)`;
              const opacity = ad > 2 ? 0 : d === 0 ? 1 : 0.45;
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: 'min(520px,64vw,calc(min(78vh,820px)*9/16 - 36px))',
                    aspectRatio: '9/16',
                    borderRadius: 14,
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,.18)',
                    boxShadow: '0 30px 60px rgba(0,0,0,.55)',
                    transition: 'transform .55s cubic-bezier(.3,1,.3,1),opacity .55s',
                    transform,
                    opacity,
                    zIndex: 10 - ad,
                  }}
                >
                  <ImageSlot id={`mag-${i}`} fit="contain" placeholder={ph} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: '#16141c' }} />
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      padding: '24px 12px 10px',
                      background: 'linear-gradient(180deg,transparent,rgba(12,12,12,.75))',
                      pointerEvents: 'none',
                      fontSize: 11,
                      fontWeight: 600,
                      textAlign: 'center',
                      opacity: d === 0 ? 1 : 0,
                      transition: 'opacity .4s',
                    }}
                  >
                    {ph}
                  </div>
                </div>
              );
            })}
          </div>
          <CarouselNav
            onPrev={() => setMag((s) => clamp(s - 1, 0, MP.length - 1))}
            onNext={() => setMag((s) => clamp(s + 1, 0, MP.length - 1))}
            count={`${mag + 1} / ${MP.length}`}
            dots={MP.map((_, i) => ({ active: i === mag, onClick: () => setMag(i) }))}
          />
        </div>
      </div>
    </article>
  );
}
