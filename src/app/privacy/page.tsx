import Link from "next/link";
import { CONFIG } from "@/content/site";

export const metadata = {
  title: `Privacy Policy · ${CONFIG.studio}`,
  description: `Privacy policy and data governance practices for ${CONFIG.studio}.`,
};

export default function PrivacyPage() {
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
        <h1 className="title mt-2">Privacy Policy</h1>
        <p className="sub">Last updated: 2026 · {CONFIG.studio}</p>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-[#3D4766] border-t-2 border-[var(--ink)] pt-8">
          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">1. Overview</h2>
            <p>
              At {CONFIG.studio}, accessible from our official website, your privacy is our core priority.
              This Privacy Policy explains what personal data we collect when you browse our site, contact us, or
              engage our software engineering services, and how that information is used.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">2. Information We Collect</h2>
            <p>
              When you submit inquiries through our contact forms, email, or messaging channels, we may collect your
              name, business email address, phone number, and details regarding your software project requirements.
              We do not sell, rent, or trade your contact information to any third parties for advertising purposes.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">3. How We Use Your Data</h2>
            <p>
              Your information is used strictly to communicate with you regarding your project inquiry, draft proposals,
              coordinate development milestones, deliver technical support, and maintain project records.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">4. Security & Cryptographic Safeguards</h2>
            <p>
              We apply rigorous industry-standard cryptographic and infrastructure protocols to safeguard all client
              communications, staging environments, and database records. All connections utilize HTTPS/TLS encryption.
            </p>
          </div>

          <div>
            <h2 className="text-[var(--ink)] font-extrabold text-xl mb-3">5. Data Inquiries & Contact</h2>
            <p>
              You may request deletion or review of your stored contact data at any time by
              emailing{" "}
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

