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
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 md:py-48 px-6 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-24">
            <p className="text-charcoal font-semibold text-xs tracking-[0.25em] uppercase mb-6">
              A Glimpse
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.1]">
              The
              <br />
              <span className="italic text-gold">Experience</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-10 auto-rows-[250px] md:auto-rows-[350px]">
          {images.map((img, index) => (
            <Reveal
              key={img.alt}
              delay={index * 50}
              className={`${img.className} group relative overflow-hidden bg-stone/5`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                <p className="text-xs font-semibold tracking-[0.1em] uppercase">{img.alt}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
