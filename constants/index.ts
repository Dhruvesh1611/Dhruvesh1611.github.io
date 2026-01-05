import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Git",
    image: "git.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Github",
    image: "github.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "VS Code",
    image: "vscode.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "cpp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Dhruvesh1611",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/dhruveshshyara",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/dhruveshshyara",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "REST APIs",
    image: "restapi.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Git",
    image: "git.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Github",
    image: "github.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Postman",
    image: "postman.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "VS Code",
    image: "vscode.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "cpp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "Yaritu - Luxury Wedding Outfits on Rent",
    description:
      "Developed a rental catalogue using Next.js 15 (App Router) and MongoDB/Mongoose, with a custom dashboard using Next-Auth and Sanity CMS for inventory management. Optimized with AWS S3 and Cloudinary.",
    image: "/projects/yaritu.png",
    link: "https://yaritu.com/",
    github: "https://github.com/Dhruvesh1611/yaritu",
    technologies: ["Next.js", "React", "MongoDB", "AWS S3", "Cloudinary", "Next-Auth", "Sanity CMS", "Framer Motion"],
  },
  {
    title: "Shyara Gold - Your Style, Your Statement.",
    description:
      "Engineered a high-performance jewelry e-commerce platform using React and Node.js, with a REST API using Express and MongoDB Atlas. Integrated Cloudinary and Multer for media management.",
    image: "/projects/shyaragold.png",
    link: "https://shyara-gold.netlify.app/",
    github: "https://github.com/codinggita/shyara_gold",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Framer Motion", "Axios"],
  },
  {
    title: "Tattoo Studio - Open Source Contribution",
    description:
      "Architected a tiered membership program with a loyalty & rewards system using React and Node.js. Developed a secure JWT-authenticated digital wallet for tracking reward points.",
    image: "/projects/tattoostudio.png",
    link: "https://tattoostudio.com/",
    github: "https://github.com/Dhruvesh1611/tattoo-studio",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
  },
  {
    title: "EatClub Clone",
    description:
      'A responsive clone of the EatClub website built with HTML5, CSS3, and JavaScript. Features include modern design, responsive layout, and interactive elements.',
    image: "/projects/eatclub.png",
    link: "https://eatclub-clone.netlify.app/",
    github: "https://github.com/Dhruvesh1611/website1-Eat-club-",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    title: "Rolls-Royce Clone",
    description:
      'A luxury car website clone built with HTML5, CSS3, and JavaScript. Features include elegant design, smooth animations, and responsive layout.',
    image: "/projects/rollsroyce.png",
    link: "https://rollsroyce-clone.netlify.app/",
    github: "https://github.com/Dhruvesh1611/website2-rolls-royce-",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    title: "Libas Clone",
    description:
      'A fashion e-commerce website clone built with HTML5, CSS3, and JavaScript. Features include product showcase, responsive design, and modern UI.',
    image: "/projects/libas.png",
    link: "https://libas-web.netlify.app/",
    github: "https://github.com/Dhruvesh1611/website3-libas-",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    title: "Snake Game",
    description:
      'A classic Snake game built with JavaScript, HTML5 Canvas, and CSS3. Features include game logic, score tracking, and responsive controls.',
    image: "/projects/game.png",
    link: "https://snake-game-demo.netlify.app/",
    github: "https://github.com/Dhruvesh1611/snake-game",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Development"],
  },
  {
    title: "UI/UX Design - Yaritu",
    description:
      "Figma design for Yaritu, a luxury wedding outfit rental service.",
    image: "/projects/yaritu_figma.png",
    link: "https://www.figma.com/design/...",
    github: "https://www.figma.com/design/...",
    technologies: ["UI/UX Design", "Figma"],
  },
  {
    title: "UI/UX Design - Shyara Gold",
    description:
      "Figma design for Shyara Gold, a jewelry e-commerce platform.",
    image: "/projects/shyara_gold_figma.png",
    link: "https://www.figma.com/design/...",
    github: "https://www.figma.com/design/...",
    technologies: ["UI/UX Design", "Figma"],
  },
  {
    title: "UI/UX Design - DocScanX",
    description:
      "Figma design for DocScanX, a document scanning application.",
    image: "/projects/docscanx.png",
    link: "https://www.figma.com/design/nLO9RK2WTMH5gae7dKFh1A/Untitled?node-id=0-1&t=tLzv08ikjf1RfFbU-1",
    github: "https://www.figma.com/design/nLO9RK2WTMH5gae7dKFh1A/Untitled?node-id=0-1&t=tLzv08ikjf1RfFbU-1",
    technologies: ["UI/UX Design", "Figma"],
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Dhruvesh1611",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/dhruveshshyara",
      },
      {
        name: "Portfolio",
        icon: null,
        link: "https://dhruveshshyaraportfolio.netlify.app/",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com/dhruveshshyara",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com/dhruveshshyara",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/users/dhruveshshyara",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Resumes",
        icon: null,
        link: "#resume",
      },
      {
        name: "About Me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:dhruvesh.shyara.cg@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Resume",
    link: "#resume",
  },
  {
    title: "Education",
    link: "#education",
  },
  {
    title: "Certifications",
    link: "#certifications",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Dhruvesh1611/space-portfolio",
};

