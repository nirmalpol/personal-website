import { Project } from './types';

export const projects: Project[] = [
  {
    id: "imi-2025",
    title: "2nd Place – 2025 IMI BIGDataAIHUB Case Competition",
    description: "Led my team to win 2nd place ($10,000) at the 2024-2025 IMI BIGDataAIHUB Big Data and Artificial Intelligence Competition at University of Toronto. Our solution leveraged AI and big data analytics to tackle fentanyl trafficking and financial crime, focusing on detecting suspicious financial transactions and anomalies related to the illegal opioid trade.",
    venue: "Institute for Management & Innovation",
    authors: "Radian Gondokaryono, Paul Kang, Nillan Nimal, and Nirmal Pol",
    tags: ["AI/ML", "Big Data", "Financial Crime", "Competition"],
    thumbnail: `${import.meta.env.BASE_URL}imi-competition/award.jpg`,
    links: {
      code: "https://github.com/nirmalpol/IMI_2025",
      article: "https://www.utm.utoronto.ca/imi/news/institute-management-innovation-highlights-use-ai-tackle-crime"
    }
  },
  {
    id: "prosthetics-db",
    title: "Interactive Prosthetics Database",
    description: "An open-source platform enabling users to customize and download 3D-printable prosthetic attachments for recreational activities like basketball and cycling. This tool addresses the high cost of terminal devices by providing scalable, accessible solutions for both children and adults.",
    venue: "Course Project | BME489: Biomedical Systems Engineering Design",
    tags: ["React", "Three.js", "TypeScript"],
    internalLink: "/prosthetics",
    links: {
      code: "https://github.com/nirmalpol/prosthetics-database-website"
    },
    thumbnail: `${import.meta.env.BASE_URL}prosthetics/images/prosthetics_project.jpg`,
  }
];
