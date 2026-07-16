"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-charcoal text-white/90 text-xs md:text-sm hidden lg:block relative z-[60]">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="https://maps.app.goo.gl/3fD3dZQ4uVz7LxgR9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              06 Bacchauli Road, Ratnanagar 44204, Chitwan, Nepal
            </a>
            <a href="https://wa.me/9779865345753" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +977-9865345753
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wider">
            <span>Direct Bookings Only</span>
            <span className="w-1 h-1 rounded-full bg-gold"></span>
            <span>Best Rates Guaranteed</span>
          </div>
        </div>
      </div>

      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "top-0 glass-nav shadow-sm" : "top-0 lg:top-[40px] bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#hero" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Vacation Vibe Villa"
              width={160}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <span
              className={`font-display text-lg tracking-wide transition-colors duration-300 hidden sm:inline ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              Vacation Vibe Villa
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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
    </>
  );
}
