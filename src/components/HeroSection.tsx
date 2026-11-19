import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, Play, X, Film } from 'lucide-react';
import { weddingConfig } from '../config/wedding';
import { FloatingPetals } from './ui/FloatingPetals';
import { CinematicFrame } from './ui/CinematicFrame';

export const HeroSection: React.FC = () => {
  const { couple, invocation, dates } = weddingConfig;
  const [showLightbox, setShowLightbox] = useState(false);
  const [showAnimeModal, setShowAnimeModal] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const invitationImage = couple.firstInvitationCard || couple.heroImage;
  const animeVideoSrc = couple.animeVideo || "/assets/video/couple-anime.mp4";

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-10 pb-20 md:pt-16 md:pb-28 px-4 overflow-hidden bg-transparent">
      {/* Floating Floral Petals */}
      <FloatingPetals count={16} className="opacity-60" />

      {/* Cinematic Film Grain & Texture Overlay */}
      <div className="absolute inset-0 cinematic-grain pointer-events-none opacity-30" />

      {/* Soft Ambient Gold Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* 1. Divine Lord Ganesha Emblem & Pillayar Suzhi */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 flex flex-col items-center"
        >
          {/* Pillayar Suzhi */}
          <span className="font-tamil text-2xl sm:text-3xl text-[#D4AF37] font-bold mb-1">
            உ
          </span>

          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center p-1.5">
            <img
              src="/assets/decorations/lord-ganesha.png"
              alt="Lord Ganesha"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
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
          <p className="font-tamil text-base sm:text-lg md:text-xl text-[#F7E2B5] font-semibold leading-relaxed tracking-wider drop-shadow-sm">
            {invocation.ganeshaMantra.sanskrit}
          </p>
          <p className="font-tamil text-xs sm:text-sm text-[#EAD2B2] max-w-md mx-auto mt-1 leading-relaxed">
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
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs">❖</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </motion.div>

        {/* 3. Staggered Cinematic Text Reveal */}
        <div className="my-4 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="font-tamil tracking-[0.2em] uppercase text-xs sm:text-sm md:text-base text-[#E5C583] font-bold mb-3 block"
          >
            திருமண அழைப்பிதழ் • WEDDING INVITATION
          </motion.span>

          {/* Groom Name */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#FFFDF9] font-normal tracking-wide uppercase leading-tight drop-shadow-md"
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
            <span className="font-arizonia text-3xl sm:text-4xl md:text-5xl text-[#D4AF37] transform -rotate-3 block px-3">
              &
            </span>
          </motion.div>

          {/* Bride Name */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-[#FFFDF9] font-normal tracking-wide uppercase leading-tight drop-shadow-md"
          >
            {couple.bride.tamilName || couple.bride.fullName}
          </motion.h2>

          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="font-tamil text-base sm:text-lg md:text-xl text-[#F5DEB3] mt-3 block tracking-wide"
          >
            {couple.subtitle}
          </motion.span>
        </div>

        {/* Auspicious Date Badge in Tamil */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-2 mb-8"
        >
          <div className="px-6 py-2 rounded-full border border-[#D4AF37]/60 bg-[#25040B]/85 backdrop-blur-md shadow-lg">
            <span className="font-tamil text-base sm:text-lg text-[#FFF8E7] font-semibold tracking-wider">
              {dates.displayTamilDate || dates.displayWeddingDate}
            </span>
          </div>
        </motion.div>

        {/* 4. Prominent 1st Invitation Card Section (Req #3) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl mx-auto px-4 mb-8"
        >
          {/* Card Label */}
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-tamil text-xs sm:text-sm text-[#F7E2B5] font-semibold uppercase tracking-wider">
                அழைப்பிதழ் முதல் பக்கம் • Invitation Card
              </span>
            </div>

            {/* Lightbox Trigger */}
            <button
              type="button"
              onClick={() => setShowLightbox(true)}
              className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:text-[#FFFDF9] transition-colors font-tamil"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>பெரிதாகக் காண்க</span>
            </button>
          </div>

          <div
            onClick={() => setShowLightbox(true)}
            className="cursor-pointer group relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
          >
            <div className="aspect-[4/5] sm:aspect-[3/4] w-full bg-[#180206] relative overflow-hidden">
              <img
                src={invitationImage}
                alt="Marriage Invitation First Card"
                onError={() => setImageFailed(true)}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out select-none"
              />

              {imageFailed && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#25040B]">
                  <img
                    src={couple.heroImage}
                    alt="Couple Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-5 py-2 rounded-full bg-[#D4AF37] text-[#1E0308] font-bold text-xs uppercase tracking-wider font-tamil shadow-xl">
                  அழைப்பிதழை முழுமையாகக் காண்க
                </span>
              </div>
            </div>
          </div>

          {/* 3-5 Sec Anime Video Button (Req #2) */}
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAnimeModal(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-[#D4AF37] bg-[#25040B]/90 hover:bg-[#D4AF37] hover:text-[#180206] text-[#F7E2B5] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-xl group font-tamil"
            >
              <Film className="w-4 h-4 text-[#D4AF37] group-hover:text-[#180206] transition-colors" />
              <span>3-5 நொடி அனிமேஷன் காட்சி (Anime Video)</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for 1st Invitation Card */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setShowLightbox(false)}
          >
            <button
              type="button"
              onClick={() => setShowLightbox(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#180206] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#180206] transition-colors shadow-2xl z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-w-2xl max-h-[90vh] overflow-hidden rounded-2xl border border-[#D4AF37] shadow-2xl">
              <img
                src={invitationImage}
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setShowAnimeModal(false)}
          >
            <div
              className="relative max-w-xl w-full bg-[#180206] rounded-2xl border border-[#D4AF37] overflow-hidden shadow-2xl p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-3 border-b border-[#D4AF37]/30">
                <span className="font-tamil text-sm text-[#F7E2B5] font-bold">
                  இரு இதயங்களின் அனிமேஷன் காட்சி • Anime Video
                </span>
                <button
                  type="button"
                  onClick={() => setShowAnimeModal(false)}
                  className="w-8 h-8 rounded-full border border-[#D4AF37]/60 text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#180206]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="aspect-[4/3] sm:aspect-video w-full rounded-xl overflow-hidden mt-3 bg-[#120205] flex items-center justify-center p-2">
                {animeVideoSrc.toLowerCase().endsWith('.gif') || couple.animeGif ? (
                  <img
                    src={couple.animeGif || animeVideoSrc}
                    alt="Animated Indian Wedding Namaste Couple"
                    className="w-full h-full object-contain filter drop-shadow-[0_4px_15px_rgba(212,175,55,0.3)] select-none"
                  />
                ) : (
                  <video
                    src={animeVideoSrc}
                    autoPlay
                    controls
                    playsInline
                    loop
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <p className="font-tamil text-xs text-center text-[#E5D0B2] mt-3">
                (இருவரும் ஒருவரை ஒருவர் அன்புடன் பார்க்கும் 3-5 நொடி அனிமேஷன் பதிவு)
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
