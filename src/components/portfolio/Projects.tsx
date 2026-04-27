import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "TailAdmin Dashboard",
    description:
      "Cloned and deeply customized TailAdmin with a pink/lavender theme, personal branding, and a Settings page featuring Bond Alerts management (Add/Edit/Delete) persisted in localStorage. Fully responsive admin dashboard with charts, tables, sidebar navigation, and dark/light mode toggle — deployed on Vercel.",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://tail-adminboard-react-ts.vercel.app",
    repoUrl: "https://github.com/farheenayy33/TailAdminboard-react-ts",
    featured: true,
  },
  {
    title: "Savora Bistro",
    description:
      "A fully responsive restaurant website with a polished menu showcase, about section, and contact details. Features smooth scroll, hover animations, and a mobile-friendly layout built with CSS Flexbox and Grid. Live and deployed on Vercel.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://savorabistrocom.vercel.app",
    repoUrl: null,
    featured: true,
  },
  {
    title: "Islamic Quiz App",
    description:
      "Full-stack quiz application with dynamic question rendering, score tracking, and result feedback. Questions fetched via API with React hooks (useState, useEffect) managing quiz state. Clean, accessible UI with category-based quiz flow.",
    tags: ["React", "JavaScript", "REST API", "Full Stack"],
    liveUrl: null,
    repoUrl: "https://github.com/farheenayy33",
    featured: false,
  },
  {
    title: "CRUD Operations App",
    description:
      "Data management app integrated with a REST API for full Create, Read, Update, Delete operations. Built with fetch/axios for API calls, real-time state updates, form validation, loading states, and error handling.",
    tags: ["React", "REST API", "JavaScript"],
    liveUrl: null,
    repoUrl: null,
    featured: false,
  },
  {
    title: "Notes App",
    description:
      "Notes management app where users can add, edit, delete, and persist notes using localStorage. Built with React functional components and hooks for clean state management.",
    tags: ["React JS", "LocalStorage", "CSS"],
    liveUrl: "#",
    repoUrl: null,
    featured: false,
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "Two-player Tic Tac Toe built with pure Vanilla JS — win detection logic, turn tracking, and game reset functionality. Pure DOM manipulation with no frameworks.",
    tags: ["Vanilla JavaScript", "HTML", "CSS"],
    liveUrl: "#",
    repoUrl: null,
    featured: false,
  },
  {
    title: "Card Searching App",
    description:
      "Search-based card browsing application with real-time filtering and dynamic card rendering from an API. Features debounced search input and a responsive card grid for smooth browsing.",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    liveUrl: "#",
    repoUrl: null,
    featured: false,
  },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2 text-foreground">Projects</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Things built here: from dashboard UIs to Vanilla JS games
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative flex flex-col rounded-2xl bg-card border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden ${
                  project.featured
                    ? "border-primary/30 hover:border-primary/60"
                    : "border-card-border hover:border-primary/30"
                }`}
                data-testid={`card-project-${i}`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/15 text-primary border-primary/25 text-xs font-semibold">
                      Featured
                    </Badge>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div
                    className={`w-10 h-10 rounded-xl mb-5 flex items-center justify-center text-lg font-black text-primary-foreground ${
                      project.featured
                        ? "bg-gradient-to-br from-primary to-accent"
                        : "bg-gradient-to-br from-primary/70 to-accent/70"
                    }`}
                  >
                    {project.title.charAt(0)}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 pr-8">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.liveUrl || project.repoUrl) && (
                  <div className="px-6 pb-5 flex items-center gap-3">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline transition-colors"
                        data-testid={`link-project-live-${i}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        data-testid={`link-project-repo-${i}`}
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

