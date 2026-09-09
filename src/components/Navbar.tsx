'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/data/portfolioData';
import { Menu, X, ArrowDownRight, Globe } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre-mi', label: t('nav.about') },
    { href: '#logros', label: t('nav.achievements') },
    { href: '#proyectos', label: t('nav.projects') },
    { href: '#trayectoria', label: t('nav.experience') },
    { href: '#habilidades', label: t('nav.skills') },
    { href: '#contacto', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#06070a]/90 backdrop-blur-md border-b border-white/[0.07] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-mono text-xs font-semibold px-2 py-1 rounded bg-white/[0.05] border border-white/10 text-zinc-300 group-hover:border-zinc-400 group-hover:text-white transition-colors">
            BQ
          </span>
          <div className="flex flex-col">
            <span className="font-medium text-white text-sm tracking-tight">
              Borix Quiroz
            </span>
            <span className="text-[11px] text-zinc-500 font-mono">
              Física · Backend · Datos
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-100 rounded-md hover:bg-white/[0.04] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-zinc-400 hover:text-white border border-white/10 rounded-md hover:bg-white/[0.04] transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-semibold text-zinc-200">{lang.toUpperCase()}</span>
          </button>

          <a
            href={personalInfo.cvPath}
            download="CV-Borix-Quiroz.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-white/15 rounded-md transition-colors"
          >
            <span>{t('nav.cv')}</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2 py-1 text-xs font-mono font-medium text-zinc-300 border border-white/10 rounded"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white rounded border border-white/10"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a0c11] border-b border-white/10 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-zinc-300 hover:text-white rounded hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href={personalInfo.cvPath}
              download="CV-Borix-Quiroz.pdf"
              className="flex items-center justify-between px-3 py-2 text-sm text-white bg-zinc-800 rounded"
            >
              <span>{t('nav.cv')}</span>
              <ArrowDownRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
