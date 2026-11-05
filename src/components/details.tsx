"use client";

import { useEffect, useRef } from "react";
import { SPECS, STEPS } from "@/content/site";

const stackItems = [
  { num: "01", name: "Next.js", desc: "REACT FRAMEWORK", bg: "#FFFFFF", text: "var(--ink)", border: "var(--line)" },
  { num: "02", name: "TypeScript", desc: "TYPE SAFETY", bg: "#F3F6FF", text: "var(--ink)", border: "var(--line)" },
  { num: "03", name: "React Native", desc: "MOBILE APPS", bg: "#E2ECFF", text: "var(--ink)", border: "var(--line)" },
  { num: "04", name: "Node / Python", desc: "API BACKENDS", bg: "var(--cobalt)", text: "#FFFFFF", border: "var(--cobalt)" },
  { num: "05", name: "PostgreSQL", desc: "RELATIONAL & AI", bg: "var(--ink)", text: "#FFFFFF", border: "var(--ink)" },
  { num: "06", name: "AWS & Vercel", desc: "EDGE CLOUD", bg: "#04091A", text: "#FFFFFF", border: "#04091A" },
];

export function Details() {
  const stepsRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="band details" id="details">
      <div className="wrap">
        <p className="label reveal in">Details</p>
        <h2 className="title reveal in" style={{ "--rd": "0.08s" } as React.CSSProperties}>
          The details
        </h2>
        <p className="sub reveal in" style={{ "--rd": "0.14s" } as React.CSSProperties}>
          Quick answers and engineering specifications before you get in touch.
        </p>

        {/* Tech Stack Strip (6-card architecture strip) */}
        <div className="mt-12 overflow-x-auto pb-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-[var(--ink)] shadow-[6px_6px_0_var(--ink)]">
            {stackItems.map((item) => (
              <div
                key={item.num}
                style={{
                  backgroundColor: item.bg,
                  color: item.text,
                }}
                className="p-5 sm:p-6 flex flex-col justify-between min-h-[140px] border-b sm:border-b-0 border-r border-[var(--line)] last:border-r-0 transition-transform duration-200 hover:-translate-y-1"
              >
                <div>
                  <span
                    className="font-bold text-xl sm:text-2xl font-mono tracking-tight block"
                    style={{ color: item.text }}
                  >
                    {item.num}
                  </span>
                  <h4
                    className="mt-2 font-extrabold text-base sm:text-lg tracking-tight"
                    style={{ color: item.text }}
                  >
                    {item.name}
                  </h4>
                </div>
                <p
                  className="mt-6 text-[10px] font-mono font-bold tracking-widest uppercase opacity-80"
                  style={{ color: item.text }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Specs DL */}
        <dl className="spec reveal in">
          {SPECS.map((spec) => (
            <div key={spec.dt}>
              <dt>{spec.dt}</dt>
              <dd>{spec.dd}</dd>
            </div>
          ))}
        </dl>

        {/* 5-Step Process Timeline */}
        <h3 className="steps-h reveal in">How a project runs</h3>
        <ol className="steps in" ref={stepsRef} id="steps">
          {STEPS.map((step, idx) => (
            <li
              key={step.n}
              className="reveal in"
              style={{ "--rd": `${idx * 0.08}s` } as React.CSSProperties}
            >
              <span className="n">{step.n}</span>
              <b>{step.title}</b>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
