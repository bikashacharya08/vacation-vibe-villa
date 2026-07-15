const reviews = [
  {
    name: "Krishna",
    location: "India",
    avatar: "Kr",
    rating: 5,
    date: "June 2026",
    text: "It is a very nice experience. We enjoyed their quick response. However as we were there during second fortnight of June, the weather in Sauraha was unbearable, further complicated by power fluctuations & breakdowns. Bikki was there to receive us and helped us in leaving Sauraha by Bus. His father was also smiling and polite.",
  },
  {
    name: "Arif",
    location: "Kolkata, India",
    avatar: "Ar",
    rating: 5,
    date: "April 2026",
    text: "bikki is nice boy, always try to help u, great and peace place, rooms are neat and clean.. overall like, it is my home, and bikki father mother and sister also nice and friendly.",
  },
  {
    name: "David",
    location: "Hamburg, Germany",
    avatar: "Da",
    rating: 5,
    date: "April 2026",
    text: "it was a pleasure to meet this amazing Host and his family really enjoyed a lot discovering the area and the Safari was a big + and the nights and days with his lovely family. Planning to come soon back to attend Mr Bikki's marriage. His father mother and sister was so welcoming. Come as Guest leave as Family member. Big Thanks to them for everything they arranged for me. Also the home cooked food was so tasty. Miss the family a lot. Best stay in Saurah and entire Nepal.",
  },
  {
    name: "Anita",
    location: "Manston, United Kingdom",
    avatar: "An",
    rating: 5,
    date: "March 2026",
    text: "Wonderful place, great location to stay. Biki was so helpful and friendly always there if you needed anything! His family were lovely too. We so enjoyed our stay, look forward to returning one day.",
  },
  {
    name: "Di",
    location: "",
    avatar: "Di",
    noLocation: true,
    rating: 5,
    date: "February 2026",
    text: "The host was very nice, helped with the luggage, took us to the town, helped with the safari booking, it was a very pleasant holiday, by the way, Bikki's photography skills were also great! There is someone who can take pictures of him.",
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
                  <p className="text-stone text-sm">
                    {review.location}{!review.noLocation && review.date ? " · " : ""}{review.date}
                  </p>
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
              <p className="text-2xl font-display text-gold">4.86</p>
              <p className="text-xs text-stone">Average Rating</p>
            </div>
            <div className="w-px h-8 bg-gold/20" />
            <div className="text-center">
              <p className="text-2xl font-display text-gold">23</p>
              <p className="text-xs text-stone">Reviews</p>
            </div>
            <div className="w-px h-8 bg-gold/20" />
            <div className="text-center">
              <p className="text-sm font-semibold text-gold">Superhost</p>
              <p className="text-xs text-stone">Airbnb</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
