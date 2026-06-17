import { profile } from "@/lib/data/profile";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", href: `tel:${profile.phone}` },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-padding mx-auto flex max-w-[1400px] flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              aria-label={label}
            >
              <Icon className="h-4 w-4 transition-colors group-hover:text-accent" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Next.js · TypeScript
        </p>
      </div>
    </footer>
  );
}
