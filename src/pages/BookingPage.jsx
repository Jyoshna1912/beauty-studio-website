import { CalendarDays, Clock3, MessageCircle, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { salonInfo, serviceGroups } from "../data/salonData";
import { Field } from "../App";
const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbya1iqtE9JOeQYjaksxM_FBvVO-S7YhZuTxr9j7IabsBdOqwdT9iPj3BIBgVHC3nlHmlg/exec";

export function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Nails",
    date: "",
    time: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const serviceOptions = useMemo(
    () => serviceGroups.map((service) => service.title),
    [],
  );

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSent(false);
  }

async function submit(event) {
  event.preventDefault();

  if (!form.name.trim() || !form.phone.trim() || !form.date) {
    setError("Please add your name, phone number and preferred date.");
    return;
  }

  setError("");

  const bookingData = new URLSearchParams();

  bookingData.append("name", form.name.trim());
  bookingData.append("phone", form.phone.trim());
  bookingData.append("service", form.service);
  bookingData.append("date", form.date);
  bookingData.append("time", form.time);
  bookingData.append("message", form.message.trim());

  // Send booking to Google Sheets
  fetch(GOOGLE_SHEET_URL, {
    method: "POST",
    mode: "no-cors",
    body: bookingData,
  }).catch((err) => {
    console.error("Google Sheets submission failed:", err);
  });

  // Prepare WhatsApp message
  const message = [
    "Hi Fairy of Nail & Lash! ✨",
    "",
    "I'd like to book an appointment.",
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    `Service: ${form.service}`,
    `Preferred date: ${form.date}`,
    `Preferred time: ${form.time || "Flexible"}`,
    `Message: ${form.message.trim() || "No additional message"}`,
  ].join("\n");

  // Open WhatsApp
  window.open(
    `https://wa.me/${salonInfo.whatsapp}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer",
  );

  // Show success message
  setSent(true);

  // Clear form
  setForm({
    name: "",
    phone: "",
    service: "Nails",
    date: "",
    time: "",
    message: "",
  });

  // Hide success message after 5 seconds
  setTimeout(() => {
    setSent(false);
  }, 5000);
}

  return (
    <section
      id="booking"
      className="booking-section relative overflow-hidden bg-[#f2d6d0] px-5 py-24 lg:px-10 lg:py-32"
    >
      <Sparkles
        className="absolute right-[8%] top-[12%] text-[#a9565c]"
        size={28}
      />
      <div className="booking-orb" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div data-reveal>
          <p className="section-kicker">Your moment</p>
          <h2 className="font-display mt-3 text-6xl leading-[.85] sm:text-8xl">
            Ready to feel <span className="text-[#a9565c]">extraordinary?</span>
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-[#66564f]">
            Tell us what you are looking for and when you would like to visit.
            Your request opens directly in WhatsApp so the salon can confirm the
            appointment with you.
          </p>
          <div className="mt-8 grid gap-3 text-xs text-[#66564f]">
            <div className="flex items-center gap-3">
              <CalendarDays size={17} className="text-[#a9565c]" /> Appointment
              requests through WhatsApp
            </div>
            <div className="flex items-center gap-3">
              <Clock3 size={17} className="text-[#a9565c]" /> General timings:
              10 AM – 7 PM
            </div>
            <div className="flex items-center gap-3">
              <Sparkles size={17} className="text-[#a9565c]" /> Special
              appointments can be arranged
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-[2rem] border border-white/80 bg-[#fffaf6]/92 p-6 shadow-[0_20px_70px_rgba(105,74,61,.12)] backdrop-blur sm:p-8"
          data-reveal
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your name">
              <input
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                className="form-input"
                placeholder="Your name"
              />
            </Field>
            <Field label="Phone number">
              <input
                value={form.phone}
                onChange={(event) => update("phone", event.target.value)}
                className="form-input"
                placeholder="062813 37170"
              />
            </Field>
            <Field label="Service">
              <select
                value={form.service}
                onChange={(event) => update("service", event.target.value)}
                className="form-input"
              >
                {serviceOptions.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
            </Field>
            <Field label="Preferred date">
              <input
                type="date"
                value={form.date}
                onChange={(event) => update("date", event.target.value)}
                className="form-input"
              />
            </Field>
            <Field label="Preferred time">
              <input
                type="time"
                value={form.time}
                onChange={(event) => update("time", event.target.value)}
                className="form-input"
              />
            </Field>
            <Field label="Anything we should know?" full>
              <textarea
                rows="3"
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
                className="form-input resize-none"
                placeholder="Reference, occasion, preferred look..."
              />
            </Field>
          </div>
          {error && (
            <p className="mt-4 text-xs font-semibold text-[#a9565c]">{error}</p>
          )}
          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#c86f72] px-6 py-4 text-sm font-semibold text-white  hover:bg-[#a9565c] hover:cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(200,111,114,0.25)]"
          >
            <MessageCircle size={17} /> Send Booking Request
          </button>
          {sent && (
            <p className="mt-4 text-center text-xs text-[#a9565c]">
              Your WhatsApp booking window should be open. ✦
            </p>
          )}
        </form>
      </div>
    </section>
  );
}


