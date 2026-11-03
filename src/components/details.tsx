"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/content/site";
import { ease } from "./motion-primitives";

const stackItems = [
  { num: "01", name: "Next.js", desc: "React Framework", bg: "#FFFFFF", text: "text-ink" },
  { num: "02", name: "TypeScript", desc: "Type Safety", bg: "#EDF3FF", text: "text-ink" },
  { num: "03", name: "React Native", desc: "Mobile Apps", bg: "#DBEAFE", text: "text-ink" },
  { num: "04", name: "Node / Python", desc: "API Backends", bg: "#0055FF", text: "text-white" },
  { num: "05", name: "PostgreSQL", desc: "Relational & AI", bg: "#0F2042", text: "text-white" },
  { num: "06", name: "AWS & Vercel", desc: "Edge Cloud", bg: "#0A0F1D", text: "text-white" },
];

export function Details() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="details" className="border-b border-line py-20 md:py-28 bg-surface">
      <div className="wrap">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <p className="label">05 · Details</p>
            <h2 className="mt-4 font-display text-[clamp(34px,4.5vw,58px)] leading-[0.98]">
              Technical specifications,<br />
              stack matrix &amp; guarantees.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted text-[17px] leading-relaxed">
              Every system is calibrated for speed, security, and developer maintainability with full repository ownership and post-launch warranties.
            </p>
          </div>
        </div>

        {/* Stack Matrix Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
            {stackItems.map((item) => (
              <div
                key={item.num}
                className={`sw ${item.text} p-4 flex flex-col justify-between aspect-[3/4] border border-line transition-transform duration-300 hover:-translate-y-2 shadow-sm`}
                style={{ backgroundColor: item.bg }}
              >
                <div>
                  <span className="font-display text-2xl font-normal leading-none block">{item.num}</span>
                  <strong className="block text-sm font-semibold mt-1">{item.name}</strong>
                </div>
                <small className="text-[11px] uppercase tracking-wider opacity-75">{item.desc}</small>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t-2 border-ink text-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-ink">
              Zuniko Architecture Blueprint &amp; Core Stack Matrix
            </span>
          </div>
        </div>

        {/* Two-Column Details Breakdown: Stats Card + FAQs */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Stats & Guarantees */}
          <div className="lg:col-span-5 stats">
            <div className="stat">
              <b>4.9<em>★</em></b>
              <span>Client satisfaction across 100+ projects</span>
            </div>
            <div className="stat">
              <b>100<em>+</em></b>
              <span>Production apps &amp; systems shipped</span>
            </div>
            <div className="stat">
              <b>100<em>%</em></b>
              <span>Full repository &amp; IP ownership handover</span>
            </div>
            <div className="stat">
              <b>30<em>D</em></b>
              <span>Post-launch warranty &amp; monitoring included</span>
            </div>
          </div>

          {/* Right: Detailed FAQs Accordion */}
          <div className="lg:col-span-7 border-t-2 border-ink lg:border-t-0">
            <span className="label block mb-3">Project Details &amp; FAQ</span>
            <ul className="divide-y divide-line">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      className="flex w-full items-baseline justify-between py-4 text-left transition-colors hover:text-accent focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-6 font-display text-lg sm:text-xl text-ink tracking-tight uppercase">
                        {faq.question}
                      </span>
                      <span className="font-display text-xl font-normal shrink-0 select-none text-accent">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-muted text-[15.5px] leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

