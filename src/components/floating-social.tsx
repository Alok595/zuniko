"use client";

import { instagramUrl, site, whatsappUrl } from "@/content/site";
import { InstagramIcon, WhatsAppIcon } from "./ui";

const buttons = [
  {
    label: "WhatsApp",
    subtext: "+91 91233 32744",
    href: whatsappUrl("Hi Zuniko, I'd like to talk about a project."),
    Icon: WhatsAppIcon,
    bgClass: "bg-[#25D366] hover:bg-[#20ba59]",
  },
  {
    label: "Instagram",
    subtext: `@${site.instagram}`,
    href: instagramUrl,
    Icon: InstagramIcon,
    bgClass:
      "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 shadow-sm",
  },
];

/** Fixed to the right edge: mid-height on desktop, bottom corner on mobile */
export function FloatingSocial() {
  return (
    <aside
      aria-label="Direct contact channels"
      className="fixed bottom-32 sm:bottom-28 right-0 z-40 flex flex-col gap-2 md:bottom-auto md:top-1/2 md:-translate-y-1/2"
    >
      {buttons.map(({ label, subtext, href, Icon, bgClass }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} (${subtext}) - opens in new tab`}
          className={`group relative flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center text-white shadow-xl rounded-l-md transition-transform duration-200 hover:-translate-x-1 ${bgClass}`}
        >
          {/* Tooltip on hover (desktop only, avoids obstructing mobile screen) */}
          <span
            role="tooltip"
            className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap bg-ink text-white px-3 py-1.5 text-xs font-semibold tracking-wide shadow-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:inline-flex items-center gap-1.5"
          >
            <span>{label}</span>
            <span className="text-white/60 font-normal">{subtext}</span>
            <span className="text-white/40">↗</span>
          </span>

          <Icon className="h-5 w-5 md:h-6 md:w-6 shrink-0" />
        </a>
      ))}
    </aside>
  );
}
