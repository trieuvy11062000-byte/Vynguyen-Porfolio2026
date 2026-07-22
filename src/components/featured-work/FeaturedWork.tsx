import { Project1 } from './Project1';
import { Project2 } from './Project2';
import { Project3 } from './Project3';

export function FeaturedWork() {
  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        zIndex: 3,
        background: '#0C0C0C',
        color: '#D7E2EA',
        borderRadius: 'clamp(40px,5vw,60px) clamp(40px,5vw,60px) 0 0',
        marginTop: -48,
        padding: '24px clamp(16px,4vw,64px) 64px',
      }}
    >
      <h2
        style={{
          position: 'sticky',
          top: 4,
          zIndex: 30,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '16px 8px',
          margin: '16px 0 40px',
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '-.02em',
          fontSize: 'clamp(34px,5.5vw,72px)',
          backgroundImage: 'linear-gradient(180deg,#646973,#BBCCD7)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Featured Work
      </h2>
      <Project1 />
      <Project2 />
      <Project3 />
    </section>
  );
}
