import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  className: string;
  aspect: string;
}

export const GallerySection: React.FC = () => {
  const { couple } = weddingConfig;

  // Curated photo editorial moments using existing couple & celebration images
  const photos: GalleryPhoto[] = [
    {
      id: 'g1',
      src: couple.heroImage,
      alt: `${couple.groom.name} & ${couple.bride.name} - Pre-wedding Elegance`,
      caption: 'Two souls, one timeless journey',
      className: 'md:col-span-8 md:row-span-2',
      aspect: 'aspect-[4/3] md:aspect-[16/11]',
    },
    {
      id: 'g2',
      src: couple.portraitImage,
      alt: `${couple.bride.name} - Traditional Grace`,
      caption: 'Grace in every glance',
      className: 'md:col-span-4',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 'g3',
      src: '/assets/images/Oonjal.jpg',
      alt: 'Oonjal Moments',
      caption: 'Love swaying to sacred melodies',
      className: 'md:col-span-4',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'g4',
      src: '/assets/images/Muhurtham.jpg',
      alt: 'Sacred Muhurtham Bliss',
      caption: 'The golden moment of forever',
      className: 'md:col-span-6',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'g5',
      src: '/assets/images/Janavasam.jpg',
      alt: 'Janavasam Festive Procession',
      caption: 'Celebration echoing through the night',
      className: 'md:col-span-6',
      aspect: 'aspect-[16/10]',
    },
  ];

  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : 0));
      if (e.key === 'ArrowLeft') setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : 0));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, photos.length]);

  return (
    <section className="py-20 md:py-32 px-4 bg-transparent relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="font-arizonia text-3xl sm:text-4xl text-[#F7E2B5] block mb-2">
            Cherished Moments
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl text-[#FFFDF9] font-semibold tracking-wide uppercase drop-shadow-md">
            Wedding Glimpses
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-[#F0DCBA] mt-2 max-w-md mx-auto">
            An editorial glimpse into our journey of togetherness and love.
          </p>
          <div className="flex items-center justify-center gap-3 w-32 mx-auto mt-4 opacity-70">
            <div className="h-[1px] flex-1 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">❖</span>
            <div className="h-[1px] flex-1 bg-[#D4AF37]" />
          </div>
        </motion.div>

        {/* Asymmetric Magazine Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.12, duration: 0.8 }}
              className={`group relative overflow-hidden rounded-2xl bg-[#25040B]/85 border border-[#D4AF37]/45 shadow-2xl cursor-pointer ${photo.className}`}
              onClick={() => setActivePhotoIndex(index)}
              data-cursor="gallery"
            >
              <div className={`relative w-full h-full ${photo.aspect} overflow-hidden`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Ambient Vignette & Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                  <span className="font-cormorant text-lg sm:text-xl text-[#FFFDF9] font-medium tracking-wide">
                    {photo.caption}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#D4AF37] mt-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Fullscreen</span>
                  </div>
                </div>

                {/* Subtle Gold Corner Accents */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cinematic Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setActivePhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActivePhotoIndex(null)}
              aria-label="Close fullscreen view"
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white/80 hover:text-white transition-all backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : 0));
              }}
              aria-label="Previous photo"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white/80 hover:text-white transition-all backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % photos.length : 0));
              }}
              aria-label="Next photo"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white/80 hover:text-white transition-all backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Box */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-lg overflow-hidden border border-[#C2A773]/50 shadow-2xl">
                <img
                  src={photos[activePhotoIndex].src}
                  alt={photos[activePhotoIndex].alt}
                  className="max-w-full max-h-[75vh] object-contain select-none"
                />
              </div>

              {/* Caption & Counter */}
              <div className="mt-4 text-center">
                <p className="font-cormorant text-lg sm:text-xl text-[#FAF9F7] font-medium tracking-wide">
                  {photos[activePhotoIndex].caption}
                </p>
                <span className="font-mono text-xs text-[#C2A773] tracking-widest uppercase">
                  {activePhotoIndex + 1} / {photos.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
