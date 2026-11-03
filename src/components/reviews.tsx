"use client";

import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { useRef, useState } from "react";
import { reviews } from "@/content/site";
import { Arrow } from "./ui";

const DURATION = 8000;

export function Reviews() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const progress = useMotionValue(0);

  const goTo = (next: number) => {
    progress.set(0);
    setIndex((next + reviews.length) % reviews.length);
  };

  useAnimationFrame((_, delta) => {
    if (reduced || paused || !inView) return;
    const next = progress.get() + delta / DURATION;
    if (next >= 1) goTo(index + 1);
    else progress.set(next);
  });

  const review = reviews[index];

  return (
    <section id="reviews" className="border-b border-line bg-surface py-20 md:py-28">
      <div className="wrap mb-12 grid gap-8 md:mb-16 lg:grid-cols-12 items-end">
        <div className="lg:col-span-5">
          <p className="label">06 · Reviews &amp; Trust</p>
          <h2 className="mt-4 font-display text-[clamp(36px,4.8vw,64px)] leading-[0.98]">
            In our clients&apos;<br />own words.
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-muted text-[17px] leading-relaxed">
            Real commercial results from founders, retail directors, and operations leaders who run their core businesses on software we built.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="wrap grid gap-12 lg:grid-cols-12 items-start"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Reviewers List */}
        <div className="lg:col-span-4 border-t-2 border-ink pt-2">
          <ul className="divide-y divide-line">
            {reviews.map((item, i) => (
              <li key={item.name}>
                <button
                  type="button"
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={`w-full py-4 text-left transition-all ${
                    i === index ? "text-ink font-semibold" : "text-muted hover:text-ink opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg tracking-wide uppercase">{item.name}</span>
                    <span className="text-xs font-mono text-accent">0{i + 1}</span>
                  </div>
                  <span className="block text-xs uppercase tracking-wider text-muted mt-0.5">{item.role}</span>
                  {i === index && (
                    <motion.div
                      className="h-[2px] bg-accent mt-2 origin-left"
                      style={{ scaleX: reduced ? 1 : progress }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Big Quote Display */}
        <div className="lg:col-span-8 bg-bg p-8 sm:p-12 border border-line flex flex-col justify-between min-h-[300px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="font-medium text-ink text-[clamp(20px,2.6vw,34px)] leading-[1.3] tracking-[-0.015em]"
            >
              &ldquo;{review.quote}&rdquo;
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 pt-6 border-t border-line flex items-center justify-between">
            <div>
              <strong className="block text-sm font-semibold uppercase tracking-wider text-ink">
                {review.name}
              </strong>
              <span className="text-xs text-muted uppercase tracking-wider">
                {review.role}
              </span>
            </div>

            <div className="flex gap-1">
              <button
                type="button"
                aria-label="Previous quote"
                onClick={() => goTo(index - 1)}
                className="h-10 w-10 border border-line bg-bg flex items-center justify-center hover:bg-ink hover:text-white transition-colors"
              >
                <Arrow className="rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Next quote"
                onClick={() => goTo(index + 1)}
                className="h-10 w-10 border border-line bg-bg flex items-center justify-center hover:bg-ink hover:text-white transition-colors"
              >
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
