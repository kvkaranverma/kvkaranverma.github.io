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

export type CvAchievement = {
  title: string;
  points: string[];
};

export type CvEducation = {
  degree: string;
  field: string;
  institute: string;
  year: string;
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
    qualitySecurity: string[];
    analytics: string[];
    collaboration: string[];
    uiTooling: string[];
    buildTooling: string[];
  };

  experience: CvExperience[];

  achievements: CvAchievement[];

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
    "Senior Software Engineer with 7+ years at CatalystOne Solutions, progressing from intern to senior engineer and core contributor. Specialized in modern frontend architecture, large-scale UI modernization, and design-system evolution within complex monolithic applications. Strong focus on design tokens, dynamic theming, accessibility, performance, and long-term maintainability. Known for solving deep technical problems while balancing usability, developer experience, and enterprise scalability.",

  skills: {
    frontend: ["React.js", "TypeScript", "Angular", "JavaScript (ES6+)", "HTML", "CSS"],

    backend: ["Java", "REST APIs", "Database (working proficiency)"],

    styling: [
      "SCSS Architecture",
      "CSS Variables",
      "Design Tokens",
      "Responsive UI",
      "Accessible UI (A11y)",
    ],

    architecture: [
      "Design Systems",
      "Component Libraries",
      "Feature-flag-driven Development",
      "Legacy Modernization Strategy",
      "Runtime Theming & Incremental Rollouts",
    ],

    cloud: [
      "Microsoft Azure (enterprise production exposure)",
      "Azure Monitor (diagnostics & performance insights)",
      "Azure CDN (static asset delivery optimization)",
    ],

    qualitySecurity: [
      "Secure Development Practices",
      "Vulnerability Identification",
      "Security Champion Responsibilities",
      "Code Quality & Maintainability",
    ],

    analytics: [
      "Amplitude Event Tracking",
      "Funnels & Dashboards",
      "Product Reporting & Insights",
    ],

    collaboration: [
      "Cross-team Enablement",
      "Mentoring Engineers",
      "Developer Experience Improvements",
      "Agile Sprint Execution",
    ],

    uiTooling: [
      "Figma (design collaboration)",
      "Material UI (MUI) Theming & Customization",
      "Storybook (component documentation)",
      "Chrome DevTools (profiling & debugging)",
      "Memory Leak Analysis",
    ],

    buildTooling: [
      "Webpack / Vite",
      "Gradle-based Monolith Tooling",
      "ConfigCat Feature Flags",
      "GitHub PR Reviews",
      "Jira + Confluence Documentation",
    ],
  },

  experience: [
    {
      company: "CatalystOne Solutions",
      role: "Senior Software Engineer",
      start: "Sep 2023",
      end: "Present",
      highlights: [
        "Core contributor driving frontend modernization across a large multi-team enterprise monolith.",
        "Leading design system evolution focused on scalability, consistency, accessibility, and long-term maintainability.",
        "Designed and implemented feature-flag-driven UI architecture (ConfigCat) enabling safe incremental rollouts.",
        "Led migration from legacy SCSS styling to token-based theming using CSS variables and design tokens.",
        "Integrated Azure AI services to enable multilingual translation features within the product.",
        "Built interactive UI components and animations for multi-language AI-powered plugins.",
        "Mentoring engineers and supporting cross-team adoption of modern UI standards and architecture.",
        "Designed and implemented REST APIs supporting ATS (Applicant Tracking System) integrations.",
      ],
    },

    {
      company: "CatalystOne Solutions",
      role: "Software Engineer",
      start: "Jun 2020",
      end: "Sep 2023",
      highlights: [
        "Built and maintained complex enterprise user interfaces using Angular.",
        "Partnered with Product Management to integrate Amplitude analytics: event schemas, tracking, funnels, dashboards, and reporting.",
        "Refactored shared JavaScript utilities to improve reuse, reliability, and performance across modules.",
        "Delivered responsive and accessible UI implementations in collaboration with design and product teams.",
        "Contributed to design-system alignment through Material UI theming and Storybook-driven component development.",
      ],
    },

    {
      company: "CatalystOne Solutions",
      role: "Associate Software Developer",
      start: "Jul 2019",
      end: "Jun 2020",
      highlights: [
        "Developed and enhanced frontend features in a production HR software platform.",
        "Strengthened foundations in enterprise UI development, architecture, and collaborative engineering practices.",
        "Served as a Security Champion, identifying vulnerabilities, addressing hotspots, and promoting secure coding standards.",
      ],
    },

    {
      company: "CatalystOne Solutions",
      role: "Intern – Software Developer",
      start: "Jan 2019",
      end: "Jun 2019",
      highlights: [
        "Started professional journey contributing to frontend development tasks.",
        "Learned enterprise-grade engineering workflows, tooling, sprint practices, and code collaboration standards.",
      ],
    },
  ],

  achievements: [
    {
      title: "Key Initiatives & Achievements",
      points: [
        "Led migration from legacy SCSS-based styling system to a token-based design system using CSS variables, improving consistency, accessibility, and theming capabilities.",
        "Designed UI modernization strategy aligned with long-term ATS roadmap and enterprise scalability.",
        "Delivered UI uplift and modernization using React, Angular, SCSS, and Material UI with minimal CSS-only changes where needed.",
        "Integrated Azure AI into the application to add multilingual translation and AI-powered UI features.",
        "Built interactive UI animations and components for multi-language plugin experiences.",
        "Explored AI-assisted debugging techniques, including analysis of frontend issues such as JavaScript memory leaks.",
        "Enabled runtime theming and safe rollouts via feature-flag-driven UI architecture.",
        "Strengthened frontend security as a Security Champion by identifying vulnerabilities, addressing hotspots, and promoting secure development practices.",
        "Supported performance optimization, accessibility improvements, and design consistency across product modules.",
      ],
    },
  ],

  education: {
    degree: "Master of Computer Applications (MCA)",
    field: "Computer Science",
    institute: "Kurukshetra University",
    year: "2019",
  },

  interests: [
    "Modern UI engineering and clean frontend architecture",
    "Design systems and scalable theming solutions",
    "Performance optimization, accessibility, and developer experience",
    "Continuous learning, mentoring, and cross-team enablement",
  ],

  closingLine:
    "Open to Senior Software Engineer roles focusing on frontend architecture, design systems, and modern web platforms.",
};