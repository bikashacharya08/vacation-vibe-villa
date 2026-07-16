import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/60 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Vacation Vibe Villa"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
            <p className="font-display text-white text-xl mt-4 mb-4">
              Vacation Vibe Villa
            </p>
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
              <li>06 Bacchauli Road, Ratnanagar 44204</li>
              <li>Chitwan, Bagmati Province, Nepal</li>
              <li>Book direct — best rates guaranteed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {year} Vacation Vibe Villa — Sauraha, Chitwan, Nepal.
          </p>
          <div className="flex gap-6 text-sm"></div>
        </div>
      </div>
    </footer>
  );
}
