"use client";

import { type FormEvent, useState } from "react";
import { instagramUrl, site, whatsappUrl } from "@/content/site";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formNote, setFormNote] = useState<string>("Opens WhatsApp with your project details filled in.");

  const handleCopy = () => {
    navigator.clipboard.writeText(site.phoneRaw).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.trim();
    const concern = (form.elements.namedItem("concern") as HTMLSelectElement)?.value;
    const timeline = (form.elements.namedItem("timeline") as HTMLInputElement)?.value;
    const note = (form.elements.namedItem("note") as HTMLTextAreaElement)?.value.trim();

    if (!name || !phone) {
      setFormNote("Please provide your name and phone number so we can reach you.");
      return;
    }

    const lines = [
      "Hello Zuniko, I would like to consult on a software project.",
      `Name: ${name}`,
      `Phone/Email: ${phone}`,
      `Looking for: ${concern}`,
    ];
    if (timeline) lines.push(`Target Timeline: ${timeline}`);
    if (note) lines.push(`Project Brief: ${note}`);

    const message = lines.join("\n\n");
    window.open(whatsappUrl(message), "_blank", "noopener");
    setFormNote("WhatsApp should open in a new tab. If it does not, message us directly at +91 91233 32744.");
  };

  return (
    <section id="contact" className="bg-surface border-b border-line py-20 md:py-28">
      <div className="wrap grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Contact Direct Info */}
        <div className="lg:col-span-5">
          <p className="label">07 · Contact</p>
          <h2 className="mt-4 font-display text-[clamp(36px,4.8vw,64px)] leading-[0.98]">
            Start your project.
          </h2>

          <div className="mt-8 space-y-7">
            {/* Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1.5 sm:gap-4 items-baseline">
              <span className="label">Phone</span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display text-2xl sm:text-3xl text-ink tracking-tight select-all">
                    {site.phone}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="border border-line bg-bg px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted hover:text-ink hover:border-ink transition-colors"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <small className="block text-xs text-muted mt-1">Direct call or WhatsApp message.</small>
              </div>
            </div>

            {/* Email */}
            <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1.5 sm:gap-4 items-baseline">
              <span className="label">Email</span>
              <div>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-ink hover:text-accent transition-colors block text-base"
                >
                  {site.email}
                </a>
                <small className="block text-xs text-muted mt-0.5">Average reply time within 2 hours.</small>
              </div>
            </div>

            {/* Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1.5 sm:gap-4 items-baseline">
              <span className="label">Instagram</span>
              <div>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline block text-base"
                >
                  @{site.instagram} ↗
                </a>
                <small className="block text-xs text-muted mt-0.5">Follow for build updates and insights.</small>
              </div>
            </div>

            {/* Hours & Presence */}
            <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-1.5 sm:gap-4 items-baseline">
              <span className="label">Presence</span>
              <div>
                <p className="text-sm font-medium text-ink">{site.location}</p>
                <small className="block text-xs text-muted mt-0.5">
                  {site.timezone} · Active Monday through Saturday.
                </small>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Appointment / Inquiry Form */}
        <div className="lg:col-span-7 bg-bg p-5 sm:p-8 md:p-10 border border-line shadow-sm">
          <h3 className="font-display text-2xl text-ink">Request a proposal</h3>
          <p className="text-sm text-muted mt-1 mb-6">
            Fill this in to launch your WhatsApp consultation. We will follow up with technical questions and a clear proposal.
          </p>

          <form onSubmit={onSubmit} className="grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="grid gap-2">
                <label className="text-[11.5px] font-semibold uppercase tracking-wider text-muted" htmlFor="f-name">
                  Your Name *
                </label>
                <input
                  id="f-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="w-full bg-transparent border-b border-line py-2 text-ink text-base focus:border-ink focus:outline-none"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-[11.5px] font-semibold uppercase tracking-wider text-muted" htmlFor="f-phone">
                  Phone or Email *
                </label>
                <input
                  id="f-phone"
                  name="phone"
                  required
                  type="text"
                  placeholder="+91 ... or name@company.com"
                  className="w-full bg-transparent border-b border-line py-2 text-ink text-base focus:border-ink focus:outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="grid gap-2">
                <label className="text-[11.5px] font-semibold uppercase tracking-wider text-muted" htmlFor="f-concern">
                  What are you building?
                </label>
                <select
                  id="f-concern"
                  name="concern"
                  className="w-full bg-transparent border-b border-line py-2 text-ink text-base focus:border-ink focus:outline-none"
                >
                  <option value="Website or Web App">Website or Web App</option>
                  <option value="Mobile App (iOS / Android)">Mobile App (iOS / Android)</option>
                  <option value="E-Commerce Storefront">E-Commerce Storefront</option>
                  <option value="Chatbot or AI Agent">Chatbot or AI Agent</option>
                  <option value="Custom CRM or Portal">Custom CRM or Portal</option>
                  <option value="Legacy Stack Modernization">Legacy Stack Modernization</option>
                  <option value="Something Else">Something Else</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-[11.5px] font-semibold uppercase tracking-wider text-muted" htmlFor="f-timeline">
                  Target Timeline
                </label>
                <input
                  id="f-timeline"
                  name="timeline"
                  placeholder="e.g. 2-4 weeks / Immediately"
                  className="w-full bg-transparent border-b border-line py-2 text-ink text-base focus:border-ink focus:outline-none"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-[11.5px] font-semibold uppercase tracking-wider text-muted" htmlFor="f-note">
                Project brief or goals (optional)
              </label>
              <textarea
                id="f-note"
                name="note"
                rows={3}
                placeholder="A rough description is plenty to start..."
                className="w-full bg-transparent border-b border-line py-2 text-ink text-base focus:border-ink focus:outline-none resize-y"
              />
            </div>

            <button type="submit" className="btn justify-center mt-2">
              Send on WhatsApp <span className="arr">→</span>
            </button>

            <p className="text-xs text-muted" aria-live="polite">
              {formNote}{" "}
              <a
                href={`mailto:${site.email}?subject=Project Consultation Request`}
                className="text-accent underline font-medium"
              >
                Send via Email instead.
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
