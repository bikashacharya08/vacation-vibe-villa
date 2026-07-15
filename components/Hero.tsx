export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('/images/hero-bg.jpg')",
        }}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold-light font-medium text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-in">
          Sauraha, Chitwan — Nepal
        </p>
        <h1 className="text-white font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-in">
          Vacation
          <br />
          <span className="text-gold">Vibe Villa</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-in">
          Your gateway to authentic Nepali village life, just 5 minutes from
          Chitwan National Park. Wake up to birdsong, stroll past our farm and
          fish pond, and catch golden sunsets from the balcony.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-in">
          <a
            href="#contact"
            className="bg-gold hover:bg-gold/90 text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
          >
            Book Now
          </a>
          <a
            href="#gallery"
            className="border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Gallery
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
