"use client";

import { useState, FormEvent, useMemo } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const whatsappLink =
  "https://wa.me/9779865345753?text=Namaste!%20I'm%20interested%20in%20booking%20Vacation%20Vibe%20Villa.%20Is%20this%20place%20available%20for%20my%20dates%3F";

interface FormState {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  message?: string;
  general?: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: 2,
  message: "",
};

export default function Booking() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!form.name.trim()) {
      next.name = "Please enter your full name";
    } else if (form.name.trim().length < 2) {
      next.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      next.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address";
    }

    if (!form.phone.trim()) {
      next.phone = "Please enter your phone or WhatsApp number";
    }

    if (!form.checkIn) {
      next.checkIn = "Please select a check-in date";
    }

    if (!form.checkOut) {
      next.checkOut = "Please select a check-out date";
    } else if (form.checkIn && form.checkOut <= form.checkIn) {
      next.checkOut = "Check-out must be after check-in";
    }

    if (!form.guests || form.guests < 1) {
      next.guests = "At least 1 guest is required";
    } else if (form.guests > 4) {
      next.guests = "Maximum 4 guests allowed";
    }

    if (form.message.length > 2000) {
      next.message = "Message must be under 2000 characters";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined, general: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate() || sending) return;

    setSending(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setDone(true);
        setForm(initialForm);
        setErrors({});
      } else {
        setErrors({ general: data.error || "Request failed. Please try again." });
      }
    } catch {
      setErrors({ general: "Connection error. Please check your internet." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="booking" className="relative py-24 md:py-32 lg:py-36 px-6 overflow-hidden">
      <Image
        src="/images/bishajar.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
        priority={false}
      />
      <div className="absolute inset-0 bg-charcoal/80" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-gold-light font-medium text-sm tracking-[0.25em] uppercase mb-4">
          Book Your Stay
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
          Ready for an unforgettable
          <br />
          <span className="text-gold">Nepal experience?</span>
        </h2>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10">
          Send us a booking request and we&apos;ll confirm availability within 24 hours.
        </p>

        <Reveal delay={200}>
          {errors.general && (
            <p
              className="bg-red-500/20 text-red-100 text-sm text-center rounded-md border border-red-500/50 px-4 py-3 mb-6"
              role="alert"
            >
              {errors.general}
            </p>
          )}

          {done ? (
            <div className="max-w-2xl mx-auto text-white text-sm bg-black/40 backdrop-blur-sm p-6 border border-white/20 text-center rounded-lg">
              <p className="font-display text-2xl text-gold mb-2">Thank you, {form.name}!</p>
              <p className="leading-relaxed font-light">
                Your booking request has been received. A confirmation email has been sent to your inbox.
                <br className="hidden sm:block" />
                The host will contact you within 12 hours. For an immediate response, reach us on WhatsApp:
                <br />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold font-medium hover:underline mt-2 inline-block tracking-widest"
                >
                  +977-9865345753
                </a>
              </p>
              <button
                onClick={() => { setDone(false); setForm(initialForm); }}
                className="mt-6 px-6 py-2 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto text-left space-y-6 md:space-y-8"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                <div className="relative">
                  <label htmlFor="booking-name" className="sr-only">Full Name</label>
                  <input
                    id="booking-name"
                    type="text"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "booking-name-error" : undefined}
                    className="min-h-[48px] w-full pb-3 pt-1 bg-transparent text-white placeholder:text-white/60 border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none text-base"
                  />
                  {errors.name && (
                    <p id="booking-name-error" className="text-red-300 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="booking-email" className="sr-only">Email Address</label>
                  <input
                    id="booking-email"
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "booking-email-error" : undefined}
                    className="min-h-[48px] w-full pb-3 pt-1 bg-transparent text-white placeholder:text-white/60 border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none text-base"
                  />
                  {errors.email && (
                    <p id="booking-email-error" className="text-red-300 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="relative">
                <label htmlFor="booking-phone" className="sr-only">Phone / WhatsApp</label>
                <input
                  id="booking-phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="Phone / WhatsApp *"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "booking-phone-error" : undefined}
                  className="min-h-[48px] w-full pb-3 pt-1 bg-transparent text-white placeholder:text-white/60 border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none text-base"
                />
                {errors.phone && (
                  <p id="booking-phone-error" className="text-red-300 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-3 gap-6 md:gap-8 items-end">
                <div className="relative">
                  <label htmlFor="booking-checkin" className="text-white/70 text-xs tracking-widest uppercase mb-1 block">
                    Check-in *
                  </label>
                  <input
                    id="booking-checkin"
                    type="date"
                    value={form.checkIn}
                    min={today}
                    onChange={(e) => handleChange("checkIn", e.target.value)}
                    aria-invalid={!!errors.checkIn}
                    aria-describedby={errors.checkIn ? "booking-checkin-error" : undefined}
                    className="min-h-[48px] w-full pb-2 pt-1 bg-transparent text-white border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none text-base [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                  />
                  {errors.checkIn && (
                    <p id="booking-checkin-error" className="text-red-300 text-xs mt-1">{errors.checkIn}</p>
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="booking-checkout" className="text-white/70 text-xs tracking-widest uppercase mb-1 block">
                    Check-out *
                  </label>
                  <input
                    id="booking-checkout"
                    type="date"
                    value={form.checkOut}
                    min={form.checkIn || today}
                    onChange={(e) => handleChange("checkOut", e.target.value)}
                    aria-invalid={!!errors.checkOut}
                    aria-describedby={errors.checkOut ? "booking-checkout-error" : undefined}
                    className="min-h-[48px] w-full pb-2 pt-1 bg-transparent text-white border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none text-base [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                  />
                  {errors.checkOut && (
                    <p id="booking-checkout-error" className="text-red-300 text-xs mt-1">{errors.checkOut}</p>
                  )}
                </div>
                <div className="relative">
                  <label htmlFor="booking-guests" className="text-white/70 text-xs tracking-widest uppercase mb-1 block">
                    Guests *
                  </label>
                  <input
                    id="booking-guests"
                    type="number"
                    min={1}
                    max={4}
                    value={form.guests}
                    onChange={(e) => handleChange("guests", Math.max(1, Math.min(4, Number(e.target.value) || 1)))}
                    aria-invalid={!!errors.guests}
                    aria-describedby={errors.guests ? "booking-guests-error" : undefined}
                    className="min-h-[48px] w-full pb-2 pt-1 bg-transparent text-white border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none text-base"
                  />
                  {errors.guests && (
                    <p id="booking-guests-error" className="text-red-300 text-xs mt-1">{errors.guests}</p>
                  )}
                </div>
              </div>

              <div className="relative">
                <label htmlFor="booking-message" className="sr-only">Special Requests</label>
                <input
                  id="booking-message"
                  type="text"
                  placeholder="Special Requests (Optional)"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="min-h-[48px] w-full pb-3 pt-1 bg-transparent text-white placeholder:text-white/60 border-b border-white/30 focus:border-gold focus:outline-none transition-colors rounded-none text-base"
                />
                {errors.message && (
                  <p className="text-red-300 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* honeypot field — hidden from real users */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value=""
                  readOnly
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="min-h-[56px] w-full bg-white hover:bg-gold text-charcoal hover:text-white px-10 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-500 disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Submit Request"}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
