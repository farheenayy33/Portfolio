export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  index: string;
};

export const projects: Project[] = [
  {
    id: "quake-rescue",
    title: "QuakeRescue AI",
    subtitle: "AI-powered earthquake rescue simulation",
    description:
      "AI-powered earthquake rescue simulation using intelligent pathfinding algorithms and a 3D interactive city environment to locate and rescue trapped survivors safely. Full-stack platform combining React Three Fiber visualization with Python Flask backend running BFS, Dijkstra, and A* algorithms.",
    highlights: [
      "Graph-search algorithms (BFS, Dijkstra, A*) benchmarking",
      "3D city environment with React Three Fiber",
      "Client-server architecture with Flask backend",
      "Real-time path visualization and route comparison",
    ],
    stack: [
      "TypeScript",
      "React",
      "Three.js",
      "React Three Fiber",
      "Python",
      "Flask",
      "Algorithms",
    ],
    liveUrl: undefined,
    repoUrl: "https://github.com/farheenayy33/QuakeRescue-AI",
    featured: true,
    index: "01",
  },
  {
    id: "savora-bistro",
    title: "Savora Bistro",
    subtitle: "Restaurant web experience",
    description:
      "Polished restaurant site with menu showcase, cart functionality via localStorage, and mobile-first responsive layout with purposeful motion. Production-ready with smooth interactions and persistent cart state.",
    highlights: [
      "Cart with localStorage persistence",
      "Smooth scroll & hover interactions",
      "Mobile-first responsive design",
      "Production deployment on Vercel",
    ],
    stack: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://savorabistrocom.vercel.app",
    repoUrl: "https://github.com/farheenayy33/Savora-Bistro-Resturant",
    featured: true,
    index: "02",
  },
  {
    id: "tailadmin",
    title: "TailAdmin Dashboard",
    subtitle: "E-commerce analytics platform",
    description:
      "Deeply customized admin dashboard with charts, profit analysis, bond alerts CRUD, and dark/light theming. Extended open-source template with personal branding, responsive sidebar, and localStorage persistence.",
    highlights: [
      "Custom analytics & bond alerts module",
      "Responsive sidebar + sortable data tables",
      "Dark/light theme toggle",
      "Deployed on Vercel with CI/CD",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Recharts"],
    liveUrl: "https://tail-adminboard-react-ts.vercel.app",
    repoUrl: "https://github.com/farheenayy33/TailAdminboard-react-ts",
    featured: true,
    index: "03",
  },
  {
    id: "islamic-quiz",
    title: "Islamic Quiz App",
    subtitle: "Category-based knowledge platform",
    description:
      "Full-stack quiz application with dynamic question rendering, real-time score tracking, and accessible result feedback. API-driven state management with clean React hooks architecture.",
    highlights: [
      "REST API integration for questions",
      "Category-based quiz flow",
      "Score tracking and results feedback",
      "Accessible UI patterns",
    ],
    stack: ["React", "JavaScript", "REST API", "Hooks"],
    repoUrl: "https://github.com/farheenayy33",
    featured: false,
    index: "04",
  },
  {
    id: "crud-app",
    title: "CRUD React App",
    subtitle: "REST API data management",
    description:
      "Full Create, Read, Update, Delete operations against a REST API with form validation, loading states, and optimistic UI updates. Production patterns for error handling and user feedback.",
    highlights: [
      "Complete CRUD lifecycle",
      "Form validation and error handling",
      "Loading states and optimistic updates",
    ],
    stack: ["React", "REST API", "JavaScript"],
    featured: false,
    index: "05",
  },
];
