const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Inquiries",
    value: "Message us on Airbnb",
    action: "https://airbnb.com/h/vacationvibevilla",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "06 Bacchauli Road, Ratnanagar 44204, Chitwan, Nepal",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Check-in / Check-out",
    value: "Flexible — just let us know your plans",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    label: "Getting Here",
    value: "Tourist buses stop at our gate. Airport pickup from Bharatpur or Kathmandu available.",
  },
];

export default function Contact() {
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
            something special? Reach out to us on Airbnb or use the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-gold transition-colors text-charcoal"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-gold transition-colors text-charcoal"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-gold transition-colors text-charcoal"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-sand focus:outline-none focus:border-gold transition-colors text-charcoal resize-none"
                  placeholder="Tell us about your plans — dates, group size, activities you're interested in..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-charcoal hover:bg-charcoal/90 text-white px-10 py-4 rounded-xl text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                  {item.icon}
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

            <div className="pt-8 border-t border-sand">
              <p className="text-sm text-stone mb-4">Find us on</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://airbnb.com/h/vacationvibevilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone hover:text-gold cursor-pointer transition-colors font-medium"
                >
                  Airbnb
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
