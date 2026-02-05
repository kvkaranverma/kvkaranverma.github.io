export type CvLink = {
  label: string;
  url: string;
};

export type CvExperience = {
  company: string;
  role: string;
  start: string;
  end: string;
  highlights: string[];
};

export type CvProjectAchievement = {
  title: string;
  points: string[];
};

export type CvEducation = {
  degree: string;
  field: string;
  institute: string;
};

export type Cv = {
  basics: {
    name: string;
    title: string;
    subtitle: string;
    location: string;
    phone: string;
    email: string;
    links: CvLink[];
  };

  summary: string;

  skills: {
    frontend: string[];
    backend: string[];
    styling: string[];
    architecture: string[];
    cloud: string[];
    tools: string[];
  };

  experience: CvExperience[];

  achievements: CvProjectAchievement[];

  education: CvEducation;

  interests: string[];

  closingLine: string;
};

export const cv: Cv = {
  basics: {
    name: "Karan Verma",
    title: "Senior Software Engineer (Frontend / UI Architecture)",
    subtitle: "React · TypeScript · Design Systems · SCSS · Design Tokens",
    location: "Mohali, Punjab, India",
    phone: "+91 74045 40139",
    email: "karanv598@gmail.com",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/kvkaranverma",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/karanvermma",
      },
    ],
  },

  summary:
    "Senior Software Engineer with 7+ years at CatalystOne Solutions, progressing from intern to senior engineer and core contributor. Specialized in modern frontend architecture, large-scale UI modernization, and design-system evolution within complex monolithic applications. Strong focus on design tokens, dynamic theming, accessibility, and long-term maintainability. Known for solving deep technical problems while balancing performance, usability, and developer experience.",

  skills: {
    frontend: ["React.js", "TypeScript", "Angular", "JavaScript (ES6+)"],
    backend: ["Java", "REST APIs", "Database (working proficiency)"],
    styling: [
      "SCSS",
      "CSS Variables",
      "Design Tokens",
      "Responsive & Accessible UI",
    ],
    architecture: [
      "Design Systems",
      "Component Libraries",
      "Feature-flag-driven Development",
    ],
    cloud: ["Microsoft Azure", "Azure Monitor", "Azure CDN"],
    tools: [
      "GitHub",
      "Jira",
      "Confluence",
      "Figma",
      "Material UI (MUI)",
      "Storybook",
      "Chrome DevTools",
      "Webpack / Vite",
      "Gradle",
      "ConfigCat Feature Flags",
      "Amplitude Analytics",
    ],
  },

  experience: [
    {
      company: "CatalystOne Solutions",
      role: "Senior Software Engineer",
      start: "Sep 2023",
      end: "Present",
      highlights: [
        "Core contributor driving frontend modernization across a large multi-team monolith.",
        "Leading evolution of the design system with scalability, consistency, and accessibility focus.",
        "Designed feature-flag-driven UI architecture enabling safe incremental rollouts.",
        "Integrated Azure AI services to enable multilingual translation features.",
        "Mentoring engineers and supporting cross-team adoption of modern UI standards.",
        "Designed and implemented REST APIs supporting ATS integrations.",
      ],
    },
    {
      company: "CatalystOne Solutions",
      role: "Software Engineer",
      start: "Jun 2020",
      end: "Sep 2023",
      highlights: [
        "Built and maintained complex enterprise UIs using Angular.",
        "Integrated Amplitude analytics: event schemas, dashboards, and product reporting.",
        "Refactored shared JavaScript utilities to improve reuse, performance, and reliability.",
        "Collaborated closely with product and design teams on user-centric feature delivery.",
        "Contributed to responsive and accessible UI improvements across the platform.",
      ],
    },
    {
      company: "CatalystOne Solutions",
      role: "Associate Software Developer",
      start: "Jul 2019",
      end: "Jun 2020",
      highlights: [
        "Developed and enhanced frontend features in a production HR software platform.",
        "Strengthened foundations in enterprise UI development and collaborative engineering.",
        "Served as a Security Champion identifying vulnerabilities and promoting secure coding practices.",
      ],
    },
    {
      company: "CatalystOne Solutions",
      role: "Intern – Software Developer",
      start: "Jan 2019",
      end: "Jun 2019",
      highlights: [
        "Started professional journey contributing to frontend development tasks.",
        "Learned enterprise-grade engineering practices, tooling, and workflows.",
      ],
    },
  ],

  achievements: [
    {
      title: "Key Initiatives & Achievements",
      points: [
        "Led migration from legacy SCSS styling to token-based design system using CSS variables.",
        "Delivered UI uplift and modernization using React, Angular, SCSS, and Material UI.",
        "Integrated Azure AI into the application for multilingual translation features.",
        "Built interactive UI components and animations for a multi-language AI plugin.",
        "Enabled runtime theming and safe rollouts through feature-flag-driven architecture.",
        "Strengthened frontend security as a Security Champion by identifying vulnerabilities and hotspots.",
      ],
    },
  ],

  education: {
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Science",
    institute: "—",
  },

  interests: [
    "Modern UI engineering and clean frontend architecture",
    "Design systems and scalable theming solutions",
    "Performance, accessibility, and developer experience",
    "Continuous learning and mentoring",
  ],

  closingLine:
    "Open to Senior Software Engineer roles focusing on frontend architecture, design systems, and modern web platforms.",
};