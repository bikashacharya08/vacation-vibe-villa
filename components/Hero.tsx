import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/luna.jpeg"
        alt="Vacation Vibe Villa — Luna"
        fill
        sizes="100vw"
        priority
        className="object-cover scale-105 z-0"
      />
      <div className="absolute inset-0 z-[1] bg-black/30" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto flex flex-col items-center mt-12">
        <Reveal delay={100}>
          <p className="text-white font-medium text-xs md:text-sm tracking-[0.4em] uppercase mb-4 md:mb-6 opacity-90 drop-shadow-md">
            Sauraha, Chitwan — Nepal
          </p>
        </Reveal>

        <Reveal delay={300}>
          <h1 className="text-white font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.1] mb-6 md:mb-8 drop-shadow-2xl">
            Vacation Vibe
            <br />
            <span className="italic font-light">Villa</span>
          </h1>
        </Reveal>

        <Reveal delay={500}>
          <p className="text-white/95 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 md:mb-12 px-2 sm:px-0 drop-shadow-lg">
            Your gateway to authentic Nepali village life, just minutes from
            Chitwan National Park. A sanctuary of peace, nature, and golden sunsets.
          </p>
        </Reveal>

        <Reveal delay={700}>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center w-full sm:w-auto">
            <a
              href="#booking"
              className="min-h-[48px] flex items-center justify-center bg-white text-charcoal px-8 sm:px-12 py-4 rounded-none text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-white transition-colors duration-500 w-full sm:w-auto"
            >
              Reserve Your Stay
            </a>
            <a
              href="#gallery"
              className="min-h-[48px] flex items-center justify-center text-white border-b border-white/50 px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase hover:border-white transition-colors duration-500"
            >
              Explore the Villa
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 opacity-70">
        <a
          href="#about"
          aria-label="Scroll down to learn more"
          className="block p-2"
        >
          <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white/0 via-white to-white/0 animate-pulse" />
        </a>
      </div>
    </section>
  );
}
