const images = [
  {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
    alt: "Traditional Nepali house exterior",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=2070&auto=format&fit=crop",
    alt: "Cozy living room interior",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Chitwan jungle safari",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1536246021373-44f606b6a6b5?q=80&w=2070&auto=format&fit=crop",
    alt: "Nepali village life",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop",
    alt: "Elephant safari in Chitwan",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=2069&auto=format&fit=crop",
    alt: "Nepal mountain views",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2070&auto=format&fit=crop",
    alt: "Village sunset",
    className: "md:col-span-3 md:row-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-36 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-medium text-sm tracking-[0.25em] uppercase mb-4">
            Photo Gallery
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight mb-4">
            A glimpse into
            <br />
            <span className="text-gold">your Nepal escape</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((img) => (
            <div
              key={img.alt}
              className={`${img.className} group relative overflow-hidden rounded-2xl cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <p className="text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
