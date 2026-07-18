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
    value: "Flexible — just let us know your plans",
  },
  {
    icon: SearchIcon,
    label: "Getting Here",
    value: "Tourist buses stop at our gate. Airport pickup from Bharatpur or Kathmandu available.",
  },
];

const whatsappLink =
  "https://wa.me/9779865345753?text=Namaste!%20I'm%20interested%20in%20booking%20Vacation%20Vibe%20Villa.%20Is%20this%20place%20available%20for%20my%20dates%3F";

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
    <section id="contact" className="py-24 md:py-36 lg:py-48 px-6 bg-sand overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-16 md:mb-24">
            <p className="text-charcoal font-semibold text-xs tracking-[0.25em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1]">
              At Your
              <br />
              <span className="italic text-gold">Service</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <Reveal delay={200}>
            {error && <p className="bg-red-50 text-red-700 text-sm border border-red-200 text-center rounded-md px-4 py-3 mb-8" role="alert">{error}</p>}
            <form className="space-y-8" onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative">
                  <label htmlFor="contact-first" className="sr-only">First Name</label>
                  <input
                    id="contact-first"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="min-h-[48px] w-full pb-3 bg-transparent text-charcoal placeholder:text-stone/70 border-b border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-none text-base font-light"
                    placeholder="First Name *"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="contact-last" className="sr-only">Last Name</label>
                  <input
                    id="contact-last"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="min-h-[48px] w-full pb-3 bg-transparent text-charcoal placeholder:text-stone/70 border-b border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-none text-base font-light"
                    placeholder="Last Name *"
                  />
                </div>
              </div>
              <div className="relative">
                <label htmlFor="contact-email" className="sr-only">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="min-h-[48px] w-full pb-3 bg-transparent text-charcoal placeholder:text-stone/70 border-b border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-none text-base font-light"
                  placeholder="Email Address *"
                />
              </div>
              <div className="relative">
                <label htmlFor="contact-message" className="sr-only">Your Message</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="min-h-[120px] w-full pb-3 bg-transparent text-charcoal placeholder:text-stone/70 border-b border-charcoal/20 focus:border-gold focus:outline-none transition-colors rounded-none resize-none text-base font-light"
                  placeholder="How can we assist you? *"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={sending || done}
                  className="min-h-[56px] w-full bg-charcoal hover:bg-gold text-white px-10 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-500 disabled:opacity-50"
                >
                  {done ? "Message Sent" : sending ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>

              {done && (
                <Reveal>
                  <div className="mt-8 text-charcoal text-sm bg-white p-6 md:p-8 border border-charcoal/10 text-center shadow-sm rounded-lg">
                    <p className="font-display text-2xl text-gold mb-2">Message Received</p>
                    <p className="leading-relaxed font-light">
                      The host will contact you within 12 hours. If you want faster contact, you can text directly on WhatsApp:
                      <br/>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline mt-2 inline-block tracking-widest">+977-9865345753</a>
                    </p>
                  </div>
                </Reveal>
              )}
            </form>
          </Reveal>

          <div className="flex flex-col justify-center space-y-10 md:space-y-12">
            {contactInfo.map((item, index) => (
              <Reveal key={item.label} delay={300 + index * 100}>
                <div className="flex items-start gap-5 group p-4 -mx-4 rounded-xl hover:bg-white/60 transition-colors duration-300">
                  <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-gold transition-colors duration-500 shadow-sm">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-stone font-semibold tracking-[0.15em] uppercase mb-2">
                      {item.label}
                    </p>
                    {item.action ? (
                      <a
                        href={item.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-charcoal text-lg md:text-xl hover:text-gold transition-colors duration-500"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-display text-charcoal text-lg md:text-xl font-light leading-snug">
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
