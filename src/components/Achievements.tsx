'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { achievements } from '@/data/portfolioData';
import { Trophy, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Achievements: React.FC = () => {
  const { lang, t } = useLanguage();

  const handleCelebrate = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#3b82f6', '#10b981', '#ffffff'],
    });
  };

  return (
    <section id="logros" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="font-mono text-xs text-zinc-500 block mb-2">
              02 // RECONOCIMIENTOS TÉCNICOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {lang === 'es' ? 'Distinciones & Premios de Ingeniería' : 'Engineering Awards & Honors'}
            </h2>
          </div>

          <button
            onClick={handleCelebrate}
            type="button"
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('achievements.celebrate')}</span>
          </button>
        </div>

        {/* Ledger Layout */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {achievements.map((item) => {
            const isNasa = item.id === 'nasa-2025';
            return (
              <div
                key={item.id}
                className={`py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start transition-colors ${
                  isNasa ? 'bg-amber-500/[0.02]' : ''
                }`}
              >
                {/* Year & Badge */}
                <div className="lg:col-span-3 flex items-center lg:flex-col lg:items-start justify-between gap-2">
                  <span className="font-mono text-xs text-zinc-500">
                    {item.year} // {item.organization}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono font-semibold ${
                      isNasa
                        ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                        : 'bg-white/[0.05] text-zinc-300 border border-white/10'
                    }`}
                  >
                    {isNasa && <Trophy className="w-3 h-3 text-amber-400" />}
                    {item.badge[lang]}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-5">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {item.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description[lang]}
                  </p>
                </div>

                {/* Impact Note */}
                <div className="lg:col-span-4 p-3 rounded-lg bg-zinc-900/40 border border-white/[0.06] text-xs text-zinc-300">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1">
                    Impacto Clave
                  </span>
                  {item.impact[lang]}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
