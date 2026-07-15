"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl">&#x2728;</span>
          <span
            className={`font-display text-xl tracking-wide transition-colors duration-300 ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            Vacation Vibe Villa
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-charcoal" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-gold hover:bg-gold/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
          >
            Book Now
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 rounded transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 rounded transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 rounded transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-nav border-t border-gold/10">
          <nav className="flex flex-col items-center gap-4 py-6 px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium tracking-wide uppercase text-charcoal hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
