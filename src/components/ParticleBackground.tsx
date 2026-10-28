import React, { useMemo } from 'react';

interface Particle {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const ParticleBackground: React.FC = () => {
  // Generate stable deterministic particles
  const particles = useMemo<Particle[]>(() => {
    const items: Particle[] = [];
    const count = 35;
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        top: Math.round(((i * 29 + 17) % 96) + 2),
        left: Math.round(((i * 47 + 13) % 96) + 2),
        size: (i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5),
        duration: 4 + (i % 5) * 2,
        delay: (i % 7) * 0.7,
        opacity: 0.15 + (i % 4) * 0.18,
      });
    }
    return items;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {/* Ambient luxury radial glow spheres */}
      <div className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full bg-sky-500/10 blur-[140px]" />
      <div className="absolute top-[40%] left-[20%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-indigo-500/8 blur-[100px]" />

      {/* Floating celestial particle dots */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-sky-200"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 3}px rgba(186, 230, 253, ${p.opacity + 0.2})`,
            animation: `pulse-subtle ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
