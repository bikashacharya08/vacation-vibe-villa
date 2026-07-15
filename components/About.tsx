const highlights = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    label: "Sunrise Views",
    desc: "Wake up to golden mornings overlooking untouched landscapes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    label: "Prime Location",
    desc: "Nestled in the most sought-after neighborhood, close to everything.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    label: "Thoughtful Comfort",
    desc: "Every detail curated for your relaxation and joy.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    label: "Premium Amenities",
    desc: "From infinity pool to private chef service, we have it all.",
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
              A sanctuary where
              <br />
              <span className="text-gold">nature meets elegance</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold/40 mb-6" />
            <p className="text-stone text-lg leading-relaxed mb-4">
              Nestled among rolling hills and whispering trees, Vacation Vibe
              Villa is more than just a stay&mdash;it&rsquo;s an experience. Every
              corner of this handcrafted retreat tells a story of thoughtful
              design and uncompromising comfort.
            </p>
            <p className="text-stone text-lg leading-relaxed">
              Whether you&rsquo;re seeking a romantic escape, a family adventure,
              or a solo reset, our villa offers the perfect backdrop for your
              most treasured memories.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Villa interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
              <p className="text-4xl font-display text-gold">8</p>
              <p className="text-sm text-stone font-medium">Guest Capacity</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 hidden md:block">
              <p className="text-4xl font-display text-gold">5</p>
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
