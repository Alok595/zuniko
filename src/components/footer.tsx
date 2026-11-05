"use client";

import { useState } from "react";
import Link from "next/link";
import { CONFIG, navLinks, instagramUrl, whatsappUrl } from "@/content/site";
import { LegalModal, type LegalModalType } from "./legal-modal";

export function Footer() {
  const [legalType, setLegalType] = useState<LegalModalType>(null);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-white border-t-2 border-[var(--ink)] text-[var(--ink)] pt-16 pb-12">
        <div className="wrap">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[var(--line)]">
            {/* Column 1: Studio Brand & Brief */}
            <div className="lg:col-span-5 space-y-4">
              <a
                href="#top"
                onClick={scrollToTop}
                className="inline-block"
                aria-label="Zuniko Studio, back to top"
              >
                <img
                  src="/logo-dark.png"
                  alt="Zuniko - Digital solutions. Designed to scale."
                  className="h-9 md:h-10 w-auto object-contain"
                />
              </a>

              <p className="text-sm leading-relaxed text-[var(--muted)] max-w-sm">
                Custom software, mobile apps, websites, and digital systems engineered from scratch
                around how your business actually runs.
              </p>

              <div className="font-mono text-xs text-[#5D6B99] space-y-1 pt-2">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  Operating in IST (UTC+5:30) · Available for remote projects worldwide
                </p>
                <p>Monday to Saturday, 10:00 to 19:00 IST</p>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <p className="label !text-xs font-mono font-bold tracking-wider">Navigation</p>
              <ul className="space-y-2 text-sm font-semibold">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[var(--ink)] hover:text-[var(--cobalt)] transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Direct Lines */}
            <div className="lg:col-span-3 space-y-3">
              <p className="label !text-xs font-mono font-bold tracking-wider">Direct Lines</p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <span className="block text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider">WhatsApp</span>
                  <a
                    href={whatsappUrl("Hi " + CONFIG.studio + ", I would like to talk about a project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[var(--ink)] hover:text-[var(--cobalt)] transition-colors"
                  >
                    {CONFIG.whatsappLabel} ↗
                  </a>
                </li>
                <li>
                  <span className="block text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider">Instagram</span>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[var(--ink)] hover:text-[var(--cobalt)] transition-colors"
                  >
                    @{CONFIG.instagram} ↗
                  </a>
                </li>
                <li>
                  <span className="block text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider">Email</span>
                  <a
                    href={`mailto:${CONFIG.email}`}
                    className="font-bold text-[var(--ink)] hover:text-[var(--cobalt)] transition-colors break-all"
                  >
                    {CONFIG.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal & Policies */}
            <div className="lg:col-span-2 space-y-3">
              <p className="label !text-xs font-mono font-bold tracking-wider">Governance</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => setLegalType("privacy")}
                    className="text-left font-medium text-[var(--ink)] hover:text-[var(--cobalt)] hover:underline transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setLegalType("terms")}
                    className="text-left font-medium text-[var(--ink)] hover:text-[var(--cobalt)] hover:underline transition-colors"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setLegalType("refund")}
                    className="text-left font-medium text-[var(--ink)] hover:text-[var(--cobalt)] hover:underline transition-colors"
                  >
                    Refund &amp; Cancellation
                  </button>
                </li>
                <li className="pt-2 text-xs text-[var(--muted)]">
                  <span>Full static pages: </span>
                  <div className="flex flex-wrap gap-2 mt-1 font-mono text-[11px]">
                    <Link href="/privacy" className="underline hover:text-[var(--cobalt)]">Privacy</Link>
                    <span>·</span>
                    <Link href="/terms" className="underline hover:text-[var(--cobalt)]">Terms</Link>
                    <span>·</span>
                    <Link href="/refund" className="underline hover:text-[var(--cobalt)]">Refunds</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--muted)]">
            <div>
              <span>© 2026 {CONFIG.studio}. Made by hand in India.</span>
            </div>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setLegalType("privacy")}
                className="hover:text-[var(--cobalt)] transition-colors"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setLegalType("terms")}
                className="hover:text-[var(--cobalt)] transition-colors"
              >
                Terms
              </button>
              <span>·</span>
              <button
                type="button"
                onClick={() => setLegalType("refund")}
                className="hover:text-[var(--cobalt)] transition-colors"
              >
                Refunds
              </button>
              <span>·</span>
              <a
                href="#top"
                onClick={scrollToTop}
                className="font-bold text-[var(--ink)] hover:text-[var(--cobalt)] transition-colors flex items-center gap-1"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Quick-View Legal Modal */}
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </>
  );
}
