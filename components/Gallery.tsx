"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const images = [
  { src: "/images/gallery-1.jpg", alt: "One-horned rhino in Chitwan" },
  { src: "/images/gallery-2.jpg", alt: "Bengal tiger in the wild" },
  { src: "/images/gallery-3.jpg", alt: "Bengal tiger portrait" },
  { src: "/images/gallery-4.jpg", alt: "Two one-horned rhinos" },
  { src: "/images/canoe.JPG", alt: "Peaceful canoe ride on the Rapti river" },
  { src: "/images/hangingbridge and sunset.JPG", alt: "Sunset over the hanging bridge" },
  { src: "/images/bishajar.jpg", alt: "Kingfisher lake canoe tour" },
  { src: "/images/Giants/elephant-2.jpg", alt: "Our Little guest wants chain-free elephants" },
  { src: "/images/Giants/elephant-1.jpg", alt: "Our Little guest observing elephant silently" },
  { src: "/images/aroundsauraha/IMG_3900.JPG", alt: "Sunset over the Chitwan jungle" },
  { src: "/images/aroundsauraha/IMG_3910.JPG", alt: "Scenic view around Sauraha" },
  { src: "/images/aroundsauraha/IMG_3972.JPG", alt: "Mountain View from Hill of Chitwan" },
  { src: "/images/aroundsauraha/IMG_4041.JPG", alt: "Beautiful Sunset" },
  { src: "/images/groupinsidejungle.JPG", alt: "Guests exploring the jungle" },
  { src: "/images/animal-of-cnp/IMG_5485.JPG", alt: "Rhinos by the river" },
  { src: "/images/animal-of-cnp/IMG_5486.JPG", alt: "Gharial Crocodile" },
  { src: "/images/animal-of-cnp/IMG_5487.JPG", alt: "A pair of Ruddy Shelduck" },
  { src: "/images/animal-of-cnp/IMG_5488.JPG", alt: "A kite" },
  { src: "/images/animal-of-cnp/IMG_5489.JPG", alt: "Spotted Langur in the wild" },
  { src: "/images/animal-of-cnp/IMG_5490.JPG", alt: "Red Junglefowl" },
  { src: "/images/animal-of-cnp/IMG_5491.JPG", alt: "Monitor lizard" },
  { src: "/images/animal-of-cnp/IMG_5492.JPG", alt: "Openbill stork" },
  { src: "/images/animal-of-cnp/IMG_5493.JPG", alt: "Cotton Bugs" },
  { src: "/images/animal-of-cnp/IMG_5494.JPG", alt: "Goosanders" },
  { src: "/images/animal-of-cnp/IMG_5495.JPG", alt: "A lonely Bird" },
  { src: "/images/animal-of-cnp/IMG_5496.JPG", alt: "A Flying Heron" },
  { src: "/images/animal-of-cnp/IMG_5497.JPG", alt: "Bird watching on the riverbank" },
  { src: "/images/animal-of-cnp/IMG_5498.JPG", alt: "Red-naped Ibis" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const getSlideWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return 0;
    return (track.children[0] as HTMLElement).offsetWidth;
  }, []);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slideWidth = getSlideWidth();
    if (!slideWidth) return;
    const safeIndex = Math.max(0, Math.min(index, images.length - 1));
    track.scrollTo({ left: slideWidth * safeIndex, behavior: "smooth" });
    setCurrentIndex(safeIndex);
  }, [getSlideWidth]);

  const handlePrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  }, [currentIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(newIndex);
  }, [currentIndex, scrollToIndex]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const slideWidth = getSlideWidth();
      if (!slideWidth) return;
      const newIndex = Math.round(track.scrollLeft / slideWidth);
      setCurrentIndex(Math.max(0, Math.min(newIndex, images.length - 1)));
    };

    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, [getSlideWidth]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <section
      id="gallery"
      className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-cream overflow-hidden pattern-leaves"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-8 md:mb-12">
            <div>
              <p className="text-charcoal font-semibold text-xs tracking-[0.25em] uppercase mb-3">
                A Glimpse
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-charcoal leading-[1.1]">
                The <span className="italic text-gold">Experience</span>
              </h2>
            </div>
            <p className="md:max-w-md text-stone text-sm md:text-base font-light leading-relaxed md:text-right">
              Moments from the jungle, the wildlife, and the adventures that make Chitwan unforgettable.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative group">
            <div
              ref={trackRef}
              className="flex -mx-2 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 md:pb-6"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              aria-roledescription="carousel"
              aria-label="Photo gallery"
            >
              {images.map((img, index) => (
                <div
                  key={img.src}
                  className="w-[85%] sm:w-1/2 lg:w-1/3 flex-shrink-0 snap-start px-2"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${images.length}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden shadow-lg bg-stone/5 group/card">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-xs font-semibold tracking-[0.1em] uppercase drop-shadow-md">
                        {img.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-charcoal rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-charcoal rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </Reveal>

        <div className="flex justify-center items-center gap-2 mt-4 md:mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gold w-6"
                  : "bg-charcoal/20 hover:bg-charcoal/40 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
