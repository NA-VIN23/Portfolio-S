import React from 'react';
import footerFlowers from '@assets/generated_images/footer-flowers.png';

export function Footer() {
  return (
    <footer className="w-full px-6 md:px-12 border-t border-[#E5E5E3] relative overflow-hidden">
      {/* Flower decoration — large, pinned to bottom-right */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none">
        <img
          src={footerFlowers}
          alt=""
          aria-hidden="true"
          className="h-56 md:h-72 lg:h-80 w-auto object-contain object-bottom opacity-70 mix-blend-multiply"
        />
      </div>

      {/* Footer content */}
      <div className="relative z-10 py-10 flex flex-col gap-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[#6E6E6E] text-xs uppercase tracking-widest">
          <span>© 2026 Mariya Sibiya. All rights reserved.</span>
          <span className="hidden md:block">Designed with precision</span>
        </div>

        {/* Bottom row */}
        <div className="flex justify-end">
          <span className="text-[10px] uppercase tracking-widest text-[#6E6E6E]">
            Design and Development by{' '}
            <a
              href="https://navinprasath.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B1E3F] hover:opacity-70 transition-opacity duration-200"
            >
              Navin
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
