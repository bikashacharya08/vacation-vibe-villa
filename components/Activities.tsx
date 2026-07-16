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

export default function Activities() {
  return (
    <section id="activities" className="py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-gold font-semibold text-xs tracking-[0.25em] uppercase mb-4">
              Explore the Wilderness
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-[1.1] mb-6">
              Chitwan National Park <br className="hidden md:block" /> Activities & Itinerary
            </h2>
            <div className="w-16 h-px bg-gold mb-8 mx-auto" />
            <p className="max-w-2xl mx-auto text-stone text-lg font-light leading-relaxed">
              Established in 1973, Chitwan is Nepal&apos;s first National Park and a UNESCO World Heritage Site. 
              We can help arrange your entire itinerary so you can experience the best of Sauraha safely and ethically.
            </p>
          </div>
        </Reveal>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {activities.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="p-8 border border-charcoal/10 rounded-xl hover:shadow-xl transition-shadow bg-sand/30">
                <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-stone leading-relaxed font-light">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Suggested Itinerary */}
        <Reveal>
          <div className="bg-charcoal text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            
            <h3 className="font-display text-3xl md:text-4xl mb-8 relative z-10">
              Recommended 2-Night / 3-Day Itinerary
            </h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex gap-6">
                <div className="w-16 flex-shrink-0 text-gold font-display text-xl pt-1">Day 1</div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Arrival & Village Discovery</h4>
                  <p className="text-white/70 font-light leading-relaxed">
                    Arrive at Vacation Vibe Villa, refresh and settle in. In the late afternoon, take a guided Tharu village walk to experience authentic local culture, followed by a mesmerizing sunset view over the Rapti River while sipping on local tea.
                  </p>
                </div>
              </div>
              
              <div className="w-full h-px bg-white/10" />

              <div className="flex gap-6">
                <div className="w-16 flex-shrink-0 text-gold font-display text-xl pt-1">Day 2</div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Full Day Jungle Safari & Culture</h4>
                  <p className="text-white/70 font-light leading-relaxed">
                    Start your morning with a peaceful dugout canoe ride down the river, spotting crocodiles and exotic birds. After breakfast, embark on a thrilling Jeep Safari deep into Chitwan National Park to track rhinos, tigers, and sloth bears. In the evening, immerse yourself in a vibrant Tharu cultural dance performance.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-white/10" />

              <div className="flex gap-6">
                <div className="w-16 flex-shrink-0 text-gold font-display text-xl pt-1">Day 3</div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Morning Nature Walk & Departure</h4>
                  <p className="text-white/70 font-light leading-relaxed">
                    Experience an early morning guided jungle walk with an expert naturalist to witness the waking wilderness up close. Return to the villa for a hearty breakfast before preparing for your onward journey with unforgettable memories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
