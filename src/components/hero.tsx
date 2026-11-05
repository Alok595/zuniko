"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const vlineRef = useRef<HTMLDivElement>(null);
  const vtagRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const h1 = h1Ref.current;
    const stage = stageRef.current;
    const cv = canvasRef.current;
    const vline = vlineRef.current;
    const vtag = vtagRef.current;
    if (!hero || !h1 || !stage || !cv || !vline || !vtag) return;

    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Break headline into letter spans for variable-width stretching */
    const BASE = 92;
    const PEAK = 125;
    const RADIUS = 130;
    const letters: { el: HTMLSpanElement; w: number; ox: number; oy: number; sp: boolean }[] = [];
    let li = 0;

    const lines = h1.querySelectorAll<HTMLSpanElement>(".ln");
    lines.forEach((ln) => {
      const txt = ln.textContent || "";
      ln.textContent = "";
      ln.setAttribute("aria-hidden", "true");
      [...txt].forEach((ch) => {
        const s = document.createElement("span");
        const sp = ch === " ";
        s.className = "l";
        s.textContent = sp ? "\u00A0" : ch;
        s.style.setProperty("--i", String(li++));
        ln.appendChild(s);
        letters.push({ el: s, w: BASE, ox: 0, oy: 0, sp });
      });
    });

    function measure() {
      if (!h1) return;
      const hr = h1.getBoundingClientRect();
      letters.forEach((L) => {
        const r = L.el.getBoundingClientRect();
        L.ox = r.left - hr.left + r.width / 2;
        L.oy = r.top - hr.top + r.height / 2;
      });
    }

    /* Canvas ruler sizing & drawing */
    let W = 0;
    let H = 0;
    let dpr = 1;

    function sizeCanvas() {
      if (!cv || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth;
      H = cv.clientHeight;
      cv.width = Math.round(W * dpr);
      cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawRuler(cx: number) {
      if (!ctx || !vline || !vtag) return;
      ctx.clearRect(0, 0, W, H);
      ctx.textBaseline = "top";
      ctx.font = '500 10px "Spline Sans Mono", monospace';

      for (let x = 0; x <= W; x += 8) {
        const n = x / 8;
        const base = n % 10 === 0 ? 24 : n % 5 === 0 ? 14 : 7;
        const d = (x - cx) / 110;
        const g = Math.exp(-d * d);
        const len = base * (1 + 1.1 * g);
        ctx.globalAlpha = 0.5 + 0.5 * g;
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = base === 24 ? 1.6 : 1;
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, len);
        ctx.stroke();

        if (n % 10 === 0 && x > 0) {
          ctx.globalAlpha = 0.55 + 0.45 * g;
          ctx.fillStyle = "#fff";
          ctx.fillText(String(x), x + 4, len + 4);
        }
      }
      ctx.globalAlpha = 1;
      vline.style.transform = `translate3d(${cx.toFixed(1)}px,0,0)`;
      vtag.textContent = Math.round(cx) + " px";
    }

    let px: number | null = null;
    let py: number | null = null;
    let heroVis = true;
    let cur: number | null = null;
    let animId: number;

    const onPointerMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      const r = hero.getBoundingClientRect();
      const mx = Math.max(-1, Math.min(1, (e.clientX - r.left - r.width / 2) / (r.width / 2)));
      const my = Math.max(-1, Math.min(1, (e.clientY - r.top - r.height / 2) / (r.height / 2)));
      stage.style.setProperty("--mx", mx.toFixed(3));
      stage.style.setProperty("--my", my.toFixed(3));
    };

    const release = () => {
      px = null;
      py = null;
      stage.style.setProperty("--mx", "0");
      stage.style.setProperty("--my", "0");
    };

    hero.addEventListener("pointermove", onPointerMove);
    hero.addEventListener("pointerleave", release);
    hero.addEventListener("pointerup", (e) => {
      if (e.pointerType !== "mouse") setTimeout(release, 1200);
    });

    const observer = new IntersectionObserver(
      ([e]) => {
        heroVis = e.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(hero);

    function frame(t: number) {
      animId = requestAnimationFrame(frame);
      if (!heroVis || !hero || !h1) return;
      const hr = hero.getBoundingClientRect();
      const target = px !== null ? px - hr.left : W * (0.5 + 0.38 * Math.sin(t / 3200));
      cur = cur === null ? target : cur + (target - cur) * 0.12;
      drawRuler(cur);

      const h = h1.getBoundingClientRect();
      let cx: number | null = null;
      let cy: number | null = null;
      if (px !== null) {
        cx = px - h.left;
        cy = py! - h.top;
      } else {
        const phase = t % 9000;
        if (t > 2200 && phase < 2400) {
          cx = -150 + (phase / 2400) * (h.width + 300);
          cy = h.height * 0.5;
        }
      }

      for (const L of letters) {
        if (L.sp) continue;
        let g = 0;
        if (cx !== null) {
          const dx = L.ox - cx;
          const dy = (L.oy - cy!) * 0.55;
          g = Math.exp(-(dx * dx + dy * dy) / (RADIUS * RADIUS));
        }
        const tw = BASE + (PEAK - BASE) * g;
        if (Math.abs(tw - L.w) > 0.05) {
          L.w += (tw - L.w) * 0.16;
          L.el.style.fontVariationSettings = `'wdth' ${L.w.toFixed(1)}, 'wght' 800`;
        }
      }
    }

    sizeCanvas();
    drawRuler(W / 2);
    if (reduce) {
      letters.forEach((L) => {
        if (!L.sp) L.el.style.fontVariationSettings = "'wdth' 100, 'wght' 800";
      });
    } else {
      setTimeout(measure, 1500);
      animId = requestAnimationFrame(frame);
    }

    const onResize = () => {
      sizeCanvas();
      measure();
      if (reduce) drawRuler(W / 2);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", release);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="kicker intro" style={{ "--rd": "0.1s" } as React.CSSProperties}>
            Custom software studio in India
          </p>
          <h1
            id="h1"
            ref={h1Ref}
            className="display"
            aria-label="Built to measure."
          >
            <span className="ln">Built to</span>
            <span className="ln">measure.</span>
          </h1>
          <p className="lede intro" style={{ "--rd": "1s" } as React.CSSProperties}>
            Mobile apps, websites, management systems, AI and custom software, designed and built from scratch around how your business really works.
          </p>
          <div className="cta intro" style={{ "--rd": "1.2s" } as React.CSSProperties}>
            <a className="btn" href="#contact">
              Start a project
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
            <a className="btn btn-ghost" href="#work">
              See our work
            </a>
          </div>
        </div>

        {/* 3D Floating Stage with Parallax */}
        <div className="stage" id="stage" ref={stageRef} aria-hidden="true">
          <div className="obj o-browser">
            <div className="obj-in">
              <div className="dim dim-top">
                <span>1440 px</span>
              </div>
              <div className="win">
                <div className="win-top">
                  <i />
                  <i />
                  <i />
                  <b />
                </div>
                <div className="win-body">
                  <div className="w-hero">
                    <em />
                    <em />
                    <u />
                  </div>
                  <div className="w-cards">
                    <s />
                    <s />
                    <s />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="obj o-phone">
            <div className="obj-in">
              <div className="phone">
                <div className="ph-notch" />
                <div className="ph-card" />
                <div className="ph-row" />
                <div className="ph-row" />
                <div className="ph-row" />
                <div className="ph-btn" />
              </div>
              <div className="dim dim-bot">
                <span>390 px</span>
              </div>
            </div>
          </div>

          <div className="obj o-chat">
            <div className="obj-in">
              <div className="chat">
                <div className="bub them">Where is my order?</div>
                <div className="bub us">
                  Out for delivery. Arrives by 6 pm.
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="obj o-heart">
            <div className="obj-in">
              <svg viewBox="0 0 7 6" shapeRendering="crispEdges">
                <g fill="#0A1233" transform="translate(.35 .35)">
                  <rect x="1" y="0" width="2" height="1" />
                  <rect x="4" y="0" width="2" height="1" />
                  <rect x="0" y="1" width="7" height="2" />
                  <rect x="1" y="3" width="5" height="1" />
                  <rect x="2" y="4" width="3" height="1" />
                  <rect x="3" y="5" width="1" height="1" />
                </g>
                <g fill="#fff">
                  <rect x="1" y="0" width="2" height="1" />
                  <rect x="4" y="0" width="2" height="1" />
                  <rect x="0" y="1" width="7" height="2" />
                  <rect x="1" y="3" width="5" height="1" />
                  <rect x="2" y="4" width="3" height="1" />
                  <rect x="3" y="5" width="1" height="1" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Coordinate Guideline and Animated Ruler */}
      <div className="vline" id="vline" ref={vlineRef} aria-hidden="true">
        <span className="vtag" id="vtag" ref={vtagRef}>
          0 px
        </span>
      </div>
      <canvas className="ruler" id="ruler" ref={canvasRef} aria-hidden="true" />
    </section>
  );
}
