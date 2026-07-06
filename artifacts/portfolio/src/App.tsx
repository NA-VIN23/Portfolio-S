import { useState } from 'react';
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

  useLenis(); // Initialize smooth scrolling

  return (
    <>
      <AnimatePresence>
        {!preloaderDone && (
          <Preloader onComplete={() => setPreloaderDone(true)} />
        )}
      </AnimatePresence>

      <main className="w-full bg-[#FAFAF8] min-h-screen selection:bg-[#8B1E3F] selection:text-[#FAFAF8]">
        <Navigation />

        <HeroSection />
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
