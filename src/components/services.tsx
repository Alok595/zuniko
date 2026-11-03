"use client";

export function Services() {
  return (
    <section id="services-offered" className="border-b border-line py-20 md:py-28">
      <div className="wrap">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14 md:mb-16">
          <div className="lg:col-span-7">
            <p className="label">04 · Services offered</p>
            <h2 className="mt-4 font-display text-[clamp(36px,4.8vw,64px)] leading-[0.98]">
              Services offered.<br />
              Architecture to scale.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted text-[17px] leading-relaxed">
              Every system is diagnosed before code is written. We tailor the architecture, tech stack, and user experience directly to your business goals.
            </p>
          </div>
        </div>

        <div className="groups">
          <div className="group">
            <h3 className="font-display">
              Digital Products <small>Core Engineering</small>
            </h3>
            <ul>
              <li>
                <strong>Websites &amp; Web Apps</strong>
                <span>Marketing platforms and web applications that load in milliseconds and rank at the top.</span>
              </li>
              <li>
                <strong>Mobile Applications</strong>
                <span>iOS and Android apps, cross-platform or native, including App Store and Play Store releases.</span>
              </li>
              <li>
                <strong>E-Commerce Stores</strong>
                <span>Custom Shopify storefronts and headless shops with seamless payment gateways and inventory sync.</span>
              </li>
              <li>
                <strong>Stack Modernization</strong>
                <span>Migrating slow, legacy systems to Next.js, TypeScript, and modern cloud infrastructure.</span>
              </li>
            </ul>
          </div>

          <div className="group">
            <h3 className="font-display">
              Intelligence &amp; Ops <small>Automations</small>
            </h3>
            <ul>
              <li>
                <strong>Chatbots &amp; AI Agents</strong>
                <span>WhatsApp and web assistants that answer from your company data and hand over to team members seamlessly.</span>
              </li>
              <li>
                <strong>Custom CRMs &amp; Portals</strong>
                <span>Dashboards, booking systems, and internal portals that replace messy spreadsheets.</span>
              </li>
              <li>
                <strong>Cloud &amp; Databases</strong>
                <span>Secure PostgreSQL, Supabase, and AWS deployments built for high traffic with zero downtime.</span>
              </li>
              <li>
                <strong>Not sure what you need?</strong>
                <span>Book a 20-minute discovery call. We will examine your requirements and give you a clear roadmap.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
