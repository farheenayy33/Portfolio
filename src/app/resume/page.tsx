import { profile } from "@/lib/data/profile";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
  robots: { index: false },
};

export default function ResumePage() {
  return (
    <main className="section-padding mx-auto max-w-3xl py-24 md:py-32">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-3xl font-semibold text-foreground">
          Resume
        </h1>
        <div className="flex flex-wrap gap-3">
          <a
            href={profile.resume.pdf}
            download
            className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
          >
            Download PDF
          </a>
          <a
            href={profile.resume.docx}
            download
            className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
          >
            Download DOCX
          </a>
        </div>
      </div>

      <article className="space-y-8 rounded-2xl border border-border bg-surface p-8 md:p-12">
        <header className="border-b border-border pb-8">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {profile.name}
          </h2>
          <p className="mt-1 text-muted-foreground">{profile.role}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {profile.location} · {profile.email} · {profile.phone}
          </p>
          <p className="mt-2 text-sm">
            <a
              href={profile.github}
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {" · "}
            <a
              href={profile.linkedin}
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </header>

        <section>
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            Summary
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Frontend developer specializing in React, TypeScript, and modern web
            interfaces. {profile.education} student ({profile.semester}) with
            production deployments, open source contributions, and experience
            building 3D interactive applications.
          </p>
        </section>

        <section>
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            Education
          </h3>
          <p className="mt-3 font-medium text-foreground">
            {profile.education}
          </p>
          <p className="text-sm text-muted-foreground">
            {profile.semester} · {profile.location} · In progress
          </p>
        </section>

        <section>
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            Selected Projects
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">QuakeRescue AI</strong> —
              3D earthquake rescue simulation with A* pathfinding
            </li>
            <li>
              <strong className="text-foreground">TailAdmin Dashboard</strong> —
              E-commerce analytics dashboard with custom modules
            </li>
            <li>
              <strong className="text-foreground">Islamic Quiz App</strong> —
              Full-stack quiz platform with REST API
            </li>
          </ul>
        </section>

        <section>
          <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
            Open Source
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Contributions to frontend, first-contributions, and Appsmith
            repositories — PR workflow, code review, and collaboration in
            existing codebases.
          </p>
        </section>
      </article>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        <Link href="/" className="text-accent hover:underline">
          ← Back to portfolio
        </Link>
      </p>
    </main>
  );
}
