import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, X, Film, RotateCw, Play } from 'lucide-react';
import ReactPlayer from 'react-player';
import { weddingConfig } from '../config/wedding';
import { FloatingPetals } from './ui/FloatingPetals';

export const HeroSection: React.FC = () => {
  const { couple, invocation, dates } = weddingConfig;
  const [showLightbox, setShowLightbox] = useState(false);
  const [showAnimeModal, setShowAnimeModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const frontCardImage = '/assets/images/invitation-card.jpg';
  const backCardImage = '/assets/images/invitation-card-back.jpg';
  const currentCardImage = isFlipped ? backCardImage : frontCardImage;
  const animeVideoSrc = couple.animeVideo || '/assets/images/couple-namaste.gif';

  // Swipe / Drag gesture tracking for mobile touch & desktop mouse
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isMouseDownRef = useRef<boolean>(false);
  const mouseStartXRef = useRef<number | null>(null);
  const mouseStartYRef = useRef<number | null>(null);
  const hasSwipedRef = useRef<boolean>(false);

  const SWIPE_THRESHOLD = 45; // pixels needed to trigger 3D flip

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
        if (deltaX > SWIPE_THRESHOLD && !isFlipped) {
          // Swipe RIGHT -> flip to back (Page 2)
          setIsFlipped(true);
          hasSwipedRef.current = true;
        } else if (deltaX < -SWIPE_THRESHOLD && isFlipped) {
          // Swipe LEFT -> flip back to front (Page 1)
          setIsFlipped(false);
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
        if (deltaX > SWIPE_THRESHOLD && !isFlipped) {
          // Swipe RIGHT -> flip to back (Page 2)
          setIsFlipped(true);
          hasSwipedRef.current = true;
        } else if (deltaX < -SWIPE_THRESHOLD && isFlipped) {
          // Swipe LEFT -> flip back to front (Page 1)
          setIsFlipped(false);
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

  // Card click toggle (when clicked without significant dragging)
  const handleCardClick = () => {
    if (!hasSwipedRef.current) {
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-10 pb-20 md:pt-16 md:pb-28 px-4 overflow-hidden bg-transparent">
      {/* Floating Floral Petals */}
      <FloatingPetals count={16} className="opacity-60" />

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
          className="mb-4 flex flex-col items-center"
        >
          {/* Pillayar Suzhi */}
          <span className="font-tamil text-2xl sm:text-3xl text-[#7B3F11] font-bold mb-1">
            உ
          </span>

          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center p-1.5">
            <img
              src="/assets/decorations/lord-ganesha.png"
              alt="Lord Ganesha"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(184,134,11,0.35)]"
            />
          </div>
        </motion.div>

        {/* 2. Sacred Mantra */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mb-5 max-w-2xl px-4"
        >
          <p className="font-tamil text-base sm:text-lg md:text-xl text-[#5C2D0C] font-semibold leading-relaxed tracking-wider drop-shadow-sm">
            {invocation.ganeshaMantra.sanskrit}
          </p>
          <p className="font-tamil text-xs sm:text-sm text-[#7A4B22] max-w-md mx-auto mt-1 leading-relaxed">
            {invocation.ganeshaMantra.meaning}
          </p>
        </motion.div>

        {/* Golden Ornamental Flourish Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.8, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-3 w-40 my-2"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C68A4C]" />
          <span className="text-[#C68A4C] text-xs">❖</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C68A4C]" />
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

        {/* 4. 3D Two-Sided Flip Invitation Card with Swipe/Drag Interaction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg mx-auto px-2 sm:px-4 mb-8"
        >
          {/* Card Label & Flip Status Indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4 px-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C68A4C]" />
              <div className="flex flex-col text-left">
                <span className="font-tamil text-xs sm:text-sm text-[#5C2D0C] font-semibold">
                  அழைப்பிதழ் அட்டை
                </span>
                <span className="font-cormorant text-[11px] sm:text-xs text-[#9A531B] font-semibold tracking-wider uppercase">
                  Wedding Invitation Card
                </span>
              </div>
            </div>

            {/* Interactive Flip Status & Click Toggle */}
            <button
              type="button"
              onClick={() => setIsFlipped((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF0DC] hover:bg-[#F5E6CC] border border-[#C68A4C]/60 text-xs font-tamil text-[#5C2D0C] shadow-sm transition-all group"
              title="அட்டையைத் திருப்ப கிளிக் செய்க (Click to Flip Card)"
            >
              <RotateCw className="w-3.5 h-3.5 text-[#8C4A15] group-hover:rotate-180 transition-transform duration-500" />
              <span className="font-bold">
                பக்கம் {isFlipped ? '2 / 2 (நிகழ்வுகள்)' : '1 / 2 (மணமக்கள்)'}
              </span>
            </button>
          </div>

          {/* 3D Flip Card Container (Perspective viewport) */}
          <div
            className="relative w-full aspect-[3/4] select-none touch-pan-y"
            style={{ perspective: '1200px' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Centered Flip Axis Inner Wrapper (preserves 3D transform) */}
            <div
              onClick={handleCardClick}
              className="relative w-full h-full cursor-grab active:cursor-grabbing transition-transform duration-[850ms]"
              style={{
                transformStyle: 'preserve-3d',
                WebkitTransformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* FRONT FACE: Page 1 (மணமக்கள்) */}
              <div
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border-2 border-[#C68A4C]/70 shadow-[0_18px_50px_rgba(117,59,18,0.18)] bg-[#FFFDF8]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(0deg)',
                }}
              >
                <div className="w-full h-full bg-[#FAF3E3] relative flex items-center justify-center overflow-hidden">
                  <img
                    src={frontCardImage}
                    alt="Madhuprasad & Priyadharshini Wedding Invitation Card - Front"
                    className="w-full h-full object-contain object-center pointer-events-none select-none"
                    draggable={false}
                  />

                  {/* Corner Gold Flourish */}
                  <div className="absolute top-3 left-3 text-xs text-[#C68A4C]/60 select-none pointer-events-none">❖</div>
                  <div className="absolute bottom-3 left-3 text-xs text-[#C68A4C]/60 select-none pointer-events-none">❖</div>

                  {/* Quick Zoom Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowLightbox(true);
                    }}
                    className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-[#FFFDF8]/95 hover:bg-[#C68A4C] hover:text-[#FFFDF8] text-[#5C2D0C] text-xs font-tamil font-bold border border-[#C68A4C] shadow-md flex items-center gap-1.5 transition-colors"
                    title="பெரிதாகக் காண (Zoom)"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">பெரிதாகக் காண</span>
                  </button>

                  {/* Interactive Swipe Hint Banner */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#381F0D]/75 backdrop-blur-sm text-[#FFFDF8] text-[11px] font-tamil pointer-events-none flex items-center gap-1.5 shadow-md border border-[#C68A4C]/40">
                    <span>வலப்புறம் இழுக்கவும் ➔ (Swipe Right to Flip)</span>
                  </div>
                </div>
              </div>

              {/* BACK FACE: Page 2 (நிகழ்வுகள் & மண்டபம்) */}
              <div
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border-2 border-[#C68A4C]/70 shadow-[0_18px_50px_rgba(117,59,18,0.18)] bg-[#FFFDF8]"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                <div className="w-full h-full bg-[#FAF3E3] relative flex items-center justify-center overflow-hidden">
                  <img
                    src={backCardImage}
                    alt="Madhuprasad & Priyadharshini Wedding Invitation Card - Back"
                    className="w-full h-full object-contain object-center pointer-events-none select-none"
                    draggable={false}
                  />

                  {/* Corner Gold Flourish */}
                  <div className="absolute top-3 left-3 text-xs text-[#C68A4C]/60 select-none pointer-events-none">❖</div>
                  <div className="absolute bottom-3 left-3 text-xs text-[#C68A4C]/60 select-none pointer-events-none">❖</div>

                  {/* Quick Zoom Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowLightbox(true);
                    }}
                    className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-[#FFFDF8]/95 hover:bg-[#C68A4C] hover:text-[#FFFDF8] text-[#5C2D0C] text-xs font-tamil font-bold border border-[#C68A4C] shadow-md flex items-center gap-1.5 transition-colors"
                    title="பெரிதாகக் காண (Zoom)"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">பெரிதாகக் காண</span>
                  </button>

                  {/* Interactive Swipe Hint Banner */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#381F0D]/75 backdrop-blur-sm text-[#FFFDF8] text-[11px] font-tamil pointer-events-none flex items-center gap-1.5 shadow-md border border-[#C68A4C]/40">
                    <span>◀ இடப்புறம் இழுக்கவும் (Swipe Left to Flip)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Swipe / Click helper note below card */}
          <div className="mt-3 text-center">
            <p className="font-tamil text-xs text-[#7A4B22] font-medium">
              {isFlipped
                ? '◀ இடப்புறம் இழுக்க அல்லது தொட, முன் பக்கம் திரும்பும்'
                : 'வலப்புறம் இழுக்க அல்லது தொட, பின் பக்கம் திரும்பும் ➔'}
            </p>
          </div>

          {/* Little Video Button below Invitation Card */}
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

      {/* Lightbox Modal for Full Invitation Card Zoom */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md"
            onClick={() => setShowLightbox(false)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowLightbox(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#FFFDF8] border border-[#C68A4C] text-[#5C2D0C] flex items-center justify-center hover:bg-[#C68A4C] hover:text-[#FFFDF8] transition-colors shadow-2xl z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Side Toggle */}
            <div
              className="absolute top-6 left-6 z-10 flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsFlipped((prev) => !prev)}
                className="px-4 py-2 rounded-full bg-[#FFFDF8] border border-[#C68A4C] text-[#5C2D0C] text-xs font-tamil font-bold shadow-lg flex items-center gap-2 hover:bg-[#C68A4C] hover:text-[#FFFDF8] transition-colors"
              >
                <RotateCw className="w-3.5 h-3.5 text-[#8C4A15]" />
                <span>
                  {isFlipped ? 'பக்கம் 1 காண்க (Front)' : 'பக்கம் 2 காண்க (Back)'}
                </span>
              </button>
            </div>

            <div
              className="max-w-2xl max-h-[92vh] overflow-hidden rounded-2xl border-2 border-[#C68A4C] shadow-2xl bg-[#FFFDF8]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentCardImage}
                alt="Full Wedding Invitation Card"
                className="w-full h-full object-contain"
              />
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
