export default function Booking() {
  return (
    <section
      id="booking"
      className="relative py-28 md:py-36 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('/images/booking-bg.jpg')",
        }}
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
          Book directly on Airbnb or send us an inquiry. Either way, we&rsquo;ll
          make sure your stay in Sauraha is nothing short of amazing.
        </p>

        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <a
            href="https://airbnb.com/h/vacationvibevilla"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold/90 text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
          >
            Book on Airbnb
          </a>
          <a
            href="#contact"
            className="border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
          >
            Send an Inquiry
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-left">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Check-in
              </label>
              <input
                type="date"
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="text-left">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Check-out
              </label>
              <input
                type="date"
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="text-left">
              <label className="block text-white/80 text-sm font-medium mb-2">
                Guests
              </label>
              <select className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-gold transition-colors">
                <option value="1" className="text-charcoal">1 Guest</option>
                <option value="2" className="text-charcoal">2 Guests</option>
                <option value="3" className="text-charcoal">3 Guests</option>
                <option value="4" className="text-charcoal">4 Guests</option>
              </select>
            </div>
          </div>
          <a
            href="https://airbnb.com/h/vacationvibevilla"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gold hover:bg-gold/90 text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 text-center"
          >
            Check Availability on Airbnb
          </a>
          <p className="text-white/50 text-sm mt-4">
            Flexible check-in &amp; check-out &middot; Free cancellation on Airbnb
          </p>
        </div>
      </div>
    </section>
  );
}
