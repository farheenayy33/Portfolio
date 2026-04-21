import { Github, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-accent fill-accent" />
            <span>by Farheen Laraib &mdash; React, TypeScript, Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/farheenayy33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              data-testid="footer-link-github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:farheenayy33@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
              data-testid="footer-link-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Farheen Laraib. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


