"use client";

import { useEffect } from "react";
import { CONFIG } from "@/content/site";

export type LegalModalType = "privacy" | "terms" | "refund" | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (type) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A1233]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 flex max-h-[85vh] w-full max-w-3xl flex-col bg-white text-[var(--ink)] shadow-[10px_10px_0_var(--ink)] border-2 border-[var(--ink)] rounded-[4px] animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b-2 border-[var(--ink)] bg-[var(--mist)] px-6 py-5 md:px-8">
          <div>
            <img
              src="/logo-dark.png"
              alt={CONFIG.studio}
              className="h-6 w-auto object-contain mb-1.5"
            />
            <h3 className="text-2xl font-extrabold tracking-tight text-[var(--ink)]">
              {type === "privacy" && "Privacy Policy"}
              {type === "terms" && "Terms of Service"}
              {type === "refund" && "Refund & Cancellation Policy"}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-9 w-9 items-center justify-center border-2 border-[var(--ink)] bg-white text-[var(--ink)] hover:bg-[var(--cobalt)] hover:text-white transition-colors font-bold shadow-[2px_2px_0_var(--ink)] active:translate-x-[1px] active:translate-y-[1px]"
          >
            ✕
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto px-6 py-6 text-sm leading-relaxed text-[#3D4766] md:px-8 md:py-8 space-y-6">
          {type === "privacy" && (
            <>
              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">1. Overview</h4>
                <p>
                  At {CONFIG.studio}, accessible from our official domain, your privacy is our core priority.
                  This Privacy Policy outlines how we collect, process, and safeguard your data when browsing our site,
                  requesting a project consultation, or engaging our engineering team.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">2. Information We Collect</h4>
                <p>
                  When you communicate with us via WhatsApp, email, or our inquiry forms, we collect your name,
                  email address, contact number, and project briefs. We never sell, lease, or monetize your contact
                  details or technical specifications to third parties for commercial advertising.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">3. Utilization of Information</h4>
                <p>
                  Information shared is utilized strictly to communicate project scopes, generate architecture estimates,
                  coordinate milestone staging deployments, and deliver post-launch technical maintenance.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">4. Cryptographic Security</h4>
                <p>
                  All project staging environments, database connections, and source repositories adhere to modern
                  security practices including HTTPS/TLS encryption and strict role-based access control.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">5. Data Inquiries & Rights</h4>
                <p>
                  You may request inspection, correction, or deletion of your records at any time by messaging us directly at{" "}
                  <a href={`mailto:${CONFIG.email}`} className="text-[var(--cobalt)] font-semibold underline">
                    {CONFIG.email}
                  </a>.
                </p>
              </div>
            </>
          )}

          {type === "terms" && (
            <>
              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">1. Scope of Engagement</h4>
                <p>
                  {CONFIG.studio} engineers bespoke websites, iOS and Android mobile apps, internal dashboards,
                  APIs, and custom software. Scope, deliverables, and milestones are documented in mutual agreements
                  prior to development initiation.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">2. Intellectual Property & Code Ownership</h4>
                <p>
                  Upon settlement of final project milestone invoices, all bespoke source code, database architectures,
                  and custom design assets authored specifically for the client are 100% owned by the client with zero vendor lock-in.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">3. Non-Disclosure & Confidentiality</h4>
                <p>
                  We treat all proprietary company systems, business logic, customer records, and database credentials
                  with strict confidentiality under mutual non-disclosure terms.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">4. Post-Launch Warranty</h4>
                <p>
                  All custom builds include our standard 30-day post-launch warranty covering bug fixes and technical
                  stabilization for items within the original agreed scope. Ongoing SLAs and retainer maintenance are available thereafter.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">5. Jurisdiction</h4>
                <p>
                  These terms are governed by the laws of India, operating in Indian Standard Time (IST / UTC+5:30).
                </p>
              </div>
            </>
          )}

          {type === "refund" && (
            <>
              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">1. Milestone-Based Billing</h4>
                <p>
                  Software engineering projects at {CONFIG.studio} are structured into transparent milestones (e.g. Discovery & Wireframing,
                  Design Approval, Architecture & Build, Launch). Payments are collected in stages as each deliverable is reviewed and approved.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">2. Cancellation Prior to Work Commencement</h4>
                <p>
                  If an engagement is cancelled prior to any engineering or design work commencing, the initial deposit
                  will be refunded in full minus any non-refundable payment processor transaction fees.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">3. Work-in-Progress Cancellations</h4>
                <p>
                  If a client requests cancellation during an active milestone, billing is calculated strictly for completed deliverables
                  up to that date. Any unearned balance from advance milestone deposits is promptly refunded.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--ink)] font-bold text-base mb-2">4. Contact Desk</h4>
                <p>
                  For billing or invoice inquiries, contact us directly at{" "}
                  <a href={`mailto:${CONFIG.email}`} className="text-[var(--cobalt)] font-semibold underline">
                    {CONFIG.email}
                  </a>{" "}
                  or on WhatsApp at{" "}
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
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t-2 border-[var(--ink)] px-6 py-4 md:px-8 bg-[var(--mist)]">
          <span className="font-mono text-xs text-[#5D6B99]">Effective: 2026 · {CONFIG.studio}</span>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-sm !bg-white !text-[var(--ink)] hover:!bg-[var(--cobalt)] hover:!text-white border-2 border-[var(--ink)] shadow-[2px_2px_0_var(--ink)]"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
