export type Language = 'es' | 'en';

export interface Project {
  id: string;
  title: Record<Language, string>;
  category: 'data-ai' | 'backend' | 'iot' | 'fullstack';
  badge?: Record<Language, string>;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  longDescription: Record<Language, string>;
  highlights: Record<Language, string[]>;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  award?: Record<Language, string>;
  architectureNotes?: Record<Language, string>;
}

export interface Achievement {
  id: string;
  title: Record<Language, string>;
  organization: string;
  year: string;
  description: Record<Language, string>;
  impact: Record<Language, string>;
  badge: Record<Language, string>;
  icon: 'trophy' | 'rocket' | 'code' | 'star';
  projectRef?: string;
}

export interface Experience {
  id: string;
  role: Record<Language, string>;
  company: string;
  location: string;
  period: Record<Language, string>;
  description: Record<Language, string>;
  achievements: Record<Language, string[]>;
  skills: string[];
  isCurrent?: boolean;
}

export interface Education {
  id: string;
  degree: Record<Language, string>;
  institution: string;
  period: string;
  description: Record<Language, string>;
  highlights: Record<Language, string[]>;
  current?: boolean;
}

export interface SkillCategory {
  title: Record<Language, string>;
  icon: string;
  skills: {
    name: string;
    level?: string;
    description?: Record<Language, string>;
  }[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'mail' | 'phone' | 'file';
  display: string;
}
