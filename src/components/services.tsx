"use client";

import { SERVICES } from "@/content/site";

export function Services() {
  const handleServiceClick = (serviceTitle: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const serviceSelect = document.getElementById("f-service") as HTMLSelectElement | null;
    if (serviceSelect) {
      serviceSelect.value = serviceTitle;
    }
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      const msgInput = document.getElementById("f-msg") as HTMLTextAreaElement | null;
      if (msgInput) {
        msgInput.focus({ preventScroll: true });
      }
    }, 700);
  };

  return (
    <section className="band services" id="services">
      <div className="wrap">
        <p className="label reveal in">Services</p>
        <h2 className="title reveal in" style={{ "--rd": "0.08s" } as React.CSSProperties}>
          What we offer
        </h2>
        <p className="sub reveal in" style={{ "--rd": "0.14s" } as React.CSSProperties}>
          Choose one service or combine several. Tap any row to start a message about it.
        </p>

        <ul className="svc-list">
          {SERVICES.map((s, i) => (
            <li
              key={s.title}
              className="reveal in"
              style={{ "--rd": `${Math.min(i, 5) * 0.04}s` } as React.CSSProperties}
            >
              <a
                className="svc"
                href="#contact"
                data-service={s.title}
                onClick={handleServiceClick(s.title)}
              >
                <span className="svc-name">{s.title}</span>
                <span className="svc-desc">{s.desc}</span>
                <svg
                  className="svc-go"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  aria-hidden="true"
                >
                  <path d="M3 12h17M13 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
