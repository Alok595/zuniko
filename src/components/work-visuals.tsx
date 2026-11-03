"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { ProjectVisual } from "@/content/site";
import { ease } from "./motion-primitives";

/**
 * Hand-built interface mock-ups, sized in em so each one scales with its card.
 * Swap them for real screenshots (next/image) as real projects come in.
 */

function useLoop(count: number, interval: number, active: boolean) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!active || reduced) return;
    const timer = setInterval(() => setStep((value) => (value + 1) % count), interval);
    return () => clearInterval(timer);
  }, [active, reduced, count, interval]);

  return reduced ? count - 1 : step;
}

const products = [
  {
    name: "Arc Lamp",
    price: "$148",
    tone: "#d8d2c4",
    art: <path d="M28 82h34v5H28zM43 40h4v42h-4zM26 15h38l9 27H17z" fill="#26261f" />,
  },
  {
    name: "Stem Vase",
    price: "$62",
    tone: "#c6ccc0",
    art: <path d="M44 14h12v18l14 22v33H30V54l14-22z" fill="#34463a" />,
  },
  {
    name: "Block Stool",
    price: "$210",
    tone: "#e2c9b4",
    art: <path d="M22 34h56v9H22zM28 43h7v44h-7zM65 43h7v44h-7zM35 62h30v5H35z" fill="#7a3f22" />,
  },
];

