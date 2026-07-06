import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from './hooks/useLenis';
import { Preloader } from './components/Preloader';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectSection } from './components/ProjectSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  // Slight delay so hero animates as the preloader fade-out completes
  const [heroReady, setHeroReady] = useState(false);

  useLenis();

  useEffect(() => {
    if (!preloaderDone) return;
    // Preloader exit animation is 600ms; start hero slightly before it finishes
    const t = setTimeout(() => setHeroReady(true), 400);
    return () => clearTimeout(t);
  }, [preloaderDone]);

  return (
    <>
      <AnimatePresence>
        {!preloaderDone && (
          <Preloader onComplete={() => setPreloaderDone(true)} />
        )}
      </AnimatePresence>

      <main className="w-full bg-[#FAFAF8] min-h-screen selection:bg-[#8B1E3F] selection:text-[#FAFAF8]">
        <Navigation />

        <HeroSection isReady={heroReady} />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectSection />
        <CertificationsSection />
        <ContactSection />

        <Footer />
      </main>
    </>
  );
}

export default App;
