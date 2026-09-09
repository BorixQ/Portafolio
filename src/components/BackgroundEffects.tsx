'use client';

import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Precision architectural grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60" />

      {/* Atmospheric focal glow (celestial depth) */}
      <div className="absolute -top-32 right-[-5%] w-[48rem] h-[48rem] bg-blue-950/20 rounded-full blur-[160px]" />
      <div className="absolute top-[45%] left-[-10%] w-[36rem] h-[36rem] bg-indigo-950/15 rounded-full blur-[140px]" />

      {/* Vignette mask to keep edges soft and content legible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#06070a_95%)]" />
    </div>
  );
};
