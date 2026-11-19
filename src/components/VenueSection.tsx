import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export const VenueSection: React.FC = () => {
  const { venues } = weddingConfig;

  return (
    <section className="py-20 md:py-32 px-4 bg-transparent relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="font-tamil text-base sm:text-lg text-[#F7E2B5] font-semibold block mb-2">
            திருமணத் திருத்தலம் • WEDDING VENUE
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-[#FFFDF9] font-semibold tracking-wide uppercase">
            திருமண மண்டப முகவரி
          </h2>
          <div className="flex items-center justify-center gap-3 w-32 mx-auto mt-4 opacity-60">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">❖</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Venue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {venues.map((venue, idx) => (
            <motion.div
              key={venue.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="bg-[#25040B]/85 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-2xl border border-[#D4AF37]/50 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-[#D4AF37]"
            >
              {/* Corner filigree */}
              <div className="absolute top-2 left-2 text-[#D4AF37]/30 text-xs select-none">✦</div>
              <div className="absolute top-2 right-2 text-[#D4AF37]/30 text-xs select-none">✦</div>
              <div className="absolute bottom-2 left-2 text-[#D4AF37]/30 text-xs select-none">✦</div>
              <div className="absolute bottom-2 right-2 text-[#D4AF37]/30 text-xs select-none">✦</div>

              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-tamil text-[#D4AF37] font-bold block mb-2">
                  {venue.type}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-[#FFFDF9] font-semibold mb-3">
                  {venue.name}
                </h3>
                <div className="flex items-start gap-3 mt-5 mb-8">
                  <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <p className="font-tamil text-sm sm:text-base leading-relaxed text-[#F5E6CC]">
                    {venue.address}
                  </p>
                </div>
              </div>

              <div>
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl border border-[#D4AF37]/50 bg-gradient-to-r from-[#D4AF37] via-[#E5C365] to-[#B38D28] hover:from-[#E5C365] hover:to-[#D4AF37] text-[#1E0308] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl group hover:shadow-2xl transform hover:-translate-y-0.5 font-tamil"
                >
                  <Navigation className="w-4 h-4 text-[#1E0308] group-hover:scale-110 transition-transform" />
                  <span>Google Maps-ல் பார்க்க</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
