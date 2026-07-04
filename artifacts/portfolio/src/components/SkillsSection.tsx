import React from 'react';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const group1 = [
    "ICD-10-CM", "CPT", "HCPCS", "Medical Billing", "Clinical Documentation"
  ];
  
  const group2 = [
    "Medical Terminology", "Anatomy", "Physiology", "MS Word", "MS Excel", "MS PowerPoint"
  ];

  return (
    <section id="skills" className="w-full py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 text-[25vw] font-serif leading-none opacity-5 pointer-events-none select-none text-[#6E6E6E] -z-10">
        04
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 md:mb-32">
          <span className="text-[10px] uppercase tracking-widest text-[#8B1E3F] font-medium">Skills —</span>
        </div>

        <div className="flex flex-col gap-16 md:gap-24">
          {/* Group 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-6">
              {group1.map((skill, i) => (
                <React.Fragment key={skill}>
                  <span className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#111111] tracking-tight">
                    {skill}
                  </span>
                  {i < group1.length - 1 && (
                    <span className="text-[#E5E5E3] text-3xl md:text-5xl lg:text-6xl font-serif">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Thin divider between groups */}
          <div className="w-full h-[1px] bg-[#E5E5E3]"></div>

          {/* Group 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:gap-x-10 md:gap-y-5">
              {group2.map((skill, i) => (
                <React.Fragment key={skill}>
                  <span className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#6E6E6E] tracking-tight">
                    {skill}
                  </span>
                  {i < group2.length - 1 && (
                    <span className="text-[#E5E5E3] text-2xl md:text-4xl lg:text-5xl font-serif">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
