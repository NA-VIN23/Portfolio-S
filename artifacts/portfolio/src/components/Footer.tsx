import React from 'react';
import footerFlowers from '@assets/generated_images/footer-flowers.png';

export function Footer() {
  return (
    <footer className="w-full pt-0 pb-8 px-6 md:px-12 border-t border-[#E5E5E3] relative overflow-hidden">
      {/* Flower decoration */}
      <div className="w-full flex justify-end pointer-events-none select-none mb-2">
        <img
          src={footerFlowers}
          alt=""
          aria-hidden="true"
          className="h-28 md:h-36 object-contain opacity-60 mix-blend-multiply"
        />
      </div>

      {/* Footer text row */}
      <div className="flex justify-between items-center text-[#6E6E6E] text-xs uppercase tracking-widest">
        <span>© 2026 Mariya Sibiya. All rights reserved.</span>
        <span className="hidden md:block">Designed with precision</span>
      </div>
    </footer>
  );
}
