import React from 'react';
import { motion } from 'framer-motion';

export function ExperienceSection() {
  const experiences = [
    {
      year: "2025",
      type: "Internship",
      role: "Lab Technician Intern",
      company: "Audhorsb Institute Diagnosis Laboratory",
      desc: "Assisted in sample collection, processing, diagnostic testing and maintained accurate records while ensuring quality and safety standards."
    },
    {
      year: "2025",
      type: "Internship",
      role: "Lab Technician Intern",
      company: "Annai Theresa Laboratory",
      desc: "Processed patient samples, performed hematology tests and maintained documentation to support efficient laboratory workflow."
    }
  ];

  return (
    <section id="experience" className="w-full py-24 md:py-32 px-6 md:px-12 relative">
      <div className="absolute top-10 right-12 text-[20vw] font-serif leading-none opacity-5 pointer-events-none select-none text-[#6E6E6E] -z-10">
        03
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 md:mb-24">
          <span className="text-[10px] uppercase tracking-widest text-[#8B1E3F] font-medium">Experience —</span>
        </div>

        <div className="flex flex-col">
          {/* Top Divider */}
          <div className="w-full h-[1px] bg-[#E5E5E3]"></div>

          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 md:gap-16 py-12 items-start">
                
                {/* Left Side: Year & Type */}
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-serif text-[#111111] mb-2">{exp.year}</span>
                  <span className="text-xs uppercase tracking-widest text-[#6E6E6E]">{exp.type}</span>
                </div>

                {/* Right Side: Role & Desc */}
                <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
                  <div className="flex flex-col max-w-sm">
                    <h3 className="text-2xl md:text-3xl font-serif text-[#111111] mb-2 leading-tight">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-light text-[#6E6E6E]">{exp.company}</span>
                  </div>
                  
                  <p className="text-sm md:text-base font-light text-[#6E6E6E] leading-relaxed max-w-md">
                    {exp.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Divider */}
              <div className="w-full h-[1px] bg-[#E5E5E3] origin-left transition-transform duration-700 ease-out"></div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-right"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#6E6E6E] inline-flex items-center gap-2">
            View All Experience <span>→</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
