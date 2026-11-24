"use client";

import { useEffect, useRef } from "react";
import { CONFIG, whatsappUrl } from "@/content/site";

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="band founder" id="why-us" ref={sectionRef}>
      <div className="wrap fgrid">
        <figure className="portrait reveal">
          <div className="frame">
            <img
              src="/software.jpg"
              alt="Software Architecture & Engineering · Zuniko Studio"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <small>Production Code</small>
          </div>
          <figcaption>
            <b>The Zuniko Standard</b>
            <span>Engineering Without Compromise</span>
          </figcaption>
        </figure>

        <div className="fcopy">
          <p className="label reveal">Why Zuniko</p>
          <h2
            className="title reveal"
            style={{ "--rd": "0.08s" } as React.CSSProperties}
          >
            Software engineered around how your business really runs.
          </h2>
          <p
            className="reveal"
            style={{ "--rd": "0.14s" } as React.CSSProperties}
          >
            Too many companies are stuck choosing between off-the-shelf tools that almost fit and traditional agencies that pass their briefs to strangers after the initial pitch.
          </p>
          <p
            className="reveal"
            style={{ "--rd": "0.18s" } as React.CSSProperties}
          >
            At Zuniko, you work directly with the senior engineers designing and building your product. We read every requirement ourselves, tell you honestly when an idea will cost more than it is worth, and stay on the build until it functions exactly as envisioned.
          </p>
          <p
            className="reveal"
            style={{ "--rd": "0.22s" } as React.CSSProperties}
          >
            From first interactive prototypes to high-concurrency cloud production, every line of code is structured for speed, zero vendor lock-in, and 100% intellectual property handover.
          </p>
          <div
            className="sign reveal"
            style={{ "--rd": "0.26s" } as React.CSSProperties}
          >
            <span className="hand">Zuniko</span>
            <a
              className="btn btn-blue"
              target="_blank"
              rel="noopener noreferrer"
              href={whatsappUrl(`Hi ${CONFIG.studio}, I would like to consult on an upcoming software project.`)}
            >
              Consult on WhatsApp
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                aria-hidden="true"
              >
                <path d="M3 10h13M11 4l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
