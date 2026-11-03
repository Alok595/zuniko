"use client";

import { site, whatsappUrl } from "@/content/site";

export function AboutFounder() {
  return (
    <section id="about-founder" className="border-b border-line bg-surface py-20 md:py-28">
      <div className="wrap grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Narrative & Credentials */}
        <div className="lg:col-span-7">
          <p className="label">01 · About Founder</p>
          <h2 className="mt-4 font-display text-[clamp(34px,4.5vw,60px)] leading-[0.98]">
            Direct engineering from the founder who codes.
          </h2>

          <p className="mt-6 text-xl font-medium text-ink leading-relaxed">
            &ldquo;I founded Zuniko with one simple premise: founders and business leaders deserve to collaborate directly with the engineer building their software—not an account manager passing tickets down a chain.&rdquo;
          </p>

          <p className="mt-4 text-muted text-[17px] leading-relaxed">
            Every software build starts with deep architectural scoping. I personally design database schemas, write clean TypeScript and Next.js applications, integrate APIs, and deploy production systems with zero vendor lock-in.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4 border-t border-line pt-6">
            <div className="flex items-start gap-3">
              <span className="font-display text-accent text-xl leading-none">01</span>
              <div>
                <strong className="block text-sm font-semibold text-ink uppercase tracking-wide">
                  Direct Builder Access
                </strong>
                <span className="text-xs text-muted">
                  No middlemen or account handlers. You speak directly with the engineer writing your code.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-display text-accent text-xl leading-none">02</span>
              <div>
                <strong className="block text-sm font-semibold text-ink uppercase tracking-wide">
                  100% Code Handover
                </strong>
                <span className="text-xs text-muted">
                  Full GitHub repo, database schemas, and cloud credentials handed over on launch.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-display text-accent text-xl leading-none">03</span>
              <div>
                <strong className="block text-sm font-semibold text-ink uppercase tracking-wide">
                  Playable Staging Builds
                </strong>
                <span className="text-xs text-muted">
                  Test clickable staging links each week to review progress as features are built.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="font-display text-accent text-xl leading-none">04</span>
              <div>
                <strong className="block text-sm font-semibold text-ink uppercase tracking-wide">
                  30-Day Launch Warranty
                </strong>
                <span className="text-xs text-muted">
                  Active post-launch monitoring, performance tuning, and bug fixes included.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact-us" className="btn">
              Start a project <span className="arr">→</span>
            </a>
            <a
              href={whatsappUrl("Hi, I would like to consult directly with the founder regarding a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

        {/* Right Column: Founder Visual Card */}
        <div className="lg:col-span-5 relative">
          <div className="bg-bg border border-line p-6 sm:p-8 shadow-sm">
            <div className="relative aspect-[4/4.5] overflow-hidden bg-gradient-to-b from-blue-50/80 via-blue-100/40 to-transparent flex items-end justify-center border border-line/60">
              <img
                src="/developer.png"
                alt="Zuniko Technical Founder"
                className="w-full max-h-[380px] object-contain drop-shadow-xl"
              />

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-line px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-ink font-semibold">
                Lead Architect
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <div>
                <strong className="block text-base font-semibold text-ink">
                  Zuniko Engineering Office
                </strong>
                <span className="text-xs text-muted">{site.location}</span>
              </div>
              <div className="text-right">
                <span className="font-display text-2xl text-accent">100+</span>
                <span className="block text-[11px] uppercase tracking-wider text-muted font-mono">
                  Shipped
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
