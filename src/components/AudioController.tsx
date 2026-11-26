import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

interface AudioControllerProps {
  autoPlayTrigger?: boolean;
}

export const AudioController: React.FC<AudioControllerProps> = ({ autoPlayTrigger }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Create and configure audio instance with fallback
    const primarySrc = weddingConfig.audio.src;
    const fallbackSrc = weddingConfig.audio.fallbackSrc || '/assets/audio/mangalam-shlok.mp3';

    const audio = new Audio(primarySrc);
    audio.loop = weddingConfig.audio.loop;
    audio.preload = 'auto';

    // If primary fails (e.g. file not added yet), try fallback
    audio.onerror = () => {
      if (audio.src !== fallbackSrc) {
        console.info(`Primary audio not found, switching to fallback audio: ${fallbackSrc}`);
        audio.src = fallbackSrc;
        audio.load();
      }
    };

    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // When autoPlayTrigger turns true (user tapped to open the invitation)
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !hasInteracted) {
      setHasInteracted(true);
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Autoplay audio was blocked by browser policy until manual interaction:', err);
        });
    }
  }, [autoPlayTrigger, hasInteracted]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    setHasInteracted(true);

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((e) => console.error('Could not play audio:', e));
    }
  };

  return (
    <aside aria-label="Audio player" className="fixed bottom-6 right-6 z-40">
      <div className="relative flex items-center gap-2">
        {/* Playing audio title pill */}
        {isPlaying && (
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF8]/95 backdrop-blur-md border border-[#C68A4C] text-[#381F0D] text-xs font-serif shadow-xl animate-fade-in font-tamil font-bold">
            <Music className="w-3.5 h-3.5 text-[#8C4A15] animate-bounce" />
            <span>{weddingConfig.audio.title}</span>
          </div>
        )}

        <button
          type="button"
          onClick={toggleAudio}
          aria-label={isPlaying ? 'இசையை நிறுத்த' : 'இசையை ஒலிக்க'}
          title={isPlaying ? 'இசையை நிறுத்த' : 'இசையை ஒலிக்க'}
          className={`relative group flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-md transition-all duration-300 shadow-xl border ${isPlaying
              ? 'bg-[#FFFDF8] border-2 border-[#C68A4C] text-[#8C4A15] ring-2 ring-[#C68A4C]/40 shadow-[#C68A4C]/30'
              : 'bg-[#FAF0DC] border border-[#C68A4C]/60 text-[#5C2D0C] hover:text-[#381F0D]'
            }`}
        >
          {isPlaying ? (
            <>
              {/* Subtle expanding soundwaves ring */}
              <span className="absolute -inset-1.5 rounded-full border border-[#C68A4C]/50 animate-ping pointer-events-none opacity-30" />

              {/* Rotating golden vinyl grooves */}
              <div className="absolute inset-1 rounded-full border border-[#C68A4C]/20 animate-spin-slow pointer-events-none" />

              <Volume2 className="w-5 h-5 text-[#8C4A15]" />
            </>
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </button>
      </div>
    </aside>
  );
};
