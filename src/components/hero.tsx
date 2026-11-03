"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { whatsappUrl } from "@/content/site";

const slides = [
  {
    id: "01",
    tag: "01 / Digital Solutions",
    headlineLine1: "DIGITAL SOLUTIONS.",
    headlineLine2: "DESIGNED TO SCALE.",
    subtext: "High-performance websites, iOS & Android mobile apps, and custom platforms engineered to fit how your business actually runs.",
    image: "/slide-1.jpg",
    cta: "Start a project",
    ctaLink: "#contact-us",
    secondaryCta: "Our work",
    secondaryLink: "#our-work",
    highlights: [
      { val: "4.9★", label: "Client Rating" },
      { val: "100+", label: "Apps Shipped" },
      { val: "100%", label: "IP Handover" },
    ],
  },
  {
    id: "02",
    tag: "02 / Cloud Architecture",
    headlineLine1: "BUILT FOR SPEED.",
    headlineLine2: "OWNED BY YOU.",
    subtext: "Enterprise Next.js & TypeScript cloud systems with zero vendor lock-in, clean schemas, and weekly staging links.",
    image: "/slide-2.jpg",
    cta: "Consult with Founder",
    ctaLink: "#contact-us",
    secondaryCta: "Specifications",
    secondaryLink: "#details",
    highlights: [
      { val: "99.9%", label: "Uptime SLA" },
      { val: "<100ms", label: "Edge Latency" },
      { val: "Zero", label: "Vendor Lock-in" },
    ],
  },
  {
    id: "03",
    tag: "03 / Intelligence & AI",
    headlineLine1: "AUTOMATE WORKFLOWS.",
    headlineLine2: "DRIVE REAL GROWTH.",
    subtext: "Intelligent AI assistants, custom CRMs, and automated pipelines that eliminate friction and multiply commercial output.",
    image: "/slide-3.jpg",
    cta: "Explore Automations",
    ctaLink: "#services-offered",
    secondaryCta: "WhatsApp Us",
    secondaryLink: whatsappUrl("Hi Zuniko, I'd like to explore custom AI automations for my business."),
    highlights: [
      { val: "24/7", label: "AI Lead Capture" },
      { val: "Instant", label: "CRM Sync" },
      { val: "30-Day", label: "Warranty" },
    ],
  },
];

