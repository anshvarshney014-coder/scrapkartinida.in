import { EMAIL_ADDRESS, EMAIL_LINK } from "../constants.js";

export default function Terms() {
  return (
    <div className="container-content max-w-2xl py-14">
      <h1 className="text-3xl font-800">Terms &amp; Conditions</h1>
      <p className="mt-2 text-xs text-ink-muted">Last updated: September 2026</p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="font-display text-lg font-700">Our service</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            ScrapKart India facilitates free doorstep pickup and legal scrapping of end-of-life
            vehicles through an RVSF-associated network, along with instant payment and digital
            documentation.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-700">Quotes and pricing</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Quotes provided online or over WhatsApp are indicative and based on the details you
            share. The final valuation is confirmed at the time of pickup, based on the vehicle's
            actual condition and prevailing scrap rates. Submitting a quote request does not
            obligate you to sell.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-700">Documents required</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            You are responsible for providing a valid Registration Certificate (RC), identity
            proof, and bank details for the vehicle being scrapped. We are not responsible for
            delays caused by missing or invalid documentation.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-700">Payment</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Payment is made via UPI or bank transfer at the time of pickup, before the vehicle is
            loaded for transport.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-700">Limitation of liability</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            ScrapKart India is not liable for delays, losses, or disputes arising from inaccurate
            information provided by the vehicle owner.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-700">Contact us</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            For any questions about these terms, write to{" "}
            <a href={EMAIL_LINK} className="text-primary hover:underline">
              {EMAIL_ADDRESS}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
