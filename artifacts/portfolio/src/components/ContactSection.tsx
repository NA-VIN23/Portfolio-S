import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-32 md:py-48 px-6 md:px-12 relative border-t border-[#E5E5E3]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Massive Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#8B1E3F] font-medium mb-12">Contact —</span>
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1.05] tracking-tight text-[#111111]">
            Let's build better <br/>
            <span className="text-[#8B1E3F] italic">healthcare</span> <br/>
            documentation.
          </h2>
        </motion.div>

        {/* Right Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-12 lg:pl-24"
        >
          <div className="flex flex-col gap-8">
            <a 
              href="mailto:mariyasibiya17@gmail.com" 
              className="group flex items-center gap-6 pb-6 border-b border-[#E5E5E3] hover:border-[#111111] transition-colors"
            >
              <Mail className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#111111] transition-colors" />
              <span className="text-lg md:text-xl text-[#111111] font-light">mariyasibiya17@gmail.com</span>
            </a>

            <a 
              href="tel:+919487281957" 
              className="group flex items-center gap-6 pb-6 border-b border-[#E5E5E3] hover:border-[#111111] transition-colors"
            >
              <Phone className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#111111] transition-colors" />
              <span className="text-lg md:text-xl text-[#111111] font-light">+91 9487281957</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/mariya-sibiya"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 pb-6 border-b border-[#E5E5E3] hover:border-[#111111] transition-colors"
            >
              <Linkedin className="w-5 h-5 text-[#6E6E6E] group-hover:text-[#111111] transition-colors" />
              <span className="text-lg md:text-xl text-[#111111] font-light">LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
