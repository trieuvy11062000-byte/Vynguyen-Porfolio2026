import { useEffect } from 'react';
import { ThemeLangProvider, useThemeLang } from './context/ThemeLangContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeCounters } from './components/MarqueeCounters';
import { AboutJourney } from './components/AboutJourney';
import { ServicesExpertise } from './components/ServicesExpertise';
import { FeaturedWork } from './components/featured-work/FeaturedWork';
import { SelectedProjects } from './components/SelectedProjects';
import { Certifications } from './components/Certifications';
import { ContactFooter } from './components/ContactFooter';

function Page() {
  const { c } = useThemeLang();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div style={{ background: c.bg, color: c.text, fontFamily: "'Kanit',sans-serif", overflowX: 'clip', minHeight: '100vh', transition: 'background .4s,color .4s' }}>
      <Navbar />
      <Hero />
      <MarqueeCounters />
      <AboutJourney />
      <ServicesExpertise />
      <FeaturedWork />
      <SelectedProjects />
      <Certifications />
      <ContactFooter />
    </div>
  );
}

function App() {
  return (
    <ThemeLangProvider>
      <Page />
    </ThemeLangProvider>
  );
}

export default App;