export const RESUMES = [
  {
    name: "Dhruvesh Shyara",
    link: "/resumes/Dhruvesh_Shyara_figma_Resume.pdf",
    image: "/resumes/resume.png",
    description: "Aspiring Full Stack Developer with a passion for creating innovative digital experiences.",
  },

] as const;

export const EDUCATION = [
  {
    degree: "Bachelor of Technology",
    school: "Rai University",
    period: "2021 — 2025",
    location: "Gujarat, India",
    highlights: [
      "CGPA: 9.4/10",
      "HSC: 71% (PP Savani International School, Surat)",
      "SSC: 96.08pr",
    ],
  },
] as const;

export const CERTIFICATIONS = [
  {
    name: "CSS Basic",
    issuer: "HackerRank",
    year: "2024",
    link: "https://www.hackerrank.com/certificates/e72e9d42799c",
    image: "/certificates/css-basic.png",
  },
  {
    name: "JavaScript (Basic)",
    issuer: "HackerRank",
    year: "2024",
    link: "https://www.hackerrank.com/certificates/...",
    image: "/certificates/javascript-basic.png",
  },
  {
    name: "Node (Basic)",
    issuer: "HackerRank",
    year: "2024",
    link: "https://www.hackerrank.com/certificates/ceb3ab163e6d",
    image: "/certificates/node-basic.png",
  },
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    year: "2024",
    link: "https://www.hackerrank.com/certificates/0625153f0783",
    image: "/certificates/problem-solving-basic.png",
  },
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    year: "2024",
    link: "https://www.hackerrank.com/certificates/cc7dcbd6558a",
    image: "/certificates/frontend-developer-react.png",
  },
  {
    name: "Azure Services (Basics)",
    issuer: "SimpliLearn",
    year: "2024",
  link: "https://simpli-web.app.link/e/N5LenkEbDTb",
  image: "/certificates/azure-services-basics.png",
  },
  {
    name: "Getting Started with Amazon DocumentDB",
    issuer: "SimpliLearn",
    year: "2024",
  link: "https://simpli-web.app.link/e/uPhDpKxwETb",
  image: "/certificates/amazon-documentdb.png",
  },
  {
    name: "Getting Started with Gateway Load Balancer",
    issuer: "SimpliLearn",
    year: "2024",
  link: "https://simpli-web.app.link/e/sq0S9jMwETb",
  image: "/certificates/gateway-load-balancer.png",
  },
] as const;

export const ACHIEVEMENTS = [
  {
    title: "Freelancing Paid-Project",
    description: "Successfully delivered multiple paid projects for clients, including Yaritu and Shyara Gold.",
    year: "2024",
  },
  {
    title: "Open Source Contribution",
    description: "Contributed to the Tattoo Studio open-source project, implementing a loyalty and rewards system.",
    year: "2024",
  },
  {
    title: "HackerRank Certifications",
    description: "Earned multiple certifications in CSS, JavaScript, Node.js, React, and Problem Solving from HackerRank.",
    year: "2024",
  },
] as const;

export const CONTACT = {
  email: "mailto:dhruvesh.shyara.cg@gmail.com",
  phone: "+91-9327595429",
  location: "India",
} as const;
