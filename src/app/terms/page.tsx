import Link from "next/link";
import { CONFIG } from "@/content/site";

export const metadata = {
  title: `Terms of Service · ${CONFIG.studio}`,
  description: `Terms and conditions for client software engagements with ${CONFIG.studio}.`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      {/* Top Bar */}
      <header className="border-b-2 border-[var(--ink)] bg-[var(--cobalt)] text-white py-4 px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2" aria-label="Back to home">
          <img
            src="/logo-white.png"
            alt="Zuniko - Digital solutions. Designed to scale."
            className="h-7 md:h-8 w-auto object-contain"
          />
        </Link>
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--sky)]">
          Legal Specification
        </span>
      </header>

      <main className="wrap py-12 md:py-20 max-w-4xl">
        <p className="label">Legal Document</p>
        <h1 className="title mt-2">Terms of Service</h1>
        <p className="sub">Last updated: 2026 · {CONFIG.studio}</p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-[#3D4766] border-t-2 border-[var(--ink)] pt-8">
          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">1. Scope of Engagement</h2>
            <p>
              {CONFIG.studio} designs and engineers bespoke mobile apps, responsive websites, management portals,
              cloud APIs, and AI automations. Specific milestone scopes, timelines, and deliverables are confirmed
              in writing prior to development initiation.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">2. 100% IP & Source Code Ownership</h2>
            <p>
              Upon settlement of milestone invoices, all bespoke source code, schema designs, and creative assets
              developed for the project are assigned completely to the client. Zero vendor lock-in is guaranteed.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">3. Confidentiality & Non-Disclosure</h2>
            <p>
              Both parties agree to treat all business, technical, and architectural materials shared with strict
              confidentiality. Mutual non-disclosure agreements (NDAs) are provided upon request.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">4. Warranty & Support Period</h2>
            <p>
              All bespoke builds include a standard 30-day post-launch warranty period covering bug remediation
              for deliverables within the agreed scope. Ongoing support agreements and maintenance retainers
              are available following the warranty period.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">5. Governance</h2>
            <p>
              These terms are governed by the laws of India, operating in Indian Standard Time (IST / UTC+5:30).
              Questions regarding these terms can be sent to{" "}
              <a href={`mailto:${CONFIG.email}`} className="text-[var(--cobalt)] font-semibold underline">
                {CONFIG.email}
              </a>.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--line)] flex justify-between items-center text-sm text-[var(--muted)]">
          <Link href="/" className="font-bold text-[var(--ink)] hover:text-[var(--cobalt)] underline">
            ← Return to Home
          </Link>
          <span className="font-mono text-xs">© 2026 {CONFIG.studio}</span>
        </div>
      </main>
    </div>
  );
}

