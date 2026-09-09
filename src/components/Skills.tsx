'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { skillCategories, languagesList, softSkillsList } from '@/data/portfolioData';

export const Skills: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-zinc-500 block mb-2">
            05 // ESPECIFICACIÓN TÉCNICA
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {lang === 'es' ? 'Stack Tecnológico & Competencias' : 'Technical Stack & Capabilities'}
          </h2>
        </div>

        {/* Technical Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg bg-[#080a0f] border border-white/[0.08]"
            >
              <h3 className="text-sm font-bold text-white mb-4 pb-2 border-b border-white/[0.06] flex items-center justify-between">
                <span>{cat.title[lang]}</span>
              </h3>

              <ul className="space-y-2 text-xs">
                {cat.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center justify-between text-zinc-300 font-mono"
                  >
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[11px] text-zinc-500">
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Languages & Working Methodologies */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-white/[0.06]">
          
          {/* Languages */}
          <div className="md:col-span-5 p-5 rounded-lg bg-[#080a0f] border border-white/[0.08]">
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-4">
              {t('skills.languagesTitle')}
            </h3>
            <div className="space-y-3">
              {languagesList.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-medium text-white block">{item.name[lang]}</span>
                    <span className="text-[11px] text-zinc-500">{item.level[lang]}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-300 px-2 py-0.5 rounded bg-white/[0.04]">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills / Leadership */}
          <div className="md:col-span-7 p-5 rounded-lg bg-[#080a0f] border border-white/[0.08]">
            <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-4">
              {t('skills.softSkillsTitle')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
              {softSkillsList.map((s, idx) => (
                <div key={idx} className="p-3 rounded bg-white/[0.02] border border-white/[0.04] leading-snug">
                  <span className="text-zinc-500 font-mono mr-1.5">›</span>
                  {s[lang]}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
