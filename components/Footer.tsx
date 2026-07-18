import Image from "next/image";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Airbnb Superhost", href: "https://airbnb.com/h/vacationvibevilla", external: true },
];

const contactLinks = [
  { label: "06 Bacchauli Road, Ratnanagar 44204", href: "https://maps.app.goo.gl/3fD3dZQ4uVz7LxgR9" },
  { label: "Chitwan, Bagmati Province, Nepal", href: "https://maps.app.goo.gl/3fD3dZQ4uVz7LxgR9" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/70 px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Vacation Vibe Villa"
              width={200}
              height={100}
              className="w-40 sm:w-48 h-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
            <p className="text-sm leading-relaxed max-w-sm">
              Your home away from home in Sauraha, Chitwan — gateway to Chitwan
              National Park and authentic Nepali village life.
            </p>
          </div>

          <div>
            <p className="font-display text-white text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm hover:text-gold transition-colors duration-300 focus-visible:text-gold inline-flex items-center gap-2"
                  >
                    {link.external && (
                      <svg className="w-3.5 h-3.5 text-[#FF5A5F]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12.001 18.275c-1.353-1.697-2.23-3.076-2.63-4.138-.398-1.062-.478-1.94-.24-2.634.238-.694.72-1.086 1.446-1.176.726-.09 1.39.144 1.99.703.6.559.938 1.23 1.014 2.013.076.783-.11 1.533-.558 2.25-.45.717-1.104 1.47-1.962 2.258l-.06.055-.06-.055c-.858-.788-1.513-1.54-1.962-2.258-.448-.717-.634-1.467-.558-2.25.076-.783.414-1.454 1.014-2.013.6-.559 1.264-.793 1.99-.703.726.09 1.208.482 1.446 1.176.238.694.158 1.572-.24 2.634-.4 1.062-1.277 2.44-2.63 4.138z"/>
                      </svg>
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-white text-sm mb-4 uppercase tracking-wider">
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors duration-300 focus-visible:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>Book direct — best rates guaranteed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-center md:text-left">
            &copy; {year} Vacation Vibe Villa — Sauraha, Chitwan, Nepal.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#hero" className="hover:text-gold transition-colors duration-300">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
