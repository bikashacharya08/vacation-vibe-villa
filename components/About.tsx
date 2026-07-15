const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    label: "Prime Location",
    desc: "5 minutes from Chitwan National Park in the heart of Sauraha.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    label: "Golden Sunsets",
    desc: "Unforgettable evening views from your private balcony.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    label: "Farm & Nature",
    desc: "Experience village life with our working farm and fish pond.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    label: "Easy Access",
    desc: "Tourist coaches stop right at our gate. Airport transfers available.",
  },
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
              — your gateway to authentic Nepali village life. With a fully
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
              buses stop right at our gate — and we can arrange airport pickups
              too.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop"
                alt="Traditional Nepali home"
                className="w-full h-full object-cover"
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
            <div
              key={item.label}
              className="text-center group cursor-default"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sand text-gold mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                {item.icon}
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
