import Image from "next/image";
import Reveal from "./Reveal";
import { HomeIcon, SunIcon, SparklesIcon, BuildingIcon } from "./Icons";

const highlights = [
  { icon: HomeIcon, label: "Prime Location", desc: "5 minutes from Chitwan National Park in the heart of Sauraha." },
  { icon: SunIcon, label: "Golden Sunsets", desc: "Unforgettable evening views from your private balcony." },
  { icon: SparklesIcon, label: "Farm & Nature", desc: "Experience village life with our working farm and fish pond." },
  { icon: BuildingIcon, label: "Easy Access", desc: "Tourist coaches stop right at our gate. Airport transfers available." },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36 lg:py-48 px-6 bg-cream overflow-hidden relative pattern-dots">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] md:aspect-[3/4] relative overflow-hidden shadow-2xl">
                <Image
                  src="/images/lina.jpeg"
                  alt="Guest overlooking the calm Bishajari lake in Chitwan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-6 md:p-8 shadow-xl border border-gold/10 max-w-[240px]">
                <p className="font-display text-4xl md:text-5xl text-gold mb-2">5</p>
                <p className="text-charcoal text-sm font-semibold tracking-wider uppercase">Minutes to Chitwan National Park</p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-charcoal font-semibold text-xs tracking-[0.25em] uppercase mb-4">
                Namaste
              </p>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] mb-6">
                Welcome to
                <br />
                <span className="italic text-gold">Vacation Vibe Villa</span>
              </h2>
              <div className="w-16 h-1 bg-gold mb-8" />
            </Reveal>

            <Reveal delay={200} className="flex flex-col gap-5">
              <p className="text-stone text-base md:text-lg font-light leading-relaxed">
                Vacation Vibe Villa is a cozy 2-bedroom home on Bacchauli Road, Ratnanagar, Sauraha, Chitwan
                — your gateway to authentic Nepali village life. With a fully
                equipped kitchen, comfortable living room, and a balcony
                overlooking greenery, it&apos;s the perfect base for exploring
                Chitwan National Park and the surrounding wonders of Nepal.
              </p>
              <p className="text-stone text-base md:text-lg font-light leading-relaxed">
                Step outside and you&apos;ll find our little farm, a fish pond,
                and the warm hospitality of a real Nepali neighborhood. Whether
                you are here for a jungle safari, a cultural village tour, or
                simply to unwind with a book on the balcony, this is your space.
              </p>
              <p className="text-stone text-base md:text-lg font-light leading-relaxed">
                Up to 4 guests can stay comfortably. Tourist
                buses stop right at our gate — and we can arrange airport pickups
                too.
              </p>

              <a
                href="https://airbnb.com/h/vacationvibevilla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 self-start mt-4 px-5 py-3 bg-white border border-charcoal/10 shadow-sm hover:shadow-md hover:border-[#FF5A5F]/30 transition-all duration-300 group"
                aria-label="View Vacation Vibe Villa on Airbnb"
              >
                <svg className="w-6 h-6 text-[#FF5A5F] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.001 18.275c-1.353-1.697-2.23-3.076-2.63-4.138-.398-1.062-.478-1.94-.24-2.634.238-.694.72-1.086 1.446-1.176.726-.09 1.39.144 1.99.703.6.559.938 1.23 1.014 2.013.076.783-.11 1.533-.558 2.25-.45.717-1.104 1.47-1.962 2.258l-.06.055-.06-.055c-.858-.788-1.513-1.54-1.962-2.258-.448-.717-.634-1.467-.558-2.25.076-.783.414-1.454 1.014-2.013.6-.559 1.264-.793 1.99-.703.726.09 1.208.482 1.446 1.176.238.694.158 1.572-.24 2.634-.4 1.062-1.277 2.44-2.63 4.138z"/>
                </svg>
                <span className="text-charcoal font-semibold text-sm tracking-wide">Superhost on Airbnb</span>
              </a>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-20 md:mb-32">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 100} className="text-center group cursor-default">
              <div className="bg-white p-6 md:p-8 border border-charcoal/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-charcoal mb-5 group-hover:text-gold group-hover:bg-gold/20 transition-colors duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg md:text-xl text-charcoal mb-2">
                  {item.label}
                </h3>
                <p className="text-stone text-sm md:text-base font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-sand p-8 md:p-12 lg:p-16 border border-charcoal/10 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="max-w-xl relative z-10">
              <p className="text-gold font-semibold text-xs tracking-[0.25em] uppercase mb-4">
                Exclusive Experience
              </p>
              <h3 className="font-display text-2xl md:text-4xl text-charcoal mb-4">
                Digital Bird Book of Chitwan
              </h3>
              <p className="text-stone text-base md:text-lg font-light leading-relaxed mb-8">
                Explore the incredible avian biodiversity of Chitwan National Park with our custom digital field guide. Featuring over 200 species with stunning photography, scientific names, and Nepali translations. You can even install it on your device for offline use during your jungle walks!
              </p>
              <a
                href="/birds_of_cnp/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-charcoal hover:bg-gold text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-500 min-h-[48px]"
              >
                Explore Wildlife Guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="hidden md:flex items-center justify-center w-40 h-40 lg:w-48 lg:h-48 rounded-full border border-charcoal/10 relative bg-white group-hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-2 rounded-full border border-gold/20" />
              <span className="text-5xl lg:text-6xl absolute -translate-y-2" role="img" aria-label="Parrot">🦜</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
