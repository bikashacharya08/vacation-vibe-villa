import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://vacation-vibe-villa.vercel.app"),
  title: "Vacation Vibe Villa | Sauraha, Chitwan – Nepal",
  description:
    "Experience authentic Nepali village life at Vacation Vibe Villa in Sauraha, Chitwan. Just 5 minutes from Chitwan National Park. 2 bedrooms, kitchen, balcony, farm & fish pond.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Vacation Vibe Villa | Sauraha, Chitwan – Nepal",
    description:
      "Book your stay at Vacation Vibe Villa in Sauraha, Chitwan. Gateway to Chitwan National Park. Direct bookings only.",
    type: "website",
    images: ["https://vacation-vibe-villa.vercel.app/images/hero-bg.jpg"],
  },
};

import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
