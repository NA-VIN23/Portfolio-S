import React from 'react';
import { motion } from 'framer-motion';

export function ProjectSection() {
  return (
    <section id="project" className="w-full py-32 md:py-48 px-6 md:px-12 relative bg-[#FAFAF8]">
      <div className="absolute right-12 bottom-12 text-[20vw] font-serif leading-none opacity-5 pointer-events-none select-none text-[#6E6E6E] -z-10">
        05
      </div>

      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#8B1E3F] font-medium">Selected Project —</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight text-[#111111] max-w-4xl mx-auto mb-12"
        >
          Transcriptomic Analysis of Colon Cancer for Identification of Potential Biomarkers
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base md:text-lg lg:text-xl font-light text-[#6E6E6E] max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Conducted transcriptomic analysis of colon cancer gene expression data to identify potential diagnostic biomarkers using bioinformatics tools and statistical methods.
        </motion.p>

        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xs uppercase tracking-widest text-[#6E6E6E] inline-flex items-center gap-2 border-b border-[#E5E5E3] pb-1"
        >
          View Project <span>→</span>
        </motion.span>
      </div>
    </section>
  );
}