function StoreVisual({ active }: { active: boolean }) {
  const step = useLoop(4, 1500, active);
  const added = step - 1;

  return (
    <div className="flex h-full items-end bg-[#e9e6de] px-[4em] pt-[4em]">
      <div className="flex h-full w-full flex-col bg-white">
        <div className="flex items-center justify-between border-b border-line px-[1.6em] py-[1.1em]">
          <span className="text-[1.15em] font-semibold tracking-[-0.03em]">Oakline</span>
          <span className="flex gap-[1.6em] text-[0.85em] text-muted">
            <span>Shop</span>
            <span>Journal</span>
            <motion.span key={step} className="text-ink" initial={{ y: -4 }} animate={{ y: 0 }}>
              Bag ({Math.max(step, 0)})
            </motion.span>
          </span>
        </div>
        <div className="px-[1.6em] pb-[1em] pt-[1.3em] text-[2em] font-medium leading-none tracking-[-0.04em]">
          Objects for slow rooms
        </div>
        <div className="grid flex-1 grid-cols-3 gap-[0.8em] px-[1.6em]">
          {products.map((product, i) => (
            <div key={product.name} className="flex min-h-0 flex-col">
              <div className="flex min-h-0 flex-1 items-center justify-center" style={{ background: product.tone }}>
                <svg viewBox="0 0 100 100" className="h-[75%]">
                  {product.art}
                </svg>
              </div>
              <div className="flex justify-between py-[0.6em] text-[0.85em]">
                <span>{product.name}</span>
                <span className="text-muted">{product.price}</span>
              </div>
              <div
                className={`mb-[1.4em] py-[0.5em] text-center text-[0.8em] transition-colors duration-300 ${
                  added >= i ? "bg-accent text-white" : "bg-ink text-white"
                }`}
              >
                {added >= i ? "Added" : "Add to bag"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const classes = [
  ["07:00", "Strength", "Maya"],
  ["09:30", "Mobility", "Joel"],
  ["12:15", "Spin 45", "Ana"],
  ["18:00", "Reformer", "Priya"],
];
const bars = [38, 62, 44, 80, 56, 92, 30];

function AppVisual({ active }: { active: boolean }) {
  const step = useLoop(classes.length, 1400, active);
  const float = { y: active ? [0, -8, 0] : 0 };

  return (
    <div className="relative flex h-full justify-center gap-[2.5em] overflow-hidden bg-accent pt-[4em]">
      <motion.div
        animate={float}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="h-[42em] w-[19em] shrink-0 border-[0.5em] border-ink bg-white p-[1.2em]"
      >
        <div className="text-[0.75em] text-muted">Thursday 12</div>
        <div className="mb-[0.8em] text-[1.6em] font-medium tracking-[-0.03em]">Book a class</div>
        <div className="mb-[1em] grid grid-cols-5 gap-[0.3em] text-center text-[0.72em]">
          {["M", "T", "W", "T", "F"].map((day, i) => (
            <span key={i} className={`py-[0.5em] ${i === 3 ? "bg-ink text-white" : "bg-paper"}`}>
              {day}
            </span>
          ))}
        </div>
        {classes.map(([time, name, coach], i) => (
          <div key={name} className="flex items-center justify-between border-t border-line py-[0.7em]">
            <div>
              <div className="text-[0.95em] font-medium">{name}</div>
              <div className="text-[0.72em] text-muted">
                {time} with {coach}
              </div>
            </div>
            <span
              className={`px-[0.7em] py-[0.35em] text-[0.7em] transition-colors duration-300 ${
                step === i ? "bg-accent text-white" : "bg-paper"
              }`}
            >
              {step === i ? "Booked" : "Book"}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        animate={float}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="mt-[5em] h-[42em] w-[19em] shrink-0 border-[0.5em] border-ink bg-white p-[1.2em]"
      >
        <div className="text-[0.75em] text-muted">This week</div>
        <div className="text-[3.2em] font-medium leading-[1.1] tracking-[-0.04em]">5 classes</div>
        <div className="mt-[1em] flex h-[11em] items-end gap-[0.45em] border-b border-ink">
          {bars.map((height, i) => (
            <motion.div
              key={i}
              className={`flex-1 ${i === 5 ? "bg-accent" : "bg-ink"}`}
              initial={{ height: 0 }}
              animate={{ height: active ? `${height}%` : 0 }}
              transition={{ duration: 1.1, ease, delay: 0.1 + i * 0.06 }}
            />
          ))}
        </div>
        <div className="mt-[0.5em] flex justify-between text-[0.7em] text-muted">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <span key={i}>{day}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const chat = [
  { from: "user", text: "Hi, do you have anything Thursday evening?" },
  { from: "bot", text: "Dr. Rao has 6:30 and 7:15 free on Thursday. Shall I book one?" },
  { from: "user", text: "6:30 please" },
  { from: "bot", text: "Done. You're booked for Thursday at 6:30, and a reminder will come the day before." },
];

function ChatVisual({ active }: { active: boolean }) {
  const reduced = useReducedMotion();
  const step = useLoop(11, 900, active);
  // Two ticks per message (a bot's first tick shows it typing), then a short hold.
  const shown = reduced ? chat.length : Math.floor(step / 2) + 1;
  const typing = !reduced && step % 2 === 0 && chat[shown - 1]?.from === "bot";

  return (
    <div className="flex h-full items-end justify-center bg-[#E8F0FE] px-[4em] pt-[3.5em]">
      <div className="flex h-full w-full max-w-[40em] flex-col bg-white">
        <div className="flex items-center gap-[0.8em] border-b border-line px-[1.4em] py-[1em]">
          <span className="h-[2.2em] w-[2.2em] bg-accent" />
          <div>
            <div className="text-[0.95em] font-medium leading-tight">Clinic Desk</div>
            <div className="text-[0.75em] text-muted">Assistant, replies instantly</div>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-[0.7em] overflow-hidden p-[1.4em]">
          {chat.map((message, i) => {
            const isUser = message.from === "user";
            const visible = i < shown;
            const isTyping = typing && i === shown - 1;
            return (
              <motion.div
                key={i}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
                transition={{ duration: 0.5, ease }}
                className={`max-w-[72%] px-[1em] py-[0.7em] text-[1em] leading-[1.3] tracking-[-0.01em] ${
                  isUser ? "self-end bg-ink text-white" : "self-start bg-paper"
                }`}
              >
                <span className={isTyping ? "invisible" : ""}>{message.text}</span>
                {isTyping && (
                  <span className="absolute left-[1em] top-[1em] flex gap-[0.3em]">
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        className="h-[0.4em] w-[0.4em] bg-ink"
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.15 }}
                      />
                    ))}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const shipments = [
  ["KL-2041", "Pune", "In transit", "Delivered"],
  ["KL-2042", "Nashik", "Loading", "In transit"],
  ["KL-2043", "Surat", "Delayed", "In transit"],
  ["KL-2044", "Indore", "In transit", "In transit"],
];

function OpsVisual({ active }: { active: boolean }) {
  const step = useLoop(2, 2200, active);

  return (
    <div className="flex h-full items-end bg-[#e6e6ec] pl-[4em] pt-[4em]">
      <div className="flex h-full w-full bg-white">
        <div className="w-[9em] shrink-0 bg-ink p-[1.1em] text-[0.85em] text-white">
          <div className="mb-[1.6em] font-semibold tracking-[-0.03em]">Fleetboard</div>
          {["Overview", "Shipments", "Drivers", "Invoices"].map((item, i) => (
            <div key={item} className={`py-[0.45em] ${i === 0 ? "" : "opacity-50"}`}>
              {item}
            </div>
          ))}
        </div>
        <div className="min-w-0 flex-1 p-[1.4em]">
          <div className="mb-[1em] grid grid-cols-3 gap-[0.7em]">
            {[
              ["On the road", "128"],
              ["Due today", "46"],
              ["Delayed", step === 0 ? "3" : "2"],
            ].map(([label, value]) => (
              <div key={label} className="bg-paper p-[0.8em]">
                <div className="text-[0.72em] text-muted">{label}</div>
                <div className="text-[2em] font-medium leading-[1.15] tracking-[-0.04em]">{value}</div>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 300 70" className="mb-[0.8em] w-full" aria-hidden>
            <path d="M0 69.5h300" stroke="#dcdcd5" />
            <motion.path
              d="M0 56 L30 50 L60 54 L90 38 L120 42 L150 28 L180 34 L210 20 L240 24 L270 10 L300 14"
              fill="none"
              stroke="#1f2bff"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: active ? 1 : 0 }}
              transition={{ duration: 1.8, ease }}
            />
          </svg>
          {shipments.map(([id, city, before, after]) => {
            const status = step === 0 ? before : after;
            return (
              <div key={id} className="grid grid-cols-3 border-t border-line py-[0.5em] text-[0.8em]">
                <span>{id}</span>
                <span className="text-muted">{city}</span>
                <span className={`text-right ${status === "Delayed" ? "font-medium text-accent" : ""}`}>{status}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const visuals = { store: StoreVisual, app: AppVisual, chat: ChatVisual, ops: OpsVisual };

export function WorkVisual({ visual }: { visual: ProjectVisual }) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { amount: 0.35 });
  const Visual = visuals[visual];

  return (
    <div ref={ref} aria-hidden className="aspect-[16/10] select-none overflow-hidden [container-type:inline-size]">
      <div className="h-full text-[1.72cqw] transition-transform duration-[1200ms] ease-expo group-hover:scale-[1.025]">
        <Visual active={active} />
      </div>
    </div>
  );
}
