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
            scale: 1.08,
            filter: 'blur(8px)',
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e0b08] overflow-hidden select-none cursor-pointer"
          onClick={handleStartInvitation}
        >
          {/* Subtle Ambient Floating Flower Petals */}
          <FloatingPetals count={16} className="opacity-60" />

          {/* Deep Cinematic Warm Background Vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-[#241a14]/70 via-[#140f0c] to-[#080605] pointer-events-none" />

          {/* Camera Zoom & Envelope / Anime Wrapper */}
          <motion.div
            animate={
              isZoomingOut
                ? { scale: 1.18, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-full max-w-3xl max-h-[100vh] flex flex-col items-center justify-center p-3 sm:p-6"
          >
            {/* Wedding Monogram & Divine Invocation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="absolute top-4 sm:top-8 z-20 flex flex-col items-center pointer-events-none px-4"
            >
              {/* Monogram Seal */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#D4AF37]/80 bg-[#120E0B]/85 backdrop-blur-md flex items-center justify-center shadow-2xl relative mb-2">
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#F7E2B5] tracking-widest">
                  A & M
                </span>
              </div>

              <h1 className="font-cinzel text-lg sm:text-xl text-[#FAF9F7] tracking-wider mt-1 drop-shadow-md">
                {weddingConfig.couple.title}
              </h1>
            </motion.div>

            {/* Central Animated Namaste Couple Container */}
            <div className="relative w-full max-w-lg aspect-[4/5] sm:aspect-[4/3] max-h-[68vh] flex items-center justify-center rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-[#D4AF37]/60 bg-gradient-to-b from-[#25040B] via-[#1A0307] to-[#100104]">
              {/* Top Golden Filigree Border Accent */}
              <div className="absolute top-2 left-4 right-4 flex items-center justify-between pointer-events-none z-10 opacity-70">
                <span className="text-xs text-[#D4AF37]">❖</span>
                <span className="text-xs text-[#D4AF37]">❖</span>
              </div>

              {/* Animated Indian Wedding Namaste Couple GIF */}
              {isGif ? (
                <div className="w-full h-full flex items-center justify-center p-4 relative">
                  <img
                    src={animeGif}
                    alt="Animated Indian Wedding Namaste Couple"
                    className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(212,175,55,0.3)] select-none"
                  />
                  {/* Subtle golden ambient glow behind the couple */}
                  <div className="absolute inset-0 bg-radial-gradient from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                <video
                  ref={videoRef}
                  src={openingVideo}
                  poster={weddingConfig.openingCover.poster}
                  playsInline
                  muted
                  onEnded={handleFinish}
                  className="w-full h-full object-cover object-center select-none"
                />
              )}

              {/* Initial Tap to Open Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 z-20">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-[#F7E2B5] shadow-[0_0_25px_rgba(212,175,55,0.4)] mb-4 backdrop-blur-md"
                  >
                    <Mail className="w-8 h-8 sm:w-9 sm:h-9 text-[#D4AF37]" />
                  </motion.div>

                  <span className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C365] to-[#B38D28] text-[#1E0308] font-tamil text-sm sm:text-base font-bold shadow-xl tracking-wider uppercase transform hover:scale-105 transition-transform">
                    {weddingConfig.openingCover.tapHint}
                  </span>

                  <span className="text-xs font-tamil text-[#E5D0B2] mt-3">
                    (அழைப்பிதழைத் திறக்க )
                  </span>
                </div>
              )}

              {/* Progress bar during Anime GIF playback */}
              {isPlaying && (
                <div className="absolute bottom-4 left-6 right-6 z-20 flex flex-col items-center">
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mb-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FFF8E7]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-tamil text-[#F7E2B5] tracking-wider animate-pulse font-medium">
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
                className="mt-4 px-6 py-2 rounded-full bg-[#180206]/90 border border-[#D4AF37]/60 text-xs font-tamil text-[#F7E2B5] hover:bg-[#D4AF37] hover:text-[#180206] transition-colors shadow-lg"
              >
                நேரடியாக அழைப்பிதழுக்குச் செல்ல (Skip to Invite) ➔
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
