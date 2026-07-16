"use client";

import { useState, FormEvent } from "react";
import { MailIcon, LocationIcon, ClockIcon, SearchIcon } from "./Icons";

const contactInfo = [
  {
    icon: MailIcon,
    label: "Inquiries",
    value: "livewithbikki@gmail.com",
    action: "mailto:livewithbikki@gmail.com",
  },
  {
    icon: LocationIcon,
    label: "Location",
    value: "06 Bacchauli Road, Ratnanagar 44204, Chitwan, Nepal",
  },
  {
    icon: ClockIcon,
    label: "Check-in / Check-out",
    value: "Flexible &mdash; just let us know your plans",
  },
  {
    icon: SearchIcon,
    label: "Getting Here",
    value: "Tourist buses stop at our gate. Airport pickup from Bharatpur or Kathmandu available.",
  },
];

import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setDone(true);
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Failed to send message.");
      }
    } catch {
      setError("Connection error. Please check your internet.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-48 px-6 bg-sand overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-24">
            <p className="text-charcoal font-semibold text-xs tracking-[0.25em] uppercase mb-6">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.1]">
              At Your
              <br />
              <span className="italic text-gold">Service</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <Reveal delay={200}>
            {error && <p className="bg-red-50 text-red-600 text-sm border border-red-200 text-center rounded-none px-4 py-3 mb-8" role="alert">{error}</p>}
            <form className="space-y-10" onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="relative">
                  <input
                    id="contact-first"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full pb-3 bg-transparent text-charcoal placeholder:text-stone/60 border-b border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-none text-sm font-light"
                    placeholder="First Name *"
                  />
                </div>
                <div className="relative">
                  <input
                    id="contact-last"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full pb-3 bg-transparent text-charcoal placeholder:text-stone/60 border-b border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-none text-sm font-light"
                    placeholder="Last Name *"
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pb-3 bg-transparent text-charcoal placeholder:text-stone/60 border-b border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-none text-sm font-light"
                  placeholder="Email Address *"
                />
              </div>
              <div className="relative">
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full pb-3 bg-transparent text-charcoal placeholder:text-stone/60 border-b border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-none resize-none text-sm font-light"
                  placeholder="How can we assist you? *"
                />
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={sending || done}
                  className="w-full bg-charcoal hover:bg-gold text-white px-10 py-5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-500 disabled:opacity-50"
                >
                  {done ? "Message Sent" : sending ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>

              {done && (
                <Reveal>
                  <div className="mt-8 text-charcoal text-sm bg-white p-8 border border-charcoal/10 text-center shadow-sm">
                    <p className="font-display text-2xl text-gold mb-2">Message Received</p>
                    <p className="leading-relaxed font-light">
                      The host will contact you within 12 hours. If you want faster contact, you can text directly on WhatsApp: 
                      <br/>
                      <a href="https://wa.me/9779865345753" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline mt-2 inline-block tracking-widest">+977-9865345753</a>
                    </p>
                  </div>
                </Reveal>
              )}
            </form>
          </Reveal>

          <div className="flex flex-col justify-center space-y-12">
            {contactInfo.map((item, index) => (
              <Reveal key={item.label} delay={300 + index * 100}>
                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 flex items-center justify-center text-gold transition-colors duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-stone font-semibold tracking-[0.15em] uppercase mb-2">
                      {item.label}
                    </p>
                    {item.action ? (
                      <a
                        href={item.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-charcoal text-xl hover:text-gold transition-colors duration-500"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-display text-charcoal text-xl font-light leading-snug">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
