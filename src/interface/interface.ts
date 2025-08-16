

export interface Project {
  name: string;
  description: string[];
  mainPhoto: string;
  "Programming language used or technology used": string[];
  organization?: string; 
  context?: string;    
  links?: Record<string, string>;
  highlightPhoto?: string[];    
}

export interface SkillCardProps {
  skill: TechnicalSkill;
}

export interface TechnicalSkill {
  skill: string;
  details: string[];
  images?: { src: string; alt: string }[];
}

export interface ProjectDetailPanelProps {
  project: Project | null;
  onClose: () => void;
}
