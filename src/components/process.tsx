"use client";

export function Process() {
  return (
    <section id="process" className="border-b border-line py-20 md:py-28">
      <div className="wrap grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Dark Stats Card */}
        <div className="lg:col-span-5 stats">
          <div className="stat">
            <b>4.9<em>★</em></b>
            <span>Client satisfaction across 100+ projects</span>
          </div>
          <div className="stat">
            <b>100<em>+</em></b>
            <span>Production apps &amp; systems shipped</span>
          </div>
          <div className="stat">
            <b>100<em>%</em></b>
            <span>Full repository &amp; IP ownership handover</span>
          </div>
          <div className="stat">
            <b>30<em>D</em></b>
            <span>Post-launch warranty &amp; monitoring included</span>
          </div>
        </div>

        {/* Right Column: Narrative & Numbered Steps */}
        <div className="lg:col-span-7">
          <p className="label">05 · The Method</p>
          <h2 className="mt-4 font-display text-[clamp(36px,4.8vw,64px)] leading-[0.98]">
            Personal engineering in a transparent pipeline.
          </h2>
          <p className="mt-5 text-xl font-medium text-ink leading-relaxed">
            Zuniko was founded to eliminate bloated vendor handoffs, hidden retainers, and software that businesses outgrow in six months.
          </p>
          <p className="mt-3 text-muted text-[17px] leading-relaxed">
            The process is straightforward: deep discovery, rapid weekly staging builds, and production release with zero vendor lock-in.
          </p>

          <div className="steps">
            <div className="step">
              <div>
                <b>01 / Consultation &amp; Architecture</b>
                <span>We map your business workflows, define database schemas, and agree on fixed milestones and pricing before writing any code.</span>
              </div>
            </div>
            <div className="step">
              <div>
                <b>02 / Playable Weekly Staging</b>
                <span>You get real clickable links each week to test features, review UX, and provide direct feedback as the product evolves.</span>
              </div>
            </div>
            <div className="step">
              <div>
                <b>03 / Launch &amp; Complete Handover</b>
                <span>Production cloud deployment, App Store publishing, full code repository handover, and 30 days of active post-launch support.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
