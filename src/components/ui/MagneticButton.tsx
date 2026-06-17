"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 border-transparent",
  secondary:
    "bg-transparent text-foreground border-border hover:border-foreground/30 hover:bg-muted",
  ghost:
    "bg-transparent text-muted-foreground border-transparent hover:text-foreground",
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  download,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      download={download || undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-medium transition-[transform,background-color,border-color,color] duration-300",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
