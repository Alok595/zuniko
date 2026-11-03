"use client";

import { motion, type MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { statement } from "@/content/site";

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, [index / total, (index + 1) / total], [0.18, 1]);
  return (
    <motion.span style={{ opacity }}>
      {word}{" "}
    </motion.span>
  );
}

export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const words = statement.split(" ");

  return (
    <section id="about" className="wrap grid gap-8 border-b border-line py-16 md:py-24 lg:grid-cols-12 items-start">
      <div className="lg:col-span-3">
        <p className="label">01 · About Zuniko</p>
      </div>
      <div className="lg:col-span-9">
        <p
          ref={ref}
          aria-label={statement}
          className="text-[clamp(28px,3.8vw,48px)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
        >
          {words.map((word, i) => (
            <Word key={i} word={word} index={i} total={words.length} progress={scrollYProgress} />
          ))}
        </p>
        <div className="mt-8 pt-6 border-t border-line flex flex-wrap gap-8 text-xs uppercase tracking-widest text-muted">
          <span>// Zero Bloat</span>
          <span>// 100% Code Handover</span>
          <span>// Direct Engineering Team</span>
        </div>
      </div>
    </section>
  );
}
