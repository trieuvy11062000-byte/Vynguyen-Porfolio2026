import { useState } from 'react';
import { useThemeLang } from '../../context/ThemeLangContext';
import { ImageSlot } from '../ImageSlot';
import { CarouselNav } from '../CarouselNav';
import { ProjectHeader } from './ProjectHeader';
import { IMAGE_ASSETS } from '../../data/imageAssets';
import { VC, WS } from '../../data/content';

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

const DELIVERABLES = ['PR Articles', 'MC Scripts', 'Social Content', 'Event Trailer', 'Event Recap', 'TVC Assets'];

export function Project1() {
  const { t, glow, heroGlow } = useThemeLang();
  const [p1v, setP1v] = useState(0);
  const [p1w, setP1w] = useState(0);

  const shift = clamp(p1v, 0, VC.length - 2);

  return (
    <article style={{ maxWidth: 1280, margin: '0 auto 140px' }}>
      <ProjectHeader num="01" title="Social Media & Launch Campaigns" category="Experiential Marketing & Event Operations" goal={t.p1goal} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 32, alignItems: 'start' }}>
        {/* Left: vertical clip carousel */}
        <div>
          <div style={{ overflow: 'hidden', borderRadius: 32 }}>
            <div style={{ display: 'flex', gap: '2%', transition: 'transform .5s cubic-bezier(.3,1,.3,1)', transform: `translateX(${-shift * 46}%)` }}>
              {VC.map((v, i) => {
                const visible = i >= shift && i <= shift + 1;
                const active = i === p1v;
                return (
                  <div
                    key={i}
                    style={{
                      flex: '0 0 44%',
                      borderRadius: 32,
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,.04)',
                      border: '1px solid rgba(255,255,255,.12)',
                      transition: 'opacity .4s,box-shadow .4s,transform .4s,filter .4s',
                      opacity: active ? 1 : visible ? 0.6 : 0.35,
                      boxShadow: active ? `0 0 40px rgba(182,0,168,${(0.4 * glow).toFixed(2)})` : 'none',
                      filter: visible ? 'none' : 'blur(2.5px)',
                    }}
                  >
                    <div style={{ position: 'relative', aspectRatio: '3/4' }}>
                      <ImageSlot
                        id={`p1v-${i}`}
                        src={IMAGE_ASSETS[`p1v-${i}`]}
                        placeholder="video thumbnail"
                        parallax={0.07}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%,-50%)',
                          pointerEvents: 'none',
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,.14)',
                          backdropFilter: 'blur(8px)',
                          border: '1px solid rgba(255,255,255,.3)',
                          display: 'grid',
                          placeItems: 'center',
                          color: '#fff',
                          fontSize: 14,
                          paddingLeft: 3,
                        }}
                      >
                        ▶
                      </div>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 8,
                        padding: '12px 16px',
                        borderTop: '1px solid rgba(255,255,255,.08)',
                        borderBottom: '1px solid rgba(255,255,255,.08)',
                      }}
                    >
                      <span
                        className="font-mono-vy"
                        style={{
                          fontWeight: 700,
                          fontSize: 20,
                          backgroundImage: 'linear-gradient(90deg,#E45CFF,#FF8A3D)',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent',
                        }}
                      >
                        ▶ {v.v}
                      </span>
                      <span style={{ fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: '#7A8591', whiteSpace: 'nowrap' }}>{t.views}</span>
                    </div>
                    <div style={{ padding: '12px 16px 14px', minHeight: 52 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{v.t}</div>
                      <div style={{ marginTop: 4, fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: '#7A8591' }}>{v.f}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <CarouselNav
            onPrev={() => setP1v((s) => clamp(s - 1, 0, VC.length - 1))}
            onNext={() => setP1v((s) => clamp(s + 1, 0, VC.length - 1))}
            count={`${p1v + 1} / ${VC.length}`}
          />
        </div>

        {/* Right: cinematic slider */}
        <div>
          <div style={{ position: 'relative', borderRadius: 32, overflow: 'hidden', border: '1px solid rgba(255,255,255,.14)', boxShadow: heroGlow }}>
            <div style={{ display: 'flex', transition: 'transform .5s cubic-bezier(.3,1,.3,1)', transform: `translateX(${-p1w * 100}%)` }}>
              {WS.map((w, i) => (
                <div key={i} style={{ flex: '0 0 100%', position: 'relative', aspectRatio: '16/9' }}>
                  <ImageSlot
                    id={`p1w-${i}`}
                    src={IMAGE_ASSETS[`p1w-${i}`]}
                    placeholder="16:9 hero video frame"
                    parallax={0.1}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%,-50%)',
                      pointerEvents: 'none',
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,.12)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,.35)',
                      display: 'grid',
                      placeItems: 'center',
                      color: '#fff',
                      fontSize: 24,
                      paddingLeft: 5,
                      boxShadow: '0 0 40px rgba(182,0,168,.5)',
                    }}
                  >
                    ▶
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: 16,
                      bottom: 12,
                      pointerEvents: 'none',
                      fontSize: 12,
                      fontWeight: 600,
                      padding: '5px 12px',
                      borderRadius: 999,
                      background: 'rgba(12,12,12,.55)',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    {w.t}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CarouselNav
            onPrev={() => setP1w((s) => clamp(s - 1, 0, WS.length - 1))}
            onNext={() => setP1w((s) => clamp(s + 1, 0, WS.length - 1))}
            count={`${p1w + 1} / ${WS.length}`}
          />

          <div
            style={{
              marginTop: 24,
              minHeight: 180,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: 0,
              background: 'rgba(255,255,255,.05)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,.15)',
              borderRadius: 24,
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '24px 26px', borderRight: '1px solid rgba(255,255,255,.1)' }}>
              <div style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A8591', marginBottom: 14 }}>{t.impactT}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 18px' }}>
                {[
                  { v: '16+', l: t.i1 },
                  { v: '10+', l: t.i2 },
                  { v: '5+', l: t.i3 },
                  { v: '2000+', l: t.i4 },
                ].map((m, i) => (
                  <div key={i}>
                    <span className="font-mono-vy" style={{ fontWeight: 800, fontSize: 26, textShadow: '0 0 22px rgba(182,0,168,.55)' }}>
                      {m.v}
                    </span>
                    <div style={{ fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase', color: '#7A8591' }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '24px 26px' }}>
              <div style={{ fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7A8591', marginBottom: 14 }}>{t.delivT}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', fontSize: 13, fontWeight: 400 }}>
                {DELIVERABLES.map((d) => (
                  <span key={d}>
                    <span style={{ color: '#B600A8' }}>✓</span> {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
