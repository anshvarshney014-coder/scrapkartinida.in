import { Link } from "react-router-dom";
import QuoteForm from "../components/QuoteForm.jsx";
import Faq from "../components/Faq.jsx";
import { CITIES, PHONE_TEL, PHONE_DISPLAY, WHATSAPP_LINK } from "../constants.js";

const OFFERS = [
  {
    title: "Dedicated support",
    body: "One point of contact guides you through valuation, pickup, and paperwork — start to finish.",
  },
  {
    title: "Free doorstep pickup",
    body: "We collect the vehicle from your home or office at a time that works for you.",
  },
  {
    title: "Instant payment",
    body: "Payment is transferred to your account before the vehicle leaves your driveway.",
  },
  {
    title: "Eco-friendly recycling",
    body: "Vehicles are dismantled and recycled through RVSF-standard, environmentally sound processes.",
  },
  {
    title: "Digital documentation",
    body: "Your Certificate of Deposit and scrapping paperwork are emailed to you directly.",
  },
];

const WHY_US = [
  {
    title: "Legally compliant, always",
    body: "Every vehicle is processed through a transparent, RVSF-associated recycling chain — no grey-market handoffs.",
  },
  {
    title: "Fast pickup, instant pay",
    body: "Free doorstep collection paired with secure online payment before the vehicle is loaded.",
  },
  {
    title: "Transparent pricing",
    body: "The quote we give is what you receive — no last-minute deductions once the vehicle is collected.",
  },
  {
    title: "Genuinely eco-friendly",
    body: "Materials are recovered and recycled responsibly, keeping usable metal out of landfills.",
  },
];

const PROCESS = [
  { title: "Request a quote", body: "Share your vehicle details online or on WhatsApp." },
  { title: "Confirm & schedule", body: "Approve the quote and book a free doorstep pickup slot." },
  { title: "Get paid instantly", body: "Receive secure online payment along with digital documentation." },
  { title: "Recycle responsibly", body: "Your vehicle is dismantled and recycled at an RVSF-standard facility." },
];

