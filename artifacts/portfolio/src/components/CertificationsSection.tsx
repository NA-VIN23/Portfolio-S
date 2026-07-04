import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

export function CertificationsSection() {
  const certs = [
    {
      title: "Medical Coding Certification",
      issuer: "Thought Flows Academy, Trichy",
      year: "2026",
      score: "90%",
      icon: Award
    },
    {
      title: "NPTEL Certification",
      issuer: "Metabolic Engineering",
      year: null,
      score: "71%",
      icon: GraduationCap
    },
    {
      title: "Coursework",
      issuer: "ICD-10-CM, CPT, HCPCS, Medical Billing, Healthcare Documentation, Medical Terminology",
      year: null,
      score: null,
      icon: BookOpen
    }
  ];

  return (
    <section id="certifications" className="w-full py-24 md:py-32 px-6 md:px-12 relative">
      <div className="absolute left-6 top-24 text-[15vw] font-serif leading-none opacity-5 pointer-events-none select-none text-[#6E6E6E] -z-10">
        06
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-widest text-[#8B1E3F] font-medium">Qualifications —</span>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-32">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="border border-[#E5E5E3] p-8 md:p-10 flex flex-col h-full bg-[#FAFAF8] hover:border-[#111111] transition-colors duration-500"
            >
              <cert.icon className="w-6 h-6 text-[#6E6E6E] mb-12 stroke-[1.5]" />
              
              <div className="mt-auto">
                <h3 className="font-serif text-2xl md:text-3xl text-[#111111] mb-4 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm font-light text-[#6E6E6E] mb-6 leading-relaxed">
                  {cert.issuer}
                </p>
                <div className="flex justify-between items-center text-xs uppercase tracking-widest text-[#111111] border-t border-[#E5E5E3] pt-6">
                  {cert.year && <span>{cert.year}</span>}
                  {cert.score && <span>Score: {cert.score}</span>}
                  {!cert.year && !cert.score && <span>Completed</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[#111111]">Education</h2>
          </motion.div>

          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row justify-between gap-4 md:gap-12 border-b border-[#E5E5E3] pb-8"
            >
              <div className="max-w-md">
                <h4 className="text-xl md:text-2xl font-serif text-[#111111] mb-2">Bachelor of Biotechnology</h4>
                <p className="text-sm font-light text-[#6E6E6E]">Holy Cross College, Trichy</p>
              </div>
              <div className="flex flex-col md:items-end text-sm text-[#111111]">
                <span>2023–2026</span>
                <span className="text-[#6E6E6E] mt-1">CGPA: 7.4</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col md:flex-row justify-between gap-4 md:gap-12 pb-8"
            >
              <div className="max-w-md">
                <h4 className="text-xl md:text-2xl font-serif text-[#111111] mb-2">Higher Secondary Education</h4>
                <p className="text-sm font-light text-[#6E6E6E]">St. Anne's Girls Higher Secondary School, Trichy</p>
              </div>
              <div className="flex flex-col md:items-end text-sm text-[#111111]">
                <span>2023</span>
                <span className="text-[#6E6E6E] mt-1">Grade: 77.5%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
