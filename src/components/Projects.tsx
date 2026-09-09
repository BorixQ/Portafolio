'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { projects } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import { ProjectModal } from './ProjectModal';
import { 
  ArrowUpRight, 
  Layers, 
  Trophy, 
  Radio, 
  Server, 
  Terminal,
  Activity,
  Cpu
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export const Projects: React.FC = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'data-ai' | 'backend' | 'iot' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = [
    { key: 'all', label: t('projects.filterAll') },
    { key: 'data-ai', label: t('projects.filterData') },
    { key: 'backend', label: t('projects.filterBackend') },
    { key: 'iot', label: t('projects.filterIoT') },
    { key: 'fullstack', label: t('projects.filterFullstack') },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs text-zinc-500 block mb-2">
              03 // INGENIERÍA & SISTEMAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {lang === 'es' ? 'Proyectos & Arquitecturas en Producción' : 'Projects & Production Architectures'}
            </h2>
          </div>

          {/* Minimalist Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-zinc-900/60 border border-white/[0.08]">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setFilter(opt.key as any)}
                className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                  filter === opt.key
                    ? 'bg-zinc-800 text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Layout */}
        <div className="space-y-6">
          {filteredProjects.map((proj) => {
            const isNasa = proj.id === 'quenaris';
            const isAuthCares = proj.id === 'authcares';

            return (
              <div
                key={proj.id}
                id={proj.id}
                className={`p-6 sm:p-8 rounded-xl border transition-colors ${
                  isNasa
                    ? 'bg-[#0a0d14] border-amber-500/30'
                    : 'bg-[#080a0f] border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Context & Metadata */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-2">
                      {proj.badge && (
                        <span
                          className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold ${
                            isNasa
                              ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30'
                              : 'bg-white/[0.05] text-zinc-300 border border-white/10'
                          }`}
                        >
                          {proj.badge[lang]}
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-zinc-500 uppercase">
                        {proj.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {proj.title[lang]}
                    </h3>

                    <p className="text-xs font-medium text-zinc-400">
                      {proj.subtitle[lang]}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {proj.technologies.map((tName) => (
                        <span
                          key={tName}
                          className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.06]"
                        >
                          {tName}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Architectural Highlights & Action */}
                  <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-5">
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {proj.description[lang]}
                    </p>

                    {/* Architecture Callout */}
                    {proj.architectureNotes && (
                      <div className="p-3.5 rounded-lg bg-black/40 border border-white/[0.06] text-xs text-zinc-300">
                        <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1">
                          Nota de Arquitectura
                        </span>
                        {proj.architectureNotes[lang]}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(proj)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-200 hover:text-white"
                      >
                        <Layers className="w-3.5 h-3.5 text-zinc-400" />
                        <span>{t('projects.viewDetails')}</span>
                      </button>

                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>github.com/BorixQ</span>
                          <ArrowUpRight className="w-3 h-3 text-zinc-500" />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
        t={t}
      />
    </section>
  );
};
