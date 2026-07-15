const reviews = [
  {
    name: "Sarah & Michael",
    location: "New York, USA",
    avatar: "SM",
    rating: 5,
    text: "Absolutely breathtaking. The villa exceeded every expectation. The sunrise views from the master bedroom were worth every penny. We're already planning our return.",
  },
  {
    name: "Priya & Arjun",
    location: "Mumbai, India",
    avatar: "PA",
    rating: 5,
    text: "The perfect family getaway. Our kids loved the pool and the garden. The concierge arranged a wonderful local cooking class that we'll never forget.",
  },
  {
    name: "James & Emma",
    location: "London, UK",
    avatar: "JE",
    rating: 5,
    text: "Impeccable attention to detail. From the welcome hamper to the daily housekeeping, everything was flawless. The most relaxing vacation we've ever had.",
  },
  {
    name: "Carlos & Maria",
    location: "Barcelona, Spain",
    avatar: "CM",
    rating: 5,
    text: "We celebrated our anniversary here and it was magical. The private terrace dinner under the stars was something straight out of a dream. Thank you!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 md:py-36 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-sm tracking-[0.25em] uppercase mb-4">
            Guest Reviews
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-4">
            Loved by guests
            <br />
            <span className="text-gold">from around the world</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="p-8 rounded-2xl bg-cream border border-sand hover:border-gold/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-display text-charcoal font-semibold">
                    {review.name}
                  </p>
                  <p className="text-stone text-sm">{review.location}</p>
                </div>
                <div className="ml-auto">
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <p className="text-stone leading-relaxed">&ldquo;{review.text}&rdquo;</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-sand">
            <div className="text-center">
              <p className="text-2xl font-display text-gold">4.9</p>
              <p className="text-xs text-stone">Average Rating</p>
            </div>
            <div className="w-px h-8 bg-gold/20" />
            <div className="text-center">
              <p className="text-2xl font-display text-gold">50+</p>
              <p className="text-xs text-stone">5-Star Reviews</p>
            </div>
            <div className="w-px h-8 bg-gold/20" />
            <div className="text-center">
              <p className="text-2xl font-display text-gold">98%</p>
              <p className="text-xs text-stone">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
