import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Sparkles, Eye, X, Film, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import ReactPlayer from 'react-player';
import { weddingConfig } from '../config/wedding';
import { FloatingPetals } from './ui/FloatingPetals';

const galleryImages = [
  {
    src: '/assets/gallary/engagement-portrait.png',
    title: 'Engagement Portrait',
    tamilTitle: 'நிச்சயதார்த்த தருணம்',
  },
  {
    src: '/assets/gallary/engagement-selfie.png',
    title: 'Cherished Moments',
    tamilTitle: 'மகிழ்ச்சியான தருணங்கள்',
  },
  {
    src: '/assets/gallary/selfie-bikeride.png',
    title: 'Sweet Journey Together',
    tamilTitle: 'இனிமையான பயணம்',
  },
];

export const HeroSection: React.FC = () => {
  const { couple, invocation, dates } = weddingConfig;
  const [showLightbox, setShowLightbox] = useState(false);
  const [showAnimeModal, setShowAnimeModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [galleryDirection, setGalleryDirection] = useState(0);

  const animeVideoSrc = couple.animeVideo || '/assets/images/couple-namaste.gif';

  // Looping navigation functions
  const nextGalleryImage = () => {
    setGalleryDirection(1);
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setGalleryDirection(-1);
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Swipe / Drag gesture tracking for mobile touch & desktop mouse
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isMouseDownRef = useRef<boolean>(false);
  const mouseStartXRef = useRef<number | null>(null);
  const mouseStartYRef = useRef<number | null>(null);
  const hasSwipedRef = useRef<boolean>(false);

  const SWIPE_THRESHOLD = 35; // pixels needed to trigger slide

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    hasSwipedRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - touchStartXRef.current;
    const deltaY = currentY - touchStartYRef.current;

    // Detect predominantly horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (!hasSwipedRef.current) {
        if (deltaX < -SWIPE_THRESHOLD) {
          // Swipe LEFT -> next image (looping)
          nextGalleryImage();
          hasSwipedRef.current = true;
        } else if (deltaX > SWIPE_THRESHOLD) {
          // Swipe RIGHT -> prev image (looping)
          prevGalleryImage();
          hasSwipedRef.current = true;
        }
      }
    }
  };

  const handleTouchEnd = () => {
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    hasSwipedRef.current = false;
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDownRef.current = true;
    mouseStartXRef.current = e.clientX;
    mouseStartYRef.current = e.clientY;
    hasSwipedRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || mouseStartXRef.current === null || mouseStartYRef.current === null) return;
    const deltaX = e.clientX - mouseStartXRef.current;
    const deltaY = e.clientY - mouseStartYRef.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (!hasSwipedRef.current) {
        if (deltaX < -SWIPE_THRESHOLD) {
          nextGalleryImage();
          hasSwipedRef.current = true;
        } else if (deltaX > SWIPE_THRESHOLD) {
          prevGalleryImage();
          hasSwipedRef.current = true;
        }
      }
    }
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
    mouseStartXRef.current = null;
    mouseStartYRef.current = null;
    hasSwipedRef.current = false;
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    }),
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-10 pb-20 md:pt-16 md:pb-28 px-4 overflow-hidden bg-transparent">
      {/* Cinematic Film Grain & Texture Overlay */}
      <div className="absolute inset-0 cinematic-grain pointer-events-none opacity-25" />

      {/* Soft Ambient Golden Sandalwood Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#E8D0A5]/40 blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* 1. Divine Lord Ganesha Emblem & Pillayar Suzhi */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2 flex flex-col items-center"
        >
          {/* Pillayar Suzhi */}
          {/* <span className="font-tamil text-2xl sm:text-3xl text-[#7B3F11] font-bold mb-1">
            உ
          </span> */}

          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center p-1.5">
            <img
              src="/assets/decorations/lord-ganesha.png"
              alt="Lord Ganesha"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(184,134,11,0.35)]"
            />
          </div>
        </motion.div>

        {/* 3. Staggered Cinematic Text Reveal */}
        <div className="my-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="mb-3 flex flex-col items-center"
          >
            <span className="font-tamil text-sm sm:text-base md:text-lg text-[#7B3F11] font-bold block">
              திருமண அழைப்பிதழ்
            </span>
            <span className="font-cormorant tracking-[0.25em] uppercase text-xs sm:text-sm text-[#9A531B] font-semibold mt-0.5 block">
              Wedding Invitation
            </span>
          </motion.div>

          {/* Groom Name */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#3A1E0D] font-bold tracking-wide uppercase leading-tight drop-shadow-sm"
          >
            {couple.groom.tamilName || couple.groom.fullName}
          </motion.h1>

          {/* Amper & Calligraphic Connection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="my-1 sm:my-2"
          >
            <span className="font-arizonia text-3xl sm:text-4xl md:text-5xl text-[#C68A4C] transform -rotate-3 block px-3">
              &
            </span>
          </motion.div>

          {/* Bride Name */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#3A1E0D] font-bold tracking-wide uppercase leading-tight drop-shadow-sm"
          >
            {couple.bride.tamilName || couple.bride.fullName}
          </motion.h2>

          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="font-tamil text-base sm:text-lg md:text-xl text-[#6B3E19] mt-3 block tracking-wide font-medium"
          >
            {couple.subtitle}
          </motion.span>
        </div>

        {/* Auspicious Date Badge in Sandalwood Theme */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-2 mb-8"
        >
          <div className="px-6 py-2 rounded-full border border-[#C68A4C]/60 bg-[#FFFDF8]/95 backdrop-blur-md shadow-md">
            <span className="font-tamil text-base sm:text-lg text-[#5C2D0C] font-semibold tracking-wider">
              {dates.displayTamilDate || dates.displayWeddingDate}
            </span>
          </div>
        </motion.div>

        {/* 4. Looping Couple Photo Gallery with Swipe Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg mx-auto px-2 sm:px-4 mb-8"
        >
          {/* Gallery Header Status */}
          <div className="flex items-center justify-between gap-3 mb-4 px-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C68A4C]" />
              <div className="flex flex-col text-left">
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#381F0D] uppercase tracking-wider">
                  Couple Photo Gallery
                </span>
                <span className="font-tamil text-[11px] text-[#8C4A15] font-medium">
                  மணமக்கள் புகைப்படத் தொகுப்பு
                </span>
              </div>
            </div>

            {/* Photo Counter Pill */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0DC] border border-[#C68A4C]/60 text-xs text-[#5C2D0C] font-semibold shadow-xs">
              <span className="font-cormorant text-sm font-bold tracking-wider">
                {currentGalleryIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>

          {/* Gallery Carousel Container with Touch & Mouse Swipe */}
          <div
            className="relative w-full aspect-[4/5] sm:aspect-[3/4] select-none touch-pan-y rounded-3xl overflow-hidden border-2 border-[#C68A4C]/70 shadow-[0_20px_50px_rgba(117,59,18,0.2)] bg-[#FAF4E6]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Animated Image Slide with AnimatePresence */}
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
              <AnimatePresence initial={false} custom={galleryDirection}>
                <motion.div
                  key={currentGalleryIndex}
                  custom={galleryDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#FAF4E6]"
                >
                  <img
                    src={galleryImages[currentGalleryIndex].src}
                    alt={galleryImages[currentGalleryIndex].title}
                    className="w-full h-full object-cover object-center select-none"
                    draggable={false}
                  />

                  {/* Subtle dark gradient overlay at top and bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25 pointer-events-none" />

                  {/* Corner Gold Flourish */}
                  <div className="absolute top-3 left-3 text-xs text-[#FFFDF8]/80 select-none pointer-events-none drop-shadow">❖</div>
                  <div className="absolute bottom-3 left-3 text-xs text-[#FFFDF8]/80 select-none pointer-events-none drop-shadow">❖</div>

                  {/* Image Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none text-left z-10">
                    <span className="font-cinzel text-base sm:text-lg font-bold text-[#FFFDF8] block drop-shadow-md">
                      {galleryImages[currentGalleryIndex].title}
                    </span>
                    <span className="font-tamil text-xs text-[#FAF0DC] font-medium block drop-shadow-sm">
                      {galleryImages[currentGalleryIndex].tamilTitle}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Zoom Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowLightbox(true);
              }}
              className="absolute top-3 right-3 z-20 px-3 py-1.5 rounded-full bg-[#FFFDF8]/95 hover:bg-[#C68A4C] hover:text-[#FFFDF8] text-[#5C2D0C] text-xs font-bold border border-[#C68A4C] shadow-md flex items-center gap-1.5 transition-colors cursor-pointer"
              title="View Fullscreen"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-cormorant uppercase tracking-wider text-xs">Zoom</span>
            </button>

            {/* Left Prev Arrow Button (Loops) */}
            {/* <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevGalleryImage();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FFFDF8]/85 hover:bg-[#C68A4C] text-[#5C2D0C] hover:text-[#FFFDF8] border border-[#C68A4C] shadow-lg flex items-center justify-center transition-all cursor-pointer transform hover:scale-110 active:scale-95"
              aria-label="Previous Image"
              title="Previous (முந்தைய)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button> */}

            {/* Right Next Arrow Button (Loops) */}
            {/* <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextGalleryImage();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#FFFDF8]/85 hover:bg-[#C68A4C] text-[#5C2D0C] hover:text-[#FFFDF8] border border-[#C68A4C] shadow-lg flex items-center justify-center transition-all cursor-pointer transform hover:scale-110 active:scale-95"
              aria-label="Next Image"
              title="Next (அடுத்தது)"
            >
              <ChevronRight className="w-5 h-5" />
            </button> */}

            {/* Interactive Swipe Hint Banner */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#381F0D]/65 backdrop-blur-sm text-[#FFFDF8] text-[10px] font-sans pointer-events-none flex items-center gap-1.5 shadow-md border border-[#C68A4C]/40 z-10">
              <span>◀ Swipe Left or Right to Loop ▶</span>
            </div>
          </div>

          {/* Dots Indicator & Caption below Gallery */}
          <div className="mt-4 flex flex-col items-center gap-2">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setGalleryDirection(idx > currentGalleryIndex ? 1 : -1);
                    setCurrentGalleryIndex(idx);
                  }}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentGalleryIndex === idx
                      ? 'w-7 h-2 bg-gradient-to-r from-[#8C4A15] to-[#C68A4C] shadow-xs'
                      : 'w-2 h-2 bg-[#C68A4C]/45 hover:bg-[#C68A4C]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <p className="font-tamil text-xs text-[#7A4B22] font-medium text-center">
              படங்களை மாற்ற இடப்புறம் அல்லது வலப்புறம் இழுக்கவும் (Swipe to Loop)
            </p>
          </div>

          {/* Little Video Button below Gallery */}
          <div className="mt-5 flex justify-center">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowVideoModal(true)}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#C68A4C] bg-gradient-to-r from-[#8C4A15] via-[#A85D1E] to-[#7A3E10] hover:brightness-105 text-[#FFFDF8] shadow-md transition-all duration-300 group cursor-pointer"
              title="Watch Couple Video"
            >
              <span className="w-7 h-7 rounded-full bg-[#FAF0DC] text-[#8C4A15] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </span>
              <div className="flex flex-col text-left leading-tight pr-1">
                <span className="font-cinzel text-xs font-bold tracking-wider uppercase">
                  Watch Couple Video
                </span>
                <span className="font-tamil text-[10px] text-[#FAF0DC]/85 font-normal">
                  மணமக்கள் வீடியோ பதிவு
                </span>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for Gallery Photos */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-md select-none"
            onClick={() => setShowLightbox(false)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowLightbox(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-[#FFFDF8] border border-[#C68A4C] text-[#5C2D0C] flex items-center justify-center hover:bg-[#C68A4C] hover:text-[#FFFDF8] transition-colors shadow-2xl z-20 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevGalleryImage();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FFFDF8]/90 hover:bg-[#C68A4C] text-[#5C2D0C] hover:text-[#FFFDF8] border border-[#C68A4C] shadow-2xl flex items-center justify-center transition-all cursor-pointer transform hover:scale-110"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextGalleryImage();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#FFFDF8]/90 hover:bg-[#C68A4C] text-[#5C2D0C] hover:text-[#FFFDF8] border border-[#C68A4C] shadow-2xl flex items-center justify-center transition-all cursor-pointer transform hover:scale-110"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image with Title */}
            <div
              className="max-w-2xl max-h-[85vh] overflow-hidden rounded-3xl border-2 border-[#C68A4C] shadow-2xl bg-black relative flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[currentGalleryIndex].src}
                alt={galleryImages[currentGalleryIndex].title}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="w-full p-3 bg-[#FFFDF8] text-center border-t border-[#C68A4C]/40">
                <p className="font-cinzel text-sm sm:text-base font-bold text-[#381F0D]">
                  {galleryImages[currentGalleryIndex].title}
                </p>
                <p className="font-cormorant text-xs text-[#8C4A15] font-semibold">
                  Photo {currentGalleryIndex + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3-5 Sec Anime Modal */}
      <AnimatePresence>
        {showAnimeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setShowAnimeModal(false)}
          >
            <div
              className="relative max-w-xl w-full bg-[#FFFDF8] rounded-2xl border-2 border-[#C68A4C] overflow-hidden shadow-2xl p-3 sm:p-5"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-2 border-b border-[#C68A4C]/30">
                <div className="flex flex-col text-left">
                  <span className="font-tamil text-sm text-[#5C2D0C] font-bold">
                    இரு இதயங்களின் அனிமேஷன் காட்சி
                  </span>
                  <span className="font-cormorant text-xs text-[#9A531B] font-semibold tracking-wider uppercase">
                    Anime Video
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAnimeModal(false)}
                  className="w-8 h-8 rounded-full border border-[#C68A4C]/60 text-[#5C2D0C] flex items-center justify-center hover:bg-[#C68A4C] hover:text-[#FFFDF8]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="aspect-[4/3] sm:aspect-video w-full rounded-xl overflow-hidden mt-3 bg-[#FAF4E6] flex items-center justify-center p-2">
                <img
                  src={animeVideoSrc}
                  alt="Animated Indian Wedding Namaste Couple"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_15px_rgba(184,134,11,0.25)] select-none"
                />
              </div>

              <p className="font-tamil text-xs text-center text-[#7A4B22] mt-3">
                (இருவரும் ஒருவரை ஒருவர் அன்புடன் பார்க்கும் 3-5 நொடி அனிமேஷன் பதிவு)
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Couple Video Player Modal (ReactPlayer) */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md"
            onClick={() => setShowVideoModal(false)}
          >
            <div
              className="relative max-w-3xl w-full bg-[#FFFDF8] rounded-3xl border-2 border-[#C68A4C] overflow-hidden shadow-2xl p-4 sm:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 px-1 border-b border-[#C68A4C]/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF0DC] border border-[#C68A4C] text-[#8C4A15] flex items-center justify-center shadow-xs">
                    <Film className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-cinzel text-sm sm:text-base text-[#381F0D] font-bold tracking-wide">
                      Couple Dance & Celebration
                    </span>
                    <span className="font-tamil text-xs text-[#8C4A15] font-medium">
                      மணமக்கள் நடனம் & கொண்டாட்டம்
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowVideoModal(false)}
                  className="w-9 h-9 rounded-full bg-[#FAF0DC] hover:bg-[#C68A4C] hover:text-[#FFFDF8] border border-[#C68A4C]/60 text-[#5C2D0C] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                  aria-label="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* ReactPlayer Container */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden mt-4 bg-black shadow-inner relative flex items-center justify-center">
                <ReactPlayer
                  src="/assets/video/coupledance.mp4"
                  playing={true}
                  controls={true}
                  width="100%"
                  height="100%"
                  playsInline
                />
              </div>

              {/* Subtitle / Footer */}
              <div className="mt-3 text-center">
                <p className="font-cormorant text-xs sm:text-sm text-[#7A3E10] font-semibold tracking-wider">
                  Madhuprasath & Priyadharshini • Special Moments
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
