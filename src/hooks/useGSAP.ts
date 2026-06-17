"use client";

import { useEffect, useRef } from "react";

export function useGSAP(
  callback: () => void | (() => void),
  deps: unknown[] = [],
) {
  const cleanupRef = useRef<(() => void) | void>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    cleanupRef.current = callback();

    return () => {
      cleanupRef.current?.();
      void import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
