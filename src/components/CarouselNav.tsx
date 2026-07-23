interface CarouselNavProps {
  onPrev: () => void;
  onNext: () => void;
  count: string;
  dots?: { active: boolean; onClick: () => void }[];
}

const btnStyle: React.CSSProperties = {
  cursor: 'pointer',
  width: 44,
  height: 44,
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,.2)',
  background: 'rgba(255,255,255,.08)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  color: '#D7E2EA',
  fontSize: 16,
  display: 'grid',
  placeItems: 'center',
  transition: 'background .3s',
};

/** Standard fixed circular prev/next + optional dots + mono counter, identical across all carousels. */
export function CarouselNav({ onPrev, onNext, count, dots }: CarouselNavProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 0 }}>
      <button
        onClick={onPrev}
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(182,0,168,.35)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,.08)')}
        aria-label="Previous"
      >
        ←
      </button>
      {dots && (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {dots.map((d, i) => (
            <button
              key={i}
              onClick={d.onClick}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                cursor: 'pointer',
                width: 8,
                height: 8,
                borderRadius: '50%',
                border: 'none',
                padding: 0,
                background: d.active ? '#E45CFF' : 'rgba(255,255,255,.25)',
                transition: 'background .3s',
              }}
            />
          ))}
        </div>
      )}
      <span className="font-mono-vy" style={{ fontSize: 12, color: '#7A8591' }}>
        {count}
      </span>
      <button
        onClick={onNext}
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(182,0,168,.35)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,.08)')}
        aria-label="Next"
      >
        →
      </button>
    </div>
  );
}
