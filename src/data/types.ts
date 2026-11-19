export interface Profile {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
  image?: string;
  affiliations: Affiliation[];
}

export interface Affiliation {
  name: string;
  role: string;
  logo: string; // URL or path
  url?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  links: {
    paper?: string;
    code?: string;
    video?: string;
    website?: string;
    article?: string;
  };
  internalLink?: string; // For internal router links
  authors?: string;
  venue?: string;
  images?: string[]; // Gallery images
}

export interface CVEntry {
  id: string;
  title: string;
  summary?: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string[];
  skills?: string[];
  url?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface PublicationEntry {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  // Rich media extensions
  thumbnail?: string;
  videoPreview?: string;
  videoAutoplay?: boolean;
  category?: 'Paper' | 'Abstract';
  links?: {
    paper?: string;
    code?: string;
    video?: string;
    website?: string;
  };
  tags?: string[];
  abstract?: string;
}

export interface CVData {
  education: CVEntry[];
  experience: CVEntry[];
  awards: CVEntry[];
  publications: PublicationEntry[];
  teachingAssistant: CVEntry[];
  service: CVEntry[];
  skills: SkillCategory[];
}
