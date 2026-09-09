'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo, socialLinks } from '@/data/portfolioData';
import { 
  ArrowRight, 
  Mail, 
  FileText, 
  Trophy,
  Activity,
  Layers,
  Radio,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '@/components/Icons';

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'quenaris' | 'authcares'>('quenaris');

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github': return <GithubIcon className="w-4 h-4" />;
      case 'linkedin': return <LinkedinIcon className="w-4 h-4" />;
      case 'mail': return <Mail className="w-4 h-4" />;
      case 'phone': return <WhatsAppIcon className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status note */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-zinc-400">
                Arequipa, Perú · {personalInfo.status[lang]}
              </span>
            </div>

            {/* Main Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              {personalInfo.name}
            </h1>

            {/* Distinct role description */}
            <p className="text-lg sm:text-xl font-medium text-zinc-300 mb-6">
              {personalInfo.tagline[lang]}
            </p>

            {/* Grounded narrative statement */}
            <p className="text-base text-zinc-400 leading-relaxed max-w-xl mb-8">
              {lang === 'es'
                ? 'Conecto el rigor analítico de la física teórica y la ciencia de datos con el diseño de arquitecturas de software de alto rendimiento, sistemas backend escalables y telemetría IoT en tiempo real.'
                : 'I bridge the analytical rigor of theoretical physics and data science with high-performance software architecture, resilient backend systems, and real-time IoT telemetry.'}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-sm"
              >
                <span>{t('hero.ctaProjects')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-colors"
              >
                <span>{t('hero.ctaContact')}</span>
              </a>

              <a
                href={personalInfo.cvPath}
                download="CV-Borix-Quiroz.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>{t('hero.ctaCV')}</span>
              </a>
            </div>

            {/* Direct Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/[0.08] w-full max-w-lg">
              <span className="text-xs font-mono text-zinc-500">
                Canales:
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="p-2 rounded-md text-zinc-400 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-colors"
                  >
                    {getSocialIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: The Bold Distinctive Element (Mission & Telemetry Dispatch) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#0b0e14] border border-white/10 overflow-hidden shadow-2xl">
              
              {/* Dispatch Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-zinc-300">
                    SISTEMAS DESTACADOS
                  </span>
                </div>
                <span className="font-mono text-[11px] text-zinc-500">
                  DISPATCH // 2025
                </span>
              </div>

              {/* Interactive System Tabs */}
              <div className="grid grid-cols-2 p-1.5 bg-black/40 border-b border-white/[0.06] text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('quenaris')}
                  className={`py-2 px-3 rounded-md text-center transition-colors ${
                    activeTab === 'quenaris'
                      ? 'bg-zinc-800/80 text-amber-300 font-semibold border border-amber-400/20'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  QUEÑARIS (NASA)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('authcares')}
                  className={`py-2 px-3 rounded-md text-center transition-colors ${
                    activeTab === 'authcares'
                      ? 'bg-zinc-800/80 text-cyan-300 font-semibold border border-cyan-400/20'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  AUTHCARES (PUCP)
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-5">
                {activeTab === 'quenaris' ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30">
                        <Trophy className="w-3 h-3 text-amber-400" />
                        GLOBAL WINNER NASA 2025
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        LANDSAT / UAV
                      </span>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-white mb-1">
                        Queñaris: Inteligencia Geoespacial
                      </h2>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {lang === 'es'
                          ? 'Arquitectura de ingesta de datos satelitales abiertos y procesamiento multiespectral con drones para la preservación de bosques andinos de Queñua.'
                          : 'Satellite open-data ingestion pipeline and UAV multispectral processing designed for high-altitude Andean forest conservation.'}
                      </p>
                    </div>

                    {/* Architectural metrics sheet */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06] font-mono text-[11px]">
                      <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-zinc-500 block text-[10px]">DATOS</span>
                        <span className="text-zinc-200 font-medium">Multiespectral GIS</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-zinc-500 block text-[10px]">STACK</span>
                        <span className="text-zinc-200 font-medium">Python · GeoPandas</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-zinc-500 block text-[10px]">ROL</span>
                        <span className="text-zinc-200 font-medium">Data Architecture Lead</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-zinc-500 block text-[10px]">DESPLIEGUE</span>
                        <span className="text-zinc-200 font-medium">Docker Pipeline</span>
                      </div>
                    </div>

                    <a
                      href="#quenaris"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 hover:text-amber-200 pt-2"
                    >
                      <span>Ver especificación del proyecto</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                        <Radio className="w-3 h-3 text-cyan-400" />
                        3ER PUESTO PUCP EQUIPU
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        ESP32 / MQTT
                      </span>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-white mb-1">
                        AuthCares: Telemetría Biimétrica IoT
                      </h2>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {lang === 'es'
                          ? 'Infraestructura de monitoreo telemétrico en tiempo real desde dispositivos ESP32 hacia servidores cloud para alertar crisis en niños con TEA.'
                          : 'Real-time telemetry infrastructure transmitting sensory signals from ESP32 microcontrollers to cloud servers for autism crisis alerts.'}
                      </p>
                    </div>

                    {/* Architectural metrics sheet */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06] font-mono text-[11px]">
                      <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-zinc-500 block text-[10px]">LATENCIA</span>
                        <span className="text-zinc-200 font-medium">&lt; 400ms MQTT</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-zinc-500 block text-[10px]">HARDWARE</span>
                        <span className="text-zinc-200 font-medium">ESP32 + Sensores</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-zinc-500 block text-[10px]">PERSISTENCIA</span>
                        <span className="text-zinc-200 font-medium">PostgreSQL Relacional</span>
                      </div>
                      <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-zinc-500 block text-[10px]">BACKEND</span>
                        <span className="text-zinc-200 font-medium">Python · Async Services</span>
                      </div>
                    </div>

                    <a
                      href="#authcares"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 hover:text-cyan-200 pt-2"
                    >
                      <span>Ver arquitectura IoT completa</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Dispatch Footer Status Bar */}
              <div className="px-4 py-2.5 bg-black/60 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3 h-3 text-emerald-400" />
                  ONLINE VERIFIED
                </span>
                <span>LATAM / PE // UTC-5</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
