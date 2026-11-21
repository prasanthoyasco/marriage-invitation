import React from 'react';
import { Heart } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export const Footer: React.FC = () => {
  const { footer, couple } = weddingConfig;

  return (
    <footer className="py-16 sm:py-24 px-4 bg-[#F5ECD5] text-[#381F0D] text-center relative border-t-2 border-[#C68A4C]/40 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#C68A4C]/10 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
        {/* Ornate Monogram */}
        <div className="w-14 h-14 rounded-full border-2 border-[#C68A4C]/60 flex items-center justify-center mb-5 bg-[#FFFDF8] shadow-md">
          <span className="font-cinzel text-xs text-[#8C4A15] tracking-widest font-bold whitespace-nowrap select-none">
            {couple.monogram || 'M & P'}
          </span>
        </div>

        {/* Couple Title */}
        <div className="flex flex-col items-center mb-2">
          <h3 className="font-cinzel text-2xl sm:text-3xl tracking-widest text-[#381F0D] uppercase font-bold">
            {couple.tamilTitle || footer.title}
          </h3>
          <span className="font-cormorant text-xs sm:text-sm tracking-[0.25em] text-[#8C4A15] uppercase font-bold mt-0.5">
            Madhuprasad Weds Priyadharshini
          </span>
        </div>

        {/* Tamil Blessing */}
        <p className="font-tamil text-base text-[#5C3B24] mb-2 font-semibold tracking-wide">
          வாழ்க வளமுடன் • அன்பும் அருளும் நிறையட்டும்
        </p>

        {/* Date */}
        <p className="font-mono text-xs sm:text-sm text-[#8C4A15] tracking-[0.25em] uppercase mb-6 font-bold">
          {footer.date}
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 w-36 mx-auto mb-6 opacity-60">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C68A4C]" />
          <Heart className="w-3.5 h-3.5 text-[#8C4A15] fill-current" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C68A4C]" />
        </div>

        {/* Credits */}
        <div className="text-xs text-[#5C3B24]/80 flex items-center justify-center gap-1.5 font-tamil tracking-wide font-medium">
          <span>{footer.creditText}</span>
          {footer.creditLink && (
            <a
              href={footer.creditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C4A15] hover:text-[#381F0D] underline transition-colors font-bold"
            >
              Atelier
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
