import { useState } from "react";
import client from "../api/client.js";
import { CITIES } from "../constants.js";

const initialState = {
  fullName: "",
  mobileNumber: "",
  vehicleMakeModel: "",
  city: "",
};

function validate(values) {
  const errors = {};
  if (!values.vehicleMakeModel.trim()) errors.vehicleMakeModel = "Enter your vehicle's make & model";
  if (!values.city) errors.city = "Select a city";
  if (!values.fullName.trim() || values.fullName.trim().length < 2) errors.fullName = "Enter your full name";
  if (!/^[6-9]\d{9}$/.test(values.mobileNumber.trim()))
    errors.mobileNumber = "Enter a valid 10-digit mobile number";
  return errors;
}

export default function QuoteForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
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
      const { data } = await client.post("/quotes", values);
      setStatus("success");
      setServerMessage(data.message || "Thanks! Our team will call you shortly.");
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
        <p className="font-display text-lg font-semibold text-primary">Request received</p>
        <p className="mt-1.5 text-sm text-ink-muted">{serverMessage}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-outline mt-4"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="vehicleMakeModel" className="field-label">Vehicle make &amp; model</label>
        <input
          id="vehicleMakeModel"
          name="vehicleMakeModel"
          type="text"
          placeholder="e.g. Maruti Swift 2011"
          value={values.vehicleMakeModel}
          onChange={handleChange}
          className="field-input"
        />
        {errors.vehicleMakeModel && <p className="field-error">{errors.vehicleMakeModel}</p>}
      </div>

      <div>
        <label htmlFor="city" className="field-label">City</label>
        <select id="city" name="city" value={values.city} onChange={handleChange} className="field-input">
          <option value="">Select city</option>
          {CITIES.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        {errors.city && <p className="field-error">{errors.city}</p>}
      </div>

      <div>
        <label htmlFor="fullName" className="field-label">Full name</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Your name"
          value={values.fullName}
          onChange={handleChange}
          className="field-input"
        />
        {errors.fullName && <p className="field-error">{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="mobileNumber" className="field-label">Mobile number</label>
        <div className="flex overflow-hidden rounded-sm border border-border focus-within:border-primary">
          <span className="flex items-center bg-bg px-3 text-sm text-ink-muted">+91</span>
          <input
            id="mobileNumber"
            name="mobileNumber"
            type="tel"
            inputMode="numeric"
            placeholder="98765 43210"
            value={values.mobileNumber}
            onChange={handleChange}
            className="w-full border-0 px-3.5 py-2.5 text-sm text-ink focus:outline-none"
          />
        </div>
        {errors.mobileNumber && <p className="field-error">{errors.mobileNumber}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-sm bg-red-50 px-3 py-2 text-sm text-red-700">{serverMessage}</p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-accent w-full">
        {status === "submitting" ? "Sending…" : "Get My Quote"}
      </button>
      <p className="text-center text-xs text-ink-muted">No obligation to sell until you're ready.</p>
    </form>
  );
}
