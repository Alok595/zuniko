"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/content/site";
import { Lines, Reveal } from "./motion-primitives";
import { Button, SampleNotice, SectionLabel } from "./ui";
import { WorkVisual } from "./work-visuals";

/** On large screens, vertical scrolling drives the gallery sideways. */
export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const measure = () =>
      setDistance(desktop.matches ? Math.max(track.scrollWidth - window.innerWidth, 0) : 0);

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="our-work"
      ref={sectionRef}
      className="relative bg-white border-t border-line"
      style={distance ? { height: `calc(100svh + ${distance}px)` } : undefined}
    >
      <div className="py-20 md:py-28 lg:sticky lg:top-0 lg:flex lg:h-svh lg:items-center lg:overflow-hidden lg:py-0">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="wrap flex flex-col gap-16 md:gap-20 lg:w-max lg:flex-row lg:items-center lg:gap-[5vw]"
        >
          <header className="lg:w-[min(36vw,34rem)] lg:shrink-0">
            <p className="label">03 · Our work</p>
            <h2 className="mt-4 font-display text-[clamp(36px,4.8vw,64px)] leading-[0.98]">
              Our work that<br />
              earns its keep.
            </h2>
            <p className="mt-4 text-muted text-base leading-relaxed">
              Every build is deployed to production with custom architecture and tested against real user traffic.
            </p>
          </header>

          {projects.map((project, i) => (
            <Reveal key={project.name} y={40} className="lg:w-[min(58vw,104svh)] lg:shrink-0">
              <article className="group">
                <WorkVisual visual={project.visual} />
                <div className="mt-4 grid gap-1 md:grid-cols-12 md:gap-x-4 items-baseline">
                  <h3 className="font-display text-2xl uppercase tracking-wide md:col-span-5 text-ink">
                    {project.name}
                  </h3>
                  <p className="text-[0.975rem] leading-[1.35] text-muted md:col-span-7">
                    <span className="font-mono text-xs uppercase text-accent font-semibold">
                      0{i + 1} / {project.kind}.
                    </span>{" "}
                    {project.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal className="lg:w-[min(32vw,28rem)] lg:shrink-0">
            <p className="font-display uppercase text-[clamp(32px,4vw,56px)] leading-none text-ink">
              Yours could be next.
            </p>
            <a href="#contact-us" className="btn mt-6">
              Start a project <span className="arr">→</span>
            </a>
          </Reveal>
        </motion.div>

        <div aria-hidden className="wrap absolute inset-x-0 bottom-7 hidden lg:block">
          <div className="h-px bg-line">
            <motion.div className="h-px origin-left bg-ink" style={{ scaleX: bar }} />
          </div>
        </div>
      </div>
    </section>
  );
}
