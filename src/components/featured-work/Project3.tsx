import { useEffect, useRef, useState } from 'react';
import { useThemeLang } from '../../context/ThemeLangContext';
import { ImageSlot } from '../ImageSlot';
import { CarouselNav } from '../CarouselNav';
import { ProjectHeader } from './ProjectHeader';
import { DOCS, DOC_PAGE_COUNTS } from '../../data/content';

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const DEFAULT_RATIO = 16 / 10;

/**
 * Fullscreen in-page reader over the pre-rendered page images
 * (/assets/p3-doc-{i}-p{n}.jpg) — browser PDF plugins are unreliable in
 * embedded/preview contexts (blank tab), so the document is shown as a
 * scrollable column of page images instead.
 */
function DocReader({ docIndex, onClose }: { docIndex: number; onClose: () => void }) {
  const pageCount = DOC_PAGE_COUNTS[docIndex] ?? 0;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(6,6,8,.85)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(12px,3vw,32px)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 14, maxWidth: 960, width: '100%', marginInline: 'auto' }}>
        <div style={{ fontWeight: 800, fontSize: 17, color: '#D7E2EA' }}>{DOCS[docIndex].n}</div>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            cursor: 'pointer',
            border: '1px solid rgba(255,255,255,.2)',
            background: 'rgba(255,255,255,.06)',
            color: '#D7E2EA',
            borderRadius: 999,
            width: 34,
            height: 34,
            fontSize: 14,
            flex: '0 0 auto',
          }}
        >
          ✕
        </button>
      </div>
      <div
        className="thin-scroll"
        onClick={(e) => e.stopPropagation()}
        style={{
          flex: 1,
          overflowY: 'auto',
          maxWidth: 960,
          width: '100%',
          marginInline: 'auto',
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,.14)',
          background: '#101216',
        }}
      >
        {Array.from({ length: pageCount }, (_, n) => (
          <img
            key={n}
            src={`/assets/p3-doc-${docIndex}-p${n}.jpg`}
            alt={`${DOCS[docIndex].n} — trang ${n + 1}`}
            loading="lazy"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        ))}
      </div>
    </div>
  );
}

export function Project3() {
  const { t, glow, heroGlow } = useThemeLang();
  const [p3, setP3] = useState(0);
  const [reader, setReader] = useState<number | null>(null);
  const [ratios, setRatios] = useState<Record<number, number>>({});
  const [viewerHeight, setViewerHeight] = useState(420);
  const listRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = document.getElementById(`p3-doc-${p3}`);
    if (card) card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [p3]);

  useEffect(() => {
    const recompute = () => {
      const colW = viewerRef.current?.clientWidth;
      if (!colW) return;
      const ratio = ratios[p3] ?? DEFAULT_RATIO;
      setViewerHeight(Math.min(colW / ratio, window.innerHeight * 0.78));
    };
    recompute();
    window.addEventListener('resize', recompute);
    return () => window.removeEventListener('resize', recompute);
  }, [p3, ratios]);

  return (
    <article style={{ maxWidth: 1280, margin: '0 auto' }}>
      <ProjectHeader num="03" title="Sales Enablement & Brand Communication Assets" category="Marketing Operations · Information Design · Conversion Support" goal={t.p3goal} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 32, alignItems: 'start' }}>
        {/* Left: document library */}
        <div>
          <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: 16, maxHeight: 400, overflowY: 'auto', paddingRight: 8, scrollBehavior: 'smooth' }}>
            {DOCS.map((doc, i) => {
              const active = i === p3;
              return (
                <div
                  key={i}
                  id={`p3-doc-${i}`}
                  onClick={() => setP3(i)}
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    gap: 16,
                    alignItems: 'center',
                    background: 'rgba(255,255,255,.05)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${active ? 'rgba(182,0,168,.6)' : 'rgba(255,255,255,.14)'}`,
                    borderRadius: 18,
                    padding: '14px 18px 14px 14px',
                    transition: 'transform .35s,box-shadow .35s,border-color .35s',
                    boxShadow: active ? `0 0 26px rgba(182,0,168,${(0.35 * glow).toFixed(2)})` : 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) rotate(-.4deg)';
                    e.currentTarget.style.boxShadow = '0 14px 34px rgba(0,0,0,.45),0 0 24px rgba(182,0,168,.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = active ? `0 0 26px rgba(182,0,168,${(0.35 * glow).toFixed(2)})` : 'none';
                  }}
                >
                  <div style={{ flex: '0 0 64px', height: 84, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,.12)' }}>
                    <ImageSlot id={`p3-thumb-${i}`} placeholder="cover" style={{ width: '100%', height: '100%' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>{doc.n}</div>
                    <div className="font-mono-vy" style={{ marginTop: 3, fontSize: 10, color: '#7A8591' }}>
                      {doc.p} pages
                    </div>
                    <div
                      style={{
                        marginTop: 8,
                        display: 'inline-block',
                        fontSize: 9,
                        letterSpacing: '.12em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: 999,
                        border: '1px solid rgba(255,255,255,.16)',
                        color: '#98A4B0',
                      }}
                    >
                      {doc.tag}
                    </div>
                  </div>
                  <span style={{ fontSize: 18, color: active ? '#E45CFF' : '#5C6670' }}>→</span>
                </div>
              );
            })}
          </div>
          <CarouselNav
            onPrev={() => setP3((s) => clamp(s - 1, 0, DOCS.length - 1))}
            onNext={() => setP3((s) => clamp(s + 1, 0, DOCS.length - 1))}
            count={`${p3 + 1} / ${DOCS.length}`}
            dots={DOCS.map((_, i) => ({ active: i === p3, onClick: () => setP3(i) }))}
          />
        </div>

        {/* Right: showcase viewer */}
        <div>
          <div
            ref={viewerRef}
            id="p3-viewer"
            style={{
              position: 'relative',
              borderRadius: 28,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,.14)',
              boxShadow: heroGlow,
              height: viewerHeight,
              transition: 'height .45s cubic-bezier(.3,1,.3,1)',
              background: '#101216',
            }}
          >
            <div style={{ display: 'flex', height: '100%', transition: 'transform .5s cubic-bezier(.3,1,.3,1)', transform: `translateX(${-p3 * 100}%)` }}>
              {DOCS.map((doc, i) => (
                <div key={i} style={{ flex: '0 0 100%', position: 'relative', height: '100%', display: 'grid', placeItems: 'center' }}>
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <ImageSlot
                      id={`p3-show-${i}`}
                      fit="contain"
                      placeholder={`${doc.n} — spread preview`}
                      onRatio={(r) => setRatios((prev) => (prev[i] === r ? prev : { ...prev, [i]: r }))}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                    />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: 16,
                      top: 12,
                      pointerEvents: 'none',
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '5px 12px',
                      borderRadius: 999,
                      background: 'rgba(12,12,12,.55)',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    {doc.n}
                  </div>
                  {(DOC_PAGE_COUNTS[i] ?? 0) > 0 && (
                    <button
                      onClick={() => setReader(i)}
                      style={{
                        position: 'absolute',
                        right: 16,
                        top: 12,
                        cursor: 'pointer',
                        border: 'none',
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '5px 12px',
                        borderRadius: 999,
                        background: 'rgba(12,12,12,.55)',
                        color: '#D7E2EA',
                        backdropFilter: 'blur(6px)',
                        fontFamily: 'Kanit,sans-serif',
                      }}
                    >
                      Xem PDF đầy đủ ↗
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {reader !== null && <DocReader docIndex={reader} onClose={() => setReader(null)} />}
    </article>
  );
}
