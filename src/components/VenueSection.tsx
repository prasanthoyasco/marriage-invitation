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
            <span className="font-cormorant text-xs sm:text-sm text-[#8C4A15] font-bold uppercase tracking-widest block">
              Wedding Venue
            </span>
            <span className="font-tamil text-sm sm:text-base text-[#7A3E10] font-semibold block mt-0.5">
              திருமணத் திருத்தலம்
            </span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-[#381F0D] font-bold tracking-wide uppercase drop-shadow-sm">
            Venue & Location Details
          </h2>
          <span className="font-tamil text-xs sm:text-sm text-[#7A3E10] font-medium block mt-1">
            திருமண மண்டப முகவரி
          </span>
          <div className="flex items-center justify-center gap-3 w-32 mx-auto mt-4 opacity-60">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C68A4C]" />
            <span className="text-[#8C4A15] text-xs">❖</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C68A4C]" />
          </div>
        </motion.div>

        {/* Venue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
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
                  <span className="text-[11px] uppercase tracking-[0.25em] font-cormorant text-[#8C4A15] font-bold block">
                    Wedding Venue & Kalyana Mandapam
                  </span>
                  <span className="text-xs uppercase tracking-wider font-tamil text-[#7A3E10] font-medium block">
                    திருமண மஹால்
                  </span>
                </div>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-[#381F0D] font-bold mb-3">
                  {venue.name}
                </h3>
                <div className="flex items-start gap-3 mt-5 mb-8">
                  <MapPin className="w-5 h-5 text-[#8C4A15] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm sm:text-base leading-relaxed text-[#381F0D] font-semibold">
                      {venue.address}
                    </p>
                    <p className="font-tamil text-xs text-[#7A3E10] mt-1 font-medium">
                      ஸ்ரீ ரங்கநாயகி கல்யாண மண்டபம், நங்கநல்லூர், சென்னை
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl border border-[#C68A4C] bg-gradient-to-r from-[#8C4A15] via-[#A85D1E] to-[#7A3E10] hover:brightness-105 text-[#FFFDF8] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg group hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Navigation className="w-4 h-4 text-[#FFFDF8] group-hover:scale-110 transition-transform" />
                  <div className="flex flex-col items-center leading-tight">
                    <span className="font-cinzel text-xs sm:text-sm tracking-wider">Open in Google Maps</span>
                    <span className="font-tamil text-[10px] text-[#FAF0DC]/80 font-normal">
                      வரைபடத்தில் பார்க்க
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
