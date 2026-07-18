import Reveal from "./Reveal";

const posts = [
  {
    title: "Top 10 Activities in Chitwan and Sauraha",
    category: "Activities",
    desc: "From jeep safaris to canoe rides, jungle walks, and Tharu cultural dances — a complete guide to things to do.",
    url: "https://infocnp.vercel.app/posts/top-activities.html",
  },
  {
    title: "Wildlife Safari: What Animals Can You See?",
    category: "Wildlife",
    desc: "A guide to rhinos, tigers, elephants, gharials, and over 500 bird species in Chitwan National Park.",
    url: "https://infocnp.vercel.app/posts/wildlife-safari.html",
  },
  {
    title: "Best Time to Visit Chitwan and Sauraha",
    category: "Planning",
    desc: "Season-by-season guide to weather, wildlife sightings, and crowd levels — so you can plan the perfect trip.",
    url: "https://infocnp.vercel.app/posts/best-time-to-visit.html",
  },
];

export default function TravelGuides() {
  return (
    <section id="guides" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-10 md:mb-16">
            <p className="text-gold font-semibold text-xs tracking-[0.25em] uppercase mb-4">
              Plan Your Trip
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal leading-tight mb-4">
              Travel Guides &amp; Blog
            </h2>
            <p className="text-stone text-base md:text-lg font-light max-w-2xl mx-auto">
              Tips, guides, and stories to help you make the most of your visit to Chitwan National Park and Sauraha.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 100}>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-cream border border-sand hover:border-gold/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full"
              >
                <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-gold bg-gold/10 px-3 py-1.5 rounded-full mb-4">
                  {post.category}
                </span>
                <h3 className="font-display text-lg md:text-xl text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-stone text-sm md:text-base font-light leading-relaxed">
                  {post.desc}
                </p>
                <span className="inline-flex items-center gap-2 mt-5 text-xs font-semibold tracking-[0.2em] uppercase text-gold group-hover:gap-3 transition-all duration-300">
                  Read More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="text-center mt-10 md:mt-16">
            <a
              href="https://infocnp.vercel.app/blog.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-gold text-white px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-500 min-h-[48px]"
            >
              Explore All Guides
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
