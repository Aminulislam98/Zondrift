import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zondrift | Explore Amazing Travel Destinations Worldwide",
  description:
    "Discover unforgettable travel experiences, tour packages, hotel bookings, flights, and adventure trips with Zondrift. Explore the world with affordable and premium travel services.",
  keywords: [
    "travel agency",
    "tour packages",
    "travel booking",
    "holiday trips",
    "world travel",
    "vacation packages",
    "hotel booking",
    "flight booking",
    "adventure travel",
    "travel website",
  ],
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
