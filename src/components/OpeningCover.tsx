import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Heart } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { FloatingPetals } from './ui/FloatingPetals';

interface OpeningCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const OpeningCover: React.FC<OpeningCoverProps> = ({ isOpen, onOpen }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isZoomingOut, setIsZoomingOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const animeGif =
    weddingConfig.openingCover.animeGif ||
    weddingConfig.couple.animeGif ||
    '/Animated Indian Wedding Namaste Couple.gif';

  const openingVideo = weddingConfig.openingCover.video || weddingConfig.openingCover.animeVideo;
  const isGif = animeGif.toLowerCase().endsWith('.gif') || openingVideo?.toLowerCase().endsWith('.gif');

  // Prevent background scrolling while opening cover is active
  useEffect(() => {
    if (!isOpen) {
      document.body.classList.add('overflow-hidden-envelope');
    } else {
      document.body.classList.remove('overflow-hidden-envelope');
    }
    return () => {
      document.body.classList.remove('overflow-hidden-envelope');
    };
  }, [isOpen]);

  // 3.5s Anime Timer for GIF playback
  useEffect(() => {
    if (!isPlaying || !isGif) return;

    const duration = 3800; // 3.8 seconds
    const intervalTime = 50;
    const step = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          handleFinish();
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, isGif]);

  const handleStartInvitation = async () => {
    if (isPlaying || isOpen) return;
    setIsPlaying(true);

    // Call onOpen to trigger background audio
    onOpen();

    if (!isGif && videoRef.current) {
      try {
        await videoRef.current.play();
      } catch (err) {
        console.warn('Opening video playback was blocked or failed:', err);
        handleFinish();
      }
    }
  };

  const handleFinish = () => {
    setIsZoomingOut(true);
    // Camera zoom reveal transition
    setTimeout(() => {
      setIsCompleted(true);
      onOpen();
    }, 750);
  };

  if (isOpen && isCompleted) return null;

  return (
    <AnimatePresence>
      {(!isOpen || !isCompleted) && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.06,
            filter: 'blur(8px)',
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden select-none cursor-pointer p-4"
          style={{
            backgroundImage: `radial-gradient(circle at center, #FDF9EE 0%, #F6ECDB 65%, #EAD6B4 100%)`,
          }}
          onClick={handleStartInvitation}
        >
          {/* Subtle Ambient Floating Flower Petals in Background */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <FloatingPetals count={16} className="opacity-60" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#8C4A15]/5 to-[#5C2D0C]/15 pointer-events-none" />
          </div>

          {/* Camera Zoom & Envelope / Anime Wrapper */}
          <motion.div
            animate={
              isZoomingOut
                ? { scale: 1.15, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-sm sm:max-w-md flex flex-col items-center justify-center mx-auto"
          >
            {/* Wedding Monogram & Divine Invocation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="flex flex-col items-center pointer-events-none px-4 mb-3 sm:mb-4 text-center"
            >
              {/* Monogram Seal */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#C68A4C] bg-[#FFFDF8] flex items-center justify-center shadow-lg mb-2">
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#8C4A15] tracking-widest">
                  {weddingConfig.couple.monogram || 'M & P'}
                </span>
              </div>

              <h1 className="font-cinzel text-xs sm:text-sm md:text-base text-center text-[#381F0D] tracking-[0.2em] uppercase font-bold drop-shadow-xs">
                {weddingConfig.couple.title}
              </h1>
            </motion.div>

            {/* Central Animated Namaste Couple Container */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(74,36,10,0.22)] border-2 border-[#C68A4C]/80 bg-gradient-to-b from-[#FFFDF8] via-[#FAF4E6] to-[#F3E5CE]">
              {/* Top Golden Filigree Border Accent */}
              <div className="absolute top-2.5 left-4 right-4 flex items-center justify-between pointer-events-none z-10 opacity-70">
                <span className="text-xs text-[#8C4A15]">❖</span>
                <span className="text-xs text-[#8C4A15]">❖</span>
              </div>

              {/* Animated Indian Wedding Namaste Couple GIF */}
              {isGif ? (
                <div className="w-full flex items-center justify-center p-3 relative">
                  <img
                    src={animeGif}
                    alt="Animated Indian Wedding Namaste Couple"
                    className="w-full h-auto max-h-[52vh] sm:max-h-[58vh] object-contain filter drop-shadow-[0_8px_20px_rgba(140,74,21,0.2)] select-none"
                  />
                  {/* Subtle golden ambient glow behind the couple */}
                  <div className="absolute inset-0 bg-radial-gradient from-[#C68A4C]/15 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <div className="w-full aspect-[4/5] sm:aspect-[3/4] relative">
                  <video
                    ref={videoRef}
                    src={openingVideo}
                    poster={weddingConfig.openingCover.poster}
                    playsInline
                    muted
                    onEnded={handleFinish}
                    className="w-full h-full object-cover object-center select-none"
                  />
                </div>
              )}

              {/* Initial Tap to Open Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-3 px-4 z-20">
                  <span className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#8C4A15] via-[#A85D1E] to-[#7A3E10] text-[#FFFDF8] font-bold shadow-xl tracking-wider uppercase transform hover:scale-105 transition-transform flex flex-col items-center leading-tight">
                    <span className="font-cinzel text-xs sm:text-sm font-bold tracking-wider">
                      Tap to Open Invitation
                    </span>
                    <span className="font-cormorant text-[10px] font-bold text-[#FAF0DC] tracking-wider uppercase">
                      Tap to Open
                    </span>
                  </span>
                  <span className="text-xs font-tamil text-[#5C3B24] mt-2 font-semibold">
                    (அழைப்பிதழைத் திறக்க)
                  </span>
                </div>
              )}

              {/* Progress bar during Anime GIF playback */}
              {isPlaying && (
                <div className="absolute bottom-4 left-6 right-6 z-20 flex flex-col items-center">
                  <div className="w-full h-1 bg-[#8C4A15]/20 rounded-full overflow-hidden mb-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#8C4A15] to-[#C68A4C]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-tamil text-[#5C3B24] tracking-wider animate-pulse font-bold">
                    திருமண அழைப்பிதழ் திறக்கப்படுகிறது...
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Skip / Enter Button if animation is active */}
            {isPlaying && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFinish();
                }}
                className="mt-4 px-6 py-2 rounded-full bg-[#FAF0DC] border-2 border-[#C68A4C] text-xs font-tamil text-[#381F0D] hover:bg-[#F5E6CC] transition-colors shadow-lg flex flex-col items-center leading-tight font-semibold"
              >
                <span>நேரடியாக அழைப்பிதழுக்குச் செல்ல</span>
                <span className="font-cormorant text-[11px] uppercase tracking-widest text-[#8C4A15] font-bold">
                  Skip to Invite ➔
                </span>
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
