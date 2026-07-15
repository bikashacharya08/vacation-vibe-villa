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
  title: "Vacation Vibe Villa | Luxury Retreat",
  description:
    "Experience unparalleled luxury at Vacation Vibe Villa. A serene escape nestled in nature with premium amenities, stunning views, and unforgettable moments.",
  openGraph: {
    title: "Vacation Vibe Villa | Luxury Retreat",
    description:
      "Experience unparalleled luxury at Vacation Vibe Villa. Book your dream getaway today.",
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
