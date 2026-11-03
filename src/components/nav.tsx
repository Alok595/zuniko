"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/content/site";
import { ease } from "./motion-primitives";
import { setScrollLocked } from "./smooth-scroll";
import { Logo, Roll } from "./ui";

export function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(current > previous && current > 160);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
          else if (`#${entry.target.id}` === navLinks[0].href) {
            // Scrolling back up past the first section clears the marker.
            if (entry.boundingClientRect.top > 0) setActive(null);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const link of navLinks) {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setScrollLocked(open);
    return () => setScrollLocked(false);
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-line"
        animate={{ y: hidden && !open ? "-100%" : 0 }}
        transition={{ duration: 0.7, ease }}
      >
        <div className="wrap flex h-16 items-center justify-between lg:h-[72px]">
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="flex items-center shrink-0 max-h-8 sm:max-h-9 overflow-hidden"
            aria-label="Zuniko Home"
          >
            <Logo className="h-7 sm:h-8 md:h-9 w-auto max-h-7 sm:max-h-8 md:max-h-9 max-w-[130px] sm:max-w-[170px]" />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[12px] xl:text-[13px] font-semibold uppercase tracking-[0.06em] text-muted hover:text-ink transition-colors whitespace-nowrap"
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-marker"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent"
                    transition={{ duration: 0.4, ease }}
                  />
                )}
              </a>
            ))}
            <a href="#contact-us" className="btn !py-2 !px-4 xl:!py-2.5 xl:!px-5 !text-xs !tracking-wider shrink-0">
              Start a project <span className="arr">→</span>
            </a>
          </nav>

          <button
            type="button"
            className="relative h-11 w-11 -mr-2.5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute left-2.5 h-[2px] w-6 bg-ink transition-transform duration-500 ease-expo ${
                open ? "top-[21px] rotate-45" : "top-[16px]"
              }`}
            />
            <span
              className={`absolute left-2.5 h-[2px] w-6 bg-ink transition-transform duration-500 ease-expo ${
                open ? "top-[21px] -rotate-45" : "top-[26px]"
              }`}
            />
          </button>
        </div>
        <motion.div aria-hidden className="h-px origin-left bg-ink" style={{ scaleX: progress }} />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="wrap fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-white pb-8 pt-20 sm:pt-24 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease }}
          >
            <nav aria-label="Mobile">
              {navLinks.map((link, i) => (
                <div key={link.href} className="overflow-hidden border-b border-line">
                  <motion.a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-3 sm:py-3.5 text-[clamp(1.4rem,5vw,2.2rem)] font-medium leading-tight tracking-[-0.03em] hover:text-accent transition-colors"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, ease, delay: 0.08 + i * 0.04 }}
                  >
                    {link.label}
                    <span className="type-label tabular-nums text-xs sm:text-sm">0{i + 1}</span>
                  </motion.a>
                </div>
              ))}
            </nav>

            <div className="flex flex-col gap-4 pt-6 border-t border-line mt-6">
              <a
                href="#contact-us"
                onClick={() => setOpen(false)}
                className="btn w-full justify-center !py-3.5 !text-sm"
              >
                Start a project <span className="arr">→</span>
              </a>

              <div className="flex flex-col gap-1">
                <a href={`mailto:${site.email}`} className="text-base sm:text-lg font-medium tracking-tight hover:text-accent transition-colors">
                  {site.email}
                </a>
                <a href={`tel:${site.phoneRaw}`} className="text-sm sm:text-base text-muted tracking-tight hover:text-ink transition-colors">
                  {site.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
