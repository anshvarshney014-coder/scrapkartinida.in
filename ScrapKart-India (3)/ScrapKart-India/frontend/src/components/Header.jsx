import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from "../constants.js";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Contact", to: "/contact" },
  { label: "Blog", to: "/blog" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-shadow ${
        scrolled ? "border-border bg-white/95 backdrop-blur shadow-sm" : "border-transparent bg-white/95"
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-white">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <path d="M16 6 L23 18 H9 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx="16" cy="16" r="2.5" fill="currentColor" />
            </svg>
          </span>
          <span className="font-display text-lg font-700 leading-none text-ink">
            ScrapKart <span className="text-primary">India</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-ink-muted hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={PHONE_TEL} className="text-sm font-semibold text-ink hover:text-primary">
            {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary">
            Get Quote
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-border md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="container-content flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-sm px-2 py-2.5 text-sm font-medium ${
                    isActive ? "bg-primary-light text-primary" : "text-ink-muted"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center gap-3 border-t border-border pt-3">
              <a href={PHONE_TEL} className="text-sm font-semibold text-ink">
                {PHONE_DISPLAY}
              </a>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary mt-2 w-full">
              Get Quote on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
