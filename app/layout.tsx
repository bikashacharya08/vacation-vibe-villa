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
  title: "Vacation Vibe Villa | Sauraha, Chitwan – Nepal",
  description:
    "Experience authentic Nepali village life at Vacation Vibe Villa in Sauraha, Chitwan. Just 5 minutes from Chitwan National Park. 2 bedrooms, kitchen, balcony, farm & fish pond.",
  openGraph: {
    title: "Vacation Vibe Villa | Sauraha, Chitwan – Nepal",
    description:
      "Book your stay at Vacation Vibe Villa in Sauraha, Chitwan. Gateway to Chitwan National Park. Direct bookings & Airbnb.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
