import React, { useEffect, useRef } from 'react';

interface FloatingPetalsProps {
  count?: number;
  className?: string;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotSpeed: number;
  opacity: number;
  color: string;
  type: 'jasmine' | 'rose';
}

export const FloatingPetals: React.FC<FloatingPetalsProps> = ({ count = 22, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const colorsRose = ['rgba(214, 73, 97, 0.45)', 'rgba(186, 52, 75, 0.35)', 'rgba(238, 120, 140, 0.35)'];
    const colorsJasmine = ['rgba(255, 253, 245, 0.75)', 'rgba(249, 243, 218, 0.65)', 'rgba(255, 248, 230, 0.7)'];

    // Initialize petals
    const petals: Petal[] = Array.from({ length: count }, () => {
      const isJasmine = Math.random() > 0.45;
      return {
        x: Math.random() * width,
        y: Math.random() * height - height * 0.2,
        size: isJasmine ? Math.random() * 6 + 5 : Math.random() * 9 + 8,
        speedY: Math.random() * 0.7 + 0.35,
        speedX: Math.random() * 0.5 - 0.25,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.5 + 0.3,
        color: isJasmine
          ? colorsJasmine[Math.floor(Math.random() * colorsJasmine.length)]
          : colorsRose[Math.floor(Math.random() * colorsRose.length)],
        type: isJasmine ? 'jasmine' : 'rose',
      };
    });

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time + p.size) * 0.4;
        p.rotation += p.rotSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;

        ctx.beginPath();
        if (p.type === 'jasmine') {
          // Pointed subtle jasmine petal
          ctx.moveTo(0, -p.size);
          ctx.quadraticCurveTo(p.size * 0.45, 0, 0, p.size);
          ctx.quadraticCurveTo(-p.size * 0.45, 0, 0, -p.size);
        } else {
          // Rounded rose petal
          ctx.ellipse(0, 0, p.size * 0.6, p.size, 0, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count]);

  const isFixed = className.includes('fixed');
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: isFixed ? 'fixed' : 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
      }}
      className={`pointer-events-none ${isFixed ? 'fixed' : 'absolute'} inset-0 w-full h-full ${className}`}
    />
  );
};
