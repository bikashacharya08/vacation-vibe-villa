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
    <section id="contact" className="py-28 md:py-36 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-sm tracking-[0.25em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-4">
            Questions? We&rsquo;re
            <br />
            <span className="text-gold">here to help</span>
          </h2>
          <p className="text-stone text-lg max-w-2xl mx-auto">
            Want to check availability, ask about activities, or arrange
            something special? Send us a message using the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {error && <p className="bg-red-50 text-red-600 text-sm text-center rounded-lg px-4 py-2 mb-4" role="alert">{error}</p>}
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-first" className="block text-sm font-medium text-charcoal mb-2">
                    First Name
                  </label>
                  <input
                    id="contact-first"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-gold transition-colors text-charcoal"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="contact-last" className="block text-sm font-medium text-charcoal mb-2">
                    Last Name
                  </label>
                  <input
                    id="contact-last"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-gold transition-colors text-charcoal"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-gold transition-colors text-charcoal"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-gold transition-colors text-charcoal resize-none"
                  placeholder="Tell us about your plans &mdash; dates, group size, activities you&rsquo;re interested in..."
                />
              </div>
              <button
                type="submit"
                disabled={sending || done}
                className="w-full bg-charcoal hover:bg-charcoal/90 text-white px-10 py-4 rounded-xl text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-xl disabled:opacity-50"
              >
                {done ? "Message Sent!" : sending ? "Sending..." : "Send Message"}
              </button>
              {done && (
                <div className="mt-4 text-charcoal text-sm bg-gold/10 p-5 rounded-xl border border-gold/30">
                  <p className="font-semibold text-lg mb-1">Message received!</p>
                  <p className="leading-relaxed">
                    The host will contact you within 12 hours. If you want faster contact, you can text directly on WhatsApp: 
                    <a href="https://wa.me/9779865345753" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline ml-1">+977-9865345753</a>.
                  </p>
                </div>
              )}
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-stone font-medium mb-1">
                    {item.label}
                  </p>
                  {item.action ? (
                    <a
                      href={item.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-charcoal text-lg hover:text-gold transition-colors"
                    >
                      {item.value} &rarr;
                    </a>
                  ) : (
                    <p className="font-display text-charcoal text-lg">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
