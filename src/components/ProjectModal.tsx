'use client';

import React from 'react';
import { Project, Language } from '@/types/portfolio';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Award } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
  t: (key: string) => string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang, t }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b0f19] border border-white/10 p-6 sm:p-8 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.badge && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {project.badge[lang]}
            </span>
          )}
          {project.award && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
              <Award className="w-3.5 h-3.5" />
              <span>{project.award[lang]}</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
          {project.title[lang]}
        </h3>
        <p className="text-sm sm:text-base font-medium text-cyan-400 mb-6">
          {project.subtitle[lang]}
        </p>

        {/* Long Narrative Description */}
        <div className="text-sm sm:text-base text-zinc-300 leading-relaxed space-y-4 mb-6">
          <p>{project.longDescription[lang]}</p>
        </div>

        {/* Architecture Notes */}
        {project.architectureNotes && (
          <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>{t('modal.architecture')}</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.architectureNotes[lang]}
            </p>
          </div>
        )}

        {/* Key Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
            {t('modal.highlights')}
          </h4>
          <ul className="space-y-2.5">
            {project.highlights[lang].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
            {t('modal.techUsed')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{t('projects.github')}</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t('projects.live')}</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            {t('modal.close')}
          </button>
        </div>
      </div>
    </div>
  );
};
