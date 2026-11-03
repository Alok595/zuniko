"use client";

import Lenis from "lenis";
import { useEffect } from "react";

let lenis: Lenis | null = null;

/** Locks page scrolling, for example while the mobile menu is open. */
export function setScrollLocked(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  if (locked) lenis?.stop();
  else lenis?.start();
}

/** Smooth wheel scrolling, plus one shared handler for every in-page link. */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    if (!reduced) {
      lenis = new Lenis({ duration: 1.15 });
      const tick = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute("href");
      if (!hash) return;
      event.preventDefault();

      if (hash === "#") {
        if (lenis) lenis.scrollTo(0);
        else window.scrollTo(0, 0);
        return;
      }

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      if (lenis) lenis.scrollTo(target, { duration: 1.6 });
      else target.scrollIntoView();
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
