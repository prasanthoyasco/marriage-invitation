import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export const FamilySection: React.FC = () => {
  const { family, rsvp } = weddingConfig;

  return (
    <section className="py-20 md:py-32 px-4 bg-transparent relative overflow-hidden border-t border-[#D4AF37]/25">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-2 flex flex-col items-center">
            <span className="font-cormorant text-xs sm:text-sm text-[#8C4A15] font-bold uppercase tracking-widest block">
              Family & Well-Wishers
            </span>
            <span className="font-tamil text-sm sm:text-base text-[#7A3E10] font-medium block mt-0.5">
              குடும்பத்தினர் & உற்றார் உறவினர்கள்
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#381F0D] font-bold tracking-wide uppercase drop-shadow-sm">
            Cordially Invited by Our Families
          </h2>
          <span className="font-tamil text-xs sm:text-sm text-[#7A3E10] font-medium block mt-1">
            அன்போடு வரவேற்கும் குடும்பத்தினர்
          </span>
          <div className="flex items-center justify-center gap-3 w-32 mx-auto mt-4 opacity-70">
            <div className="h-[1px] flex-1 bg-[#C68A4C]" />
            <span className="text-[#8C4A15] text-xs">❖</span>
            <div className="h-[1px] flex-1 bg-[#C68A4C]" />
          </div>
        </motion.div>

        {/* 1. With Regards (தங்கள் அன்புள்ள) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-2 flex flex-col items-center">
            <span className="font-cormorant text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C4A15] font-bold block">
              With Regards
            </span>
            <span className="font-tamil text-[11px] sm:text-xs text-[#7A3E10] font-medium block mt-0.5">
              பெருமதிப்புடன் அழைக்கும் • தங்கள் அன்புள்ள
            </span>
          </div>
          <h3 className="font-cinzel text-2xl sm:text-3xl text-[#381F0D] font-bold tracking-wide uppercase mb-6">
            Warm Invitation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {family.withRegards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="py-3 px-5 rounded-2xl bg-[#FFFDF8]/95 border border-[#C68A4C]/50 shadow-sm text-center wedding-card"
              >
                <span className="text-sm sm:text-base text-[#381F0D] font-semibold">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2. With Best Compliments (நல்வாழ்த்துகளுடன்) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-2 flex flex-col items-center">
            <span className="font-cormorant text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C4A15] font-bold block">
              With Best Compliments
            </span>
            <span className="font-tamil text-[11px] sm:text-xs text-[#7A3E10] font-medium block mt-0.5">
              மகிழ்வுடன் வாழ்த்தும் • நல்வாழ்த்துகளுடன்
            </span>
          </div>
          <h3 className="font-cinzel text-2xl sm:text-3xl text-[#381F0D] font-bold tracking-wide uppercase mb-6">
            Best Compliments
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
            {family.withBestCompliments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                className="py-2.5 px-3.5 rounded-2xl bg-[#FFFDF8]/95 border border-[#C68A4C]/45 shadow-sm text-center wedding-card"
              >
                <span className="text-xs sm:text-sm text-[#381F0D] font-medium">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3. Little Flowers (மழலைச் செல்வங்கள்) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#FFFDF8]/95 backdrop-blur-md border-2 border-[#C68A4C]/60 shadow-[0_15px_45px_rgba(74,36,10,0.12)]"
        >
          <div className="w-10 h-10 rounded-full bg-[#FAF0DC] text-[#8C4A15] flex items-center justify-center mx-auto mb-3 border border-[#C68A4C]">
            <Heart className="w-5 h-5 text-[#8C4A15]" />
          </div>
          <div className="mb-5 flex flex-col items-center">
            <h3 className="font-cinzel text-xl sm:text-2xl text-[#381F0D] font-bold tracking-wide uppercase">
              Little Flowers
            </h3>
            <span className="font-tamil text-xs sm:text-sm text-[#7A3E10] font-medium mt-0.5">
              மழலைச் செல்வங்கள் • கொஞ்சிப் பேசும் மழலைகள்
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {family.littleFlowers.map((child, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full bg-[#FAF0DC] text-xs sm:text-sm text-[#5C2D0C] font-semibold border border-[#C68A4C]/40 shadow-xs"
              >
                {child}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 4. Our Concerns (நிறுவனங்கள்) */}
        {family.ourConcerns.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center pt-8 border-t border-[#C68A4C]/25"
          >
            <div className="mb-4 flex flex-col items-center">
              <h4 className="font-cormorant text-xs sm:text-sm text-[#8C4A15] font-bold uppercase tracking-[0.2em]">
                Our Concerns & Establishments
              </h4>
              <span className="font-tamil text-[11px] text-[#7A3E10] font-medium mt-0.5">
                எங்கள் நிறுவனங்கள்
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {family.ourConcerns.map((concern, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-xl bg-[#FAF0DC] text-xs sm:text-sm text-[#5C2D0C] font-semibold border border-[#C68A4C]/40 shadow-xs"
                >
                  {concern}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
