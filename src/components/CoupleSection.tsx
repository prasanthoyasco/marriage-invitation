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
          <span className="font-tamil text-base sm:text-lg text-[#F7E2B5] font-semibold block mb-2">
            {invocation.blessings.intro}
          </span>
          <span className="font-tamil text-xs sm:text-sm text-[#D4AF37] tracking-widest uppercase block mb-4 font-bold">
            பெரியோர்களின் ஆசியுடன் • BLESSINGS OF ELDERS
          </span>

          <div className="space-y-2 my-4">
            {invocation.blessings.elders.map((elder, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.15, duration: 0.8 }}
                className="font-tamil text-lg sm:text-2xl md:text-3xl text-[#FFFDF9] font-semibold tracking-wide drop-shadow-sm"
              >
                {elder}
              </motion.p>
            ))}
          </div>

          <p className="font-tamil text-sm sm:text-base md:text-lg text-[#F0DCBA] mt-4 max-w-xl mx-auto leading-relaxed">
            {invocation.blessings.invitationNote}
          </p>

          {/* Decorative motif */}
          <div className="flex items-center justify-center gap-3 w-36 mx-auto mt-6 opacity-70">
            <div className="h-[1px] flex-1 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">❦</span>
            <div className="h-[1px] flex-1 bg-[#D4AF37]" />
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
            className="md:col-span-5 bg-[#25040B]/85 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-2xl border border-[#D4AF37]/50 text-center relative wedding-card"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-2 font-tamil">
              மணமகன் • THE GROOM
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FFFDF9] font-bold">
              {couple.groom.tamilName || couple.groom.fullName}
            </h3>
            <div className="w-14 h-[1px] bg-[#D4AF37]/60 mx-auto my-3" />
            <p className="font-tamil text-sm sm:text-base text-[#F5DEB3] font-medium leading-relaxed">
              பெற்றோர்
              <br />
              <span className="font-semibold text-[#FFFDF9]">
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
            <span className="font-arizonia text-3xl sm:text-4xl text-[#D4AF37]">
              With
            </span>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 bg-[#25040B]/85 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-2xl border border-[#D4AF37]/50 text-center relative wedding-card"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold block mb-2 font-tamil">
              மணமகள் • THE BRIDE
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FFFDF9] font-bold">
              {couple.bride.tamilName || couple.bride.fullName}
            </h3>
            <div className="w-14 h-[1px] bg-[#D4AF37]/60 mx-auto my-3" />
            <p className="font-tamil text-sm sm:text-base text-[#F5DEB3] font-medium leading-relaxed">
              பெற்றோர்
              <br />
              <span className="font-semibold text-[#FFFDF9]">
                {couple.bride.parents.mother} & {couple.bride.parents.father}
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
