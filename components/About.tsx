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
    <section id="about" className="py-32 md:py-48 px-6 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.5c-3.5 0-6-2.5-6-5.5V11a2.5 2.5 0 015 0v3.5l1.5-1.5a2.5 2.5 0 015 0v5c0 3-2.5 5.5-6 5.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 11v-4a2.5 2.5 0 00-5 0" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 11v-4a2.5 2.5 0 015 0v4.5" />
              </svg>
            </div>
            <p className="text-charcoal font-semibold text-xs tracking-[0.25em] uppercase mb-4">
              Namaste
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.1] mb-6">
              Welcome to
              <br />
              <span className="italic text-gold">Vacation Vibe Villa</span>
            </h2>
            <div className="w-px h-16 bg-charcoal/20 mx-auto mt-10 mb-20" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
          <Reveal delay={200}>
            <p className="text-stone text-lg md:text-xl font-light leading-relaxed mb-6">
              Vacation Vibe Villa is a cozy 2-bedroom home on Bacchauli Road, Ratnanagar, Sauraha, Chitwan
              &mdash; your gateway to authentic Nepali village life. With a fully
              equipped kitchen, comfortable living room, and a balcony
              overlooking greenery, it&rsquo;s the perfect base for exploring
              Chitwan National Park and the surrounding wonders of Nepal.
            </p>
            <p className="text-stone text-lg md:text-xl font-light leading-relaxed mb-6">
              Step outside and you&rsquo;ll find our little farm, a fish pond,
              and the warm hospitality of a real Nepali neighborhood. Whether
              you are here for a jungle safari, a cultural village tour, or
              simply to unwind with a book on the balcony, this is your space.
            </p>
            <p className="text-stone text-lg md:text-xl font-light leading-relaxed">
              Up to 4 guests can stay comfortably. Tourist
              buses stop right at our gate &mdash; and we can arrange airport pickups
              too.
            </p>
          </Reveal>

          <Reveal delay={400} className="relative">
            <div className="aspect-[4/3] overflow-hidden relative border border-charcoal/5">
              <Image
                src="/images/HOUSE_FRONT.JPG"
                alt="Vacation Vibe Villa"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-32">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 100} className="text-center group cursor-default">
              <div className="inline-flex items-center justify-center text-charcoal mb-6 group-hover:text-gold transition-colors duration-500">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-3">
                {item.label}
              </h3>
              <p className="text-stone text-sm md:text-base font-light leading-relaxed">
                {item.desc}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Digital Bird Book Feature */}
        <Reveal>
          <div className="bg-sand p-10 md:p-16 border border-charcoal/10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <p className="text-gold font-semibold text-xs tracking-[0.25em] uppercase mb-4">
                Exclusive Experience
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-charcoal mb-4">
                Digital Bird Book of Chitwan
              </h3>
              <p className="text-stone text-lg font-light leading-relaxed mb-8">
                Explore the incredible avian biodiversity of Chitwan National Park with our custom digital field guide. Featuring over 200 species with stunning photography, scientific names, and Nepali translations. You can even install it on your device for offline use during your jungle walks!
              </p>
              <a 
                href="/birds_of_cnp/index.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-charcoal hover:bg-gold text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-500"
              >
                Explore Wildlife Guide
              </a>
            </div>
            <div className="hidden md:flex items-center justify-center w-48 h-48 rounded-full border border-charcoal/10 relative">
              <span className="text-6xl absolute -translate-y-2">🦜</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
