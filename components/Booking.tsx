"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

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

        <Reveal delay={200}>
          {error && <p className="bg-red-500/20 text-red-200 text-sm text-center rounded-none border border-red-500/50 px-4 py-3 mb-6" role="alert">{error}</p>}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-left space-y-8" noValidate>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="relative">
                <input id="booking-name" type="text" placeholder="Full Name *" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pb-2 bg-transparent text-white placeholder:text-white/60 border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none" />
              </div>
              <div className="relative">
                <input id="booking-email" type="email" placeholder="Email Address *" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pb-2 bg-transparent text-white placeholder:text-white/60 border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none" />
              </div>
            </div>
            
            <div className="relative">
              <input id="booking-phone" type="tel" inputMode="tel" placeholder="Phone / WhatsApp *" required value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full pb-2 bg-transparent text-white placeholder:text-white/60 border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none" />
            </div>
            
            <div className="grid sm:grid-cols-3 gap-8 items-end">
              <div className="relative">
                <label htmlFor="booking-checkin" className="text-white/60 text-xs tracking-widest uppercase mb-1 block">Check-in *</label>
                <input id="booking-checkin" type="date" required value={form.checkIn} min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                  className="w-full pb-2 bg-transparent text-white border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
              </div>
              <div className="relative">
                <label htmlFor="booking-checkout" className="text-white/60 text-xs tracking-widest uppercase mb-1 block">Check-out *</label>
                <input id="booking-checkout" type="date" required value={form.checkOut} min={form.checkIn || new Date().toISOString().split("T")[0]}
                  onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                  className="w-full pb-2 bg-transparent text-white border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert" />
              </div>
              <div className="relative">
                <label htmlFor="booking-guests" className="text-white/60 text-xs tracking-widest uppercase mb-1 block">Guests *</label>
                <input id="booking-guests" type="number" min={1} max={4} required value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: +e.target.value })}
                  className="w-full pb-2 bg-transparent text-white border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none" />
              </div>
            </div>
            
            <div className="relative">
              <input id="booking-message" type="text" placeholder="Special Requests (Optional)" value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full pb-2 bg-transparent text-white placeholder:text-white/60 border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none" />
            </div>
            
            <div className="pt-6">
              <button type="submit" disabled={sending || done}
                className="w-full bg-white hover:bg-gold text-charcoal hover:text-white px-10 py-5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-500 disabled:opacity-50"
              >
                {done ? "Request Sent" : sending ? "Sending..." : "Submit Request"}
              </button>
            </div>
            
            {done && (
              <Reveal>
                <div className="mt-8 text-white text-sm bg-black/40 backdrop-blur-sm p-6 border border-white/20 text-center">
                  <p className="font-display text-2xl text-gold mb-2">Thank you</p>
                  <p className="leading-relaxed font-light">
                    The host will contact you within 12 hours. For an immediate response, please contact us on WhatsApp: 
                    <br/>
                    <a href="https://wa.me/9779865345753" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline mt-2 inline-block tracking-widest">+977-9865345753</a>
                  </p>
                </div>
              </Reveal>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
