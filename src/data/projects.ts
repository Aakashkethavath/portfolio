import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Secure Video Streaming & Sensitivity Analysis Platform",
    href: "/projects/video-streaming-platform",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "Socket.io",
      "JWT",
      "RBAC",
      "HTTP Range Streaming"
    ],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Apply-mate – Job Application Tracking System",
    href: "/projects/apply-mate",
    tags: [
      "MERN Stack",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Pagination & Filtering",
      "REST API"
    ],
    image: {
      LIGHT: "/images/projects/applyMateLight.webp",
      DARK: "/images/projects/applyMateDark.webp",
    },
  },
  {
    index: 2,
    title: "CodeEasy – Online HTML/CSS/JS Playground",
    href: "/projects/codeeasy",
    tags: [
      "React",
      "JavaScript",
      "Live Preview",
      "Frontend Development",
      "DOM Manipulation",
      "Code Playground"
    ],
    image: {
      LIGHT: "/images/projects/codeEasyLight.webp",
      DARK: "/images/projects/codeEasyDark.webp",
    },
  }
  ,
  {
    index: 3,
    title: "Realtime Collaborative Code Editor",
    href: "/projects/realtime-code-editor",
    tags: [
      "React",
      "Node.js",
      "Socket.io",
      "Monaco Editor",
      "Judge0 API",
      "WebSockets",
      "Real-time Collaboration"
    ],
    image: {
      LIGHT: "/images/projects/realtimeEditorLight.webp",
      DARK: "/images/projects/realtimeEditorDark.webp",
    },
  },
  {
    index: 4,
    title: "Flash Brief News App",
    href: "/projects/flash-brief-news-app",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "NewsAPI",
      "REST API Integration",
      "Responsive UI"
    ],
    image: {
      LIGHT: "/images/projects/flashNewsLight.webp",
      DARK: "/images/projects/flashNewsDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Secure Video Streaming Platform",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "A full-stack multi-tenant video platform with JWT authentication, RBAC, real-time processing updates via Socket.io, and optimized HTTP Range-based video streaming. Includes simulated sensitivity analysis for content moderation.",
    sourceCodeHref: "https://github.com/Aakashkethavath/video-streaming-platform",
    liveWebsiteHref: "https://video-streaming-nu-three.vercel.app/",
  },
  {
    name: "Apply-mate – Job Application Tracker",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/AM.webp",
      "/images/projects/AMDark.webp",
    ],
    description:
      "A MERN-based job tracking platform with JWT authentication and cookie-based session management. Features pagination, advanced filtering, sorting, and search for efficient job application management.",
    sourceCodeHref: "https://github.com/Aakashkethavath/Apply_mate",
    liveWebsiteHref: "https://apply-mate-six.vercel.app/",
  },
  {
    name: "CodeEasy – Online Code Playground",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/codeEasyDark.webp",
      "/images/projects/codeEasyLight.webp",
    ],
    description:
      "A browser-based live code editor that enables real-time HTML, CSS, and JavaScript editing with instant preview rendering. Demonstrates dynamic DOM manipulation and client-side execution.",
    sourceCodeHref: "https://github.com/Aakashkethavath/code_edit",
    liveWebsiteHref: "https://akash-kethavath.github.io/code_edit/",
  },
  {
    name: "Realtime Collaborative Code Editor",
    favicon: "/images/projects/logos/realtimeCollab.ico",
    imageUrl: [
      "/images/projects/cs1.webp",
      "/images/projects/cs2.webp",
    ],
    description:
      "A real-time collaborative code editor built with React, Node.js, Socket.io, and Monaco Editor. Supports multi-user room sessions, live code synchronization, and code execution via Judge0 API.",
    sourceCodeHref: "https://github.com/Aakashkethavath/code__collab",
    liveWebsiteHref: "",
  },
  {
    name: "Flash Brief News App",
    favicon: "/images/projects/logos/fb.ico",
    imageUrl: [
      "/images/projects/ib.webp",
    ],
    description:
      "A responsive React-based news aggregation app powered by NewsAPI, featuring country and category filtering, search functionality, pagination, and dark/light theme toggle.",
    sourceCodeHref: "https://github.com/Aakashkethavath/Info_Burst",
    liveWebsiteHref: "",
  },
];
