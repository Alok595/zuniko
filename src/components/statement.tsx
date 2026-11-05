"use client";

import { useEffect, useRef } from "react";
import { CONFIG } from "@/content/site";

export function Statement() {
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
    <section className="band about" id="about" ref={sectionRef}>
      <div className="wrap agrid">
        <div>
          <p className="label reveal">About us</p>
          <h2
            className="title reveal"
            style={{ "--rd": "0.08s" } as React.CSSProperties}
          >
            A small studio that builds everything to order.
          </h2>
          <p
            className="big reveal"
            style={{ "--rd": "0.14s" } as React.CSSProperties}
          >
            {CONFIG.studio} is a software studio. We design and build mobile apps, websites and business systems for companies that have outgrown off-the-shelf tools, and for ideas that do not exist yet.
          </p>
          <p
            className="sub reveal"
            style={{ "--rd": "0.2s" } as React.CSSProperties}
          >
            We keep the team small on purpose, so the people you meet on the first call are the people who build your project.
          </p>
        </div>

        <ul className="principles">
          <li className="pr reveal">
            <h3>Made from scratch</h3>
            <p>
              No templates and no recycled themes. Your product is drawn and built around the way your team works.
            </p>
          </li>
          <li
            className="pr reveal"
            style={{ "--rd": "0.08s" } as React.CSSProperties}
          >
            <h3>One team, start to finish</h3>
            <p>
              Design, development, testing and launch stay under one roof, so nothing gets lost between handovers.
            </p>
          </li>
          <li
            className="pr reveal"
            style={{ "--rd": "0.16s" } as React.CSSProperties}
          >
            <h3>Clear and direct</h3>
            <p>
              Plain-language updates, agreed scopes and honest timelines from the very first conversation.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
