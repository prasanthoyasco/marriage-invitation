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
          <div className="mb-2 flex flex-col items-center">
            <span className="font-tamil text-base sm:text-lg text-[#7A3E10] font-semibold block">
              திருமணத் திருத்தலம்
            </span>
            <span className="font-cormorant text-xs sm:text-sm text-[#8C4A15] font-bold uppercase tracking-widest mt-0.5 block">
              Wedding Venue
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-[#381F0D] font-bold tracking-wide uppercase drop-shadow-sm">
            திருமண மண்டப முகவரி
          </h2>
          <div className="flex items-center justify-center gap-3 w-32 mx-auto mt-4 opacity-60">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C68A4C]" />
            <span className="text-[#8C4A15] text-xs">❖</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C68A4C]" />
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
              className="bg-[#FFFDF8]/95 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-[0_15px_45px_rgba(74,36,10,0.12)] border-2 border-[#C68A4C]/60 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-[#8C4A15]"
            >
              {/* Corner filigree */}
              <div className="absolute top-2 left-2 text-[#C68A4C]/40 text-xs select-none">✦</div>
              <div className="absolute top-2 right-2 text-[#C68A4C]/40 text-xs select-none">✦</div>
              <div className="absolute bottom-2 left-2 text-[#C68A4C]/40 text-xs select-none">✦</div>
              <div className="absolute bottom-2 right-2 text-[#C68A4C]/40 text-xs select-none">✦</div>

              <div>
                <div className="mb-2 flex flex-col">
                  <span className="text-xs uppercase tracking-[0.2em] font-tamil text-[#8C4A15] font-bold block">
                    திருமண மஹால்
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.25em] font-cormorant text-[#7A3E10] font-bold block">
                    Wedding Venue
                  </span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-[#381F0D] font-bold mb-3">
                  {venue.name}
                </h3>
                <div className="flex items-start gap-3 mt-5 mb-8">
                  <MapPin className="w-5 h-5 text-[#8C4A15] flex-shrink-0 mt-0.5" />
                  <p className="font-tamil text-sm sm:text-base leading-relaxed text-[#5C3B24] font-medium">
                    {venue.address}
                  </p>
                </div>
              </div>

              <div>
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl border border-[#C68A4C] bg-gradient-to-r from-[#8C4A15] via-[#A85D1E] to-[#7A3E10] hover:brightness-105 text-[#FFFDF8] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg group hover:shadow-xl transform hover:-translate-y-0.5 font-tamil"
                >
                  <Navigation className="w-4 h-4 text-[#FFFDF8] group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col items-center leading-tight">
                    <span>வரைபடத்தில் பார்க்க</span>
                    <span className="font-cormorant text-[11px] uppercase tracking-wider text-[#FAF0DC] font-bold">
                      Open in Google Maps
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
