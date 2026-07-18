import Image from "next/image";
import Reveal from "./Reveal";

export default function EthicalSafari() {
  return (
    <section id="ethical-safari" className="py-24 md:py-32 px-6 bg-sand border-y border-charcoal/10 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <Reveal className="w-full lg:w-1/2">
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="One-horned rhino in Chitwan National Park"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-xl border border-gold/10">
                <svg className="w-12 h-12 md:w-16 md:h-16 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </Reveal>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <Reveal>
              <p className="text-gold font-semibold text-xs tracking-[0.25em] uppercase mb-4">
                Our Commitment
              </p>
              <h2 className="font-display text-3xl md:text-5xl text-charcoal leading-[1.1] mb-6">
                Ethical Jungle Safaris
              </h2>
              <div className="w-16 h-1 bg-gold mb-8 mx-auto lg:mx-0" />

              <div className="space-y-5 mb-8">
                <p className="text-stone text-base md:text-lg font-light leading-relaxed">
                  We believe in protecting and respecting wildlife in Chitwan National Park. That is why we proudly focus on <strong className="text-charcoal">ethical safari experiences</strong>.
                </p>
                <p className="text-stone text-base md:text-lg font-light leading-relaxed">
                  Experience the jungle as it was meant to be seen—through guided jeep safaris, serene canoe rides, and peaceful jungle walks. We do not support activities that cause harm or distress to animals, ensuring a respectful and sustainable wildlife encounter.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {[
                  { value: "No", label: "Animal Rides" },
                  { value: "100%", label: "Ethical" },
                  { value: "Local", label: "Guides" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white p-4 md:p-5 border border-charcoal/5 shadow-sm">
                    <p className="font-display text-2xl md:text-3xl text-gold mb-1">{stat.value}</p>
                    <p className="text-charcoal text-xs md:text-sm font-semibold tracking-wider uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
