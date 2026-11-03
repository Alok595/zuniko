"use client";

const stackItems = [
  { num: "01", name: "Next.js", desc: "React Framework", bg: "#FFFFFF", text: "text-ink" },
  { num: "02", name: "TypeScript", desc: "Type Safety", bg: "#EDF3FF", text: "text-ink" },
  { num: "03", name: "React Native", desc: "Mobile Apps", bg: "#DBEAFE", text: "text-ink" },
  { num: "04", name: "Node / Python", desc: "API Backends", bg: "#0055FF", text: "text-white" },
  { num: "05", name: "PostgreSQL", desc: "Relational & AI", bg: "#0F2042", text: "text-white" },
  { num: "06", name: "AWS & Vercel", desc: "Edge Cloud", bg: "#0A0F1D", text: "text-white" },
];

export function Technology() {
  return (
    <section id="technology" className="bg-surface border-b border-line py-20 md:py-24">
      <div className="wrap grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <p className="label">04 · Core Stack Matrix</p>
          <h2 className="mt-4 font-display text-[clamp(34px,4.5vw,58px)] leading-[0.98]">
            Tools matched to performance goals.
          </h2>
          <p className="mt-5 text-muted text-[17px] leading-relaxed">
            Framework speed, type safety, database throughput, and edge caching all depend on foundational stack choices. Every system is calibrated for speed, security, and developer maintainability.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {stackItems.map((item) => (
              <div
                key={item.num}
                className={`sw ${item.text} p-4 flex flex-col justify-between aspect-[3/4] border border-line transition-transform duration-300 hover:-translate-y-2 shadow-sm`}
                style={{ backgroundColor: item.bg }}
              >
                <div>
                  <span className="font-display text-2xl font-normal leading-none block">{item.num}</span>
                  <strong className="block text-sm font-semibold mt-1">{item.name}</strong>
                </div>
                <small className="text-[11px] uppercase tracking-wider opacity-75">{item.desc}</small>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t-2 border-ink text-center">
            <span className="text-xs uppercase tracking-widest font-semibold text-ink">
              Zuniko Production Architecture Blueprint
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
