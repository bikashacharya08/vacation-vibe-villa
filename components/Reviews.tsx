import { StarIcon } from "./Icons";
import Reveal from "./Reveal";

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
    <div className="flex gap-1 flex-shrink-0" aria-label={`Rating: ${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <StarIcon key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold flex-shrink-0" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-32 px-4 sm:px-6 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto min-w-0">
        <Reveal>
          <div className="text-center mb-10 md:mb-20">
            <p className="text-gold font-medium text-sm tracking-[0.25em] uppercase mb-4">
              Guest Reviews
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-charcoal leading-tight mb-4 break-words">
              Loved by travelers
              <br />
              <span className="text-gold">from around the world</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 min-w-0">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 100} className="min-w-0">
              <div
                className={`p-4 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-w-0 ${
                  index % 2 === 0
                    ? "bg-cream border-sand hover:border-gold/20"
                    : "bg-white border-charcoal/10 hover:border-gold/20"
                }`}
              >
                <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4 min-w-0">
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold text-xs md:text-sm flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5 overflow-hidden">
                    <p className="font-display text-charcoal font-semibold text-sm md:text-base truncate">
                      {review.name}
                    </p>
                    <p className="text-stone text-xs md:text-sm truncate">
                      {review.location}{!review.noLocation && review.date ? " · " : ""}{review.date}
                    </p>
                  </div>
                </div>
                <div className="mb-3 md:mb-4">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-stone leading-relaxed text-sm md:text-base break-words min-w-0">&ldquo;{review.text}&rdquo;</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="text-center mt-10 md:mt-16">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-8 px-4 md:px-8 py-3 md:py-5 rounded-full bg-sand border border-gold/10 shadow-sm">
              <div className="text-center">
                <p className="text-lg md:text-3xl font-display text-gold">4.86</p>
                <p className="text-xs text-stone">Average Rating</p>
              </div>
              <div className="w-px h-8 md:h-10 bg-gold/20" />
              <div className="text-center">
                <p className="text-lg md:text-3xl font-display text-gold">23</p>
                <p className="text-xs text-stone">Reviews</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
