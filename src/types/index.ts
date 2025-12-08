// Types pour les compétences
export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  items: Skill[];
}

// Types pour les projets
export interface Project {
  id: string;
  title: string;
  category: 'web' | 'app' | 'video' | 'design';
  description: string;
  tags: string[];
  image: string;
  year: string;
  features: string[];
}

// Types pour la timeline
export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  type: 'education' | 'experience' | 'project';
  description: string;
  highlights: string[];
}

// Type pour le store global
export interface AppState {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  prefersReducedMotion: boolean;
  setPrefersReducedMotion: (value: boolean) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

// Types pour les animations
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string | number[];
}