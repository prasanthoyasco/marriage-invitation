import React from 'react';

interface CinematicFrameProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  hasVignette?: boolean;
  aspectRatio?: string;
}

export const CinematicFrame: React.FC<CinematicFrameProps> = ({
  children,
  className = '',
  innerClassName = '',
  hasVignette = true,
  aspectRatio = 'aspect-[4/5]',
}) => {
  return (
    <div className={`relative p-2.5 sm:p-3.5 bg-[#25040B]/85 backdrop-blur-md rounded-2xl shadow-2xl border border-[#D4AF37]/50 ${className}`}>
      {/* Inner Frame */}
      <div className={`relative overflow-hidden rounded-xl border border-[#D4AF37]/35 ${aspectRatio} ${innerClassName}`}>
        {children}

        {/* Cinematic Vignette */}
        {hasVignette && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/55 via-transparent to-black/20" />
        )}
      </div>

      {/* Traditional Corner Gold Filigree Accents */}
      <div className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none" />
      <div className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none" />
      <div className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none" />
      <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none" />
    </div>
  );
};
