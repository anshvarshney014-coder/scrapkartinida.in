import { useState } from "react";
import client from "../api/client.js";

const SUBJECTS = ["Vehicle Pickup Request", "Documentation Query", "Pricing Question", "Other"];

const initialState = {
  fullName: "",
  mobileNumber: "",
  email: "",
  subject: "Vehicle Pickup Request",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim() || values.fullName.trim().length < 2) errors.fullName = "Enter your full name";
  if (!/^[6-9]\d{9}$/.test(values.mobileNumber.trim()))
    errors.mobileNumber = "Enter a valid 10-digit mobile number";
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email.trim()))
    errors.email = "Enter a valid email address";
  if (!values.message.trim() || values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setServerMessage("");
    try {
      const { data } = await client.post("/contact", values);
      setStatus("success");
      setServerMessage(data.message || "Message received! Our team will reach out shortly.");
      setValues(initialState);
    } catch (err) {
      setStatus("error");
      setServerMessage(
        err.response?.data?.message || "Something went wrong. Please try again or call us directly."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-md border border-primary/20 bg-primary-light p-6 text-center">
        <p className="font-display text-lg font-semibold text-primary">Message sent</p>
        <p className="mt-1.5 text-sm text-ink-muted">{serverMessage}</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-outline mt-4">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-fullName" className="field-label">Full name</label>
          <input
            id="cf-fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            className="field-input"
            placeholder="Your name"
          />
          {errors.fullName && <p className="field-error">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="cf-mobileNumber" className="field-label">Mobile number</label>
          <div className="flex overflow-hidden rounded-sm border border-border focus-within:border-primary">
            <span className="flex items-center bg-bg px-3 text-sm text-ink-muted">+91</span>
            <input
              id="cf-mobileNumber"
              name="mobileNumber"
              type="tel"
              inputMode="numeric"
              value={values.mobileNumber}
              onChange={handleChange}
              className="w-full border-0 px-3.5 py-2.5 text-sm text-ink focus:outline-none"
              placeholder="98765 43210"
            />
          </div>
          {errors.mobileNumber && <p className="field-error">{errors.mobileNumber}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className="field-label">Email address (optional)</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className="field-input"
          placeholder="you@example.com"
        />
        {errors.email && <p className="field-error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="cf-subject" className="field-label">Subject</label>
        <select id="cf-subject" name="subject" value={values.subject} onChange={handleChange} className="field-input">
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="field-label">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          className="field-input"
          placeholder="Tell us about your vehicle or question"
        />
        {errors.message && <p className="field-error">{errors.message}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-sm bg-red-50 px-3 py-2 text-sm text-red-700">{serverMessage}</p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
