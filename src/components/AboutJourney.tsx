import { useThemeLang } from '../context/ThemeLangContext';
import { useRevealProgress } from '../hooks/useRevealProgress';

function TimelineCard({
  date,
  title,
  org,
  orgHref,
  bullets,
  c,
}: {
  date: string;
  title: string;
  org: string;
  orgHref?: string;
  bullets: string[];
  c: { glass: string; border: string; sub: string };
}) {
  const cardStyle: React.CSSProperties = {
    flex: '0 0 min(460px,86vw)',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 320,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderRadius: 20,
    padding: 30,
    background: c.glass,
    border: `1px solid ${c.border}`,
  };
  return (
    <div style={cardStyle}>
      <div className="font-mono-vy" style={{ fontSize: 12, color: '#E45CFF', fontWeight: 600 }}>
        {date}
      </div>
      <h3 style={{ margin: '10px 0 2px', fontSize: 21, fontWeight: 700, lineHeight: 1.25 }}>{title}</h3>
      {orgHref ? (
        <a href={orgHref} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: c.sub, fontWeight: 500 }}>
          {org} ↗
        </a>
      ) : (
        <span style={{ fontSize: 13, color: c.sub, fontWeight: 500 }}>{org}</span>
      )}
      <div style={{ margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        {bullets.map((b, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14, fontWeight: 300, lineHeight: 1.6, color: c.sub }}>
            <span style={{ color: '#E45CFF', flex: '0 0 auto' }}>●</span>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AboutJourney() {
  const { c, t, gA, gB } = useThemeLang();
  const { ref, progress } = useRevealProgress<HTMLParagraphElement>();
  const words = t.aboutP.split(/\s+/);

  return (
    <section id="about" style={{ padding: '80px clamp(16px,4vw,64px) 100px', maxWidth: 1280, margin: '0 auto' }}>
      <h2
        style={{
          margin: '0 0 40px',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-.02em',
          fontSize: 'clamp(36px,6vw,84px)',
          backgroundImage: `linear-gradient(180deg,${gA},${gB})`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        About &amp; Journey
      </h2>
      <p ref={ref} style={{ maxWidth: 880, margin: '0 0 16px', fontWeight: 400, fontSize: 'clamp(17px,2.1vw,24px)', lineHeight: 1.65, textWrap: 'pretty' }}>
        {words.map((w, i) => (
          <span key={i} style={{ opacity: i / words.length < progress ? 1 : 0.16, transition: 'opacity .3s' }}>
            {w}{' '}
          </span>
        ))}
      </p>
      <p className="font-mono-vy" style={{ margin: '0 0 56px', fontSize: 13, color: c.sub }}>
        {t.edu}
      </p>
      <div style={{ display: 'flex', gap: 24, overflowX: 'auto', paddingBottom: 12 }}>
        <TimelineCard
          date="06/2019 – 01/2022"
          title={t.tl1t}
          org="THỔ House"
          orgHref="https://www.facebook.com/Thuctinhtamhon"
          bullets={[t.tl1d1, t.tl1d2, t.tl1d3]}
          c={c}
        />
        <TimelineCard
          date="07/2024 – 04/2026"
          title={t.tl2t}
          org="THACO Group | Đại Quang Minh & THISO Retail"
          bullets={[t.tl2d1, t.tl2d2, t.tl2d3]}
          c={c}
        />
      </div>
    </section>
  );
}
