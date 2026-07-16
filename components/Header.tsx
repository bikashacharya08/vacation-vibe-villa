"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinksLeft = [
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
];

const navLinksRight = [
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-charcoal text-white/90 text-xs md:text-sm hidden lg:block relative z-[60]">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="https://maps.app.goo.gl/3fD3dZQ4uVz7LxgR9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              06 Bacchauli Road, Sauraha, Chitwan
            </a>
            <a href="https://wa.me/9779865345753" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold transition-colors">
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +977-9865345753
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
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12">
          
          {/* Left Nav */}
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {navLinksLeft.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="flex-shrink-0 flex justify-center flex-1 lg:flex-none">
            <a href="#hero" className="flex items-center flex-col">
              <span
                className={`font-display text-2xl lg:text-3xl tracking-widest transition-colors duration-500 ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                VACATION VIBE
              </span>
            </a>
          </div>

          {/* Right Nav */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {navLinksRight.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className={`px-6 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 ${
                scrolled 
                  ? "bg-charcoal text-white hover:bg-gold" 
                  : "bg-white text-charcoal hover:bg-gold hover:text-white"
              }`}
            >
              Reserve
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 absolute right-6"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[1px] transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-[1px] transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-[1px] transition-all duration-300 ${
                scrolled ? "bg-charcoal" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-[500px] py-8 border-t border-gray-100" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-6 px-6">
            {[...navLinksLeft, ...navLinksRight].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs font-semibold tracking-[0.2em] uppercase text-charcoal hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-charcoal hover:bg-gold text-white px-10 py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-all"
            >
              Reserve
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
