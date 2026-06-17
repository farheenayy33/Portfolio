"use client";

import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useGSAP } from "@/hooks/useGSAP";
import { cn } from "@/lib/utils";

function FeaturedProject({ project }: { project: (typeof projects)[0] }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-foreground/15">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
          <div>
            <span className="font-mono text-xs text-accent">{project.index}</span>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{project.subtitle}</p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <ul className="mt-8 space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Live site
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                Source
              </a>
            )}
          </div>
        </div>

        <div className="relative min-h-[240px] border-t border-border bg-muted/20 lg:min-h-0 lg:border-l lg:border-t-0">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 30% 40%, hsl(var(--accent) / 0.15), transparent 55%), radial-gradient(circle at 70% 60%, hsl(var(--foreground) / 0.05), transparent 50%)",
            }}
          />
          <div className="relative flex h-full flex-col justify-end p-8 md:p-12">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectRow({ project }: { project: (typeof projects)[0] }) {
  return (
    <article className="group grid gap-6 border-b border-border py-10 transition-colors hover:bg-muted/10 md:grid-cols-[4rem_1fr_auto] md:items-start md:gap-10 md:py-12">
      <span className="font-mono text-sm text-muted-foreground">
        {project.index}
      </span>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent md:text-3xl">
            {project.title}
          </h3>
          <span className="text-sm text-muted-foreground">{project.subtitle}</span>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 md:flex-col md:items-end md:pt-1">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-foreground transition-colors hover:text-accent"
            aria-label={`View ${project.title} live`}
          >
            Live
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`View ${project.title} source`}
          >
            <Github className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    void import("gsap").then(({ gsap }) =>
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(section.querySelector(".work-label"), {
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 20%",
            scrub: 1,
          },
          x: 24,
          opacity: 0.4,
        });
      }),
    );
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative border-t border-border py-24 md:py-32"
    >
      <div className="section-padding mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="work-label font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Selected Work
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                Projects that
                <br />
                <span className="text-muted-foreground">ship & scale</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Evidence over claims — production deployments, algorithmic
              thinking, and interfaces built for real users.
            </p>
          </div>
        </ScrollReveal>

        <div className={cn("space-y-8")}>
          {featured.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.05}>
              <FeaturedProject project={project} />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8">
          {rest.map((project) => (
            <ScrollReveal key={project.id}>
              <ProjectRow project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
