import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Navigation, Sparkles, Play, Pause, Volume2, VolumeX, Film } from 'lucide-react';
import { WeddingEvent } from '../types/wedding';

interface EventCardProps {
  event: WeddingEvent;
  index: number;
}

export const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const isEven = index % 2 === 0;
  const isMuhurtham = event.id === 'muhurtham';
  const isReception = event.id === 'reception';

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-3xl overflow-hidden border transition-all duration-500 shadow-2xl ${
        isMuhurtham
          ? 'bg-gradient-to-b from-[#2F040E]/95 via-[#3B0714]/95 to-[#24030B]/98 border-[#D4AF37] ring-2 ring-[#D4AF37]/35'
          : isReception
          ? 'bg-gradient-to-b from-[#22040B]/95 via-[#1A0308]/95 to-[#130205]/98 text-[#FAF9F7] border-[#E5C583]/50'
          : 'bg-[#25040B]/90 backdrop-blur-md border border-[#D4AF37]/45 text-[#FFFDF9]'
      }`}
    >
      {/* Muhurtham Sacred Golden Glow */}
      {isMuhurtham && (
        <div className="absolute inset-0 bg-radial-gradient from-[#D4AF37]/20 via-transparent to-transparent pointer-events-none" />
      )}

      {/* Reception Bokeh Glow */}
      {isReception && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          <div className="absolute top-4 left-1/4 w-40 h-40 rounded-full bg-[#E0B278]/25 blur-3xl animate-pulse" />
          <div className="absolute bottom-6 right-1/4 w-48 h-48 rounded-full bg-[#C2A773]/30 blur-3xl animate-pulse" />
        </div>
      )}

      <div className={`grid grid-cols-1 lg:grid-cols-12 items-center gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Event Video / Image Media Column */}
        <div
          className={`relative lg:col-span-6 h-80 sm:h-96 lg:h-[480px] overflow-hidden bg-black/60 ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {event.video && !videoError ? (
            <div className="relative w-full h-full group" onClick={toggleVideoPlay}>
              <video
                ref={videoRef}
                src={event.video}
                poster={event.videoPoster || event.image}
                playsInline
                loop
                muted={isMuted}
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover object-center cursor-pointer select-none"
              />

              {/* Video Play / Pause Overlay Button */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[1px] transition-opacity duration-300 ${
                  isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                }`}
              >
                <button
                  type="button"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="w-16 h-16 rounded-full bg-[#D4AF37]/90 text-[#1E0308] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-current" />
                  ) : (
                    <Play className="w-8 h-8 fill-current ml-1" />
                  )}
                </button>
              </div>

              {/* Top Video Tag */}
              <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-full bg-[#180206]/85 backdrop-blur-md border border-[#D4AF37] flex items-center gap-1.5 shadow-lg">
                  <Film className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-xs font-tamil font-bold tracking-wider text-[#FFF8E7]">
                    {event.videoDurationText || "வீடியோ பதிவு"}
                  </span>
                </div>
              </div>

              {/* Audio Mute/Unmute Toggle on Video */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/85 transition-colors z-20"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full h-full overflow-hidden relative"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover object-center select-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
            </motion.div>
          )}

          {/* Muhurtham Sacred Badge */}
          {isMuhurtham && (
            <div className="absolute top-3 right-3 pointer-events-none px-3.5 py-1.5 bg-[#4A0E17]/90 backdrop-blur-md rounded-full border border-[#D4AF37] shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-xs font-tamil font-bold tracking-widest text-[#FFF8E7]">
                மாங்கல்ய தாரணம் • கெட்டிமேளம்
              </span>
            </div>
          )}
        </div>

        {/* Storytelling & Logistics Content */}
        <div
          className={`p-6 sm:p-8 lg:p-12 lg:col-span-6 flex flex-col justify-between ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div>
            {/* Chapter Tag */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-[0.2em] font-tamil font-semibold text-[#D4AF37]">
                நிகழ்வு 0{index + 1} • {event.subtitle}
              </span>
            </div>

            {/* Event Main Title (Tamil) */}
            <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 tracking-wide text-[#FFFDF9] drop-shadow-sm">
              {event.tamilTitle || event.title}
            </h3>

            {/* Sacred Mantra / Ritual Quote */}
            {isMuhurtham && (
              <p className="font-tamil text-sm text-[#F7E2B5] mb-3 font-semibold">
                "மாங்கல்யம் தந்துனானேன மம ஜீவன ஹேதுனா • கண்டே பத்னாமி சுபகே சஞ்சீவ சரதசதம்"
              </p>
            )}

            {isReception && (
              <p className="font-tamil text-sm text-[#F7E2B5] mb-3 font-medium">
                "இன்னிசை முழங்க, இருமனம் மகிழ நடைபெறும் ஆனந்த வரவேற்பு விழா"
              </p>
            )}

            {/* Date & Time Badges in Tamil */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 my-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border bg-[#180206]/85 border-[#D4AF37]/50 text-[#F5E6C8]">
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-tamil">{event.date}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border bg-[#180206]/85 border-[#D4AF37]/50 text-[#F5E6C8]">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-tamil">{event.time}</span>
              </div>
            </div>

            {/* Secondary Time (e.g. DJ Party / Muhurtham Thaali Time) */}
            {event.secondaryTime && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border bg-[#D4AF37]/15 border-[#D4AF37]/60 text-[#F7E2B5] text-xs sm:text-sm font-tamil font-semibold mb-4">
                <span>{event.secondaryTime}</span>
              </div>
            )}

            {/* Description */}
            <p className="font-tamil text-sm sm:text-base mb-6 leading-relaxed text-[#F0DCBA]">
              {event.tamilDescription || event.description}
            </p>

            {/* Venue & Address */}
            <div className="pt-4 border-t border-[#D4AF37]/30 flex items-start gap-3 text-[#FFFDF9]">
              <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm sm:text-base font-tamil tracking-wide text-[#FFFDF9]">
                  {event.venueName}
                </p>
                <p className="text-xs sm:text-sm font-tamil leading-relaxed mt-0.5 text-[#D1B99F]">
                  {event.address}
                </p>
              </div>
            </div>
          </div>

          {/* Action Button: Get Directions */}
          <div className="mt-7 pt-2">
            <a
              href={event.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-[#D4AF37] bg-gradient-to-r from-[#D4AF37] to-[#B8922E] hover:brightness-110 text-[#1E0308] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-xl group font-tamil"
            >
              <Navigation className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#1E0308]" />
              <span>வழித்தடம் காண்க (Google Maps)</span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
