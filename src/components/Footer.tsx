import React from 'react';
import { Heart } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export const Footer: React.FC = () => {
  const { footer, couple } = weddingConfig;

  return (
    <footer className="py-16 sm:py-24 px-4 bg-[#180207] text-[#FFFDF9] text-center relative border-t border-[#D4AF37]/35 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
        {/* Ornate Monogram */}
        <div className="w-14 h-14 rounded-full border border-[#D4AF37]/50 flex items-center justify-center mb-5 bg-[#25040B]/90 shadow-lg shadow-[#D4AF37]/5">
          <span className="font-cinzel text-xs text-[#F7E2B5] tracking-widest font-bold whitespace-nowrap select-none">
            A & M
          </span>
        </div>

        {/* Couple Title */}
        <h3 className="font-cinzel text-2xl sm:text-3xl tracking-widest text-[#FFFDF9] uppercase mb-2 font-semibold">
          {couple.tamilTitle || footer.title}
        </h3>

        {/* Tamil Blessing */}
        <p className="font-tamil text-base text-[#F0D59E] mb-2 font-medium tracking-wide">
          வாழ்க வளமுடன் • அன்பும் அருளும் நிறையட்டும்
        </p>

        {/* Date */}
        <p className="font-mono text-xs sm:text-sm text-[#D4AF37] tracking-[0.25em] uppercase mb-6">
          {footer.date}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 w-36 mx-auto mb-6 opacity-60">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </div>

        {/* Credits */}
        <div className="text-xs text-[#E8D1A7]/60 flex items-center justify-center gap-1.5 font-tamil tracking-wide">
          <span>{footer.creditText}</span>
          {footer.creditLink && (
            <a
              href={footer.creditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F7E2B5] hover:text-[#FFFDF9] underline transition-colors"
            >
              Atelier
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
