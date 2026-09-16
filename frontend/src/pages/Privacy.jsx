import { EMAIL_ADDRESS, EMAIL_LINK } from "../constants.js";

export default function Privacy() {
  return (
    <div className="container-content max-w-2xl py-14">
      <h1 className="text-3xl font-800">Privacy Policy</h1>
      <p className="mt-2 text-xs text-ink-muted">Last updated: September 2026</p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="font-display text-lg font-700">Information we collect</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            When you request a quote or contact us, we collect your name, mobile number, email
            address (if provided), city, and vehicle details. This information is used solely to
            process your scrapping request and to get in touch with you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-700">How we use your information</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            We use the details you share to provide a quote, schedule pickup, process payment, and
            issue scrapping documentation. We do not sell your personal information to third
            parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-700">Data retention</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Quote and contact records are retained for as long as necessary to complete your
            request and to meet applicable record-keeping requirements for vehicle scrapping
            documentation.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-700">Your choices</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            You can ask us to review, correct, or delete the information we hold about you at any
            time by writing to us.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-700">Contact us</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Questions about this policy can be sent to{" "}
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
