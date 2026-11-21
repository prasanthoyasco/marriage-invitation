import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export const AjayHanumanSection: React.FC = () => {
  const { devotionalBlessing } = weddingConfig;

  if (!devotionalBlessing.enabled) return null;

  return (
    <section className="py-20 md:py-32 px-4 bg-transparent relative overflow-hidden">
      {/* Divine Radiant Golden Sun Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl border border-[#C68A4C]/50 bg-[#FAF0DC] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#8C4A15]" />
            <div className="flex flex-col items-center leading-tight">
              <span className="font-tamil text-xs sm:text-sm text-[#7A3E10] font-bold">
                தெய்வீக ஆசீர்வாதம்
              </span>
              <span className="font-cormorant text-[11px] sm:text-xs text-[#8C4A15] uppercase tracking-widest font-bold">
                Divine Blessings
              </span>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-[#8C4A15]" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl text-[#381F0D] font-bold tracking-wide uppercase drop-shadow-sm">
            {devotionalBlessing.tamilTitle}
          </h2>

          <p className="font-tamil text-base sm:text-xl text-[#5C3B24] mt-2 font-medium">
            {devotionalBlessing.title}
          </p>

          <div className="flex items-center justify-center gap-3 w-32 mx-auto mt-4 opacity-75">
            <div className="h-[1px] flex-1 bg-[#C68A4C]" />
            <span className="text-[#8C4A15] text-sm">🕉</span>
            <div className="h-[1px] flex-1 bg-[#C68A4C]" />
          </div>
        </motion.div>

        {/* Ornate Devotional Card Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFDF8]/95 p-6 sm:p-10 md:p-12 rounded-3xl border-2 border-[#C68A4C]/60 shadow-[0_20px_60px_rgba(74,36,10,0.12)] relative"
        >
          {/* Temple Arch Outline */}
          <div className="relative max-w-lg mx-auto overflow-hidden rounded-2xl border-2 border-[#C68A4C]/50 shadow-xl group">
            {/* Image of Ajay as Hanuman */}
            <div className="aspect-[4/5] sm:aspect-[3/4] w-full bg-[#FAF4E6] relative flex items-center justify-center overflow-hidden">
              <img
                src={devotionalBlessing.image}
                alt={devotionalBlessing.title}
                onError={(e) => {
                  // Fallback if user hasn't added the specific image yet
                  (e.target as HTMLElement).style.display = 'none';
                  const fallbackDiv = document.getElementById('ajay-hanuman-fallback');
                  if (fallbackDiv) fallbackDiv.style.display = 'flex';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out select-none"
              />

              {/* Graceful Fallback if image is being prepared */}
              <div
                id="ajay-hanuman-fallback"
                className="hidden absolute inset-0 flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#FDF9EE] to-[#F5E8CF]"
              >
                <div className="w-20 h-20 rounded-full border-2 border-[#C68A4C] flex items-center justify-center mb-4 bg-[#FAF0DC] text-3xl shadow-md text-[#8C4A15]">
                  🕉
                </div>
                <h4 className="font-cinzel text-xl text-[#381F0D] font-bold mb-2">
                  ஸ்ரீ அனுமன் நெஞ்சில் தம்பதியர்
                </h4>
                <p className="font-tamil text-xs text-[#5C3B24] max-w-xs leading-relaxed font-medium">
                  (அஜய் அனுமன் தோற்றப் படம் /assets/images/ajay-hanuman.jpg கோப்பிலிருந்து தானாகவே இங்கு காண்பிக்கப்படும்)
                </p>
              </div>

              {/* Overlay Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Sacred Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-[#C68A4C]/50">
                <span className="text-xs sm:text-sm font-tamil text-[#FFF8E7] font-semibold">
                  ஸ்ரீ ராமஜெயம் • என்றும் ஆசியுடன்
                </span>
                <span className="text-[#E0B278] text-xs">✦</span>
              </div>
            </div>
          </div>

          {/* Devotional Stanza / Blessings Text */}
          <div className="mt-8 max-w-2xl mx-auto space-y-4">
            <p className="font-tamil text-base sm:text-lg md:text-xl text-[#381F0D] font-semibold leading-relaxed drop-shadow-sm">
              "{devotionalBlessing.caption}"
            </p>

            {devotionalBlessing.tamilVerse && (
              <p className="font-tamil text-xs sm:text-sm text-[#5C3B24] italic leading-relaxed pt-2 border-t border-[#C68A4C]/30 font-medium">
                {devotionalBlessing.tamilVerse}
              </p>
            )}
          </div>

          {/* Golden Corner Ornaments */}
          <div className="absolute top-3 left-3 text-[#C68A4C]/50 text-sm select-none">❖</div>
          <div className="absolute top-3 right-3 text-[#C68A4C]/50 text-sm select-none">❖</div>
          <div className="absolute bottom-3 left-3 text-[#C68A4C]/50 text-sm select-none">❖</div>
          <div className="absolute bottom-3 right-3 text-[#C68A4C]/50 text-sm select-none">❖</div>
        </motion.div>
      </div>
    </section>
  );
};
