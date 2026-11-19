import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export const TamilSloganSection: React.FC = () => {
  const { slogan } = weddingConfig;

  return (
    <section className="py-20 md:py-28 px-4 bg-transparent relative overflow-hidden">
      {/* Background Soft Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-b from-[#2E050E]/90 via-[#220309]/95 to-[#190206]/95 backdrop-blur-md p-8 sm:p-14 md:p-16 rounded-3xl border border-[#D4AF37]/50 shadow-[0_15px_45px_rgba(0,0,0,0.6)] relative overflow-hidden"
        >
          {/* Top Traditional Motif */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-[#D4AF37] text-lg">🪔</span>
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="font-tamil text-xs sm:text-sm text-[#F7E2B5] tracking-widest font-semibold uppercase">
              சங்கத் தமிழ் காதல் வரிகள்
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-lg">🪔</span>
          </div>

          {/* Heading */}
          <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl text-[#FAF9F7] tracking-wider mb-8 drop-shadow-md">
            அன்புடை நெஞ்சம்தாம் கலந்தனவே
          </h2>

          {/* Slogan Poem Stanzas */}
          <div className="space-y-3 sm:space-y-4 my-8 max-w-2xl mx-auto">
            {slogan.poemLines.map((line, idx) => {
              const isHighlight = line.includes('கலந்தனவே') || line.includes('அன்புடை');
              return (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.7 }}
                  className={`font-tamil tracking-wide transition-all duration-300 ${
                    isHighlight
                      ? 'text-2xl sm:text-3xl md:text-4xl text-[#F7E2B5] font-bold drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]'
                      : 'text-lg sm:text-2xl md:text-3xl text-[#FFECCC] font-medium leading-relaxed'
                  }`}
                >
                  "{line}"
                </motion.p>
              );
            })}
          </div>

          {/* Source Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 pt-6 border-t border-[#D4AF37]/30 flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-2 text-xs sm:text-sm font-serif text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{slogan.source}</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>

            {slogan.meaning && (
              <p className="font-tamil text-xs sm:text-sm text-[#E5D0B2]/85 italic max-w-xl mx-auto leading-relaxed mt-1">
                {slogan.meaning}
              </p>
            )}
          </motion.div>

          {/* Traditional Corner Filigree */}
          <div className="absolute top-3 left-3 text-[#D4AF37]/35 text-sm select-none">❖</div>
          <div className="absolute top-3 right-3 text-[#D4AF37]/35 text-sm select-none">❖</div>
          <div className="absolute bottom-3 left-3 text-[#D4AF37]/35 text-sm select-none">❖</div>
          <div className="absolute bottom-3 right-3 text-[#D4AF37]/35 text-sm select-none">❖</div>
        </motion.div>
      </div>
    </section>
  );
};
