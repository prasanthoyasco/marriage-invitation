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
      className={`relative rounded-3xl overflow-hidden border transition-all duration-500 shadow-[0_15px_45px_rgba(74,36,10,0.12)] ${
        isMuhurtham
          ? 'bg-[#FFFDF8]/98 border-2 border-[#C68A4C] ring-2 ring-[#C68A4C]/30 text-[#381F0D]'
          : isReception
          ? 'bg-[#FFFDF8]/98 border-2 border-[#B8860B]/70 text-[#381F0D]'
          : 'bg-[#FFFDF8]/95 backdrop-blur-md border border-[#C68A4C]/60 text-[#381F0D]'
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
          className={`relative lg:col-span-6 h-80 sm:h-96 lg:h-full overflow-hidden bg-black/60 ${
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
                <div className="px-3.5 py-1.5 rounded-full bg-[#FFFDF8]/90 backdrop-blur-md border border-[#C68A4C] flex items-center gap-1.5 shadow-lg">
                  <Film className="w-3.5 h-3.5 text-[#8C4A15]" />
                  <span className="text-xs font-semibold tracking-wider text-[#381F0D]">
                    {event.videoDurationText || "Video Clip"}
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
            <div className="absolute top-3 right-3 pointer-events-none px-3.5 py-1.5 bg-[#FAF0DC]/95 backdrop-blur-md rounded-full border border-[#C68A4C] shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#8C4A15] animate-spin" style={{ animationDuration: '6s' }} />
              <div className="flex flex-col text-right leading-tight">
                <span className="text-xs font-cormorant font-bold uppercase tracking-wider text-[#5C2D0C]">
                  Sacred Mangalyadharanam
                </span>
                <span className="text-[10px] font-tamil text-[#8C4A15] font-medium">
                  மாங்கல்ய தாரணம் • கெட்டிமேளம்
                </span>
              </div>
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
            <div className="flex flex-col mb-2 leading-tight">
              <span className="text-xs uppercase tracking-[0.2em] font-cormorant font-bold text-[#8C4A15]">
                Ceremony 0{index + 1}
              </span>
              <span className="text-[11px] font-tamil text-[#7A3E10] font-medium mt-0.5">
                நிகழ்வு 0{index + 1}
              </span>
            </div>

            {/* Event Main Title */}
            <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 tracking-wide text-[#381F0D] drop-shadow-sm">
              {event.title}
            </h3>
            <span className="font-tamil text-xs sm:text-sm text-[#8C4A15] font-semibold block mb-3">
              {isReception ? 'வரவேற்பு விழா & இன்னிசை இரவு' : 'சுப முகூர்த்தம் & மாங்கல்ய தாரணம்'}
            </span>

            {/* Sacred Mantra / Ritual Quote */}
            {isMuhurtham && (
              <div className="mb-3">
                <p className="font-cormorant text-sm sm:text-base text-[#381F0D] font-bold italic">
                  "Together as one in sacred vows, bound by love and divine blessings."
                </p>
                <p className="font-tamil text-xs text-[#7A2508] font-medium mt-0.5">
                  "மாங்கல்யம் தந்துனானேன மம ஜீவன ஹேதுனா • கண்டே பத்னாமி சுபகே சஞ்சீவ சரதசதம்"
                </p>
              </div>
            )}

            {isReception && (
              <div className="mb-3">
                <p className="font-cormorant text-sm sm:text-base text-[#381F0D] font-bold italic">
                  "An evening of melody, celebration, and joy to welcome the newlyweds."
                </p>
                <p className="font-tamil text-xs text-[#7A2508] font-medium mt-0.5">
                  "இன்னிசை முழங்க, இருமனம் மகிழ நடைபெறும் ஆனந்த வரவேற்பு விழா"
                </p>
              </div>
            )}

            {/* Date & Time Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 my-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border bg-[#FAF0DC] border-[#C68A4C]/50 text-[#5C2D0C]">
                <Calendar className="w-4 h-4 text-[#8C4A15]" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border bg-[#FAF0DC] border-[#C68A4C]/50 text-[#5C2D0C]">
                <Clock className="w-4 h-4 text-[#8C4A15]" />
                <span>{event.time}</span>
              </div>
            </div>

            {/* Secondary Time (e.g. DJ Party / Muhurtham Thaali Time) */}
            {event.secondaryTime && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border bg-[#FAF0DC] border-[#C68A4C]/60 text-[#7A3E10] text-xs sm:text-sm font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#8C4A15]" />
                <span>{event.secondaryTime}</span>
              </div>
            )}

            {/* Description */}
            <div className="mb-6 space-y-1.5">
              <p className="text-sm sm:text-base leading-relaxed text-[#381F0D] font-medium">
                {event.description}
              </p>
              {event.tamilDescription && (
                <p className="font-tamil text-xs sm:text-sm leading-relaxed text-[#7A3E10]">
                  {event.tamilDescription}
                </p>
              )}
            </div>

            {/* Venue & Address */}
            <div className="pt-4 border-t border-[#C68A4C]/30 flex items-start gap-3 text-[#381F0D]">
              <MapPin className="w-4 h-4 text-[#8C4A15] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-sm sm:text-base tracking-wide text-[#381F0D]">
                  {event.venueName}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed mt-0.5 text-[#5C3B24]">
                  {event.address}
                </p>
                <p className="font-tamil text-xs text-[#7A3E10] mt-0.5">
                  ஸ்ரீ ரங்கநாயகி கல்யாண மண்டபம், நங்கநல்லூர், சென்னை
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
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-[#C68A4C] bg-gradient-to-r from-[#8C4A15] via-[#A85D1E] to-[#7A3E10] hover:brightness-105 text-[#FFFDF8] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-lg group"
            >
              <Navigation className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-[#FFFDF8]" />
              <div className="flex flex-col items-center leading-tight">
                <span className="font-cormorant text-xs sm:text-sm uppercase tracking-wider font-bold">
                  Get Directions
                </span>
                <span className="font-tamil text-[10px] text-[#FAF0DC]/85 font-normal">
                  வழித்தடம் காண்க
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
