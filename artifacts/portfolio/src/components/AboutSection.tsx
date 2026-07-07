import React from 'react';
import { motion } from 'framer-motion';
import aboutPortrait from '@assets/ef1ac456-ffec-415a-b02f-e62fb94ff45f_1783434041042.png';

export function AboutSection() {
  const words = [
    { text: "Precision.", color: "text-[#111111]" },
    { text: "Accuracy.", color: "text-[#111111]" },
    { text: "Documentation.", color: "text-[#111111]" },
    { text: "Healthcare.", color: "text-[#8B1E3F]" }
  ];

  return (
    <section id="about-me" className="min-h-[100dvh] w-full py-24 md:py-32 px-6 md:px-12 relative flex items-center">
      <div className="absolute bottom-10 left-6 md:left-12 text-[20vw] font-serif leading-none opacity-5 pointer-events-none select-none text-[#6E6E6E] -z-10">
        02
      </div>

      <div className="max-w-[1600px] mx-auto w-full">
        <div className="mb-16 md:mb-32">
          <span className="text-[10px] uppercase tracking-widest text-[#8B1E3F] font-medium">About Me —</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_auto_2fr_1fr] lg:grid-cols-[1.5fr_auto_2fr_1.5fr] gap-12 md:gap-16 items-start">
          
          {/* Left Column: Stacked Words */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, staggerChildren: 0.1 }}
            className="flex flex-col space-y-2 md:space-y-4"
          >
            {words.map((word, i) => (
              <motion.span 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`font-serif text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight ${word.color}`}
              >
                {word.text}
              </motion.span>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] h-full min-h-[300px] bg-[#E5E5E3]"></div>

          {/* Center Column: Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col justify-center h-full max-w-lg md:pl-8 lg:pl-12"
          >
            <p className="text-[#111111] text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-16">
              With a strong foundation in medical terminology, anatomy, and physiology, I aim to contribute to reliable healthcare documentation through accuracy, compliance, and a research-driven approach.
            </p>

            <span className="font-serif italic text-3xl md:text-4xl text-[#6E6E6E]">
              Mariya Sibiya
            </span>
          </motion.div>

          {/* Right Column: Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="hidden lg:block w-full h-[600px] relative overflow-hidden"
          >
            <img
              src={aboutPortrait}
              alt="Mariya Sibiya in a professional setting"
              className="w-full h-full object-cover object-top grayscale"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
