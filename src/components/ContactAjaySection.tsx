import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, UserCheck, ShieldCheck } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export const ContactAjaySection: React.FC = () => {
  const { contactAjay } = weddingConfig;

  return (
    <section className="py-16 md:py-24 px-4 bg-transparent relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FFFDF8]/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border-2 border-[#C68A4C]/60 shadow-[0_15px_45px_rgba(74,36,10,0.12)] text-center relative overflow-hidden"
        >
          {/* Avatar / Coordinator Icon */}
          <div className="w-16 h-16 rounded-full bg-[#FAF0DC] border border-[#C68A4C] text-[#8C4A15] flex items-center justify-center mx-auto mb-4 shadow-md">
            <UserCheck className="w-8 h-8 text-[#8C4A15]" />
          </div>

          <div className="mb-2 flex flex-col items-center">
            <span className="font-tamil text-xs uppercase tracking-widest text-[#8C4A15] font-bold block">
              தொடர்புக்கு
            </span>
            <span className="font-cormorant text-[11px] uppercase tracking-[0.25em] text-[#7A3E10] font-bold block">
              Contact
            </span>
          </div>

          <h3 className="font-cinzel text-2xl sm:text-3xl text-[#381F0D] font-bold mb-1">
            {contactAjay.tamilName}
          </h3>

          <div className="mb-6 flex flex-col items-center leading-tight">
            <span className="font-tamil text-xs sm:text-sm text-[#5C3B24] font-medium">
              திருமண ஒருங்கிணைப்பாளர்
            </span>
            <span className="font-cormorant text-xs text-[#8C4A15] font-bold tracking-wider mt-0.5">
              Contact Coordinator
            </span>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* Call Button */}
            <a
              href={`tel:${contactAjay.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#8C4A15] via-[#A85D1E] to-[#7A3E10] hover:brightness-105 text-[#FFFDF8] font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 group"
            >
              <Phone className="w-4 h-4 text-[#FFFDF8] group-hover:rotate-12 transition-transform" />
              <span>அழைக்க: {contactAjay.displayPhone}</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${contactAjay.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[#25D366] bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#1b6b33] font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>வாட்ஸ்அப் செய்ய</span>
            </a>
          </div>

          {contactAjay.note && (
            <p className="font-tamil text-xs text-[#5C3B24] max-w-md mx-auto leading-relaxed font-medium">
              {contactAjay.note}
            </p>
          )}

          {/* Golden Corner Accents */}
          <div className="absolute top-2.5 left-2.5 text-[#C68A4C]/50 text-xs">✦</div>
          <div className="absolute top-2.5 right-2.5 text-[#C68A4C]/50 text-xs">✦</div>
        </motion.div>
      </div>
    </section>
  );
};
