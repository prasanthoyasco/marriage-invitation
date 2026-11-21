import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';

export const CoupleSection: React.FC = () => {
  const { invocation, couple } = weddingConfig;

  return (
    <section className="py-20 md:py-32 px-4 bg-transparent relative overflow-hidden">
      {/* Background Soft Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/8 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Heavenly Ancestral Blessings Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="font-tamil text-base sm:text-lg text-[#7A3E10] font-semibold block mb-2">
            {invocation.blessings.intro}
          </span>
          <div className="mb-4 flex flex-col items-center">
            <span className="font-tamil text-xs sm:text-sm text-[#8C4A15] tracking-widest uppercase font-bold block">
              பெரியோர்களின் ஆசியுடன்
            </span>
            <span className="font-cormorant text-xs text-[#7A3E10] tracking-[0.2em] uppercase font-semibold mt-0.5 block">
              Blessings of Elders
            </span>
          </div>

          <div className="space-y-2 my-4">
            {invocation.blessings.elders.map((elder, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.8 }}
                className="font-tamil text-lg sm:text-2xl md:text-3xl text-[#381F0D] font-bold tracking-wide drop-shadow-sm"
              >
                {elder}
              </motion.p>
            ))}
          </div>

          <p className="font-tamil text-sm sm:text-base md:text-lg text-[#5C3B24] mt-4 max-w-xl mx-auto leading-relaxed font-medium">
            {invocation.blessings.invitationNote}
          </p>

          {/* Decorative motif */}
          <div className="flex items-center justify-center gap-3 w-36 mx-auto mt-6 opacity-70">
            <div className="h-[1px] flex-1 bg-[#C68A4C]" />
            <span className="text-[#8C4A15] text-xs">❦</span>
            <div className="h-[1px] flex-1 bg-[#C68A4C]" />
          </div>
        </motion.div>

        {/* Groom & Bride Editorial Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-6 sm:gap-8 items-center max-w-4xl mx-auto">
          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 bg-[#FFFDF8]/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-[0_15px_35px_rgba(74,36,10,0.1)] border-2 border-[#C68A4C]/60 text-center relative wedding-card"
          >
            <div className="mb-2 flex flex-col items-center">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C4A15] font-bold block font-tamil">
                {couple.groom.labelTamil || "மாப்பிள்ளை"}
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#7A3E10] font-semibold block font-cormorant">
                The Groom
              </span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#381F0D] font-bold">
              {couple.groom.tamilName || couple.groom.name}
            </h3>
            {couple.groom.nameTransliteration && (
              <p className="font-cormorant text-sm sm:text-base text-[#7A3E10] font-semibold tracking-wider mt-1">
                {couple.groom.nameTransliteration}
              </p>
            )}
            <div className="w-14 h-[1px] bg-[#C68A4C]/60 mx-auto my-3" />
            <p className="font-tamil text-sm sm:text-base text-[#5C3B24] font-medium leading-relaxed">
              பெற்றோர்
              <br />
              <span className="font-semibold text-[#381F0D]">
                {couple.groom.parents.mother} & {couple.groom.parents.father}
              </span>
            </p>
          </motion.div>

          {/* "With" Calligraphic Connector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-1 flex items-center justify-center py-2"
          >
            <span className="font-arizonia text-3xl sm:text-4xl text-[#8C4A15] font-bold">
              With
            </span>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 bg-[#FFFDF8]/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-[0_15px_35px_rgba(74,36,10,0.1)] border-2 border-[#C68A4C]/60 text-center relative wedding-card"
          >
            <div className="mb-2 flex flex-col items-center">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8C4A15] font-bold block font-tamil">
                {couple.bride.labelTamil || "மணப்பெண்"}
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#7A3E10] font-semibold block font-cormorant">
                The Bride
              </span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#381F0D] font-bold">
              {couple.bride.tamilName || couple.bride.name}
            </h3>
            {couple.bride.nameTransliteration && (
              <p className="font-cormorant text-sm sm:text-base text-[#7A3E10] font-semibold tracking-wider mt-1">
                {couple.bride.nameTransliteration}
              </p>
            )}
            <div className="w-14 h-[1px] bg-[#C68A4C]/60 mx-auto my-3" />
            <p className="font-tamil text-sm sm:text-base text-[#5C3B24] font-medium leading-relaxed">
              பெற்றோர்
              <br />
              <span className="font-semibold text-[#381F0D]">
                {couple.bride.parents.mother} & {couple.bride.parents.father}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