const SLIDE_DURATION = 5500;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, current]);

  const slide = slides[current];

  return (
    <>
      <section
        id="hero"
        aria-label="Hero Slideshow"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full overflow-hidden bg-ink text-white pt-6 pb-0 sm:pt-10 sm:pb-0 lg:h-[86vh] lg:min-h-[580px] lg:max-h-[900px] lg:flex lg:flex-col lg:justify-between"
      >
        {/* Full-Screen Background Image with Crossfade & Subtle Scale */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0 pointer-events-none"
          >
            <img
              src={slide.image}
              alt={slide.headlineLine1}
              className="w-full h-full object-cover object-[center_35%]"
            />
            {/* Multi-layered cinematic gradient overlays for pristine readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40 sm:via-ink/65" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20 sm:via-ink/55 sm:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,85,255,0.18)_0%,transparent_70%)]" />
          </motion.div>
        </AnimatePresence>

        {/* Technical Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 hero-grid-pattern"
          aria-hidden="true"
        />

        {/* Clean Slide Narrative Content (Compact, reduced height for phone) */}
        <div className="wrap relative z-10 w-full pt-4 pb-2 sm:pt-6 sm:pb-3 lg:my-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="max-w-3xl"
            >
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 border border-white/20 bg-black/45 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#60A5FA] mb-2 sm:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055FF] shadow-[0_0_8px_#0055FF] animate-pulse" />
                <span>{slide.tag}</span>
              </div>

              {/* Bold Display Headline */}
              <h1 className="font-display text-[clamp(32px,8.5vw,86px)] leading-[0.91] tracking-[0.005em] uppercase text-white drop-shadow-md">
                <span className="block">{slide.headlineLine1}</span>
                <span className="block text-[#60A5FA]">{slide.headlineLine2}</span>
              </h1>

              {/* Focused Subtext */}
              <p className="mt-2.5 sm:mt-4 text-[13.5px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl font-normal drop-shadow">
                {slide.subtext}
              </p>

              {/* Action Buttons */}
              <div className="mt-4 sm:mt-6 flex flex-row items-center gap-2.5 sm:gap-3.5">
                <a
                  className="btn !py-2.5 !px-4 sm:!py-3 sm:!px-6 !text-xs sm:!text-sm !tracking-wider !bg-accent !border-accent !text-white hover:!bg-[#0044cc] shadow-lg shadow-accent/20"
                  href={slide.ctaLink}
                >
                  {slide.cta} <span className="arr">→</span>
                </a>
                <a
                  className="btn !py-2.5 !px-4 sm:!py-3 sm:!px-6 !text-xs sm:!text-sm !tracking-wider !bg-white/10 !border-white/20 !text-white hover:!bg-white hover:!text-ink backdrop-blur-md"
                  href={slide.secondaryLink}
                  target={slide.secondaryLink.startsWith("http") ? "_blank" : undefined}
                  rel={slide.secondaryLink.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {slide.secondaryCta}
                </a>
              </div>

              {/* Metrics & Guarantees Proof Bar */}
              <div className="mt-5 sm:mt-7 pt-4 sm:pt-5 border-t border-white/15 grid grid-cols-3 gap-2.5 sm:gap-6 max-w-xl">
                {slide.highlights.map((h, i) => (
                  <div key={i} className="flex flex-col">
                    <b className="font-display text-base sm:text-2xl text-white leading-none tracking-tight">
                      {h.val}
                    </b>
                    <span className="text-[9.5px] sm:text-xs text-white/70 uppercase font-mono mt-0.5 sm:mt-1 leading-snug">
                      {h.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Bar: Indicators & Controls */}
        <div className="relative z-20 border-t border-white/15 bg-ink/85 backdrop-blur-md mt-6 sm:mt-8 lg:mt-auto">
          <div className="wrap flex items-center justify-between py-2.5 sm:py-3.5 pr-16 sm:pr-4">
            {/* Slide Indicators */}
            <div className="flex items-center gap-3 sm:gap-6">
              {slides.map((s, idx) => {
                const isActive = idx === current;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setCurrent(idx)}
                    className={`group flex items-center gap-1.5 sm:gap-2 py-1 text-xs uppercase font-mono tracking-wider transition-colors ${
                      isActive ? "text-white font-semibold" : "text-white/50 hover:text-white"
                    }`}
                  >
                    <span>{s.id}</span>
                    <span className="hidden md:inline text-white/70">
                      {s.headlineLine1.split(" ")[0]}
                    </span>
                    <div className="relative h-[2px] w-6 sm:w-14 bg-white/20 overflow-hidden">
                      {isActive && (
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-[#60A5FA]"
                          initial={{ width: "0%" }}
                          animate={{ width: isPaused ? undefined : "100%" }}
                          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Arrow Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                aria-label="Previous slide"
                className="w-8 h-8 sm:w-9 sm:h-9 border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-ink transition-colors text-xs sm:text-sm active:scale-95"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                aria-label="Next slide"
                className="w-8 h-8 sm:w-9 sm:h-9 border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-ink transition-colors text-xs sm:text-sm active:scale-95"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="marquee" aria-hidden="true">
        <div className="track">
          <span>Websites &amp; Apps</span>
          <span className="o">E-Commerce</span>
          <span>Mobile iOS &amp; Android</span>
          <span className="o">AI Chatbots</span>
          <span>Custom CRMs</span>
          <span className="o">Cloud Architecture</span>
          <span>Next.js &amp; TypeScript</span>
          <span className="o">Tailored Software</span>

          <span>Websites &amp; Apps</span>
          <span className="o">E-Commerce</span>
          <span>Mobile iOS &amp; Android</span>
          <span className="o">AI Chatbots</span>
          <span>Custom CRMs</span>
          <span className="o">Cloud Architecture</span>
          <span>Next.js &amp; TypeScript</span>
          <span className="o">Tailored Software</span>
        </div>
      </div>
    </>
  );
}
