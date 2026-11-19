import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

export const WishesSection: React.FC = () => {
  const { wishes } = weddingConfig;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance carousel every 6 seconds unless paused
  useEffect(() => {
    if (isPaused || wishes.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % wishes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, wishes.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % wishes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + wishes.length) % wishes.length);
  };

  const currentWish = wishes[currentIndex];

  return (
    <section className="py-20 md:py-32 px-4 bg-transparent relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20"
        >
          <span className="font-arizonia text-3xl sm:text-4xl text-[#F7E2B5] block mb-2">
            Warm Wishes & Blessings
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-[#FFFDF9] font-semibold tracking-wide uppercase drop-shadow-md">
            Sweet Notes
          </h2>
          <p className="font-tamil text-sm text-[#D4AF37] mt-2 font-medium">
            அன்பான வாழ்த்துகள்
          </p>
          <div className="flex items-center justify-center gap-3 w-32 mx-auto mt-4 opacity-70">
            <div className="h-[1px] flex-1 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">❦</span>
            <div className="h-[1px] flex-1 bg-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Carousel Card */}
        <div
          className="relative px-2 sm:px-14 py-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[240px] sm:min-h-[220px] flex items-center justify-center bg-[#25040B]/85 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-2xl border border-[#D4AF37]/45">
            {/* Top Quote Icon */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#D4AF37] text-[#25040B] flex items-center justify-center shadow-lg border-2 border-[#FFF8E7]">
              <Quote className="w-5 h-5 fill-current" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="flex flex-col items-center justify-center max-w-2xl px-2"
              >
                <p className="font-garamond text-lg sm:text-xl md:text-2xl text-[#FFFDF9] italic leading-relaxed mb-6 font-normal">
                  "{currentWish.message}"
                </p>
                <div className="w-10 h-[1px] bg-[#D4AF37]/60 mb-3" />
                <span className="font-cinzel text-sm sm:text-base font-semibold text-[#D4AF37] tracking-wider">
                  {currentWish.name}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev/Next Controls */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous wish"
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#25040B]/90 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#25040B] flex items-center justify-center shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next wish"
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#25040B]/90 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#25040B] flex items-center justify-center shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {wishes.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to wish ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-[#D4AF37]/35 hover:bg-[#D4AF37]/65'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
