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
          className="bg-gradient-to-b from-[#27040B]/90 to-[#180206]/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/50 shadow-2xl text-center relative overflow-hidden"
        >
          {/* Avatar / Coordinator Icon */}
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#F7E2B5] flex items-center justify-center mx-auto mb-4 shadow-lg">
            <UserCheck className="w-8 h-8 text-[#D4AF37]" />
          </div>

          <span className="font-tamil text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
            தொடர்புக்கு • Contact
          </span>

          <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FFFDF9] font-bold mb-1">
            {contactAjay.tamilName} ({contactAjay.name})
          </h3>

          <p className="font-tamil text-xs sm:text-sm text-[#E8D1A7]/90 mb-6">
            {contactAjay.role}
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* Call Button */}
            <a
              href={`tel:${contactAjay.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38D28] hover:from-[#E5C365] hover:to-[#D4AF37] text-[#1E0308] font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl transform hover:-translate-y-0.5 group"
            >
              <Phone className="w-4 h-4 text-[#1E0308] group-hover:rotate-12 transition-transform" />
              <span>அழைக்க: {contactAjay.displayPhone}</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${contactAjay.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-[#25D366] bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#FFFDF9] font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>வாட்ஸ்அப் செய்ய</span>
            </a>
          </div>

          {contactAjay.note && (
            <p className="font-tamil text-xs text-[#E5D0B2]/75 max-w-md mx-auto leading-relaxed">
              {contactAjay.note}
            </p>
          )}

          {/* Golden Corner Accents */}
          <div className="absolute top-2.5 left-2.5 text-[#D4AF37]/30 text-xs">✦</div>
          <div className="absolute top-2.5 right-2.5 text-[#D4AF37]/30 text-xs">✦</div>
        </motion.div>
      </div>
    </section>
  );
};
