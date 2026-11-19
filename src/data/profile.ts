import { Profile } from './types';

export const profile: Profile = {
  name: "Nirmal Pol",
  title: "PhD Candidate, Biomedical Engineering",
  email: "nirmal.pol@mail.utoronto.ca",
  image: `${import.meta.env.BASE_URL}profile.webp`,
  github: "https://github.com/nirmalpol",
  linkedin: "https://linkedin.com/in/nirmalpol",
  bio: "As a PhD researcher in the MEDCVR Lab at the University of Toronto, I build real-time perception and control for autonomous surgical robotics. I work with Optical Coherence Tomography (OCT)—a light-based imaging method that provides micron-scale subsurface detail—and use it as feedback for robotic control. By leveraging OCT where other sensors fall short, I’m enabling more accurate, more reliable autonomous surgical robotic actions.",
  affiliations: [
    {
      name: "University of Toronto",
      role: "PhD Candidate",
      logo: `${import.meta.env.BASE_URL}logos/uoft.png`,
      url: "https://www.utoronto.ca"
    },
    {
      name: "MEDCVR Lab",
      role: "Graduate Researcher",
      logo: `${import.meta.env.BASE_URL}logos/medcvr.png`,
      url: "https://medcvr.utm.utoronto.ca/" // Updated based on known URL structure
    },
    {
      name: "SickKids Hospital",
      role: "Researcher",
      logo: `${import.meta.env.BASE_URL}logos/sickkids.png`, // Placeholder
      url: "https://www.sickkids.ca"
    },
    {
      name: "PMCRT",
      role: "Affiliate",
      logo: `${import.meta.env.BASE_URL}logos/pmcrt.png`, // Placeholder
      url: "https://www.uhn.ca/OurHospitals/PrincessMargaret"
    }
  ]
};
