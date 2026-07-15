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
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-gold-light font-medium text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-in">
          Welcome to Paradise
        </p>
        <h1 className="text-white font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-in">
          Vacation
          <br />
          <span className="text-gold">Vibe Villa</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-in">
          Where every moment becomes a cherished memory. Experience unparalleled
          luxury in the heart of nature.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-in">
          <a
            href="#booking"
            className="bg-gold hover:bg-gold/90 text-white px-10 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
          >
            Reserve Your Stay
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
