const attractions = [
  {
    name: "Sunset Beach",
    distance: "0.8 mi",
    desc: "Pristine white sands and crystal-clear waters, perfect for morning walks and evening sunsets.",
  },
  {
    name: "Mountain Trails",
    distance: "2.3 mi",
    desc: "Scenic hiking and biking trails through lush forests with panoramic viewpoints.",
  },
  {
    name: "Downtown Market",
    distance: "1.5 mi",
    desc: "Local artisan market featuring fresh produce, handmade crafts, and live music.",
  },
  {
    name: "Golf & Country Club",
    distance: "3.1 mi",
    desc: "Championship 18-hole golf course with clubhouse, spa, and fine dining.",
  },
  {
    name: "Wine Valley",
    distance: "5.0 mi",
    desc: "Award-winning vineyards offering tours, tastings, and gourmet picnic experiences.",
  },
  {
    name: "Marina Bay",
    distance: "4.2 mi",
    desc: "Waterfront dining, yacht charters, fishing excursions, and sunset cruises.",
  },
];

export default function Location() {
  return (
    <section id="location" className="py-28 md:py-36 px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gold font-medium text-sm tracking-[0.25em] uppercase mb-4">
              Explore Nearby
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-6">
              Discover what&rsquo;s
              <br />
              <span className="text-gold">around the corner</span>
            </h2>
            <p className="text-stone text-lg leading-relaxed mb-8">
          Strategically located near the best attractions, our villa offers the
          perfect blend of secluded tranquility and convenient access to
          everything the region has to offer.
            </p>

            <div className="space-y-4">
              {attractions.map((place) => (
                <div
                  key={place.name}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-charcoal font-semibold">
                        {place.name}
                      </h3>
                      <span className="text-gold text-sm font-medium">
                        {place.distance}
                      </span>
                    </div>
                    <p className="text-stone text-sm mt-1">{place.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative md:sticky md:top-32">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.966309591936!2d-73.9854286845937!3d40.74856997932781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30b4b8b%3A0x7b5b5b5b5b5b5b5b!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Villa Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
