"use client";

import { useEffect, useRef } from "react";

const FADE_PER_MS = 1 / 900;

/**
 * The hero's signature detail: grid cells light up under the cursor and fade,
 * leaving a square trail. A few cells also flicker on their own so that touch
 * devices still see it move.
 */
export function PixelField({ cell }: { cell: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !parent || !context) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const size = () => (window.innerWidth < 768 ? cell * 0.7 : cell);
    const cells = new Map<string, { x: number; y: number; alpha: number }>();
    let frame = 0;
    let visible = true;
    let last = performance.now();
    let idleTimer = 0;
    let pointer: { x: number; y: number } | null = null;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.clientWidth * ratio;
      canvas.height = canvas.clientHeight * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const light = (px: number, py: number, alpha = 1) => {
      const s = size();
      const x = Math.floor(px / s);
      const y = Math.floor(py / s);
      cells.set(`${x}:${y}`, { x, y, alpha });
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const bounds = canvas.getBoundingClientRect();
      const next = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
      // Fill in the gap on fast moves so the trail stays connected.
      if (pointer) {
        const distance = Math.hypot(next.x - pointer.x, next.y - pointer.y);
        const steps = Math.ceil(distance / (size() / 2));
        for (let i = 1; i <= steps; i++) {
          light(
            pointer.x + ((next.x - pointer.x) * i) / steps,
            pointer.y + ((next.y - pointer.y) * i) / steps,
          );
        }
      } else {
        light(next.x, next.y);
      }
      pointer = next;
    };

    const onPointerLeave = () => {
      pointer = null;
    };

    const draw = (now: number) => {
      const elapsed = now - last;
      last = now;
      const s = size();
      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      for (const [key, item] of cells) {
        item.alpha -= elapsed * FADE_PER_MS;
        if (item.alpha <= 0) {
          cells.delete(key);
          continue;
        }
        context.fillStyle = `rgba(31, 43, 255, ${item.alpha * item.alpha})`;
        context.fillRect(item.x * s, item.y * s, s, s);
      }
      frame = visible ? requestAnimationFrame(draw) : 0;
    };

    const idle = () => {
      if (visible) {
        light(Math.random() * canvas.clientWidth, Math.random() * canvas.clientHeight * 0.55, 0.45);
      }
      idleTimer = window.setTimeout(idle, 500 + Math.random() * 700);
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame) {
        last = performance.now();
        frame = requestAnimationFrame(draw);
      }
    });

    resize();
    observer.observe(canvas);
    idle();
    window.addEventListener("resize", resize);
    parent.addEventListener("pointermove", onPointerMove);
    parent.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(idleTimer);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      parent.removeEventListener("pointermove", onPointerMove);
      parent.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [cell]);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 h-full w-full" />;
}
