import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { EventCard } from './EventCard';

export const TimelineSection: React.FC = () => {
  const { events } = weddingConfig;

  return (
    <section className="py-20 md:py-32 px-4 bg-transparent relative overflow-hidden">
      {/* Background Soft Ornaments */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Cinematic Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="mb-3 flex flex-col items-center">
            <span className="font-cormorant text-xs sm:text-sm text-[#8C4A15] font-bold uppercase tracking-widest block">
              Sacred Rituals & Celebrations
            </span>
            <span className="font-tamil text-xs text-[#7A3E10] font-medium block mt-0.5">
              புனிதச் சடங்குகள் & கொண்டாட்டங்கள்
            </span>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="font-cinzel text-3xl sm:text-5xl text-[#381F0D] font-bold tracking-wide uppercase drop-shadow-sm">
              Auspicious Ceremonies
            </h2>
            <span className="font-tamil text-xs sm:text-sm text-[#7A3E10] font-medium block mt-1">
              சுப முகூர்த்த நிகழ்வுகள்
            </span>
          </div>

          <p className="font-cormorant text-base sm:text-lg text-[#7A3E10] mt-3 tracking-wider font-semibold">
            Wedding Reception & Sacred Mangalyadharanam
          </p>
          <p className="font-tamil text-xs text-[#8C4A15] mt-0.5 font-medium">
            வரவேற்பு விழா & புனிதத் திருமாங்கல்ய தாரணம்
          </p>

          <div className="flex items-center justify-center gap-3 w-36 mx-auto mt-5 opacity-70">
            <div className="h-[1px] flex-1 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm">❖</span>
            <div className="h-[1px] flex-1 bg-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Ceremonies List */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
