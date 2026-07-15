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
            "url('https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=2070&auto=format&fit=crop')",
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
          <span className="text-gold">experience?</span>
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
          Secure your dates now. Our villa books quickly&mdash;don&rsquo;t miss
          your chance to experience paradise.
        </p>

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
                <option value="5" className="text-charcoal">5 Guests</option>
                <option value="6" className="text-charcoal">6 Guests</option>
                <option value="7" className="text-charcoal">7 Guests</option>
                <option value="8" className="text-charcoal">8 Guests</option>
              </select>
            </div>
          </div>
          <button className="w-full bg-gold hover:bg-gold/90 text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-gold/30">
            Check Availability
          </button>
          <p className="text-white/50 text-sm mt-4">
            No credit card required &middot; Free cancellation within 48 hours
          </p>
        </div>
      </div>
    </section>
  );
}
