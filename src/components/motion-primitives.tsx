"use client";

import { motion } from "motion/react";
import type { ElementType, ReactNode } from "react";

export const ease = [0.16, 1, 0.3, 1] as const;

const viewport = { once: true, margin: "-8% 0px" };

/** Fades and lifts content when it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Headline lines that rise out of a mask, one after another. */
export function Lines({
  lines,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.09,
  immediate = false,
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
          <motion.span
            data-reveal
            className="block will-change-transform"
            initial={{ y: "112%" }}
            {...(immediate
              ? { animate: { y: 0 } }
              : { whileInView: { y: 0 }, viewport })}
            transition={{ duration: 1.2, ease, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** A hairline that draws itself across the page. */
export function Rule({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      data-reveal
      aria-hidden
      className={`h-px origin-left bg-ink ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={viewport}
      transition={{ duration: 1.4, ease, delay }}
    />
  );
}
