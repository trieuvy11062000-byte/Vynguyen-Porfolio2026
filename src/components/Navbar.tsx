import { useThemeLang } from '../context/ThemeLangContext';

const NAV_LINKS: { key: 'about' | 'services' | 'projects' | 'certs' | 'contact'; href: string }[] = [
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'projects', href: '#projects' },
  { key: 'certs', href: '#certificates' },
  { key: 'contact', href: '#contact' },
];

export function Navbar() {
  const { c, t, lang, setLang, toggleTheme } = useThemeLang();

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '14px clamp(20px,5vw,64px)',
        background: c.navBg,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${c.border}`,
        color: c.text,
        transition: 'background .4s,color .4s',
      }}
    >
      <a href="#top" style={{ fontWeight: 900, letterSpacing: '.08em', fontSize: 18 }}>
        VỸ NGUYỄN
        <span
          style={{
            backgroundImage: 'linear-gradient(123deg,#B600A8,#BE4C00)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          .
        </span>
      </a>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(12px,2.5vw,28px)',
          fontSize: 14,
          fontWeight: 500,
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
        }}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.key}
            href={l.href}
            style={{ opacity: 0.8, transition: 'opacity .2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
          >
            {t[l.key === 'certs' ? 'certs' : l.key]}
          </a>
        ))}
        <button
          onClick={toggleTheme}
          title="Theme"
          style={{
            cursor: 'pointer',
            width: 34,
            height: 34,
            borderRadius: '50%',
            border: `1px solid ${c.border}`,
            background: c.glass,
            color: c.text,
            fontSize: 15,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          ◐
        </button>
        <div style={{ display: 'flex', border: `1px solid ${c.border}`, borderRadius: 999, overflow: 'hidden', fontSize: 12, fontWeight: 700 }}>
          <button
            onClick={() => setLang('vi')}
            style={{
              cursor: 'pointer',
              border: 'none',
              padding: '7px 13px',
              background: lang === 'vi' ? '#B600A8' : 'transparent',
              color: lang === 'vi' ? '#fff' : c.sub,
            }}
          >
            VI
          </button>
          <button
            onClick={() => setLang('en')}
            style={{
              cursor: 'pointer',
              border: 'none',
              padding: '7px 13px',
              background: lang === 'en' ? '#B600A8' : 'transparent',
              color: lang === 'en' ? '#fff' : c.sub,
            }}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}
