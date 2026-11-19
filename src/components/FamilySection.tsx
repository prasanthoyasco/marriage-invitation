import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export const FamilySection: React.FC = () => {
  const { family, rsvp } = weddingConfig;

  return (
    <section className="py-20 md:py-32 px-4 bg-transparent relative overflow-hidden border-t border-[#D4AF37]/25">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* Section Intro in Tamil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-tamil text-base sm:text-lg text-[#F7E2B5] font-semibold block mb-2">
            குடும்பத்தினர் & உற்றார் உறவினர்கள்
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#FFFDF9] font-semibold tracking-wide uppercase drop-shadow-md">
            அன்போடு வரவேற்கும் குடும்பத்தினர்
          </h2>
          <div className="flex items-center justify-center gap-3 w-32 mx-auto mt-4 opacity-70">
            <div className="h-[1px] flex-1 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">❖</span>
            <div className="h-[1px] flex-1 bg-[#D4AF37]" />
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
          <span className="font-tamil tracking-[0.2em] text-xs sm:text-sm uppercase text-[#D4AF37] font-bold block mb-1">
            பெருமதிப்புடன் அழைக்கும் • WITH REGARDS
          </span>
          <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FFFDF9] font-semibold tracking-wide uppercase mb-6">
            தங்கள் அன்புள்ள
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {family.withRegards.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="py-3 px-5 rounded-2xl bg-[#25040B]/85 border border-[#D4AF37]/50 shadow-lg text-center wedding-card"
              >
                <span className="font-tamil text-sm sm:text-base text-[#FFFDF9] font-medium">
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
          <span className="font-tamil tracking-[0.2em] text-xs sm:text-sm uppercase text-[#D4AF37] font-bold block mb-1">
            மகிழ்வுடன் வாழ்த்தும் • WITH BEST COMPLIMENTS
          </span>
          <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FFFDF9] font-semibold tracking-wide uppercase mb-6">
            நல்வாழ்த்துகளுடன்
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3.5 max-w-4xl mx-auto">
            {family.withBestCompliments.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.6 }}
                className="py-2.5 px-3.5 rounded-2xl bg-[#25040B]/85 border border-[#D4AF37]/45 shadow-sm text-center wedding-card"
              >
                <span className="font-tamil text-xs sm:text-sm text-[#FFFDF9] font-medium">
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
          className="text-center max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#25040B]/85 backdrop-blur-md border border-[#D4AF37]/50 shadow-2xl"
        >
          <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mx-auto mb-3">
            <Heart className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <span className="font-tamil text-sm text-[#F7E2B5] font-semibold block mb-1">
            கொஞ்சிப் பேசும் மழலைகள்
          </span>
          <h3 className="font-cinzel text-xl sm:text-2xl text-[#FFFDF9] font-semibold tracking-wide uppercase mb-5">
            மழலைச் செல்வங்கள் (Little Flowers)
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {family.littleFlowers.map((child, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 rounded-full bg-[#160206]/85 text-xs sm:text-sm font-tamil text-[#F5DEB3] border border-[#D4AF37]/40 shadow-xs"
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
            className="text-center pt-8 border-t border-[#D4AF37]/25"
          >
            <h4 className="font-tamil text-xs sm:text-sm text-[#D4AF37] font-bold uppercase tracking-[0.2em] mb-4">
              எங்கள் நிறுவனங்கள் • OUR CONCERNS
            </h4>
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {family.ourConcerns.map((concern, idx) => (
                <span
                  key={idx}
                  className="px-4 py-1.5 rounded-xl bg-[#25040B]/85 text-xs sm:text-sm font-tamil text-[#FFFDF9] border border-[#D4AF37]/40 shadow-xs"
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
