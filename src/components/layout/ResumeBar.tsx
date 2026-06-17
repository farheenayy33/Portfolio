"use client";

import { useState } from "react";
import { FileText, Download, ExternalLink } from "lucide-react";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils";

export function ResumeBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 md:bottom-8 md:right-8">
      <div className="relative">
        {open && (
          <div
            className="absolute bottom-full right-0 mb-3 w-56 overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40"
            role="menu"
          >
            <a
              href={profile.resume.view}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
              role="menuitem"
            >
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
              View Resume
            </a>
            <a
              href={profile.resume.pdf}
              download
              className="flex items-center gap-3 border-t border-border px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
              role="menuitem"
            >
              <Download className="h-4 w-4 text-muted-foreground" />
              Download PDF
            </a>
            <a
              href={profile.resume.docx}
              download
              className="flex items-center gap-3 border-t border-border px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
              role="menuitem"
            >
              <Download className="h-4 w-4 text-muted-foreground" />
              Download DOCX
            </a>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "group flex items-center gap-2.5 rounded-full border border-border bg-surface/90 px-4 py-2.5 text-sm font-medium text-foreground shadow-lg shadow-black/30 backdrop-blur-md transition-all hover:border-accent/40 hover:bg-muted",
            open && "border-accent/40",
          )}
          aria-expanded={open}
          aria-haspopup="menu"
        >
          <FileText className="h-4 w-4 text-accent" />
          <span className="hidden sm:inline">Resume</span>
        </button>
      </div>
    </div>
  );
}
