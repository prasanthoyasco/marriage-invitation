import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, X, Film, Layers } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { FloatingPetals } from './ui/FloatingPetals';

export const HeroSection: React.FC = () => {
  const { couple, invocation, dates } = weddingConfig;
  const [showLightbox, setShowLightbox] = useState(false);
  const [showAnimeModal, setShowAnimeModal] = useState(false);
  const [activeCardSide, setActiveCardSide] = useState<'front' | 'back'>('front');

  const frontCardImage = '/assets/images/invitation-card.jpg';
  const backCardImage = '/assets/images/invitation-card-back.jpg';
  const currentCardImage = activeCardSide === 'front' ? frontCardImage : backCardImage;
  const animeVideoSrc = couple.animeVideo || '/assets/images/couple-namaste.gif';

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

        {/* 4. Prominent Invitation Card Section with 2-Page Switcher (Req #3) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl mx-auto px-4 mb-8"
        >
          {/* Card Label & Page Switcher */}
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

            {/* Front / Back Card Switcher Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#EFE4CF] border border-[#C68A4C]/40 text-xs font-tamil">
              <button
                type="button"
                onClick={() => setActiveCardSide('front')}
                className={`px-3.5 py-1.5 rounded-full transition-all font-semibold ${
                  activeCardSide === 'front'
                    ? 'bg-[#B8860B] text-white shadow-md'
                    : 'text-[#5C2D0C] hover:text-[#B8860B]'
                }`}
              >
                பக்கம் 1 (மணமக்கள்)
              </button>
              <button
                type="button"
                onClick={() => setActiveCardSide('back')}
                className={`px-3.5 py-1.5 rounded-full transition-all font-semibold ${
                  activeCardSide === 'back'
                    ? 'bg-[#B8860B] text-white shadow-md'
                    : 'text-[#5C2D0C] hover:text-[#B8860B]'
                }`}
              >
                பக்கம் 2 (நிகழ்வுகள்)
              </button>
            </div>
          </div>

          {/* Invitation Card Display Frame */}
          <div
            onClick={() => setShowLightbox(true)}
            className="cursor-pointer group relative rounded-3xl overflow-hidden border-2 border-[#C68A4C]/70 shadow-[0_18px_50px_rgba(117,59,18,0.18)] bg-[#FFFDF8]"
          >
            <div className="aspect-[3/4] sm:aspect-[3/4] w-full bg-[#FAF3E3] relative overflow-hidden flex items-center justify-center">
              <img
                src={currentCardImage}
                alt="Madhuprasad & Priyadharshini Wedding Invitation Card"
                className="w-full h-full object-contain object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out select-none"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-[#381F0D]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-5 py-2.5 rounded-full bg-[#FFFDF8] text-[#5C2D0C] font-bold text-xs uppercase tracking-wider font-tamil shadow-2xl border border-[#C68A4C]">
                  பெரிதாகக் காண தொடவும் (Click to Zoom)
                </span>
              </div>
            </div>
          </div>

          {/* 3-5 Sec Anime Video Button (Req #2) */}
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAnimeModal(true)}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#C68A4C] bg-[#FFFDF8]/95 hover:bg-[#C68A4C] hover:text-[#FFFDF8] text-[#5C2D0C] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md group font-tamil"
            >
              <Film className="w-4 h-4 text-[#B8860B] group-hover:text-[#FFFDF8] transition-colors" />
              <div className="flex flex-col items-center leading-tight">
                <span>3-5 நொடி அனிமேஷன் காட்சி</span>
                <span className="font-cormorant text-[11px] uppercase tracking-widest text-[#9A531B] group-hover:text-[#FFFDF8] font-semibold">
                  Anime Video
                </span>
              </div>
            </button>
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
            <button
              type="button"
              onClick={() => setShowLightbox(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#FFFDF8] border border-[#C68A4C] text-[#5C2D0C] flex items-center justify-center hover:bg-[#C68A4C] hover:text-[#FFFDF8] transition-colors shadow-2xl z-10"
            >
              <X className="w-6 h-6" />
            </button>
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
    </section>
  );
};
