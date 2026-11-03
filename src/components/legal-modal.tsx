"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { ease } from "./motion-primitives";
import { site } from "@/content/site";

export type LegalModalType = "privacy" | "terms" | null;

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

  return (
    <AnimatePresence>
      {type && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            className="fixed inset-0 bg-ink/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 flex max-h-[85vh] w-full max-w-3xl flex-col bg-paper text-ink shadow-2xl border border-line"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-line px-6 py-5 md:px-8">
              <div>
                <span className="type-label uppercase tracking-widest text-accent">Legal Document</span>
                <h3 className="text-2xl font-medium tracking-tight mt-0.5">
                  {type === "privacy" ? "Privacy Policy" : "Terms of Service"}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close legal modal"
                className="flex h-9 w-9 items-center justify-center border border-line text-ink hover:bg-ink hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto px-6 py-6 text-sm leading-relaxed text-muted md:px-8 md:py-8 space-y-6">
              {type === "privacy" ? (
                <>
                  <div>
                    <h4 className="text-ink font-medium text-base mb-2">1. Overview</h4>
                    <p>
                      At {site.name}, accessible from our official website, your privacy is of utmost importance.
                      This Privacy Policy explains what personal data we collect when you browse our site, contact us, or
                      engage our digital software agency services, and how that information is used.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-ink font-medium text-base mb-2">2. Information We Collect</h4>
                    <p>
                      When you submit inquiries through our contact forms, email, or messaging channels, we may collect your
                      name, business email address, phone number, and details regarding your software project requirements.
                      We do not sell, rent, or trade your contact information to any third parties for advertising purposes.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-ink font-medium text-base mb-2">3. How We Use Your Data</h4>
                    <p>
                      Your information is used strictly to communicate with you regarding your project inquiry, draft proposals,
                      coordinate development milestones, deliver technical support, and maintain project records.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-ink font-medium text-base mb-2">4. Analytics & Cookies</h4>
                    <p>
                      We may use lightweight, privacy-friendly analytics to assess traffic, monitor site uptime, and improve
                      site performance. No invasive tracking or cross-site fingerprinting scripts are used.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-ink font-medium text-base mb-2">5. Data Retention & Security</h4>
                    <p>
                      We apply rigorous industry-standard cryptographic and infrastructure protocols to safeguard all client
                      communications and data. You may request deletion or review of your stored contact data at any time by
                      emailing <a href={`mailto:${site.email}`} className="text-accent underline">{site.email}</a>.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h4 className="text-ink font-medium text-base mb-2">1. Service Scope</h4>
                    <p>
                      {site.name} provides custom software engineering, website development, mobile application design,
                      e-commerce solutions, AI chatbots, and consulting services as specified in client project agreements
                      and statements of work.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-ink font-medium text-base mb-2">2. Intellectual Property & Ownership</h4>
                    <p>
                      Upon full payment of all agreed project invoices, all intellectual property rights, bespoke source code,
                      and design assets created specifically for the client are assigned directly to the client. Pre-existing
                      open-source software and third-party libraries remain subject to their respective licenses.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-ink font-medium text-base mb-2">3. Confidentiality</h4>
                    <p>
                      Both parties agree to protect and keep strictly confidential all business, technical, financial, and
                      proprietary information shared during project discovery, development, and delivery. Mutual NDAs are
                      available upon request prior to project initiation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-ink font-medium text-base mb-2">4. Warranties & Maintenance</h4>
                    <p>
                      Unless otherwise agreed in a separate service level agreement (SLA), all bespoke builds include a
                      30-day post-launch warranty covering defect remediation for items within the original agreed scope.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-ink font-medium text-base mb-2">5. Contact & Inquiries</h4>
                    <p>
                      Questions about these terms can be directed to our operations desk at{" "}
                      <a href={`mailto:${site.email}`} className="text-accent underline">{site.email}</a>.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-line px-6 py-4 md:px-8 bg-paper">
              <span className="type-label">Last updated: October 2026</span>
              <button
                type="button"
                onClick={onClose}
                className="btn !py-2 !px-4 !text-xs !gap-3"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

