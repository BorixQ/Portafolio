'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo } from '@/data/portfolioData';

export const About: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="sobre-mi" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="mb-14">
          <span className="font-mono text-xs text-zinc-500 block mb-2">
            01 // TRAYECTORIA & FUNDAMENTOS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-2xl">
            {t('about.subtitle')}
          </h2>
        </div>

        {/* Two-column layout: Deep narrative & Core pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 text-base leading-relaxed">
            <p>
              {t('about.p1')}
            </p>
            <p>
              {t('about.p2')}
            </p>
            <p className="text-zinc-400 text-sm border-l-2 border-zinc-700 pl-4 py-1 italic">
              {lang === 'es'
                ? '«Entender los fundamentos físicos del flujo de datos y la propagación de errores permite construir sistemas que toleran la incertidumbre del mundo real.»'
                : '«Understanding the physical foundations of data flow and uncertainty propagation enables engineering systems that tolerate real-world volatility.»'}
            </p>
          </div>

          {/* Core Foundations Matrix */}
          <div className="lg:col-span-5 space-y-3">
            
            <div className="p-4 rounded-lg bg-zinc-900/30 border border-white/[0.08]">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-sm text-white">
                  Física Pura & Primeros Principios
                </h3>
                <span className="text-xs font-mono text-zinc-400">UNSA</span>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                {lang === 'es'
                  ? 'Modelado matemático, análisis dimensional y rigurosidad en la propagación de errores instrumentales.'
                  : 'Mathematical modeling, dimensional analysis, and experimental error propagation rigor.'}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-zinc-900/30 border border-white/[0.08]">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-sm text-white">
                  Ciencia de Datos & Visión Geoespacial
                </h3>
                <span className="text-xs font-mono text-amber-400">NASA Winner</span>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                {lang === 'es'
                  ? 'Maestría en curso. Procesamiento distribuido de datasets satelitales (Landsat/Sentinel) y análisis cuantitativo multiespectral.'
                  : 'Active Master’s candidate. Distributed processing of open satellite imagery and quantitative multispectral analysis.'}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-zinc-900/30 border border-white/[0.08]">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-sm text-white">
                  Backend & Sistemas Distribuidos
                </h3>
                <span className="text-xs font-mono text-zinc-400">TECSUP</span>
              </div>
              <p className="text-xs text-zinc-400 leading-normal">
                {lang === 'es'
                  ? 'APIs empresariales en Django y .NET 9, transacciones atómicas PostgreSQL, contenedores Docker y protocolos IoT (MQTT).'
                  : 'Production APIs in Django & .NET 9, atomic PostgreSQL schemas, Docker containerization, and low-latency MQTT brokers.'}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
