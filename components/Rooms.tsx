import Image from "next/image";
import Reveal from "./Reveal";

const rooms = [
  {
    src: "/images/room-master.png",
    alt: "Master Bedroom (AC)",
    title: "Master Bedroom (AC)",
    desc: "A luxurious space with a king-size bed, air conditioning, warm lighting, and a modern aesthetic, perfect for relaxing after a long day in the jungle.",
  },
  {
    src: "/images/room-guest.png",
    alt: "Guest Room (Fan)",
    title: "Guest Room (Fan)",
    desc: "Cozy and premium guest bedroom equipped with a cooling fan, elegant wooden furniture, and soft lighting for a comfortable stay.",
  },
  {
    src: "/images/balcony-view.png",
    alt: "Balcony View",
    title: "Private Balcony",
    desc: "Step outside to your private balcony overlooking the lush greenery, an ideal spot for your morning coffee or golden sunsets.",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-32 md:py-48 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-24">
            <p className="text-charcoal font-semibold text-xs tracking-[0.25em] uppercase mb-6">
              Comfort & Elegance
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-[1.1]">
              The
              <br />
              <span className="italic text-gold">Accommodations</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {rooms.map((room, index) => (
            <Reveal
              key={room.title}
              delay={index * 200}
              className="group flex flex-col"
            >
              <div className="relative h-80 md:h-96 w-full overflow-hidden mb-8 border border-charcoal/5 shadow-xl rounded-sm">
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-2xl text-charcoal mb-4">
                {room.title}
              </h3>
              <p className="text-stone font-light leading-relaxed">
                {room.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