const FAQ_ITEMS = [
  {
    question: "I want to scrap my bike or car. What's the process?",
    answer:
      "Share your vehicle and city details for an instant quote, schedule a free doorstep pickup, and receive payment digitally at the time of collection along with your documentation.",
  },
  {
    question: "Is scrapping a vehicle through ScrapKart India legal?",
    answer:
      "Yes. We work through RVSF-associated facilities and issue an official Certificate of Deposit and scrapping documentation, so the vehicle is fully cleared from your name.",
  },
  {
    question: "Why choose ScrapKart India over a local scrap dealer?",
    answer:
      "Unregistered dealers carry legal risk — the vehicle can remain linked to you. We guarantee documented, compliant scrapping, instant payment, and free pickup.",
  },
  {
    question: "When do I actually get paid?",
    answer: "At pickup — by UPI or direct bank transfer, before the vehicle is loaded onto the truck.",
  },
  {
    question: "Do you charge anything for pickup or towing?",
    answer: "No. Doorstep pickup and towing are completely free, with no hidden charges added later.",
  },
  {
    question: "What documents should I keep ready?",
    answer: "Your vehicle Registration Certificate (RC), a valid ID proof, and your bank details — we handle the rest.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div className="container-content grid gap-10 py-12 md:grid-cols-2 md:gap-8 md:py-20">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-sm border border-primary/20 bg-primary-light px-3 py-1.5 text-xs font-semibold text-primary">
              RVSF-associated · Free pickup · Instant payment
            </span>
            <h1 className="text-4xl font-800 leading-[1.08] text-ink sm:text-5xl">
              We pick it up.
              <br />
              You get paid.
              <br />
              We recycle it right.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
              Doorstep pickup, instant payment, and a fully documented, legal scrapping process for
              your old car or bike — zero paperwork stress.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary">
                Get Quote on WhatsApp
              </a>
              <a href={PHONE_TEL} className="btn-outline">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-md border border-border bg-bg p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Instant pickup request</p>
              <h2 className="mt-1.5 font-display text-2xl font-700 text-ink">Get your quote</h2>
              <div className="mt-5">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="border-b border-border bg-bg py-16">
        <div className="container-content">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Where we operate</p>
              <h2 className="mt-1.5 text-2xl font-700 sm:text-3xl">Cities we serve</h2>
            </div>
            <p className="max-w-sm text-sm text-ink-muted">
              Free doorstep pickup and instant payment available across these locations.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {CITIES.map((city) => (
              <div key={city} className="rounded-sm border border-border bg-white px-4 py-5 text-center">
                <p className="font-display text-sm font-semibold text-ink">{city}</p>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Active
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="border-b border-border bg-white py-16">
        <div className="container-content grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">What we offer</p>
            <h2 className="mt-1.5 text-2xl font-700 sm:text-3xl">Everything handled, end to end</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-muted">
              From the first call to the final certificate, we manage the entire scrapping process
              so you don't have to run between RTOs, junkyards, and buyers yourself.
            </p>
          </div>
          <ul className="divide-y divide-border border-t border-border md:border-t-0">
            {OFFERS.map((offer) => (
              <li key={offer.title} className="flex gap-4 py-4">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent" />
                <div>
                  <p className="font-display text-sm font-semibold text-ink">{offer.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{offer.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why us */}
      <section className="border-b border-border bg-primary-light py-16">
        <div className="container-content">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Why choose us</p>
          <h2 className="mt-1.5 max-w-lg text-2xl font-700 sm:text-3xl">
            Built on trust, backed by paperwork
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
            Selling to an unregistered scrap dealer can leave your name legally attached to a
            vehicle you no longer own. Working with an RVSF-associated network removes that risk.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {WHY_US.map((item) => (
              <div key={item.title} className="rounded-md border border-primary/15 bg-white p-6">
                <p className="font-display text-base font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-border bg-white py-16">
        <div className="container-content">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">The process</p>
          <h2 className="mt-1.5 text-2xl font-700 sm:text-3xl">Simple, transparent, stress-free</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, index) => (
              <div key={step.title} className="relative border-t-2 border-primary pt-5">
                <span className="font-display text-3xl font-800 text-primary/25">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-base font-semibold text-ink">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-border bg-bg py-16">
        <div className="container-content grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex items-center">
            <svg viewBox="0 0 400 320" className="w-full max-w-md" role="img" aria-label="Recycling loop illustration">
              <rect x="0" y="0" width="400" height="320" rx="8" fill="#0F4D34" />
              <g stroke="#F1E1CB" strokeWidth="6" fill="none" strokeLinecap="round">
                <path d="M120 210 a80 80 0 1 1 45 68" />
                <path d="M280 110 a80 80 0 1 1 -45 -68" />
              </g>
              <path d="M155 265 l20 25 l30 -10" stroke="#F1E1CB" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M245 55 l-20 -25 l-30 10" stroke="#F1E1CB" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="200" cy="160" r="34" fill="#B5651D" />
              <path d="M186 160 l10 10 l20 -22" stroke="#FFFFFF" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">About ScrapKart India</p>
            <h2 className="mt-1.5 text-2xl font-700 sm:text-3xl">Retiring old vehicles, responsibly</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              ScrapKart India is a tech-enabled vehicle recycling platform built for eco-friendly,
              legal, and hassle-free scrapping of end-of-life vehicles. Operating through an
              RVSF-associated network, we ensure fully documented, compliant destruction and fair
              value for your old car or bike.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="font-display text-sm font-semibold text-ink">Our mission</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  A simple, transparent, and rewarding experience for every vehicle owner.
                </p>
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-ink">Our vision</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  A cleaner India, with old and unsafe vehicles responsibly retired.
                </p>
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-ink">Eco impact</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  Recycled metal reduces demand for fresh raw material extraction.
                </p>
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-ink">Trusted process</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  Free pickup, fair pricing, and complete legal documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-border bg-white py-16">
        <div className="container-content max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Have questions?</p>
          <h2 className="mt-1.5 text-2xl font-700 sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-8">
            <Faq items={FAQ_ITEMS} />
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-primary py-14">
        <div className="container-content flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-700 text-white sm:text-3xl">Ready to scrap your vehicle?</h2>
            <p className="mt-2 max-w-md text-sm text-white/75">
              Get an instant quote on WhatsApp, or reach us directly for any questions.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-accent">
              Get Quote on WhatsApp
            </a>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-white/90">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
