import { Link } from "react-router-dom";
import {
  BRAND_NAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL_ADDRESS,
  EMAIL_LINK,
  ADDRESS_LINES,
  CITIES,
} from "../constants.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite text-white/80">
      <div className="container-content grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-white">
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
                <path d="M16 6 L23 18 H9 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="16" cy="16" r="2.5" fill="currentColor" />
              </svg>
            </span>
            <span className="font-display text-base font-700 text-white">{BRAND_NAME}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            A doorstep vehicle scrapping platform for India. Instant payment, free pickup, and
            proper legal documentation for every car and bike we take off the road.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Quick links</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Cities we serve</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            {CITIES.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li>
              <a href={PHONE_TEL} className="hover:text-white">{PHONE_DISPLAY}</a>
            </li>
            <li>
              <a href={EMAIL_LINK} className="hover:text-white break-all">{EMAIL_ADDRESS}</a>
            </li>
            <li>
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/50 md:flex-row">
          <p>© {year} {BRAND_NAME}. All rights reserved.</p>
          <p>Vehicle Scrapping Made Easy</p>
        </div>
      </div>
    </footer>
  );
}
