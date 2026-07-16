const amenities = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: "Fully Equipped Kitchen",
    desc: "Cook your own meals with modern appliances, cookware, and dining essentials.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "High-Speed WiFi",
    desc: "Stay connected with reliable fiber internet — perfect for remote work and streaming.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Air Conditioning",
    desc: "Stay cool in Nepal's warmer months with AC units in every bedroom.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "Hot Water 24/7",
    desc: "Enjoy reliable hot water for refreshing showers any time of day.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Airport Transfers",
    desc: "Arrange pickup from Bharatpur or Kathmandu — just let us know your arrival.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Private Balcony",
    desc: "Your own outdoor space with views of the farm, pond, and golden sunsets.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Free Parking",
    desc: "Secure on-premises parking for cars, bikes, and tourist vehicles.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Farm & Fish Pond",
    desc: "Explore our little farm and pond — a slice of authentic village life on your doorstep.",
  },
];

import Reveal from "./Reveal";

export default function Amenities() {
  return (
    <section id="amenities" className="py-32 md:py-48 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-24">
          <div className="md:w-1/3">
            <Reveal>
              <p className="text-charcoal font-semibold text-xs tracking-[0.25em] uppercase mb-6">
                Amenities & Services
              </p>
              <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.1] mb-6">
                Redefining
                <br />
                <span className="italic text-gold">Comfort</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:w-2/3 flex flex-col justify-center">
            <Reveal delay={200}>
              <p className="text-stone text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Experience the perfect blend of rustic Nepali charm and modern convenience. 
                Our villa is thoughtfully equipped to ensure an effortless, relaxing, and memorable stay.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
          {amenities.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="group border-t border-charcoal/10 pt-8 hover:border-gold transition-colors duration-500">
                <div className="text-charcoal group-hover:text-gold mb-6 transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl md:text-2xl text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="text-stone text-sm md:text-base font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
