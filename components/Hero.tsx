import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt="Vacation Vibe Villa"
        fill
        sizes="100vw"
        priority
        className="object-cover scale-105"
      />
      {/* Lighter overlay for a brighter, more luxurious feel */}
      <div className="absolute inset-0 z-[1] bg-black/20" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-transparent to-black/60" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-12">
        <Reveal delay={100}>
          <p className="text-white font-medium text-xs md:text-sm tracking-[0.4em] uppercase mb-6 opacity-90">
            Sauraha, Chitwan — Nepal
          </p>
        </Reveal>
        
        <Reveal delay={300}>
          <h1 className="text-white font-display text-6xl md:text-8xl lg:text-9xl leading-[1.1] mb-8 drop-shadow-sm">
            Vacation Vibe
            <br />
            <span className="italic font-light">Villa</span>
          </h1>
        </Reveal>
        
        <Reveal delay={500}>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 drop-shadow-sm">
            Your gateway to authentic Nepali village life, just minutes from
            Chitwan National Park. A sanctuary of peace, nature, and golden sunsets.
          </p>
        </Reveal>
        
        <Reveal delay={700}>
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
            <a
              href="#booking"
              className="bg-white text-charcoal px-12 py-4 rounded-none text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-colors duration-500"
            >
              Reserve Your Stay
            </a>
            <a
              href="#gallery"
              className="text-white border-b border-white/50 px-2 py-2 text-xs font-semibold tracking-[0.2em] uppercase hover:border-white transition-colors duration-500"
            >
              Explore the Villa
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-70">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white to-white/0 animate-pulse" />
      </div>
    </section>
  );
}
