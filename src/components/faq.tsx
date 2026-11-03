"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs, site, whatsappUrl } from "@/content/site";
import { ease } from "./motion-primitives";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="border-b border-line py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <p className="label">06 · FAQ</p>
          <h2 className="mt-4 font-display text-[clamp(36px,4.8vw,64px)] leading-[0.98]">
            Clear answers.<br />
            Zero jargon.
          </h2>
          <p className="mt-5 text-muted text-[17px] leading-relaxed">
            Everything you need to know before initiating a project with us. If your question is not covered below, message us directly.
          </p>

          <div className="mt-8 border border-line p-6 bg-surface">
            <span className="label !text-accent block mb-2">Direct Inquiry</span>
            <p className="text-sm text-ink mb-4 font-medium">
              Have a specific scope, architecture question, or fixed timeline?
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={whatsappUrl("Hi Zuniko, I have a quick question regarding an upcoming software project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn !py-2.5 !px-4 !text-xs !justify-center"
              >
                Ask via WhatsApp <span className="arr">→</span>
              </a>
              <a
                href={`mailto:${site.email}?subject=Technical Inquiry`}
                className="btn ghost !py-2.5 !px-4 !text-xs !justify-center"
              >
                Email Technical Desk
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-7 border-t-2 border-ink lg:border-t-0">
          <ul className="divide-y divide-line">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <li key={i}>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-baseline justify-between py-5 text-left transition-colors hover:text-accent focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-6 font-display text-xl sm:text-2xl text-ink tracking-tight uppercase">
                      {faq.question}
                    </span>
                    <span className="font-display text-2xl font-normal shrink-0 select-none text-accent">
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
                        <p className="pb-6 text-muted text-[16px] leading-relaxed max-w-2xl">
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
    </section>
  );
}
