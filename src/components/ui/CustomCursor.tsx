import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'gallery'>('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine mouse pointer
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const updateMedia = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };
    mediaQuery.addEventListener('change', updateMedia);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const galleryEl = target.closest('[data-cursor="gallery"]');
      if (galleryEl) {
        setCursorType('gallery');
        return;
      }

      const interactiveEl = target.closest('a, button, input, [role="button"], [data-cursor="pointer"]');
      if (interactiveEl) {
        setCursorType('pointer');
        return;
      }

      setCursorType('default');
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      mediaQuery.removeEventListener('change', updateMedia);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isFinePointer || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Small dot center */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C2A773] pointer-events-none z-50 shadow-sm"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: cursorType === 'gallery' ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 400,
          mass: 0.1,
        }}
      />

      {/* Trailing soft golden ring / pill */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none border transition-colors ${
          cursorType === 'gallery'
            ? 'w-16 h-16 bg-[#252525]/85 border-[#C2A773] text-[#FAF9F7] backdrop-blur-sm'
            : cursorType === 'pointer'
            ? 'w-10 h-10 bg-[#C2A773]/15 border-[#C2A773]/80'
            : 'w-7 h-7 bg-transparent border-[#C2A773]/40'
        }`}
        animate={{
          x: cursorType === 'gallery' ? mousePosition.x - 32 : cursorType === 'pointer' ? mousePosition.x - 20 : mousePosition.x - 14,
          y: cursorType === 'gallery' ? mousePosition.y - 32 : cursorType === 'pointer' ? mousePosition.y - 20 : mousePosition.y - 14,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 250,
          mass: 0.25,
        }}
      >
        {cursorType === 'gallery' && (
          <span className="font-cinzel text-[10px] tracking-widest uppercase font-semibold text-[#D6BD81]">
            View
          </span>
        )}
      </motion.div>
    </div>
  );
};
