const images = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    alt: "Villa exterior at dusk",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2070&auto=format&fit=crop",
    alt: "Living room interior",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
    alt: "Kitchen and dining",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop",
    alt: "Bedroom suite",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    alt: "Bathroom",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop",
    alt: "Pool area",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
    alt: "Garden view",
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
            <span className="text-gold">your escape</span>
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
