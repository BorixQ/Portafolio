'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types/portfolio';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.about': { es: 'Sobre Mí', en: 'About Me' },
  'nav.achievements': { es: 'Logros', en: 'Awards' },
  'nav.projects': { es: 'Proyectos', en: 'Projects' },
  'nav.experience': { es: 'Trayectoria', en: 'Experience' },
  'nav.skills': { es: 'Habilidades', en: 'Skills' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.cv': { es: 'Descargar CV', en: 'Download CV' },

  // Hero
  'hero.greeting': { es: 'Hola, soy', en: 'Hello, I am' },
  'hero.status': { es: 'Disponible para proyectos de alto impacto', en: 'Available for high-impact engineering' },
  'hero.nasaBadge': { es: '🏆 Ganador Global NASA Space Apps 2025', en: '🏆 NASA Space Apps 2025 Global Winner' },
  'hero.ctaProjects': { es: 'Ver Proyectos', en: 'Explore Projects' },
  'hero.ctaContact': { es: 'Contáctame', en: 'Get in Touch' },
  'hero.ctaCV': { es: 'Obtener CV', en: 'Get Resume' },

  // About
  'about.title': { es: 'Sobre Mí', en: 'About Me' },
  'about.subtitle': { 
    es: 'Física Pura, Modelado Matemático e Ingeniería de Software Backend', 
    en: 'Pure Physics, Mathematical Modeling & Backend Software Engineering' 
  },
  'about.p1': {
    es: 'Mi trayectoria fusiona la rigurosidad analítica de la Física con la ingeniería de software moderna y la Ciencia de Datos. Esta combinación me permite abordar la arquitectura de sistemas no solo desde el código, sino entendiendo los fundamentos matemáticos de los datos y el hardware.',
    en: 'My career combines the analytical rigor of Physics with modern software engineering and Data Science. This synthesis enables me to design system architectures not just at code level, but deeply understanding mathematical models, hardware signals, and data flow.'
  },
  'about.p2': {
    es: 'Como Ganador Global del NASA Space Apps Challenge 2025, lideré la ingeniería de datos satelitales y drones para el proyecto Queñaris. En el ámbito empresarial, he construido backends productivos en Django para gestión industrial (RESERSUR) y desarrollado soluciones IoT de telemetría médica en tiempo real (AuthCares).',
    en: 'As a Global Winner of the NASA Space Apps Challenge 2025, I spearheaded the satellite and drone data engineering pipeline for project Queñaris. In enterprise settings, I have architected production backends in Django for industrial maintenance (RESERSUR) and built real-time medical IoT telemetry ecosystems (AuthCares).'
  },
  'about.stat1Label': { es: 'Premio Mundial NASA', en: 'NASA Global Award' },
  'about.stat1Value': { es: '2025', en: '2025' },
  'about.stat2Label': { es: 'Enfoque Técnico', en: 'Core Focus' },
  'about.stat2Value': { es: 'Backend & Datos', en: 'Backend & Data' },
  'about.stat3Label': { es: 'Nivel de Inglés', en: 'English Level' },
  'about.stat3Value': { es: 'C1 Avanzado', en: 'C1 Advanced' },

  // Achievements
  'achievements.title': { es: 'Logros & Reconocimientos', en: 'Awards & Distinctions' },
  'achievements.subtitle': { 
    es: 'Hitos clave obtenidos en competencias internacionales y de ingeniería', 
    en: 'Key milestones achieved across global and national software championships' 
  },
  'achievements.celebrate': { es: 'Celebrar Logro 🎉', en: 'Celebrate Milestone 🎉' },

  // Projects
  'projects.title': { es: 'Proyectos Destacados', en: 'Featured Projects' },
  'projects.subtitle': { 
    es: 'Arquitecturas de datos, backends escalables y soluciones IoT de impacto real', 
    en: 'Data architectures, scalable backends, and real-world impact IoT platforms' 
  },
  'projects.filterAll': { es: 'Todos', en: 'All' },
  'projects.filterData': { es: 'Data Science & IA', en: 'Data Science & AI' },
  'projects.filterBackend': { es: 'Backend & APIs', en: 'Backend & APIs' },
  'projects.filterIoT': { es: 'IoT & Hardware', en: 'IoT & Hardware' },
  'projects.filterFullstack': { es: 'Full-Stack', en: 'Full-Stack' },
  'projects.viewDetails': { es: 'Ver Arquitectura & Detalles', en: 'View Architecture & Details' },
  'projects.github': { es: 'Código en GitHub', en: 'GitHub Repository' },
  'projects.live': { es: 'Ver Demo / Proyecto', en: 'Live Demo' },

  // Modal
  'modal.architecture': { es: 'Arquitectura & Decisión Técnica', en: 'Architecture & Technical Decisions' },
  'modal.highlights': { es: 'Puntos Clave de Impacto', en: 'Key Impact Highlights' },
  'modal.techUsed': { es: 'Tecnologías Aplicadas', en: 'Applied Tech Stack' },
  'modal.close': { es: 'Cerrar', en: 'Close' },

  // Experience & Education
  'experience.title': { es: 'Experiencia & Formación', en: 'Experience & Education' },
  'experience.subtitle': { 
    es: 'Trayectoria profesional, docencia universitaria e investigación académica', 
    en: 'Professional milestones, international pedagogy, and academic research' 
  },
  'experience.tabWork': { es: 'Experiencia Profesional', en: 'Work Experience' },
  'experience.tabEdu': { es: 'Educación & Grados', en: 'Education & Degrees' },
  'experience.currentBadge': { es: 'En curso / Activo', en: 'Current' },

  // Skills
  'skills.title': { es: 'Habilidades & Tecnologías', en: 'Skills & Technologies' },
  'skills.subtitle': { 
    es: 'Herramientas y lenguajes con los que construyo soluciones confiables', 
    en: 'Tools, languages, and frameworks I use to build reliable solutions' 
  },
  'skills.languagesTitle': { es: 'Idiomas', en: 'Languages' },
  'skills.softSkillsTitle': { es: 'Liderazgo & Competencias Blandas', en: 'Leadership & Methodologies' },

  // Contact
  'contact.title': { es: 'Contacto & Conexión', en: 'Get In Touch' },
  'contact.subtitle': { 
    es: '¿Tienes un proyecto desafiante, vacante técnica o deseas colaborar?', 
    en: 'Have a challenging project, technical opportunity, or want to collaborate?' 
  },
  'contact.copyEmail': { es: 'Copiar Correo', en: 'Copy Email' },
  'contact.copied': { es: '¡Correo copiado al portapapeles!', en: 'Email copied to clipboard!' },
  'contact.nameLabel': { es: 'Nombre Completo', en: 'Full Name' },
  'contact.emailLabel': { es: 'Correo Electrónico', en: 'Email Address' },
  'contact.messageLabel': { es: 'Tu Mensaje', en: 'Your Message' },
  'contact.sendBtn': { es: 'Enviar Mensaje', en: 'Send Message' },
  'contact.sending': { es: 'Enviando...', en: 'Sending...' },
  'contact.success': { 
    es: '¡Mensaje recibido! Gracias por contactarme, te responderé pronto.', 
    en: 'Message received! Thank you for reaching out, I will reply shortly.' 
  },
  'contact.directChannels': { es: 'Canales Directos', en: 'Direct Channels' },
  'contact.location': { es: 'Ubicación', en: 'Location' },

  // Footer
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  'footer.builtWith': { 
    es: 'Diseñado y construido con Next.js, TypeScript y Tailwind CSS.', 
    en: 'Designed and built with Next.js, TypeScript, and Tailwind CSS.' 
  },
  'footer.backToTop': { es: 'Volver arriba', en: 'Back to top' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('es');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Language;
    if (saved && (saved === 'es' || saved === 'en')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  };

  const toggleLang = () => {
    const next = lang === 'es' ? 'en' : 'es';
    setLang(next);
  };

  const t = (key: string): string => {
    const item = translations[key];
    if (!item) return key;
    return item[lang] || item['es'] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
