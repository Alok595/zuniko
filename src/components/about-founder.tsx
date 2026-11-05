"use client";

import { useEffect, useRef } from "react";
import { CONFIG, whatsappUrl } from "@/content/site";

export function AboutFounder() {
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
    <section className="band founder" id="founder" ref={sectionRef}>
      <div className="wrap fgrid">
        <figure className="portrait reveal">
          <div className="frame">
            <img
              src="/founder.jpg"
              alt="Founder, Zuniko Studio"
              className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 hover:scale-105"
            />
            <small>Founder</small>
          </div>
          <figcaption>
            <b>Founder</b>
            <span>Zuniko Studio</span>
          </figcaption>
        </figure>

        <div className="fcopy">
          <p className="label reveal">About the founder</p>
          <h2
            className="title reveal"
            style={{ "--rd": "0.08s" } as React.CSSProperties}
          >
            The person you talk to is the person who builds it.
          </h2>
          <p
            className="reveal"
            style={{ "--rd": "0.14s" } as React.CSSProperties}
          >
            I started Zuniko because too many businesses are stuck choosing between software that almost fits and agencies that pass them to a stranger after the first call.
          </p>
          <p
            className="reveal"
            style={{ "--rd": "0.18s" } as React.CSSProperties}
          >
            Here you work with the people doing the building. I read every brief myself, I tell you when an idea will cost more than it is worth, and I stay on a project until it works the way you pictured it.
          </p>
          <p
            className="reveal"
            style={{ "--rd": "0.22s" } as React.CSSProperties}
          >
            If your plan is still half-formed, bring it as it is. Rough notes are a fine place to start.
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
              href={whatsappUrl(`Hi ${CONFIG.studio}, I would like to talk directly with the founder about a project.`)}
            >
              Message me on WhatsApp
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
