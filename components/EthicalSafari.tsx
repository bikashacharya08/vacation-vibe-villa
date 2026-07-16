import Reveal from "./Reveal";

export default function EthicalSafari() {
  return (
    <section id="ethical-safari" className="py-24 md:py-32 px-6 bg-sand border-y border-charcoal/10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <Reveal className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border border-charcoal/10 flex items-center justify-center bg-cream shadow-xl">
              <div className="absolute inset-2 rounded-full border border-gold/30"></div>
              <svg className="w-24 h-24 md:w-32 md:h-32 text-charcoal relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </Reveal>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <Reveal>
              <p className="text-gold font-semibold text-xs tracking-[0.25em] uppercase mb-4">
                Our Commitment
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-[1.1] mb-6">
                Ethical Jungle <br className="hidden md:block" /> Safaris
              </h2>
              <div className="w-16 h-px bg-gold mb-8 mx-auto md:mx-0" />
              
              <div className="space-y-4 mb-8">
                <p className="text-stone text-[17px] md:text-lg font-light leading-relaxed">
                  We believe in protecting and respecting wildlife in Chitwan National Park. That is why we proudly focus on <strong>ethical safari experiences</strong>.
                </p>
                <p className="text-stone text-[17px] md:text-lg font-light leading-relaxed">
                  Experience the jungle as it was meant to be seen—through guided jeep safaris, serene canoe rides, and peaceful jungle walks. We do not support activities that cause harm or distress to animals, ensuring a respectful and sustainable wildlife encounter.
                </p>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}
