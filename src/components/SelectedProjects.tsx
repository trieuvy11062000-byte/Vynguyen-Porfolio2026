import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useThemeLang } from '../context/ThemeLangContext';
import { ImageSlot } from './ImageSlot';
import { CarouselNav } from './CarouselNav';
import { SPD, LINKS, GAL } from '../data/content';

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const DEFAULT_GALLERY_RATIO = 16 / 10;

/** Frame height adapts to each slide's own image ratio so nothing gets cropped or upscaled-blurry. */
function CaseStudyGallery({ projectIndex, spg }: { projectIndex: number; spg: number }) {
  const [ratios, setRatios] = useState<Record<number, number>>({});
  const [height, setHeight] = useState(320);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const recompute = () => {
      const w = containerRef.current?.clientWidth;
      if (!w) return;
      const ratio = ratios[spg] ?? DEFAULT_GALLERY_RATIO;
      setHeight(Math.min(w / ratio, window.innerHeight * 0.7));
    };
    recompute();
    window.addEventListener('resize', recompute);
    return () => window.removeEventListener('resize', recompute);
  }, [spg, ratios]);

  return (
    <div
      ref={containerRef}
      style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,.14)', height, transition: 'height .45s cubic-bezier(.3,1,.3,1)' }}
    >
      <div style={{ display: 'flex', height: '100%', transition: 'transform .5s cubic-bezier(.3,1,.3,1)', transform: `translateX(${-spg * 100}%)` }}>
        {GAL.map((g, gi) => (
          <div key={g.id} style={{ flex: '0 0 100%', position: 'relative', height: '100%', background: '#16141c' }}>
            <ImageSlot
              id={`sp${projectIndex}-${g.id}`}
              placeholder={g.ph}
              fit="contain"
              onRatio={(r) => setRatios((prev) => (prev[gi] === r ? prev : { ...prev, [gi]: r }))}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SelectedProjects() {
  const { t, lang } = useThemeLang();
  const [sp, setSp] = useState(0);
  const [spg, setSpg] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const spIn = useInView(sectionRef, { once: true, amount: 0.12 });

  const sps = SPD[lang];
  const spOp = spIn ? 1 : 0;
  const spTf = spIn ? 'translateY(0)' : 'translateY(28px)';

  const pick = (i: number) => {
    setSp(i);
    setSpg(0);
  };

  return (
    <section
      id="selected"
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 4,
        background: '#111016',
        color: '#D7E2EA',
        borderRadius: 'clamp(40px,5vw,60px) clamp(40px,5vw,60px) 0 0',
        marginTop: -48,
        padding: '90px clamp(16px,4vw,64px) 110px',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="font-mono-vy" style={{ fontSize: 12, letterSpacing: '.28em', textTransform: 'uppercase', color: '#E45CFF', marginBottom: 18 }}>
          Selected Projects
        </div>
        <h2 style={{ margin: '0 0 14px', fontWeight: 800, letterSpacing: '-.01em', lineHeight: 1.12, fontSize: 'clamp(26px,3.6vw,48px)', maxWidth: 900, textWrap: 'balance' }}>
          {t.spH1}{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(123deg,#E45CFF 10%,#7A9BFF 90%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {t.spH2}
          </span>
        </h2>
        <p style={{ margin: '0 0 56px', fontWeight: 300, fontSize: 16, lineHeight: 1.6, color: '#98A4B0', maxWidth: 640, textWrap: 'pretty' }}>{t.spSub}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {sps.map((p, i) =>
            i === sp ? (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,.04)',
                  border: '1px solid rgba(228,92,255,.28)',
                  borderRadius: 28,
                  padding: 'clamp(20px,3vw,36px)',
                  boxShadow: '0 30px 80px rgba(0,0,0,.4)',
                  opacity: spOp,
                  transform: spTf,
                  transition: 'opacity .7s,transform .7s',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(24px,3vw,40px)', alignItems: 'start' }}>
                  {/* Left: gallery */}
                  <div>
                    <CaseStudyGallery projectIndex={i} spg={spg} />
                  </div>

                  {/* Right: case study details */}
                  <div>
                    <div
                      className="font-mono-vy"
                      style={{
                        display: 'inline-block',
                        fontSize: 10,
                        letterSpacing: '.2em',
                        textTransform: 'uppercase',
                        color: '#E45CFF',
                        border: '1px solid rgba(228,92,255,.4)',
                        borderRadius: 999,
                        padding: '6px 14px',
                        marginBottom: 14,
                      }}
                    >
                      {p.badge}
                    </div>
                    <h3 style={{ margin: '0 0 12px', fontSize: 'clamp(20px,2.6vw,30px)', fontWeight: 800, lineHeight: 1.2 }}>{p.title}</h3>
                    <div
                      className="font-mono-vy"
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px 22px',
                        fontSize: 11,
                        color: '#98A4B0',
                        paddingBottom: 12,
                        borderBottom: '1px solid rgba(255,255,255,.08)',
                        marginBottom: 14,
                      }}
                    >
                      <span>◆ {p.role}</span>
                      <span>▣ {p.org}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
                      <CarouselNav
                        onPrev={() => setSpg((s) => clamp(s - 1, 0, GAL.length - 1))}
                        onNext={() => setSpg((s) => clamp(s + 1, 0, GAL.length - 1))}
                        count={`${spg + 1} / ${GAL.length}`}
                        dots={GAL.map((_, gi) => ({ active: gi === spg, onClick: () => setSpg(gi) }))}
                      />
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                        {LINKS[i].map((lk) => (
                          <a
                            key={lk.t}
                            href={lk.h}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 8,
                              padding: '10px 18px',
                              borderRadius: 999,
                              border: '1px solid rgba(255,255,255,.18)',
                              background: 'rgba(255,255,255,.06)',
                              backdropFilter: 'blur(8px)',
                              fontSize: 13,
                              fontWeight: 600,
                              transition: 'border-color .3s,box-shadow .3s',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = '#B600A8';
                              e.currentTarget.style.boxShadow = '0 0 18px rgba(182,0,168,.35)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = 'rgba(255,255,255,.18)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            {lk.t} <span style={{ fontSize: 11, opacity: 0.7 }}>↗</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 20, marginBottom: 24 }}>
                      <div>
                        <div className="font-mono-vy" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7A8591', marginBottom: 8 }}>
                          01 · {t.spBg}
                        </div>
                        <p style={{ margin: 0, fontWeight: 300, fontSize: 13, lineHeight: 1.65, color: '#B9C4CF', textWrap: 'pretty' }}>{p.bg}</p>
                      </div>
                      <div>
                        <div className="font-mono-vy" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7A8591', marginBottom: 8 }}>
                          02 · {t.spProb}
                        </div>
                        <p style={{ margin: 0, fontWeight: 300, fontSize: 13, lineHeight: 1.65, color: '#B9C4CF', textWrap: 'pretty' }}>{p.prob}</p>
                      </div>
                      <div>
                        <div className="font-mono-vy" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7A8591', marginBottom: 8 }}>
                          03 · {t.spRole}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {p.roleB.map((rb) => (
                            <span key={rb} style={{ fontSize: 12, fontWeight: 400, color: '#B9C4CF' }}>
                              <span style={{ color: '#E45CFF' }}>●</span> {rb}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="font-mono-vy" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7A8591', marginBottom: 10 }}>
                      04 · {t.spProc}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: 8,
                        background: 'rgba(255,255,255,.04)',
                        border: '1px solid rgba(255,255,255,.1)',
                        borderRadius: 16,
                        padding: '14px 18px',
                        marginBottom: 24,
                      }}
                    >
                      {p.steps.map((step, si) => (
                        <span key={step} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600 }}>
                          <span>{step}</span>
                          {si < p.steps.length - 1 && <span style={{ color: '#7621B0', fontWeight: 400 }}>→</span>}
                        </span>
                      ))}
                    </div>
                    <div className="font-mono-vy" style={{ fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: '#7A8591', marginBottom: 10 }}>
                      05 · {t.spOut}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, alignItems: 'start' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {p.outs.map((ou) => (
                          <span key={ou} style={{ fontSize: 13, fontWeight: 300, color: '#B9C4CF', lineHeight: 1.5 }}>
                            <span style={{ color: '#4ADE80' }}>✓</span> {ou}
                          </span>
                        ))}
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                        {p.mets.map((m) => (
                          <div
                            key={m.l}
                            style={{
                              background: 'rgba(255,255,255,.04)',
                              border: '1px solid rgba(255,255,255,.1)',
                              borderRadius: 14,
                              padding: '14px 16px',
                              opacity: spOp,
                              transform: spTf,
                              transition: 'opacity .8s,transform .8s',
                            }}
                          >
                            <div
                              className="font-mono-vy"
                              style={{
                                fontWeight: 700,
                                fontSize: 24,
                                backgroundImage: 'linear-gradient(90deg,#E45CFF,#7A9BFF)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                              }}
                            >
                              {m.v}
                            </div>
                            <div style={{ marginTop: 3, fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase', color: '#7A8591' }}>{m.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={i}
                onClick={() => pick(i)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: 20,
                  background: 'rgba(255,255,255,.03)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: 22,
                  padding: '18px 26px',
                  transition: 'transform .35s,border-color .35s,box-shadow .35s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'rgba(228,92,255,.45)';
                  e.currentTarget.style.boxShadow = '0 14px 40px rgba(0,0,0,.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <span className="font-mono-vy" style={{ fontWeight: 700, fontSize: 32, color: '#5C6670' }}>
                  0{i + 1}
                </span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ position: 'relative', width: 72, height: 50, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,.12)' }}>
                    <ImageSlot id={`sp${i}-hero`} placeholder=" " style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', fontSize: 0, pointerEvents: 'none' }} />
                  </div>
                  <div style={{ position: 'relative', width: 72, height: 50, borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,.12)' }}>
                    <ImageSlot id={`sp${i}-t0`} placeholder=" " style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', fontSize: 0, pointerEvents: 'none' }} />
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <div className="font-mono-vy" style={{ fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E45CFF', marginBottom: 4 }}>
                    {p.badge}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 17 }}>{p.title}</div>
                  <div style={{ marginTop: 4, fontWeight: 300, fontSize: 12, color: '#98A4B0' }}>{p.short}</div>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '10px 20px',
                    borderRadius: 999,
                    border: '1px solid rgba(255,255,255,.18)',
                    background: 'rgba(255,255,255,.05)',
                    fontSize: 13,
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {t.spView} →
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
