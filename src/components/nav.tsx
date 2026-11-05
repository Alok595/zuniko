"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/content/site";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.dataset.bar = entry.isIntersecting ? "" : "light";
      },
      { rootMargin: "-69px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="bar">
      <div className="wrap">
        <a
          className="logo-wrap"
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          aria-label="Zuniko Studio, back to top"
        >
          <img
            src="/logo-white.png"
            alt="Zuniko - Digital solutions. Designed to scale."
            className="logo-img logo-img-white"
          />
          <img
            src="/logo-dark.png"
            alt="Zuniko - Digital solutions. Designed to scale."
            className="logo-img logo-img-dark"
          />
        </a>

        <nav className="nav" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="bar-actions">
          <a
            className="btn btn-sm"
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            Start a project
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="panel"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="menu-svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="21" y2="16" />
                </>
              )}
            </svg>
            <span className="menu-btn-label">{menuOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      <div className="panel" id="panel" hidden={!menuOpen}>
        <div className="wrap">
          <ul className="panel-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span>{link.label}</span>
                  <span className="panel-arr" aria-hidden="true">→</span>
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="panel-cta"
              >
                <span>Start a project</span>
                <span className="panel-arr" aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
