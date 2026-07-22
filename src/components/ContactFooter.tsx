import { useState } from 'react';
import { useThemeLang } from '../context/ThemeLangContext';

const EMAIL = 'trieuvy.11062000@gmail.com';

const inputStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,.05)',
  border: '1px solid rgba(255,255,255,.15)',
  borderRadius: 14,
  padding: '16px 20px',
  color: '#D7E2EA',
  fontFamily: 'Kanit,sans-serif',
  fontSize: 14,
  outline: 'none',
};

export function ContactFooter() {
  const { t, ctaGlow } = useThemeLang();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const focusStyle = (e: React.FocusEvent<HTMLElement>) => (e.currentTarget.style.borderColor = '#B600A8');
  const blurStyle = (e: React.FocusEvent<HTMLElement>) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.15)');

  return (
    <section id="contact" style={{ background: '#0C0C0C', color: '#D7E2EA', padding: '90px clamp(16px,4vw,64px) 40px', borderTop: '1px solid rgba(255,255,255,.08)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2
          style={{
            margin: '0 0 48px',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-.02em',
            lineHeight: 1.02,
            fontSize: 'clamp(34px,6vw,84px)',
            backgroundImage: 'linear-gradient(123deg,#BBCCD7 10%,#E45CFF 55%,#BE4C00 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textWrap: 'balance',
          }}
        >
          Let's build something unforgettable together
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <button
              onClick={copyEmail}
              className="font-mono-vy"
              style={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.15)',
                borderRadius: 16,
                padding: '18px 22px',
                color: '#D7E2EA',
                fontSize: 14,
                textAlign: 'left',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B600A8')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.15)')}
            >
              <span>{EMAIL}</span>
              <span style={{ fontFamily: 'Kanit,sans-serif', fontSize: 12, fontWeight: 700, color: '#E45CFF' }}>{copied ? t.copied : t.copy}</span>
            </button>
            <a
              href="https://linkedin.com/in/nntrieuvy/"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 16, padding: '18px 22px', fontSize: 14, fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B600A8')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.15)')}
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>
            <a
              href="https://www.facebook.com/Thuctinhtamhon"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', justifyContent: 'space-between', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 16, padding: '18px 22px', fontSize: 14, fontWeight: 600 }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B600A8')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.15)')}
            >
              <span>Facebook</span>
              <span>↗</span>
            </a>
            <div className="font-mono-vy" style={{ fontSize: 12, color: '#7A8591', padding: '0 4px' }}>
              Ho Chi Minh City, Vietnam · 0911 994 005
            </div>
          </div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: 14 }} onSubmit={(e) => e.preventDefault()}>
            <input placeholder={t.fName} style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
            <input placeholder={t.fMail} type="email" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
            <textarea placeholder={t.fMsg} rows={4} style={{ ...inputStyle, resize: 'vertical' }} onFocus={focusStyle} onBlur={blurStyle} />
            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: 'inline-block',
                textAlign: 'center',
                padding: '16px 40px',
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 15,
                color: '#fff',
                background: 'linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)',
                boxShadow: ctaGlow,
                transition: 'transform .3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
            >
              {t.fSend}
            </a>
          </form>
        </div>
        <div
          className="font-mono-vy"
          style={{
            marginTop: 70,
            paddingTop: 20,
            borderTop: '1px solid rgba(255,255,255,.08)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 10,
            fontSize: 11,
            color: '#7C8894',
          }}
        >
          <span>© 2026 Nguyễn Ngô Triều Vỹ</span>
          <span>Creative &amp; Brand Strategist · Multi-Disciplinary Content Lead</span>
        </div>
      </div>
    </section>
  );
}
