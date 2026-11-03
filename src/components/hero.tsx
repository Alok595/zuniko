"use client";

import { motion } from "motion/react";
import { site } from "@/content/site";

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden hero-grid-pattern pt-28 pb-16 md:pt-36 md:pb-24 border-b border-line">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7">
            <div className="eyebrow">
              <span className="dot" aria-hidden="true" />
              <span>Software &amp; Digital Platforms · Bespoke Engineering</span>
            </div>

            <h1 className="mt-7 font-display text-[clamp(44px,6.2vw,86px)] leading-[0.94] tracking-[0.005em]">
              <span className="block overflow-hidden pb-1">
                <span className="inline-block animate-[rise_0.9s_cubic-bezier(0.2,0.8,0.2,1)_0.15s_both]">
                  Digital solutions.
                </span>
              </span>
              <span className="block overflow-hidden pb-1">
                <span className="inline-block animate-[rise_0.9s_cubic-bezier(0.2,0.8,0.2,1)_0.28s_both]">
                  Designed to <span className="outline">scale.</span>
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[17px] md:text-[18px] text-muted leading-relaxed">
              Websites, mobile apps, e-commerce storefronts, chatbots and custom software made to fit the way your business actually runs. Every build starts with deep architectural scoping and zero lock-in.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn" href="#contact">
                Start a project <span className="arr">→</span>
              </a>
              <a className="btn ghost" href="#work">
                View our work
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="mt-10 flex flex-wrap gap-7 sm:gap-9 items-center border-t border-line/70 pt-8">
              <div className="flex items-baseline gap-2.5">
                <b className="font-display font-normal text-3xl sm:text-4xl leading-none text-ink">4.9★</b>
                <span className="text-xs text-muted leading-snug">Client<br />Rating</span>
              </div>
              <span className="w-px h-8 bg-line" aria-hidden="true" />
              <div className="flex items-baseline gap-2.5">
                <b className="font-display font-normal text-3xl sm:text-4xl leading-none text-ink">100+</b>
                <span className="text-xs text-muted leading-snug">Shipped<br />Projects</span>
              </div>
              <span className="w-px h-8 bg-line" aria-hidden="true" />
              <div className="flex items-baseline gap-2.5">
                <b className="font-display font-normal text-3xl sm:text-4xl leading-none text-ink">&lt;2H</b>
                <span className="text-xs text-muted leading-snug">Average<br />Response</span>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Visual with Animated Greeting */}
          <div className="lg:col-span-5 relative justify-self-center lg:justify-self-end w-full max-w-[460px] pt-6 md:pt-0">
            <div className="relative">
              {/* Subtle Architectural Grid Pedestal */}
              <div
                className="absolute inset-x-2 bottom-0 top-16 bg-gradient-to-t from-blue-100/60 via-blue-50/30 to-transparent border border-line"
                style={{ zIndex: 0 }}
              />

              {/* Viewfinder Ticks */}
              <span className="tick tl !-top-2 !-left-2 z-10" />
              <span className="tick tr !-top-2 !-right-2 z-10" />
              <span className="tick bl !-bottom-2 !-left-2 z-10" />
              <span className="tick br !-bottom-2 !-right-2 z-10" />

              {/* Developer Cutout Image (Transparent Background, No Scan) */}
              <div className="relative z-10 flex justify-center items-end px-4 pt-4">
                <img
                  src="/developer.png"
                  alt="Zuniko lead software engineer"
                  width={500}
                  height={560}
                  className="w-full max-h-[460px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Animated SVG Badge saying "Hi!" */}
              <div className="absolute -top-3 left-0 sm:-left-6 z-20 flex items-center gap-2.5 sm:gap-3 bg-white border border-line px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-xl transition-transform duration-300 hover:-translate-y-1">
                {/* Animated SVG Waving Hand */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 sm:w-7 sm:h-7 wave-hand text-accent shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-display text-base sm:text-lg tracking-wide text-ink leading-none">
                      HI! LET&apos;S BUILD.
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-muted">
                      Direct Developer Access
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Chips */}
              <div className="chip tag !top-12 !right-0 sm:!-right-3 z-20">
                <span className="dot" aria-hidden="true" />
                <span>Production Grade</span>
              </div>

              <div className="chip rate !-bottom-3 !left-0 sm:!-bottom-4 sm:!-left-4 z-20">
                <b>4.9</b>
                <div>
                  <span className="stars" aria-hidden="true">★★★★★</span>
                  <small>100% Client<br />Satisfaction</small>
                </div>
              </div>
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
