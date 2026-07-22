export function ProjectHeader({ num, title, category, goal }: { num: string; title: string; category: string; goal: string }) {
  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 'clamp(70px,9vh,110px)',
          zIndex: 20,
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          background: 'rgba(12,12,12,.55)',
          border: '1px solid rgba(255,255,255,.1)',
          borderRadius: 18,
          padding: '20px 26px',
          marginBottom: 32,
          display: 'block',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'clamp(14px,2vw,24px)' }}>
          <span
            className="font-mono-vy"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(26px,3vw,38px)',
              lineHeight: 1,
              backgroundImage: 'linear-gradient(123deg,#E45CFF,#7621B0)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {num}
          </span>
          <h3 style={{ margin: 0, fontSize: 'clamp(20px,3vw,32px)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.15 }}>{title}</h3>
        </div>
        <div
          style={{
            marginTop: 8,
            paddingLeft: 'calc(clamp(26px,3vw,38px)*0.62 + clamp(14px,2vw,24px))',
            fontSize: 12,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: '#7A8591',
          }}
        >
          {category}
        </div>
      </header>
      <p style={{ maxWidth: 820, margin: '0 0 36px', fontWeight: 300, fontSize: 16, lineHeight: 1.7, color: '#98A4B0', textWrap: 'pretty' }}>{goal}</p>
    </>
  );
}
