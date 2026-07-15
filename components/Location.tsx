const attractions = [
  {
    name: "Chitwan National Park",
    distance: "5 min",
    desc: "A UNESCO World Heritage site — jungle safaris, rhinos, tigers, crocodiles, and 500+ bird species.",
  },
  {
    name: "Elephant Safari & Breeding Center",
    distance: "10 min",
    desc: "Experience an elephant-back safari and visit the government elephant breeding center in Sauraha.",
  },
  {
    name: "Rapti River & Canoeing",
    distance: "10 min walk",
    desc: "Peaceful canoe rides along the Rapti River with opportunities to spot gharial crocodiles and water birds.",
  },
  {
    name: "Tharu Cultural Village Tour",
    distance: "5 min",
    desc: "Visit local Tharu villages to experience traditional dance, cuisine, and daily life of Nepal's indigenous people.",
  },
  {
    name: "Bird Watching Tours",
    distance: "5 min",
    desc: "Over 500 species of birds recorded in the area. Guided birding walks available year-round.",
  },
  {
    name: "Trekking & Hiking",
    distance: "Various",
    desc: "Day hikes through the Chitwan hills or multi-day treks into the surrounding countryside. Ask us for packages.",
  },
];

export default function Location() {
  return (
    <section id="location" className="py-28 md:py-36 px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gold font-medium text-sm tracking-[0.25em] uppercase mb-4">
              Explore Sauraha &amp; Chitwan
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-6">
              Adventure, culture &amp; nature
              <br />
              <span className="text-gold">right on your doorstep</span>
            </h2>
            <p className="text-stone text-lg leading-relaxed mb-8">
              Vacation Vibe Villa is located in Sauraha — the main gateway to
              Chitwan National Park. From jungle safaris to cultural village
              tours, bird watching to trekking, everything is within easy reach.
              Tourist coaches stop right at our gate, and we can also arrange
              airport transfers from Bharatpur or Kathmandu.
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
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d23207.33383454832!2d85.3377024!3d27.755813800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3994ef041852b5df%3A0x33e027907a69152e!2sVacation%20Vibe%20Villa%2C%2006%20Bacchauli%20Road%2C%20Ratnanagar%2044204!3m2!1d27.5851908!2d84.5051338!5e1!3m2!1sen!2snp!4v1784145976518!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vacation Vibe Villa Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
