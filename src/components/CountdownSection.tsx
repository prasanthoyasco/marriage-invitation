import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { useCountdown } from '../hooks/useCountdown';

export const CountdownSection: React.FC = () => {
  const countdown = useCountdown(weddingConfig.dates.wedding);

  const units = [
    { label: 'Days', subLabel: 'DAYS', value: countdown.formatted.days },
    { label: 'Hours', subLabel: 'HOURS', value: countdown.formatted.hours },
    { label: 'Minutes', subLabel: 'MINS', value: countdown.formatted.minutes },
    { label: 'Seconds', subLabel: 'SECS', value: countdown.formatted.seconds },
  ];

  const weddingDateStr =
    weddingConfig.dates.displayWeddingDate || 'Monday, 8th February 2027';

  return (
    <section className="py-20 sm:py-28 px-4 bg-transparent relative border-y border-[#D4AF37]/30 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 cinematic-grain pointer-events-none opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-2 flex flex-col items-center">
            <span className="font-cormorant text-xs sm:text-sm text-[#8C4A15] font-bold uppercase tracking-widest block">
              Auspicious Countdown
            </span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl text-[#381F0D] font-bold tracking-wider drop-shadow-sm">
            Counting Down to the <br/> Wedding Day
          </h2>
          <div className="flex items-center justify-center gap-3 w-32 mx-auto mt-4 opacity-70">
            <div className="h-[1px] flex-1 bg-[#C68A4C]" />
            <span className="text-[#8C4A15] text-xs">❖</span>
            <div className="h-[1px] flex-1 bg-[#C68A4C]" />
          </div>
        </motion.div>

        {/* Large Editorial Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
          {units.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#FFFDF8]/95 backdrop-blur-md border border-[#C68A4C]/50 shadow-[0_10px_30px_rgba(74,36,10,0.08)] flex flex-col items-center justify-center wedding-card group"
            >
              {/* Dual Gold Hairline Accent */}
              <div className="absolute top-2 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#C68A4C]/60 to-transparent" />
              <div className="absolute bottom-2 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#C68A4C]/60 to-transparent" />

              {/* Large Editorial Number */}
              <div className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold text-[#8C4A15] group-hover:text-[#5C2D0C] transition-colors duration-300 tracking-tight drop-shadow-sm">
                {unit.value}
              </div>

              {/* Label */}
              <span className="text-xs sm:text-sm font-cinzel uppercase font-bold tracking-widest text-[#5C2D0C] mt-2">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Wedding Date Note in English */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 font-cormorant text-lg sm:text-xl text-[#5C3B24] font-medium tracking-wide"
        >
          Looking forward to the auspicious wedding ceremony on {weddingDateStr}...
        </motion.p>
      </div>
    </section>
  );
};
