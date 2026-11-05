"use client";

import { useEffect, useRef } from "react";
import { WORK } from "@/content/site";

const ART: Record<string, React.ReactNode> = {
  phone: (
    <>
      <rect x="146" y="20" width="108" height="260" rx="16" />
      <path d="M178 34h44" />
      <rect className="fs" x="158" y="50" width="84" height="46" rx="4" />
      <text className="t" x="166" y="78">Today 9:30</text>
      <rect x="158" y="108" width="84" height="30" rx="3" />
      <rect x="158" y="146" width="84" height="30" rx="3" />
      <rect x="158" y="184" width="84" height="30" rx="3" />
      <path d="M168 123h30M168 161h40M168 199h24" />
      <rect className="f" x="158" y="232" width="84" height="34" rx="3" />
      <text className="t inv" x="172" y="253">Book now</text>
      <rect x="36" y="86" width="78" height="52" rx="3" />
      <path d="M48 104h36M48 118h22" />
      <rect x="286" y="150" width="78" height="52" rx="3" />
      <path d="M298 168h36M298 182h22" />
      <path className="dash" d="M114 112h32M254 176h32" />
    </>
  ),
  browser: (
    <>
      <rect x="36" y="36" width="328" height="228" rx="6" />
      <path d="M36 64h328" />
      <circle className="f" cx="52" cy="50" r="3.5" />
      <circle className="f" cx="64" cy="50" r="3.5" />
      <circle className="f" cx="76" cy="50" r="3.5" />
      <path d="M96 64v200M50 84h32M50 104h24M50 124h30M50 144h20" />
      <text className="t" x="110" y="84">Reorder list</text>
      <rect className="fs" x="110" y="94" width="240" height="28" rx="3" />
      <path d="M118 108h70M262 108h22M316 108h24" />
      <rect x="110" y="130" width="240" height="28" rx="3" />
      <path d="M118 144h58M262 144h22M316 144h24" />
      <rect x="110" y="166" width="240" height="28" rx="3" />
      <path d="M118 180h80M262 180h22M316 180h24" />
      <text className="t" x="110" y="240">Total ₹48,200</text>
      <rect className="f" x="270" y="218" width="80" height="30" rx="3" />
      <text className="t inv" x="283" y="238">Place order</text>
    </>
  ),
  dash: (
    <>
      <rect x="30" y="30" width="340" height="240" rx="6" />
      <path d="M92 30v240" />
      <rect className="f" x="44" y="46" width="34" height="8" rx="2" />
      <path d="M44 78h34M44 98h26M44 118h30M44 138h22" />
      <rect x="106" y="46" width="76" height="44" rx="3" />
      <rect className="fs" x="194" y="46" width="76" height="44" rx="3" />
      <rect x="282" y="46" width="76" height="44" rx="3" />
      <text className="t" x="114" y="64">Patients</text>
      <text className="t" x="114" y="82">128</text>
      <path d="M202 64h26M202 78h40M290 64h26M290 78h30" />
      <path d="M112 156L140 138L168 148L196 120L224 134L252 108L346 102" />
      <rect className="f" x="112" y="214" width="18" height="36" />
      <rect className="f" x="140" y="190" width="18" height="60" />
      <rect className="f" x="168" y="206" width="18" height="44" />
      <rect className="f" x="196" y="170" width="18" height="80" />
      <rect className="f" x="224" y="194" width="18" height="56" />
      <rect x="262" y="150" width="96" height="100" rx="3" />
      <path d="M274 170h44M274 190h58M274 210h36M274 230h50" />
    </>
  ),
  game: (
    <>
      <rect className="fs" x="0" y="236" width="400" height="64" />
      <path d="M0 236h400" />
      <text className="t" x="22" y="34">SCORE 0420</text>
      <text className="t" x="318" y="34">LV 3</text>
      <path d="M44 96h60v-12h24v12h20v16H44z" />
      <path d="M270 70h50v-10h20v10h16v14h-86z" />
      <rect className="f" x="210" y="176" width="92" height="12" />
      <rect x="224" y="148" width="14" height="14" />
      <rect x="250" y="148" width="14" height="14" />
      <rect x="276" y="148" width="14" height="14" />
      <rect className="f" x="96" y="204" width="32" height="32" />
      <rect x="108" y="214" width="6" height="9" fill="var(--cover-bg)" stroke="none" />
      <rect x="118" y="214" width="6" height="9" fill="var(--cover-bg)" stroke="none" />
      <path d="M318 236l12-24 12 24 12-24 12 24" />
    </>
  ),
  chat: (
    <>
      <rect x="40" y="36" width="190" height="52" rx="4" />
      <path d="M56 54h120M56 70h80" />
      <rect className="f" x="170" y="104" width="190" height="52" rx="4" />
      <path className="inv-s" d="M186 122h120M186 138h90" />
      <rect x="40" y="172" width="150" height="44" rx="4" />
      <path d="M56 194h100" />
      <rect x="40" y="244" width="270" height="36" rx="4" />
      <path d="M54 262h90" />
      <rect className="f" x="322" y="244" width="38" height="36" rx="4" />
      <rect x="316" y="36" width="44" height="44" rx="4" />
      <path d="M329 54h4M343 54h4M331 67h16" />
    </>
  ),
  store: (
    <>
      <rect x="30" y="30" width="340" height="240" rx="6" />
      <path d="M30 62h340" />
      <text className="t" x="44" y="51">Handmade</text>
      <rect x="326" y="40" width="30" height="14" rx="2" />
      <text className="t" x="337" y="51">2</text>
      <rect className="fs" x="46" y="76" width="96" height="76" rx="3" />
      <path className="faint" d="M46 76l96 76M142 76l-96 76" />
      <rect className="fs" x="152" y="76" width="96" height="76" rx="3" />
      <path className="faint" d="M152 76l96 76M248 76l-96 76" />
      <rect className="fs" x="258" y="76" width="96" height="76" rx="3" />
      <path className="faint" d="M258 76l96 76M354 76l-96 76" />
      <path d="M50 172h58M50 186h36M156 172h58M156 186h36M262 172h58M262 186h36" />
      <text className="t" x="50" y="216">₹1,299</text>
      <text className="t" x="156" y="216">₹849</text>
      <text className="t" x="262" y="216">₹2,450</text>
      <rect className="f" x="46" y="228" width="96" height="26" rx="3" />
      <rect x="152" y="228" width="96" height="26" rx="3" />
      <rect x="258" y="228" width="96" height="26" rx="3" />
    </>
  ),
};

