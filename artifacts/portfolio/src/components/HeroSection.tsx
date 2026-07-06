import React from 'react';
import { motion } from 'framer-motion';
import portraitImg from '@assets/16bc8683-5021-49dc-8f0e-ab752eba0492_1783179615072.png';

interface HeroSectionProps {
  isReady: boolean;
}

export function HeroSection({ isReady }: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="about" className="min-h-[100dvh] w-full flex flex-col md:flex-row relative">
      {/* Left Content */}
      <div className="w-full md:w-1/2 pt-32 pb-12 px-6 md:px-12 flex flex-col relative z-10 justify-center">

        {/* Tiny vertical line + 01 on far left (desktop only) */}
        <div className="hidden xl:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center opacity-30">
          <span className="text-xs font-mono mb-4 text-[#6E6E6E]">01</span>
          <div className="w-[1px] h-32 bg-[#111111]"></div>
        </div>

        {/* Small numbered sidebar (desktop only) */}
        <div className="hidden xl:flex absolute left-20 top-1/2 -translate-y-1/2 flex-col space-y-4 opacity-20">
          {['01', '02', '03', '04', '05', '06', '07'].map((num, i) => (
            <span key={num} className={`text-xs font-mono ${i === 0 ? 'text-[#8B1E3F] opacity-100 font-bold' : ''}`}>
              {num}
            </span>
          ))}
        </div>

        {/* Gate animation behind isReady */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isReady ? 'visible' : 'hidden'}
          className="max-w-xl xl:ml-32"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#8B1E3F]"></div>
            <span className="text-[10px] uppercase tracking-widest text-[#6E6E6E]">Aspiring Medical Coder</span>
          </motion.div>

          <motion.h1
            className="font-serif font-light leading-[0.95] tracking-tight mb-8"
            style={{ fontSize: 'clamp(4rem, 10vw, 12rem)' }}
          >
            <motion.div variants={itemVariants} className="overflow-hidden pb-[0.18em]">
              <span className="block">Mariya</span>
            </motion.div>
            <motion.div variants={itemVariants} className="overflow-hidden pb-[0.18em]">
              <span className="block">Sibiya</span>
            </motion.div>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-[#6E6E6E] text-base md:text-lg font-light leading-relaxed max-w-md mb-16">
            Biotechnology graduate with hands-on laboratory experience and certified in Medical Coding. Passionate about accurate healthcare documentation through supporting quality healthcare.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#about-me"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('about-me');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group text-xs tracking-widest text-[#6E6E6E] hover:text-[#111111] transition-colors duration-300 uppercase inline-flex items-center gap-2"
          >
            Discover More{' '}
            <span className="inline-block transition-transform duration-500 group-hover:translate-y-1">↓</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Right Image — also gated */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full h-full"
        >
          <img
            src={portraitImg}
            alt="Mariya Sibiya portrait"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
