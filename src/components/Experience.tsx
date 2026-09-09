'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { experiences, educations } from '@/data/portfolioData';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section id="trayectoria" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs text-zinc-500 block mb-2">
              04 // TRAYECTORIA
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {lang === 'es' ? 'Experiencia & Formación Académica' : 'Experience & Academic Background'}
            </h2>
          </div>

          <div className="flex items-center gap-1 p-1 rounded-lg bg-zinc-900/60 border border-white/[0.08]">
            <button
              type="button"
              onClick={() => setActiveTab('work')}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                activeTab === 'work'
                  ? 'bg-zinc-800 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              EXPERIENCIA
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                activeTab === 'education'
                  ? 'bg-zinc-800 text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              FORMACIÓN
            </button>
          </div>
        </div>

        {/* Ledger Entries */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {activeTab === 'work' ? (
            experiences.map((exp) => (
              <div key={exp.id} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Period & Company */}
                <div className="lg:col-span-4 space-y-1">
                  <span className="font-mono text-xs text-zinc-500 block">
                    {exp.period[lang]}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-zinc-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    {exp.location}
                  </p>
                  {exp.isCurrent && (
                    <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      ACTUAL
                    </span>
                  )}
                </div>

                {/* Role & Achievements */}
                <div className="lg:col-span-8 space-y-4">
                  <h4 className="text-base sm:text-lg font-bold text-zinc-200">
                    {exp.role[lang]}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {exp.description[lang]}
                  </p>

                  <ul className="space-y-1.5 text-xs text-zinc-400">
                    {exp.achievements[lang].map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-zinc-600 font-mono mt-0.5">—</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-400 bg-white/[0.02] border border-white/[0.05]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))
          ) : (
            educations.map((edu) => (
              <div key={edu.id} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                <div className="lg:col-span-4 space-y-1">
                  <span className="font-mono text-xs text-zinc-500 block">
                    {edu.period}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {edu.institution}
                  </h3>
                  {edu.current && (
                    <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      EN CURSO
                    </span>
                  )}
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <h4 className="text-base sm:text-lg font-bold text-zinc-200">
                    {edu.degree[lang]}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {edu.description[lang]}
                  </p>

                  <ul className="space-y-1.5 text-xs text-zinc-400">
                    {edu.highlights[lang].map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-zinc-600 font-mono mt-0.5">—</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};
