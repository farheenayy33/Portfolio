"use client";

import { ArrowUpRight, GitPullRequest } from "lucide-react";
import { openSourceContributions } from "@/lib/data/open-source";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function OpenSource() {
  return (
    <section
      id="opensource"
      className="border-t border-border bg-surface/40 py-24 md:py-32"
    >
      <div className="section-padding mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Collaboration
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Open source as proof of teamwork
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Pull requests, code reviews, and working inside existing
              codebases — not vanity forks.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {openSourceContributions.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.08}>
              <article className="flex h-full flex-col bg-background p-8 transition-colors hover:bg-muted/20">
                <div className="mb-6 flex items-center justify-between">
                  <GitPullRequest className="h-5 w-5 text-accent" />
                  <span className="font-mono text-xs text-muted-foreground">
                    OSS
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground">
                  {item.repo}
                </h3>
                <p className="mt-1 text-sm text-accent">{item.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-2">
                  {item.evidence.map((e) => (
                    <li
                      key={e}
                      className="text-xs text-muted-foreground before:mr-2 before:text-accent before:content-['—']"
                    >
                      {e}
                    </li>
                  ))}
                </ul>

                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  View repository
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
