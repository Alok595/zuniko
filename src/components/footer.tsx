"use client";

import { useState } from "react";
import { instagramUrl, navLinks, site, whatsappUrl } from "@/content/site";
import { Logo } from "./ui";
import { LegalModal, type LegalModalType } from "./legal-modal";

export function Footer() {
  const [legalType, setLegalType] = useState<LegalModalType>(null);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-ink text-bg overflow-hidden border-t border-ink">
        {/* Top Info Grid */}
        <div className="wrap grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12 border-b border-bg/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <a href="#" onClick={scrollToTop} className="inline-block mb-4" aria-label="Zuniko Home">
                <Logo variant="white" className="h-9 md:h-10" />
              </a>
              <p className="max-w-md text-sm text-bg/75 leading-relaxed">
                Zuniko is a software agency building websites, mobile apps, e-commerce stores, chatbots, and custom software, made to fit the way your business works.
              </p>
            </div>
            <div className="text-xs text-bg/60 space-y-1">
              <p className="font-semibold text-bg">{site.location}</p>
              <p>{site.timezone} · Active Monday through Saturday</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <span className="label !text-bg/50 block mb-4">Navigation</span>
            <ul className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-wider text-bg/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-bg hover:translate-x-1 transition-all inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <span className="label !text-bg/50 block mb-4">Direct Lines</span>
            <ul className="flex flex-col gap-2 text-sm text-bg/80">
              <li>
                <a href={`tel:${site.phoneRaw}`} className="font-medium hover:text-bg transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="font-medium hover:text-bg transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl("Hi Zuniko, let's talk about a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-soft hover:underline"
                >
                  WhatsApp Consultation ↗
                </a>
              </li>
              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent-soft hover:underline"
                >
                  Instagram (@{site.instagram}) ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Giant Poster Scale Display Typography */}
        <div className="wrap overflow-hidden">
          <p className="font-display uppercase text-[clamp(36px,10vw,144px)] leading-[0.9] pt-10 sm:pt-12 pb-8 tracking-[0.01em] select-none text-bg break-words">
            ZUNIKO{" "}
            <span
              className="inline-block"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.4px rgba(255, 255, 255, 0.55)",
              }}
            >
              DIGITAL.
            </span>
          </p>

          {/* Sub-Footer Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-t border-bg/10 text-xs text-bg/60">
            <span>
              © 2026 Zuniko. All rights reserved. · {site.phone} · {site.email}
            </span>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setLegalType("privacy")}
                className="hover:text-bg transition-colors"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setLegalType("terms")}
                className="hover:text-bg transition-colors"
              >
                Terms of Service
              </button>
              <a
                href="#"
                onClick={scrollToTop}
                className="hover:text-bg transition-colors flex items-center gap-1 font-semibold uppercase tracking-wider"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Dialog Viewer */}
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </>
  );
}
