import React from 'react';

export const PadelBeansLogo: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden py-8 lg:py-0">
      {/* Background Soft Glow Center */}
      <div className="absolute w-72 h-72 rounded-full bg-sky-500/15 blur-[90px] pointer-events-none" />

      {/* Outer Container */}
      <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] flex items-center justify-center">
        
        {/* Outer Orbit (Dashed + Satellite Planet Dot) with smooth rotation */}
        <div className="absolute inset-2 sm:inset-4 lg:inset-6 rounded-full border border-sky-400/20 border-dashed animate-spin-slow pointer-events-none">
          {/* Satellite Planet 1 */}
          <div className="absolute top-[16%] -left-1.5 w-3 h-3 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.9)] border border-sky-100" />
          {/* Faint Orbital Node */}
          <div className="absolute bottom-[20%] right-1.5 w-2.5 h-2.5 rounded-full bg-sky-400/70" />
        </div>

        {/* Middle Orbit (Faint Solid Hairline with Counter-rotation) */}
        <div className="absolute inset-10 sm:inset-12 lg:inset-14 rounded-full border border-sky-300/15 animate-reverse-spin-slow pointer-events-none">
          {/* Satellite Node 2 */}
          <div className="absolute -top-1 right-[26%] w-2 h-2 rounded-full bg-sky-100 shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
          <div className="absolute bottom-5 left-[22%] w-1.5 h-1.5 rounded-full bg-sky-400/50" />
        </div>

        {/* Ambient Floating Dust / Little Stars around logo */}
        <div className="absolute top-10 right-14 w-1.5 h-1.5 rounded-full bg-sky-200/80 shadow-[0_0_6px_#7dd3fc]" />
        <div className="absolute bottom-12 left-12 w-1.5 h-1.5 rounded-full bg-sky-300/70" />
        <div className="absolute top-24 left-6 w-2 h-2 rounded-full bg-sky-100/90 shadow-[0_0_8px_#ffffff]" />
        <div className="absolute bottom-24 right-8 w-1 h-1 rounded-full bg-sky-200/50" />

        {/* Authentic Original Logo directly from source asset without any edits */}
        <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-500 hover:scale-[1.03] group cursor-pointer">
          <div className="relative w-[300px] sm:w-[360px] lg:w-[410px] aspect-square rounded-full overflow-hidden flex items-center justify-center">
            {/* Authentic Logo Image with Screen blending to melt seamlessly into luxury navy background */}
            <img
              src="/assets/aistudio/logo_original_full.png"
              alt="Padel Beans Original Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center rounded-full mix-blend-screen scale-105 pointer-events-none drop-shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
              onError={(e) => {
                // Fallback to logo_clean if full is unavailable
                const target = e.currentTarget;
                target.src = '/assets/aistudio/image_cb545ff4.png';
              }}
            />

            {/* Subtle radial boundary softener */}
            <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_40px_rgba(9,31,66,0.9)]" />
          </div>
        </div>
      </div>
    </div>
  );
};