export function Work() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = grid.querySelectorAll<HTMLElement>(".cover");

    cards.forEach((c) => {
      const svg = c.querySelector<SVGElement>("svg");
      if (!svg) return;

      const onPointerMove = (e: PointerEvent) => {
        if (e.pointerType === "touch" || reduce) return;
        const r = c.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        svg.style.setProperty("--ry", (x * 9).toFixed(2) + "deg");
        svg.style.setProperty("--rx", (-y * 9).toFixed(2) + "deg");
        svg.style.setProperty("--s", "1.05");
      };

      const onPointerLeave = () => {
        svg.style.setProperty("--ry", "0deg");
        svg.style.setProperty("--rx", "0deg");
        svg.style.setProperty("--s", "1");
      };

      c.addEventListener("pointermove", onPointerMove);
      c.addEventListener("pointerleave", onPointerLeave);
    });

    const elements = grid.querySelectorAll(".reveal");
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
    <section className="band work" id="work">
      <div className="wrap">
        <p className="label reveal">Our work</p>
        <h2
          className="title reveal"
          style={{ "--rd": "0.08s" } as React.CSSProperties}
        >
          Things we build
        </h2>
        <p
          className="sub reveal"
          style={{ "--rd": "0.14s" } as React.CSSProperties}
        >
          A cross-section of the products we make, from first screens to launch.
        </p>

        <div className="wgrid" id="wgrid" ref={gridRef}>
          {WORK.map((w, i) => (
            <article
              key={w.title}
              className="card reveal"
              style={{ "--rd": `${(i % 2) * 0.08}s` } as React.CSSProperties}
            >
              <div className={`cover c-${w.color}`}>
                <svg
                  viewBox="0 0 400 300"
                  role="img"
                  aria-label={`${w.title} wireframe`}
                >
                  {ART[w.visual]}
                </svg>
                <span className="size">{w.size}</span>
              </div>
              <div className="meta">
                <h3>{w.title}</h3>
                <p className="kind">{w.kind}</p>
                <p className="d">{w.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="note reveal">
          Project types shown here. Case studies and live links on request.
        </p>
      </div>
    </section>
  );
}
