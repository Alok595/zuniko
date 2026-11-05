"use client";

import { SERVICES } from "@/content/site";

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="grp">
            {SERVICES.map((s, i) => (
              <span key={`${copyIndex}-${i}`}>{s.title}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

