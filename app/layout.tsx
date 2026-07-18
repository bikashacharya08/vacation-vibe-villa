import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppFloating from "@/components/WhatsAppFloating";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const baseUrl = "https://vacationvibevilla.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Vacation Vibe Villa | Sauraha, Chitwan – Nepal",
  description:
    "Experience authentic Nepali village life at Vacation Vibe Villa in Sauraha, Chitwan. Just 5 minutes from Chitwan National Park. 2 bedrooms, kitchen, balcony, farm & fish pond. Direct bookings only.",
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Vacation Vibe Villa | Sauraha, Chitwan – Nepal",
    description:
      "Book your stay at Vacation Vibe Villa in Sauraha, Chitwan. Gateway to Chitwan National Park. Direct bookings only.",
    url: baseUrl,
    siteName: "Vacation Vibe Villa",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/luna.jpeg",
        width: 1200,
        height: 630,
        alt: "Vacation Vibe Villa - Sauraha, Chitwan, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vacation Vibe Villa | Sauraha, Chitwan – Nepal",
    description:
      "Book your stay at Vacation Vibe Villa in Sauraha, Chitwan. Gateway to Chitwan National Park.",
    images: ["/images/luna.jpeg"],
  },
  keywords: [
    "Vacation Vibe Villa",
    "Sauraha",
    "Chitwan",
    "Nepal",
    "Chitwan National Park",
    "homestay Chitwan",
    "Nepali village life",
    "vacation rental Chitwan",
    "Sauraha accommodation",
    "family villa Nepal",
    "ethical safari Chitwan",
    "jungle safari Nepal",
    "Sauraha homestay",
  ],
  authors: [{ name: "Vacation Vibe Villa" }],
  creator: "Vacation Vibe Villa",
  publisher: "Vacation Vibe Villa",
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Vacation Vibe Villa",
    image: `${baseUrl}/images/luna.jpeg`,
    description:
      "Experience authentic Nepali village life at Vacation Vibe Villa in Sauraha, Chitwan. Just 5 minutes from Chitwan National Park. 2 bedrooms, kitchen, balcony, farm & fish pond.",
    url: baseUrl,
    telephone: "+977-9865345753",
    email: "livewithbikki@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "06 Bacchauli Road, Ratnanagar",
      addressLocality: "Sauraha",
      addressRegion: "Chitwan",
      addressCountry: "NP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.576,
      longitude: 84.496,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      reviewCount: "50",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
      { "@type": "LocationFeatureSpecification", name: "Free Parking" },
      { "@type": "LocationFeatureSpecification", name: "Kitchen" },
      { "@type": "LocationFeatureSpecification", name: "Airport Shuttle" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Room Types",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Room", name: "2-Bedroom Villa" } },
      ],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preload" href="/images/luna.jpeg" as="image" />
        <link rel="apple-touch-icon" href="/images/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
