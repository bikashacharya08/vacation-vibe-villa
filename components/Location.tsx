import Reveal from "./Reveal";

const attractions = [
  {
    name: "Chitwan National Park",
    distance: "5 min",
    desc: "A UNESCO World Heritage site — jungle safaris, rhinos, tigers, crocodiles, and 500+ bird species.",
  },
  {
    name: "Elephant Breeding Center",
    distance: "10 min",
    desc: "Visit the government elephant breeding center in Sauraha and learn about elephant conservation.",
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
    <section id="location" className="py-24 md:py-32 lg:py-36 px-6 bg-cream overflow-hidden pattern-dots">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <Reveal>
              <p className="text-gold font-medium text-sm tracking-[0.25em] uppercase mb-4">
                Explore Sauraha & Chitwan
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-charcoal leading-tight mb-6">
                Adventure, culture & nature
                <br />
                <span className="text-gold">right on your doorstep</span>
              </h2>
              <p className="text-stone text-base md:text-lg leading-relaxed mb-8">
                Vacation Vibe Villa is located in Sauraha — the main gateway to
                Chitwan National Park. From jungle safaris to cultural village
                tours, bird watching to trekking, everything is within easy reach.
                Tourist coaches stop right at our gate, and we can also arrange
                airport transfers from Bharatpur or Kathmandu.
              </p>
            </Reveal>

            <div className="space-y-3">
              {attractions.map((place, index) => (
                <Reveal key={place.name} delay={100 + index * 80}>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-charcoal/5 hover:border-gold/20 hover:shadow-md transition-all duration-300 group">
                    <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-display text-charcoal font-semibold text-base md:text-lg">
                          {place.name}
                        </h3>
                        <span className="text-gold text-sm font-medium flex-shrink-0">
                          {place.distance}
                        </span>
                      </div>
                      <p className="text-stone text-sm mt-1 leading-relaxed">{place.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={200} className="relative md:sticky md:top-32">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-charcoal/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.4499126519586!2d84.50255897445139!3d27.585195530870255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994ef041852b5df%3A0x33e027907a69152e!2sVacation%20Vibe%20Villa!5e1!3m2!1sen!2snp!4v1784183513535!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Vacation Vibe Villa Location"
              />
            </div>

            <a
              href="https://maps.app.goo.gl/3fD3dZQ4uVz7LxgR9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 min-h-[48px] w-full bg-charcoal hover:bg-gold text-white px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-500 rounded-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Open in Google Maps
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
