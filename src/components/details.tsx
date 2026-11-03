"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/content/site";
import { ease } from "./motion-primitives";

const stackItems = [
  { num: "01", name: "Next.js", desc: "React Framework", bg: "#FFFFFF", text: "text-ink", Icon: NextJsIcon },
  { num: "02", name: "TypeScript", desc: "Type Safety", bg: "#EDF3FF", text: "text-ink", Icon: TypeScriptIcon },
  { num: "03", name: "React Native", desc: "Mobile Apps", bg: "#DBEAFE", text: "text-ink", Icon: ReactNativeIcon },
  { num: "04", name: "Node / Python", desc: "API Backends", bg: "#0055FF", text: "text-white", Icon: NodePythonIcon },
  { num: "05", name: "PostgreSQL", desc: "Relational & AI", bg: "#0F2042", text: "text-white", Icon: PostgresIcon },
  { num: "06", name: "AWS & Vercel", desc: "Edge Cloud", bg: "#0A0F1D", text: "text-white", Icon: AwsVercelIcon },
];

function NextJsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className}>
      <circle cx="64" cy="64" r="64" fill="currentColor" />
      <path
        d="M106.3 111.9L49.1 38.4H38.4V89.6H47.7V49.3L100 117.1c2.3-1.6 4.4-3.3 6.3-5.2z"
        fill="#FFFFFF"
      />
      <rect x="81.7" y="38.4" width="9.3" height="51.2" fill="#FFFFFF" />
    </svg>
  );
}

function TypeScriptIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect width="48" height="48" rx="8" fill="#0055FF" />
      <text
        x="24"
        y="33"
        fill="#FFFFFF"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="22"
        textAnchor="middle"
        letterSpacing="-0.5px"
      >
        TS
      </text>
    </svg>
  );
}

function ReactNativeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="2.8" fill="#0055FF" />
      <g stroke="#0055FF" strokeWidth="1.75">
        <ellipse cx="16" cy="16" rx="13.5" ry="5.2" />
        <ellipse cx="16" cy="16" rx="13.5" ry="5.2" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13.5" ry="5.2" transform="rotate(120 16 16)" />
      </g>
    </svg>
  );
}

function NodePythonIcon({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2.5 ${className}`}>
      {/* Node.js Hexagon */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-auto aspect-square">
        <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
        <path d="M12 12l9-5" opacity="0.4" />
        <path d="M12 12v10" opacity="0.4" />
        <path d="M12 12L3 7" opacity="0.4" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
      {/* Python Serpents */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-auto aspect-square opacity-95">
        <path d="M11.91 2c-3.1 0-5 1.4-5 3.3v2.4h5.2v.7H4.53C2.55 8.4 1 10.1 1 12.3c0 2.3 1.55 3.9 3.53 3.9h1.75v-2.3c0-2 1.68-3.7 3.7-3.7h5.18c1.62 0 2.96-1.3 2.96-2.9V5.3c0-1.9-2-3.3-6.21-3.3zm-2.07 1.7a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zm6.33 7.7c0 2-1.68 3.7-3.7 3.7H7.29c-1.62 0-2.96 1.3-2.96 2.9v2c0 1.9 2 3.3 6.21 3.3 3.1 0 5-1.4 5-3.3v-2.4h-5.18v-.7h7.58c1.98 0 3.53-1.7 3.53-3.9 0-2.3-1.55-3.9-3.53-3.9h-1.75v2.3zm-1.89 8.2a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6z" />
      </svg>
    </div>
  );
}

function PostgresIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.012 0C7.795 0 4.19.82 1.91 2.186a5.534 5.534 0 0 0-1.8 3.945c-.07 1.237.33 2.477 1.107 3.456.638.816 1.558 1.401 2.59 1.73.342.11.696.195 1.064.254l.471.026-.07.472a15.7 15.7 0 0 0 .513 5.405c.585 1.684 1.6 3.155 2.943 4.254 1.33 1.09 2.97 1.666 4.68 1.666 1.33 0 2.624-.346 3.774-1.01 1.152-.665 2.1-1.595 2.766-2.73.665-1.134 1.02-2.42 1.02-3.74 0-2.11-.904-4.103-2.483-5.467-1.577-1.365-3.67-2.118-5.808-2.118h-.293l.204-.204c.71-.71 1.63-1.206 2.633-1.446.71-.168 1.445-.195 2.164-.07l.603.106.16-.603a4.57 4.57 0 0 0 .062-2.065 4.61 4.61 0 0 0-1.135-2.233C16.29.975 14.253 0 12.012 0zm-.016 1.8c1.88 0 3.55.79 4.67 2.07.46.52.78 1.14.93 1.82-.67-.12-1.36-.1-2.02.06a6.2 6.2 0 0 0-3.39 1.86l-.88.88h1.02c1.76 0 3.49.62 4.79 1.75 1.3 1.12 2.05 2.76 2.05 4.5 0 1.08-.29 2.13-.84 3.06-.54.93-1.32 1.69-2.26 2.24-.94.54-2 1.03-3.09 1.03-1.4 0-2.74-.47-3.83-1.36-1.1-.89-1.93-2.09-2.41-3.47a13.9 13.9 0 0 1-.46-4.79l.13-.91-.91-.05c-.32-.05-.63-.12-.93-.22-.76-.24-1.43-.67-1.9-1.27-.47-.6-.72-1.35-.67-2.1.04-1.03.62-1.95 1.54-2.47C3.96 1.86 7.42 1.8 12 1.8z" />
    </svg>
  );
}

function AwsVercelIcon({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2.5 ${className}`}>
      {/* Vercel Delta */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-auto aspect-square">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
      {/* AWS Cloud & Smile */}
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-auto aspect-square">
        <path d="M22 21H11a6 6 0 0 1-1.5-11.8A7 7 0 0 1 23 10a5 5 0 0 1-1 11Z" />
        <path d="M9 24.5c3.5 2.2 8.5 2.2 12 0" />
        <path d="M20 23.5l2 1.5-1 2" />
      </svg>
    </div>
  );
}

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
                className={`sw ${item.text} p-3 sm:p-4 flex flex-col justify-between aspect-[3/4] border border-line transition-all duration-300 hover:-translate-y-2 shadow-sm group`}
                style={{ backgroundColor: item.bg }}
              >
                <div>
                  <span className="font-display text-2xl font-normal leading-none block">{item.num}</span>
                  <strong className="block text-sm font-semibold mt-1">{item.name}</strong>
                </div>

                {/* Centered Technology Logo */}
                <div className="my-auto flex items-center justify-center py-1 sm:py-2 h-10 sm:h-12 w-full">
                  <item.Icon className="h-8 w-8 sm:h-10 sm:w-10 max-h-8 sm:max-h-10 max-w-full transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" />
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

