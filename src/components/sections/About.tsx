"use client";

import { profile } from "@/lib/data/profile";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Three.js",
  "Framer Motion",
  "GSAP",
  "Git",
  "REST APIs",
];

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="section-padding mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <ScrollReveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              About
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Engineering with
              <br />
              intent & care
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                I&apos;m{" "}
                <span className="text-foreground">{profile.name}</span>, a{" "}
                {profile.role.toLowerCase()} in my {profile.semester.toLowerCase()}{" "}
                of {profile.education}. Based in {profile.location}, I focus on
                interfaces that are fast, accessible, and thoughtfully animated.
              </p>
              <p>
                I learn by shipping — from 3D rescue simulations to production
                dashboards. I value clear communication, ownership, and
                iterative improvement over flashy decoration.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {profile.traits.map((trait) => (
                <div
                  key={trait.label}
                  className="rounded-xl border border-border p-5 transition-colors hover:border-foreground/15"
                >
                  <h3 className="text-sm font-medium text-foreground">
                    {trait.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {trait.evidence}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Stack
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
