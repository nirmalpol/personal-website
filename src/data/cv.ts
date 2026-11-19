import { CVData } from './types';
import { irosChallenge } from './site';

export const cvData: CVData = {
  education: [
    {
      id: "edu-phd",
      title: "PhD Candidate, Biomedical Engineering",
      institution: "University of Toronto",
      location: "",
      startDate: "2022",
      endDate: "Present",
      description: []
    },
    {
      id: "edu-meng",
      title: "MEng, Biomedical Engineering",
      institution: "University of Toronto (GPA: 4.0)",
      location: "",
      startDate: "2021",
      endDate: "2022",
      description: []
    },
    {
      id: "edu-basc",
      title: "BASc, Engineering Science (Minor: Robotics)",
      institution: "University of Toronto (GPA: 3.6)",
      location: "",
      startDate: "2016",
      endDate: "2021",
      description: []
    }
  ],
  experience: [
    {
      id: "exp-medcvr",
      title: "Graduate Research Assistant (PhD)",
      institution: "University of Toronto | MEDCVR Lab",
      location: "",
      startDate: "Sept 2022",
      endDate: "Present",
      description: [
        "End-Effector Design & Simulation: Designed and prototyped a dexterous surgical end-effector with remote center-of-motion mechanics using SolidWorks and Fusion 360.",
        "Robotic Control Implementation: Developed robotic action policies using imitation learning and reinforcement learning concepts in MuJoCo, deploying them to physical robots via ROS 2.",
        "Perception for Manipulation: Trained 3D CNNs to estimate 8 DoF tool pose under imaging artifacts, enabling robust closed-loop control (Published in IEEE RA-L, exp. ICRA 2026).",
        "Multi-Modal Sensor Fusion: Engineered real-time pipelines fusing 3D OCT sensing and stereo endoscope videos for autonomous tissue manipulation."
      ]
    },
    {
      id: "exp-triple-ring",
      title: "Photonics, X-Ray, Imaging Intern",
      institution: "Triple Ring Technologies",
      location: "",
      startDate: "May 2022",
      endDate: "Aug 2022",
      description: [
        "Designed and developed scientific computing platform using ThreeJS for medical device sterilization simulations.",
        "Developed user/web requirements for cloud-based simulation configuration interface."
      ]
    },
    {
      id: "exp-smart-systems",
      title: "Smart Systems Intern",
      institution: "Clinical Informatics, Mackenzie Vaughan Hospital",
      location: "",
      startDate: "Jan 2021",
      endDate: "Sept 2021",
      description: [
        "Provided clinicians with one-on-one support with the Go Live process at Canada's first smart hospital.",
        "Supported staff with the use of EPIC EMR and other smart system technology installed at Cortelluci Vaughan Hospital (Rover, Vocera, EPIC, MyCare, Hillrom Centrella Beds)."
      ]
    },
    {
      id: "exp-mackenzie",
      title: "Research and Development Engineer Intern",
      institution: "Mackenzie Innovation Institute, Mackenzie Health Hospital",
      location: "",
      startDate: "Apr 2019",
      endDate: "Aug 2020",
      description: [
        "Built and trained a machine learning network to predict hospital bed cleaning requirements 2 hours in advance to optimize processes."
      ]
    },
    {
      id: "exp-nus",
      title: "Engineering Research Assistant",
      institution: "National University of Singapore",
      location: "",
      startDate: "May 2018",
      endDate: "July 2018",
      description: [
        "Completed the pressure subsystem of a nanoimprinter device to create nanochannels in polymers for DNA/biomedical analysis.",
        "Developed test plans and troubleshooting strategies to eliminate safety concerns (e.g., electrical hazards) for the device."
      ]
    }
  ],
  service: [
    {
      id: "serv-iros-2026",
      title: "Organizer, Forceps-Based Fine Manipulation Challenge",
      institution: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2026)",
      location: "Pittsburgh, USA",
      startDate: irosChallenge.year,
      url: irosChallenge.url,
      description: [irosChallenge.summary]
    },
    {
       id: "serv-python",
       title: "Python Instructor and Curriculum Developer",
       institution: "Project Include",
       startDate: "Mar 2017",
       endDate: "Aug 2018",
       description: [
           "Designed various programming curriculum for students varying between ages of 9-20 and successfully taught the fundamentals of Python to inspire their interest in coding.",
           "Hired 4 new instructors and gave guidance for improving their in-class teaching skills and experiences.",
           "Demonstrated strong leadership qualities by providing ideas and suggestions to other instructors/coordinators to help them improve their teaching experiences in the classroom."
       ]
    }
  ],
  awards: [
    {
      id: "award-trc",
      title: "Best Poster Runner Up Award",
      institution: "Toronto Robotics Conference",
      startDate: "July 2025",
      description: ["(Poster) Advancing Micro-Surgical Robot Control with Optical Coherence Tomography"]
    },
    {
      id: "award-bigdata",
      title: "BIGDataAIHUB Case Competition Award (2nd Place)",
      institution: "Scotiabank | Institute for Management & Innovation (IMI) | University of Toronto",
      startDate: "Mar 2025",
      description: ["Built ML models to investigate money laundering (Scotia Bank data); 2nd place out of 70+ teams."]
    },
    {
      id: "award-ogs",
      title: "Ontario Graduate Scholarship",
      institution: "School of Graduate Studies, UofT",
      startDate: "Sept 2024",
      description: ["Prestigious merit-based scholarship for academic excellence and research potential."]
    },
    {
      id: "award-wildcat",
      title: "Wildcat Graduate Scholarship",
      institution: "Institute of Biomedical Engineering, UofT",
      startDate: "Aug 2023",
      description: ["Acknowledged for exceptional academic merit and active community engagement."]
    },
    {
      id: "award-garron",
      title: "Garron Family Cancer Centre Research Award (2nd Place)",
      institution: "SickKids Hospital",
      startDate: "June 2023",
      description: ["Recognized for automated retinoblastoma image analysis workflow in OCT images."]
    },
    {
      id: "award-nserc",
      title: "NSERC CREATE in Healthcare Robotics (HeRo) Scholarship",
      institution: "NSERC | University of Toronto",
      startDate: "Apr 2023",
      description: ["Trainee under NSERC HeRo program, reflecting promise in interdisciplinary robotics and AI."]
    }
  ],
  publications: [
    {
      id: "pub-sumi-2026",
      title: "SuMI: Zero-Shot Policy Transfer between Different Robots with Wristed Instruments for Minimally Invasive Surgery",
      authors: "Nirmal Pol*, Radian Gondokaryono*, Puspita Triana Dewi, Fata A. Niazi, Jones Law, Kashfia Mahmood, Lueder A. Kahrs",
      venue: "Manuscript under review",
      year: "2026",
      category: "Paper",
      thumbnail: `${import.meta.env.BASE_URL}images/pub_sumi2026-rcm-poster.jpg`,
      videoPreview: "https://medcvr.utm.utoronto.ca/assets/projects/SuMI/video/franka-dvrk-rcm.mp4",
      videoAutoplay: true,
      links: {
        paper: "https://medcvr.utm.utoronto.ca/assets/projects/SuMI/paper/sumi.pdf",
        code: "https://github.com/MEDCVR/SuMI",
        video: "https://medcvr.utm.utoronto.ca/SuMI.html#rcm-motion",
        website: "https://medcvr.utm.utoronto.ca/SuMI.html"
      },
      abstract: "Transfers a policy learned on a Franka arm with wristed surgical instruments to the da Vinci Research Kit without retraining, achieving 17/20 successful angled peg-transfer trials."
    },
    {
      id: "pub-ral-2025",
      title: "OCT Imaging for Pose Estimation and Feedback Control of an Articulated Magnetic Surgical Tool",
      authors: "Erik Fredin*, Nirmal Pol*, Anton Zaliznyi, Dmytro Fishman, Eric Diller, Lueder A. Kahrs",
      venue: "Robotics and Automation Letters (RAL)",
      year: "2025",
      thumbnail: `${import.meta.env.BASE_URL}images/pub_ral2025.webp`,
      videoPreview: `${import.meta.env.BASE_URL}cover_video-silent.mp4`,
      videoAutoplay: true,
      links: {
        paper: "https://medcvr.utm.utoronto.ca/ral2025-oct-pose.html",
        video: "https://medcvr.utm.utoronto.ca/assets/projects/ral2025_oct_pose/RAL_OCT_RBG_Video.mp4",
        website: "https://medcvr.utm.utoronto.ca/ral2025-oct-pose.html",
        code: "https://github.com/MEDCVR/OCT-pose"
      },
      abstract: "8 DoF pose estimation of magnetically actuated micro-robotic gripper for neurosurgical applications using OCT imaging for closed-loop control."
    },
    {
      id: "pub-ismr-2024",
      title: "Estimating the Joint Angles of an Articulated Microrobotic Instrument using Optical Coherence Tomography",
      authors: "Erik Fredin*, Nirmal Pol*, Anton Zaliznyi*, Eric Diller, Lueder A. Kahrs",
      venue: "International Symposium on Medical Robotics (ISMR)",
      year: "2024",
      thumbnail: `${import.meta.env.BASE_URL}images/ISMR2024.png`, 
      links: {
        paper: "https://ieeexplore.ieee.org/document/10585943",
        video: `${import.meta.env.BASE_URL}ISMR_2024_Estimating_Angles_OCT_Video.mp4`
      },
      abstract: "Performed 3D template matching on volumetric OCT images to detect spherical markers and estimate micro-robot joint angles."
    },
    {
      id: "pub-arvo-2024",
      title: "Automated Segmentation of Retinoblastoma from Optical Coherence Tomography Images",
      authors: "Nirmal Pol, Bhadra Pandya, Joshua Craig, Jane Walter, Lueder A. Kahrs, Ashwin Mallipatna",
      venue: "Association for Research in Vision and Ophthalmology (ARVO)",
      year: "2024",
      category: "Abstract",
      links: {
          paper: "https://iovs.arvojournals.org/article.aspx?articleid=2797458"
      }
    },
    {
      id: "pub-cur-dir",
      title: "Pose Measurement of the EndoWrist Round Tip Scissor Instrument with Optical Coherence Tomography",
      authors: "Sandra Schoene, Nirmal Pol, Lueder A. Kahrs",
      venue: "Current Directions in Biomedical Engineering, vol 9",
      year: "2023",
      category: "Paper",
      thumbnail: `${import.meta.env.BASE_URL}images/CURAC2023.png`,
      links: {
          paper: "https://www.degruyterbrill.com/document/doi/10.1515/cdbme-2024-1079/html?lang=en"
      },
      abstract: "Surgical scissor tool joint angle estimation using ICP registration and tool CAD models."
    }
  ],
  teachingAssistant: [
    {
       id: "ta-csc376",
       title: "Fundamentals of Robotics (CSC376)",
       summary: "Head TA in 2026, with three years of TA experience. Delivered a lecture on inverse kinematics.",
       institution: "University of Toronto",
       startDate: "Sept 2023",
       endDate: "Present",
       url: "https://utm.calendar.utoronto.ca/course/csc376h5",
       description: [
           "Basic methodologies, tools, and concepts including robot manipulators, kinematics, motion planning, and control.",
           "Implementation in a practical environment using robots from different application domains."
       ]
    },
    {
       id: "ta-csc379",
       title: "Introduction to Medical Robotics (CSC379)",
       institution: "University of Toronto",
       startDate: "Jan 2024",
       endDate: "Apr 2024",
       url: "https://utm.calendar.utoronto.ca/course/csc379h5",
       description: [
           "Application driven perspective of medical robotics, including surgical robotics.",
           "Computer-assisted methods: treatment planning, patient registration, human-robot interaction, robot control and task execution."
       ]
    },
    {
       id: "ta-csc148",
       title: "Introduction to Computer Science (CSC148)",
       institution: "University of Toronto",
       startDate: "Sept 2023",
       endDate: "Dec 2023",
       url: "https://artsci.calendar.utoronto.ca/course/csc148h1",
       description: [
           "Abstract data types, data structures (linked lists), encapsulation, information-hiding, and object-oriented programming.",
           "Specifications, analyzing program efficiency, and recursion."
       ]
    },
    {
       id: "ta-csc477",
       title: "Introduction to Mobile Robotics (CSC477)",
       summary: "Delivered lectures on particle filters as a teaching assistant.",
       institution: "University of Toronto",
       startDate: "Jan 2025",
       endDate: "Present",
       url: "https://utm.calendar.utoronto.ca/course/csc477h5",
       description: [
           "Covers computational foundations of mobile robotics including probabilistic reasoning, state estimation, and path planning.",
           "Focuses on algorithms for optimization, inference mechanisms, and autonomous behavior strategies."
       ]
    },
    {
       id: "ta-bme1530",
       title: "Robot Foundations and Programming for Biomedical Applications (BME1530)",
       summary: "Head TA (May–August 2025).",
       institution: "University of Toronto",
       startDate: "May 2025",
       endDate: "Aug 2025",
       url: "https://sgs.calendar.utoronto.ca/course/bme1530h",
       description: [
           "Foundational concepts: forward and inverse kinematics, dynamics, trajectory generation, motion planning.",
           "Applications: biomedical lab automation, robot-assisted surgery, mobile and service robots."
       ]
    }
  ],
  skills: [
    {
      category: "Programming",
      items: ["Python", "C/C++", "ROS 2", "CMake", "Docker", "Apptainer/Singularity", "Git"]
    },
    {
      category: "Robot Platforms",
      items: ["Franka FR3", "Stäubli TX2-60L", "da Vinci research kit (dVRK)"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["PyTorch", "OpenCV", "JAX", "NumPy", "SciPy", "MuJoCo"]
    },
    {
      category: "Prototyping",
      items: ["3D printing", "CAD (SolidWorks, Fusion 360)"]
    }
  ]
};
