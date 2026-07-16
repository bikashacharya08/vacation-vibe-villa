const images = [
  {
    src: "/images/gallery-1.jpg",
    alt: "One-horned rhino in Chitwan",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Bengal tiger in the wild",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Bengal tiger close-up",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Two one-horned rhinos",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Tiger resting in jungle",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/images/Giants/elephant-1.jpg",
    alt: "Asian elephant in nature",
    className: "md:col-span-3 md:row-span-2",
  },
  {
    src: "/images/gallery-7.jpg",
    alt: "Chitwan jungle sunset",
    className: "md:col-span-3 md:row-span-2",
  },
];

import Image from "next/image";

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
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
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
