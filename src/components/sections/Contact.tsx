"use client";

import { profile } from "@/lib/data/profile";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    primary: true,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    primary: false,
  },
  {
    label: "LinkedIn",
    value: "farheen-laraib",
    href: profile.linkedin,
    primary: false,
  },
  {
    label: "GitHub",
    value: "farheenayy33",
    href: profile.github,
    primary: false,
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="section-padding mx-auto max-w-[1400px]">
        <ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Contact
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                Let&apos;s build
                <br />
                something meaningful
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Open to internships, frontend roles, and collaborations. Reach
                out — I respond within 24 hours.
              </p>
              <div className="mt-8">
                <MagneticButton href={`mailto:${profile.email}`} variant="primary">
                  Send an email
                </MagneticButton>
              </div>
            </div>

            <div className="divide-y divide-border rounded-2xl border border-border">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    channel.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-muted/20"
                >
                  <div>
                    <p className="font-mono text-xs text-muted-foreground">
                      {channel.label}
                    </p>
                    <p
                      className={
                        channel.primary
                          ? "mt-1 text-lg font-medium text-foreground"
                          : "mt-1 text-base text-foreground"
                      }
                    >
                      {channel.value}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
