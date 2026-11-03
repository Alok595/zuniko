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
    <section id="about-us" className="border-b border-line py-20 md:py-28">
      <div className="wrap grid gap-8 lg:grid-cols-12 items-start">
        <div className="lg:col-span-3">
          <p className="label">02 · About Us</p>
          <h2 className="mt-4 font-display text-[clamp(32px,3.8vw,52px)] leading-[0.98]">
            Built to scale.
          </h2>
        </div>

        <div className="lg:col-span-9">
          <p
            ref={ref}
            aria-label={statement}
            className="text-[clamp(26px,3.5vw,46px)] font-medium leading-[1.14] tracking-[-0.02em] text-ink"
          >
            {words.map((word, i) => (
              <Word key={i} word={word} index={i} total={words.length} progress={scrollYProgress} />
            ))}
          </p>

          <p className="mt-8 text-muted text-[17px] leading-relaxed max-w-3xl">
            Zuniko is a boutique software engineering studio. We partner with ambitious founders, established retail brands, and operational businesses to architect digital products that solve high-friction bottlenecks and unlock exponential scale.
          </p>

          <div className="mt-10 pt-6 border-t border-line grid sm:grid-cols-3 gap-6 text-xs uppercase tracking-widest text-muted">
            <div>
              <strong className="block text-ink text-sm font-semibold mb-1">// Zero Bloat</strong>
              <span>No redundant retainers or code you outgrow in months.</span>
            </div>
            <div>
              <strong className="block text-ink text-sm font-semibold mb-1">// 100% Handover</strong>
              <span>Full GitHub repos, keys, and schemas owned by you.</span>
            </div>
            <div>
              <strong className="block text-ink text-sm font-semibold mb-1">// Rapid Staging</strong>
              <span>Weekly clickable builds to test as we build.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
