'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { personalInfo, socialLinks } from '@/data/portfolioData';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '@/components/Icons';

export const Contact: React.FC = () => {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      const subject = encodeURIComponent(`Contacto Profesional: ${formState.name}`);
      const body = encodeURIComponent(
        `Nombre: ${formState.name}\nEmail: ${formState.email}\n\nMensaje:\n${formState.message}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 750);
  };

  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-zinc-500 block mb-2">
            06 // COMUNICACIÓN DIRECTA
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {lang === 'es' ? 'Iniciar Conversación' : 'Get In Touch'}
          </h2>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Box */}
            <div className="p-5 rounded-lg bg-[#080a0f] border border-white/[0.08]">
              <span className="font-mono text-xs text-zinc-500 block mb-2">
                CORREO PRINCIPAL
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-sm text-zinc-200 select-all truncate">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.05] hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition-colors shrink-0"
                >
                  {copied ? (
                    <span className="text-emerald-400 font-semibold">COPIADO</span>
                  ) : (
                    <span>COPIAR</span>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="divide-y divide-white/[0.06] rounded-lg bg-[#080a0f] border border-white/[0.08] overflow-hidden text-xs font-mono">
              <a
                href="https://wa.me/51953766422"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 text-zinc-300 hover:text-white hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: {personalInfo.phoneDisplay}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href="https://linkedin.com/in/borix-quiroz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 text-zinc-300 hover:text-white hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn: in/borix-quiroz</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href="https://github.com/BorixQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 text-zinc-300 hover:text-white hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-purple-400" />
                  <span>GitHub: @BorixQ</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <div className="flex items-center gap-2.5 p-4 text-zinc-400">
                <MapPin className="w-4 h-4 text-zinc-500" />
                <span>Ubicación: {personalInfo.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-lg bg-[#080a0f] border border-white/[0.08] space-y-4"
            >
              <div>
                <label className="block font-mono text-xs text-zinc-400 mb-1.5">
                  {t('contact.nameLabel')}
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder={lang === 'es' ? 'Nombre o empresa' : 'Name or team'}
                  className="w-full px-3.5 py-2.5 rounded bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 text-sm font-sans"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 mb-1.5">
                  {t('contact.emailLabel')}
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="nombre@organizacion.com"
                  className="w-full px-3.5 py-2.5 rounded bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 text-sm font-sans"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-zinc-400 mb-1.5">
                  {t('contact.messageLabel')}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder={lang === 'es' ? 'Describe tu proyecto o vacante técnica...' : 'Describe your engineering challenge or role...'}
                  className="w-full px-3.5 py-2.5 rounded bg-black/40 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 text-sm font-sans resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{t('contact.success')}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-2.5 px-4 rounded font-medium text-sm text-white bg-zinc-800 hover:bg-zinc-700 border border-white/15 transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? t('contact.sending') : t('contact.sendBtn')}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
