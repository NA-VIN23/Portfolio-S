import React from 'react';

export function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 border-t border-[#E5E5E3]">
      <div className="py-10 flex flex-col gap-4">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[#6E6E6E] text-xs uppercase tracking-widest">
          <span>© 2026 Mariya Sibiya. All rights reserved.</span>
          <span className="hidden md:block">Designed with precision</span>
        </div>

        {/* Bottom row — credit */}
        <div className="flex justify-end">
          <span className="text-[10px] uppercase tracking-widest text-[#6E6E6E]">
            Design and Development by{' '}
            <a
              href="https://navinprasath.me"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block text-[#8B1E3F] group"
            >
              {/* Background sweep — slides in from left */}
              <span
                className="absolute inset-0 -mx-[3px] px-[3px] bg-[#8B1E3F]/10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-[2px]"
              />
              {/* Text — stays on top */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#6B1630]">
                Navin
              </span>
              {/* Underline — slides in from left */}
              <span
                className="absolute left-0 -bottom-[2px] h-[1px] w-full bg-[#8B1E3F] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
