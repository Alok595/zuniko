import Link from "next/link";
import { CONFIG } from "@/content/site";

export const metadata = {
  title: `Refund & Cancellation Policy · ${CONFIG.studio}`,
  description: `Milestone billing and cancellation policy for software engagements with ${CONFIG.studio}.`,
};

export default function RefundPage() {
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
        <h1 className="title mt-2">Refund &amp; Cancellation Policy</h1>
        <p className="sub">Last updated: 2026 · {CONFIG.studio}</p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-[#3D4766] border-t-2 border-[var(--ink)] pt-8">
          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">1. Transparent Milestone Structure</h2>
            <p>
              Software builds at {CONFIG.studio} are structured into explicit milestones (Discovery, UI/UX Prototypes,
              Full-Stack Architecture, Staging Deployment, and Final Handover). Milestone payments are only invoiced
              as each phase is agreed upon and delivered.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">2. Cancellation Before Work Commences</h2>
            <p>
              If a project is cancelled prior to the kick-off of engineering or architectural work, deposits are refunded
              in full, minus any non-refundable third-party transaction or currency conversion processing fees.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">3. Work-in-Progress Adjustments</h2>
            <p>
              If a cancellation occurs mid-milestone, billing is calculated strictly for completed work and verified deliverables
              up to the cancellation date. Any unspent advance balance is promptly returned to the client.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">4. Direct Billing Support</h2>
            <p>
              For questions regarding billing or invoices, contact our support desk directly at{" "}
              <a href={`mailto:${CONFIG.email}`} className="text-[var(--cobalt)] font-semibold underline">
                {CONFIG.email}
              </a>{" "}
              or message us on WhatsApp at{" "}
              <a
                href={`https://wa.me/${CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--cobalt)] font-semibold underline"
              >
                {CONFIG.whatsappLabel}
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

