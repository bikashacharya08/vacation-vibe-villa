"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

export default function Booking() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: 2, message: "",
  });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setDone(true);
        setForm({ name: "", email: "", phone: "", checkIn: "", checkOut: "", guests: 2, message: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Request failed. Please try again.");
      }
    } catch {
      setError("Connection error. Please check your internet.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="booking" className="relative py-28 md:py-36 px-6 overflow-hidden">
      <Image
        src="/images/booking-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-charcoal/70" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-gold-light font-medium text-sm tracking-[0.25em] uppercase mb-4">
          Book Your Stay
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
          Ready for an unforgettable
          <br />
          <span className="text-gold">Nepal experience?</span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
          Send us a booking request and we&rsquo;ll confirm availability within 24 hours.
        </p>

          {error && <p className="bg-red-500/20 text-red-200 text-sm text-center rounded-lg px-4 py-2" role="alert">{error}</p>}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-left space-y-4" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="booking-name" className="sr-only">Full Name</label>
              <input id="booking-name" type="text" placeholder="Full Name" required value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/95 text-charcoal placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <div>
              <label htmlFor="booking-email" className="sr-only">Email</label>
              <input id="booking-email" type="email" placeholder="Email" required value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/95 text-charcoal placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
          </div>
          <div>
            <label htmlFor="booking-phone" className="sr-only">Phone / WhatsApp</label>
            <input id="booking-phone" type="tel" inputMode="tel" placeholder="Phone / WhatsApp" required value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/95 text-charcoal placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="booking-checkin" className="sr-only">Check-in</label>
              <input id="booking-checkin" type="date" required value={form.checkIn}
                onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/95 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <div>
              <label htmlFor="booking-checkout" className="sr-only">Check-out</label>
              <input id="booking-checkout" type="date" required value={form.checkOut}
                onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/95 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
            <div>
              <label htmlFor="booking-guests" className="sr-only">Guests</label>
              <input id="booking-guests" type="number" min={1} max={20} required value={form.guests}
                onChange={(e) => setForm({ ...form, guests: +e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/95 text-charcoal focus:outline-none focus:ring-2 focus:ring-gold" />
            </div>
          </div>
          <div>
            <label htmlFor="booking-message" className="sr-only">Message</label>
            <input id="booking-message" type="text" placeholder="Optional message &mdash; activities, special requests..." value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white/95 text-charcoal placeholder:text-stone/60 focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <button type="submit" disabled={sending}
            className="w-full bg-gold hover:bg-gold/90 text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 disabled:opacity-50">
            {done ? "Request Sent!" : sending ? "Sending..." : "Request to Book"}
          </button>
        </form>
      </div>
    </section>
  );
}
