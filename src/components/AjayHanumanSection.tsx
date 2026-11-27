import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Sparkles, RotateCcw } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export const AjayHanumanSection: React.FC = () => {
  const { devotionalBlessing } = weddingConfig;
  const [hasVideoEnded, setHasVideoEnded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  if (!devotionalBlessing.enabled) return null;

  const videoSrc = devotionalBlessing.video || '/assets/images/ajay-hanuman.mp4';
  const gifSrc = devotionalBlessing.gif || devotionalBlessing.image || '/assets/images/ajay-hanuman.gif';

  // Play video whenever the section scrolls into view (if not yet ended)
  useEffect(() => {
    if (isInView && videoRef.current && !hasVideoEnded) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Fallback to gif if autoplay is blocked by browser policy
        setHasVideoEnded(true);
      });
    }
  }, [isInView, hasVideoEnded]);

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHasVideoEnded(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, 100);
  };

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 bg-transparent relative overflow-hidden">
      {/* Divine Radiant Golden Sun Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl border border-[#C68A4C]/50 bg-[#FAF0DC] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#8C4A15]" />
            <div className="flex flex-col items-center leading-tight">
              <span className="font-tamil text-xs sm:text-sm text-[#7A3E10] font-bold">
                தெய்வீக ஆசீர்வாதம்
              </span>
              <span className="font-cormorant text-[11px] sm:text-xs text-[#8C4A15] uppercase tracking-widest font-bold">
                Divine Blessings
              </span>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-[#8C4A15]" />
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl text-[#381F0D] font-bold tracking-wide uppercase drop-shadow-sm">
            {devotionalBlessing.title}
          </h2>

          <p className="font-tamil text-base sm:text-xl text-[#5C3B24] mt-2 font-medium">
            {devotionalBlessing.tamilTitle}
          </p>

          <div className="flex items-center justify-center gap-3 w-32 mx-auto mt-4 opacity-75">
            <div className="h-[1px] flex-1 bg-[#C68A4C]" />
            <span className="text-[#8C4A15] text-sm">🕉</span>
            <div className="h-[1px] flex-1 bg-[#C68A4C]" />
          </div>
        </motion.div>

        {/* Ornate Devotional Card Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FFFDF8]/95 p-6 sm:p-10 md:p-12 rounded-3xl border-2 border-[#C68A4C]/60 shadow-[0_20px_60px_rgba(74,36,10,0.12)] relative"
        >
          {/* Temple Arch Outline */}
          <div className="relative max-w-lg mx-auto overflow-hidden rounded-2xl border-2 border-[#C68A4C]/50 shadow-xl group">
            {/* Video or GIF of Ajay as Hanuman */}
            <div className="aspect-[4/5] sm:aspect-[3/4] w-full bg-[#FAF4E6] relative flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {!hasVideoEnded ? (
                  <motion.video
                    key="hanuman-video"
                    ref={(el) => {
                      videoRef.current = el;
                      if (el) el.muted = true;
                    }}
                    src={videoSrc}
                    playsInline
                    muted
                    autoPlay
                    onEnded={() => setHasVideoEnded(true)}
                    onError={() => setHasVideoEnded(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover object-center select-none"
                  />
                ) : (
                  <motion.img
                    key="hanuman-gif"
                    src={gifSrc}
                    alt={devotionalBlessing.title}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="w-full h-full object-cover object-center select-none"
                  />
                )}
              </AnimatePresence>

              {/* Replay Video Button (visible after video finishes and gif loops) */}
              {hasVideoEnded && (
                <button
                  type="button"
                  onClick={handleReplay}
                  className="absolute top-3 right-3 z-20 px-3 py-1.5 rounded-full bg-[#FFFDF8]/90 hover:bg-[#C68A4C] hover:text-[#FFFDF8] text-[#5C2D0C] text-xs font-semibold border border-[#C68A4C] shadow-md flex items-center gap-1.5 transition-all cursor-pointer backdrop-blur-xs transform hover:scale-105"
                  title="Replay Video (மீண்டும் காண)"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="font-cormorant text-xs font-bold uppercase tracking-wider">Replay</span>
                </button>
              )}

              {/* Overlay Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Sacred Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-[#C68A4C]/50">
                <span className="text-xs sm:text-sm font-tamil text-[#FFF8E7] font-semibold">
                  ஸ்ரீ ராமஜெயம் • என்றும் ஆசியுடன்
                </span>
                <span className="text-[#E0B278] text-xs">✦</span>
              </div>
            </div>
          </div>

          {/* Golden Corner Ornaments */}
          <div className="absolute top-3 left-3 text-[#C68A4C]/50 text-sm select-none">❖</div>
          <div className="absolute top-3 right-3 text-[#C68A4C]/50 text-sm select-none">❖</div>
          <div className="absolute bottom-3 left-3 text-[#C68A4C]/50 text-sm select-none">❖</div>
          <div className="absolute bottom-3 right-3 text-[#C68A4C]/50 text-sm select-none">❖</div>
        </motion.div>
      </div>
    </section>
  );
};
