"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, GraduationCap } from "lucide-react";
import { profile } from "@/lib/data/profile";
import { MagneticButton } from "@/components/ui/MagneticButton";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse rounded-2xl bg-muted/30" />
    ),
  },
);

const metaItems = [
  { icon: MapPin, text: profile.location },
  { icon: GraduationCap, text: `${profile.education} · ${profile.semester}` },
];

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    void import("gsap").then(({ gsap }) => {
      if (!headlineRef.current) return;
      gsap.fromTo(
        headlineRef.current.querySelectorAll(".hero-line"),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-fade opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="section-padding relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 lg:pb-20 lg:pt-16">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open to opportunities
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {profile.role}
            </span>
          </motion.div>

          <h1
            ref={headlineRef}
            className="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground"
          >
            <span className="hero-line block opacity-0">
              Building Intelligent
            </span>
            <span className="hero-line block opacity-0 text-muted-foreground">
              Digital Experiences
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="#work" variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton href={profile.resume.pdf} variant="secondary" download>
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-6 border-t border-border pt-8"
          >
            {metaItems.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <Icon className="h-4 w-4 shrink-0 text-foreground/50" />
                {text}
              </div>
            ))}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square w-full max-w-xl justify-self-end lg:max-w-none"
        >
          <div className="absolute inset-0 rounded-2xl border border-border bg-surface/50" />
          <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl md:min-h-[420px]">
            <HeroScene />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-lg border border-border bg-background px-4 py-3 font-mono text-xs text-muted-foreground md:block">
            React · Three.js · TypeScript
          </div>
        </motion.div>
      </div>
    </section>
  );
}
