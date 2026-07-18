"use client";

import { useState, useEffect } from "react";

const navLinksLeft = [
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
];

const navLinksRight = [
  { label: "Safari", href: "#ethical-safari" },
  { label: "Guides", href: "#guides" },
  { label: "Location", href: "#location" },
];

const phoneNumber = "+977-9865345753";
const whatsappLink =
  "https://wa.me/9779865345753?text=Namaste!%20I'm%20interested%20in%20booking%20Vacation%20Vibe%20Villa.%20Is%20this%20place%20available%20for%20my%20dates%3F";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="bg-charcoal text-white/90 text-xs md:text-sm hidden lg:block relative z-[60]">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="https://maps.app.goo.gl/3fD3dZQ4uVz7LxgR9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold transition-colors focus-visible:outline-offset-2"
              aria-label="View our location on Google Maps"
            >
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              06 Bacchauli Road, Sauraha, Chitwan
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold transition-colors focus-visible:outline-offset-2"
              aria-label="Contact us on WhatsApp"
            >
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phoneNumber}
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.15em] uppercase">
            <span>Direct Bookings Only</span>
          </div>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? "top-0 bg-white shadow-sm py-3" : "top-0 lg:top-[38px] bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 relative">
          <nav className="hidden lg:flex items-center gap-8 flex-1" aria-label="Main navigation">
            {navLinksLeft.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`min-h-[44px] flex items-center text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex-shrink-0 flex justify-center flex-1 lg:flex-none">
            <a
              href="#hero"
              className="group flex items-center focus-visible:outline-offset-4"
              aria-label="Vacation Vibe Villa - Home"
            >
              <span className={`font-display text-xl sm:text-2xl lg:text-3xl tracking-[0.15em] transition-all duration-500 ${
                scrolled ? "text-charcoal" : "text-white"
              }`}>
                VACATION VIBE
              </span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end" aria-label="Secondary navigation">
            {navLinksRight.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`min-h-[44px] flex items-center text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className={`min-h-[44px] flex items-center px-6 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 ${
                scrolled
                  ? "bg-charcoal text-white hover:bg-gold"
                  : "bg-white text-charcoal hover:bg-gold hover:text-white"
              }`}
            >
              Reserve
            </a>
          </nav>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 absolute right-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] items-center justify-center z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden absolute left-0 right-0 top-full bg-white shadow-xl transition-all duration-500 overflow-hidden overflow-y-auto z-40 ${
            menuOpen ? "max-h-[calc(100vh-80px)] py-8 border-t border-gray-100" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-6 px-6" aria-label="Mobile navigation">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="min-h-[44px] flex items-center text-sm font-semibold tracking-[0.2em] uppercase text-charcoal hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-4 min-h-[48px] flex items-center bg-charcoal hover:bg-gold text-white px-10 py-3 text-sm font-semibold tracking-[0.2em] uppercase transition-all"
            >
              Reserve
            </a>
            <div className="w-full h-px bg-charcoal/10 my-2" />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="min-h-[44px] flex items-center gap-2 text-sm font-semibold tracking-wide text-charcoal hover:text-gold transition-colors"
              aria-label="Chat with us on WhatsApp"
            >
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp: {phoneNumber}
            </a>
            <a
              href={`tel:${phoneNumber.replace(/-/g, "")}`}
              onClick={() => setMenuOpen(false)}
              className="min-h-[44px] flex items-center gap-2 text-sm font-semibold tracking-wide text-charcoal hover:text-gold transition-colors"
              aria-label="Call us"
            >
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: {phoneNumber}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
