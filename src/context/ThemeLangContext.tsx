import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { DICT, type Lang, type DictShape } from '../i18n/dict';

export type Theme = 'dark' | 'light';

export interface ColorTokens {
  bg: string;
  text: string;
  sub: string;
  glass: string;
  border: string;
  navBg: string;
  srvBg: string;
  srvText: string;
  srvSub: string;
  srvBorder: string;
  srvGlass: string;
}

const DARK: ColorTokens = {
  bg: '#0C0C0C', text: '#D7E2EA', sub: '#7A8591', glass: 'rgba(255,255,255,.05)', border: 'rgba(255,255,255,.12)', navBg: 'rgba(12,12,12,.6)',
  srvBg: '#EEF1F4', srvText: '#14181D', srvSub: '#5C6670', srvBorder: 'rgba(12,12,12,.14)', srvGlass: 'rgba(12,12,12,.04)'
};

const LIGHT: ColorTokens = {
  bg: '#F8F9FA', text: '#14181D', sub: '#5C6670', glass: 'rgba(12,12,12,.04)', border: 'rgba(12,12,12,.12)', navBg: 'rgba(248,249,250,.7)',
  srvBg: '#101216', srvText: '#D7E2EA', srvSub: '#7A8591', srvBorder: 'rgba(255,255,255,.14)', srvGlass: 'rgba(255,255,255,.05)'
};

// Global visual constants (were editor-exposed props in the design prototype).
export const GLOW_INTENSITY = 0.6;
export const MARQUEE_SPEED_S = 28;

interface Ctx {
  theme: Theme;
  lang: Lang;
  toggleTheme: () => void;
  setLang: (l: Lang) => void;
  c: ColorTokens;
  t: DictShape;
  /** Silver display-gradient stops (theme-aware). */
  gA: string;
  gB: string;
  glow: number;
  mqDur: number;
  ctaGlow: string;
  heroGlow: string;
}

const ThemeLangContext = createContext<Ctx | null>(null);

export function ThemeLangProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Lang>('vi');

  const value = useMemo<Ctx>(() => {
    const dark = theme === 'dark';
    const c = dark ? DARK : LIGHT;
    const t = DICT[lang];
    const glow = GLOW_INTENSITY;
    return {
      theme,
      lang,
      toggleTheme: () => setTheme((s) => (s === 'dark' ? 'light' : 'dark')),
      setLang,
      c,
      t,
      gA: dark ? '#646973' : '#23282F',
      gB: dark ? '#BBCCD7' : '#7A2FB5',
      glow,
      mqDur: MARQUEE_SPEED_S,
      ctaGlow: `0 0 ${Math.round(46 * glow)}px rgba(182,0,168,${(0.55 * glow).toFixed(2)})`,
      heroGlow: `0 24px 70px rgba(0,0,0,.5), 0 0 ${Math.round(60 * glow)}px rgba(118,33,176,${(0.3 * glow).toFixed(2)})`,
    };
  }, [theme, lang]);

  return <ThemeLangContext.Provider value={value}>{children}</ThemeLangContext.Provider>;
}

export function useThemeLang() {
  const ctx = useContext(ThemeLangContext);
  if (!ctx) throw new Error('useThemeLang must be used within ThemeLangProvider');
  return ctx;
}
