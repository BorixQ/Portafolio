'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '@/components/Icons';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] bg-[#050608] relative z-10 text-xs font-mono">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-white">
            {personalInfo.name}
          </span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-500">
            Arequipa, Perú
          </span>
        </div>

        {/* Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/BorixQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/borix-quiroz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/51953766422"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label={t('footer.backToTop')}
            className="flex items-center gap-1 text-zinc-400 hover:text-white border border-white/10 px-2.5 py-1 rounded transition-colors ml-2"
          >
            <span>TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-zinc-600 gap-2">
        <p>© {new Date().getFullYear()} Borix Axel Quiroz Cruz. {t('footer.rights')}</p>
        <p>Next.js 16 · React 19 · TypeScript · Turbopack</p>
      </div>
    </footer>
  );
};
