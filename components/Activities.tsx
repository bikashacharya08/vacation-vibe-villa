import Reveal from "./Reveal";

const activities = [
  {
    title: "Jeep Safari",
    desc: "The safest and most popular way to explore deep into Chitwan National Park. Half-day and full-day options are available to spot the endangered one-horned rhinoceros, Bengal tigers, sloth bears, and deer.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8M5 19h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        <circle cx="7" cy="19" r="2" fill="currentColor" />
        <circle cx="17" cy="19" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Jungle Walk",
    desc: "Experience the thrill of walking through the jungle with experienced local guides. It is the best way to observe the park's flora, smaller wildlife, and get a true sense of the wilderness.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Canoeing on Rapti River",
    desc: "A peaceful dugout canoe ride along the Rapti River. Enjoy the serene environment while spotting the rare Gharial and Mugger crocodiles basking on the riverbanks, along with diverse aquatic birdlife.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c0 2 2 3 4 3s4-1 4-3 2-3 4-3 4 1 4 3v4H4v-4z" />
      </svg>
    ),
  },
  {
    title: "Tharu Cultural Tour",
    desc: "Discover the rich heritage of the indigenous Tharu people. Visit a traditional village and enjoy an evening of mesmerizing stick dances and cultural performances.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const itinerary = [
  {
    day: "Day 1",
    title: "Arrival, Chitwan & Sunset by the Rapti",
    desc: "Arrive at Vacation Vibe Villa and settle into your home in Sauraha. After a relaxed afternoon, we will gather for a warm meet-up session over your favorite drink, sharing stories about Chitwan, Nepal, and the incredible wildlife that lives just beyond our doorstep. As the evening unfolds, we head to the Rapti River to watch the sun melt into the jungle, with the sounds of animals drifting across from Chitwan National Park.",
  },
  {
    day: "Day 2",
    title: "Jeep Safari & Evening Canoe",
    desc: "Start the day with a thrilling Jeep Safari deep into Chitwan National Park, searching for one-horned rhinos, Bengal tigers, sloth bears, and wild elephants. After a relaxed break at the villa, head out again in the evening for a peaceful canoe ride on the Rapti River, watching crocodiles and birds along the banks as the jungle settles into dusk.",
  },
  {
    day: "Day 3",
    title: "Departure Morning",
    desc: "On your last morning, we keep things relaxed. There is no time for activities because tourist buses typically stop right in front of the house at 7:30 and 8:00 AM, making it easy to begin your onward journey. Enjoy a quick breakfast, say goodbye, and take your Chitwan memories with you.",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-16 md:mb-20">
            <p className="text-gold font-semibold text-xs tracking-[0.25em] uppercase mb-4">
              Explore the Wilderness
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal leading-[1.1] mb-6">
              Chitwan National Park Activities & Itinerary
            </h2>
            <div className="w-16 h-1 bg-gold mb-8" />
            <p className="max-w-2xl text-stone text-base md:text-lg font-light leading-relaxed">
              Established in 1973, Chitwan is Nepal&apos;s first National Park and a UNESCO World Heritage Site.
              We can help arrange your entire itinerary so you can experience the best of Sauraha safely and ethically.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-28">
          {activities.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="p-6 md:p-8 bg-cream border-l-4 border-gold hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group h-full">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="font-display text-xl md:text-2xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-stone leading-relaxed font-light text-sm md:text-base">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-charcoal text-white rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-4xl mb-4">
                Recommended 2-Night / 3-Day Itinerary
              </h3>
              <p className="text-white/80 font-light leading-relaxed mb-10 md:mb-12 text-sm md:text-base">
                This is a quick yet well-paced itinerary packed with the best of Chitwan — designed to give you memories that stay with you long after you leave. If you can stay longer, we have plenty of other activities and slower-paced plans to match your mood.
              </p>

              <div className="relative">
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gold/30" />
                <div className="space-y-8 md:space-y-10">
                  {itinerary.map((day, index) => (
                    <div key={day.day} className="relative pl-16 md:pl-20">
                      <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gold text-charcoal flex items-center justify-center font-display font-bold text-sm md:text-base shadow-lg">
                        {day.day.replace("Day ", "D")}
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6 hover:bg-white/10 transition-colors duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                          <span className="text-gold font-semibold text-xs tracking-[0.2em] uppercase">{day.day}</span>
                          <h4 className="text-lg md:text-xl font-semibold text-white">{day.title}</h4>
                        </div>
                        <p className="text-white/70 font-light leading-relaxed text-sm md:text-base">{day.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
