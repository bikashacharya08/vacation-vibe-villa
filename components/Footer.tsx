export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/60 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <span className="text-2xl">&#x2728;</span>
            <p className="font-display text-white text-xl mt-3 mb-4">
              Vacation Vibe Villa
            </p>
            <p className="text-sm leading-relaxed max-w-sm">
              Where luxury meets nature. Every moment at our villa is designed
              to create memories that last a lifetime.
            </p>
          </div>
          <div>
            <p className="font-display text-white text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Amenities", href: "#amenities" },
                { label: "Gallery", href: "#gallery" },
                { label: "Reviews", href: "#reviews" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
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
              <li>hello@vacationvibevilla.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Serenity Lane</li>
              <li>Paradise Valley, CA 90210</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {year} Vacation Vibe Villa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="hover:text-gold cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-gold cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
