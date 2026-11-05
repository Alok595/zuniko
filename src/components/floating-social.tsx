"use client";

import { CONFIG, instagramUrl, whatsappUrl } from "@/content/site";

export function FloatingSocial() {
  return (
    <div className="fab" role="group" aria-label="Chat with us">
      <a
        className="fab-wa"
        target="_blank"
        rel="noopener noreferrer"
        href={whatsappUrl("Hi " + CONFIG.studio + ", I would like to talk about a project.")}
        aria-label="Chat on WhatsApp"
      >
        <span>Chat on WhatsApp</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
          <path
            d="M9 8c0 4 3 7 7 7l1-2-2.500-1-1 1c-1-.5-2-1.500-2.500-2.500l1-1-1-2.500z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </a>

      <a
        className="fab-ig"
        target="_blank"
        rel="noopener noreferrer"
        href={instagramUrl}
        aria-label="Follow on Instagram"
      >
        <span>Follow on Instagram</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      </a>
    </div>
  );
}
