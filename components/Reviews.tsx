const reviews = [
  {
    name: "Sarah & Michael",
    location: "New York, USA",
    avatar: "SM",
    rating: 5,
    text: "Absolutely loved our stay! The villa was clean, comfortable, and perfectly located for exploring Chitwan National Park. The balcony view of the farm and pond at sunset was magical. Our hosts went above and beyond to make us feel welcome.",
  },
  {
    name: "Priya & Arjun",
    location: "Mumbai, India",
    avatar: "PA",
    rating: 5,
    text: "The perfect base for our Chitwan adventure. The kitchen was well-equipped for self-catering, the AC was a blessing, and having the tourist bus stop right at the gate made everything so easy. We also loved walking around the village.",
  },
  {
    name: "James & Emma",
    location: "London, UK",
    avatar: "JE",
    rating: 5,
    text: "An authentic Nepali experience without sacrificing comfort. Fast WiFi, hot water, comfy beds — everything worked perfectly. The host arranged our jungle safari and airport transfer, which took all the stress out of planning.",
  },
  {
    name: "Carlos & Maria",
    location: "Barcelona, Spain",
    avatar: "CM",
    rating: 5,
    text: "Staying at Vacation Vibe Villa was the highlight of our Nepal trip. Waking up to birdsong, walking through the farm, and sitting on the balcony with a book — pure bliss. We also did a day trek that the host organized. Unforgettable.",
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
            Loved by travelers
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
          <a
            href="https://airbnb.com/h/vacationvibevilla"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-sand hover:bg-sand/80 transition-colors"
          >
            <div className="text-center">
              <p className="text-2xl font-display text-gold">4.9</p>
              <p className="text-xs text-stone">Average Rating</p>
            </div>
            <div className="w-px h-8 bg-gold/20" />
            <div className="text-center">
              <p className="text-2xl font-display text-gold">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <p className="text-xs text-stone">On Airbnb</p>
            </div>
            <div className="w-px h-8 bg-gold/20" />
            <div className="text-center">
              <svg className="w-5 h-5 text-gold mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.07 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <p className="text-xs text-stone">Read reviews</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
