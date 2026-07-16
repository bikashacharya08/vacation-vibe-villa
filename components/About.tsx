import Image from "next/image";
import { HomeIcon, SunIcon, SparklesIcon, BuildingIcon } from "./Icons";

const highlights = [
  { icon: HomeIcon, label: "Prime Location", desc: "5 minutes from Chitwan National Park in the heart of Sauraha." },
  { icon: SunIcon, label: "Golden Sunsets", desc: "Unforgettable evening views from your private balcony." },
  { icon: SparklesIcon, label: "Farm & Nature", desc: "Experience village life with our working farm and fish pond." },
  { icon: BuildingIcon, label: "Easy Access", desc: "Tourist coaches stop right at our gate. Airport transfers available." },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-gold font-medium text-sm tracking-[0.25em] uppercase mb-4">
              About the Villa
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-6">
              Authentic Nepal,
              <br />
              <span className="text-gold">unforgettable memories</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold/40 mb-6" />
            <p className="text-stone text-lg leading-relaxed mb-4">
              Vacation Vibe Villa is a cozy 2-bedroom home on Bacchauli Road, Ratnanagar, Sauraha, Chitwan
              &mdash; your gateway to authentic Nepali village life. With a fully
              equipped kitchen, comfortable living room, and a balcony
              overlooking greenery, it&rsquo;s the perfect base for exploring
              Chitwan National Park and the surrounding wonders of Nepal.
            </p>
            <p className="text-stone text-lg leading-relaxed mb-4">
              Step outside and you&rsquo;ll find our little farm, a fish pond,
              and the warm hospitality of a real Nepali neighborhood. Whether
              you are here for a jungle safari, a cultural village tour, or
              simply to unwind with a book on the balcony, this is your space.
            </p>
            <p className="text-stone text-lg leading-relaxed">
              Up to 4 guests can stay comfortably. Self-catering kitchen, hot
              water, AC, fast WiFi, and flexible check-in/out included. Tourist
              buses stop right at our gate &mdash; and we can arrange airport pickups
              too.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image
                src="/images/about-villa.jpg"
                alt="Vacation Vibe Villa"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
              <p className="text-4xl font-display text-gold">4</p>
              <p className="text-sm text-stone font-medium">Guest Capacity</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
              <p className="text-4xl font-display text-gold">2</p>
              <p className="text-sm text-stone font-medium">Bedrooms</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div key={item.label} className="text-center group cursor-default">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sand text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg text-charcoal mb-2">
                {item.label}
              </h3>
              <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
