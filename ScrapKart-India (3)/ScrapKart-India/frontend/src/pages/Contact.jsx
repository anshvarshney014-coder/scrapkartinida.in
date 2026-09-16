import ContactForm from "../components/ContactForm.jsx";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL_ADDRESS,
  EMAIL_LINK,
  ADDRESS_LINES,
  CITIES,
} from "../constants.js";

const CARDS = [
  {
    title: "Call us",
    value: PHONE_DISPLAY,
    href: PHONE_TEL,
    note: "Mon – Sat, 9:00 AM – 7:00 PM",
  },
  {
    title: "Email us",
    value: EMAIL_ADDRESS,
    href: EMAIL_LINK,
    note: "We reply within 24 hours",
  },
  {
    title: "Visit our yard",
    value: ADDRESS_LINES.join(", "),
    href: null,
    note: null,
  },
];

export default function Contact() {
  return (
    <div>
      <section className="border-b border-border bg-white py-14">
        <div className="container-content">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Get in touch</p>
          <h1 className="mt-1.5 text-3xl font-800 sm:text-4xl">Contact ScrapKart India</h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">
            Have a vehicle to scrap or a question about the process? Reach out and our team will
            get back to you shortly.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-bg py-12">
        <div className="container-content grid gap-4 sm:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.title} className="rounded-md border border-border bg-white p-6">
              <p className="font-display text-sm font-semibold text-ink">{card.title}</p>
              {card.href ? (
                <a href={card.href} className="mt-2 block break-words text-sm text-primary hover:underline">
                  {card.value}
                </a>
              ) : (
                <p className="mt-2 text-sm text-ink-muted">{card.value}</p>
              )}
              {card.note && <p className="mt-1 text-xs text-ink-muted">{card.note}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-content grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-700">Send us a message</h2>
            <p className="mt-2 text-sm text-ink-muted">
              Fill this in and we'll call you back to arrange a free pickup.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-md border border-border">
              <iframe
                title="ScrapKart India service area map"
                src="https://maps.google.com/maps?q=Noida%2C%20Uttar%20Pradesh%2C%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-6 rounded-md border border-border bg-bg p-6">
              <p className="font-display text-sm font-semibold text-ink">Serviced cities</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {CITIES.map((city) => (
                  <span
                    key={city}
                    className="rounded-sm border border-border bg-white px-3 py-1.5 text-xs font-medium text-ink-muted"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
