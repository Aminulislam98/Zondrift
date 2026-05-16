"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ── Replace with MongoDB data later ──
const destinations = [
  {
    _id: "1",
    name: "Bali Paradise",
    country: "Indonesia",
    category: "Beach",
    tagline: "Tropical temples, rice fields & ocean sunsets",
    priceRange: "mid",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    price: 2700,
    duration: "7 Days / 6 Nights",
  },
  {
    _id: "2",
    name: "Santorini Escape",
    country: "Greece",
    category: "Island",
    tagline: "White-washed cliffs above the Aegean Sea",
    priceRange: "luxury",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop&q=80",
    rating: 4.8,
    price: 4200,
    duration: "5 Days / 4 Nights",
  },
  {
    _id: "3",
    name: "Tokyo Explorer",
    country: "Japan",
    category: "City",
    tagline: "Where neon streets meet ancient tradition",
    priceRange: "mid",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=80",
    rating: 4.9,
    price: 3100,
    duration: "8 Days / 7 Nights",
  },
  {
    _id: "4",
    name: "Iceland Aurora",
    country: "Iceland",
    category: "Nature",
    tagline: "Glaciers, volcanoes and northern lights",
    priceRange: "luxury",
    image:
      "https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=800&auto=format&fit=crop&q=80",
    rating: 4.7,
    price: 5500,
    duration: "6 Days / 5 Nights",
  },
];
// ─────────────────────────────────────

function DestinationCard({ dest }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-black/[0.07] overflow-hidden hover:border-black/[0.14] transition-all duration-300">
      {/* ── Image ── */}
      <div className="relative h-[210px] overflow-hidden bg-black">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          quality={80}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* Rating badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-xl">
          <svg className="w-3 h-3 fill-black shrink-0" viewBox="0 0 12 12">
            <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5l-3 1.5.6-3.2L1.2 4.5l3.3-.5z" />
          </svg>
          <span className="text-[12px] font-medium text-black tracking-[-0.02em]">
            {dest.rating}
          </span>
        </div>

        {/* Save button */}
        <button
          onClick={() => setSaved(!saved)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:scale-105 transition-transform duration-200"
          aria-label="Save"
        >
          <svg
            className={`w-4 h-4 transition-colors duration-200 ${saved ? "fill-black stroke-black" : "fill-transparent stroke-black"}`}
            viewBox="0 0 16 16"
            strokeWidth="1.5"
          >
            <path
              d="M8 13.5l-5.5-5a3.5 3.5 0 0 1 5.5-4.4A3.5 3.5 0 0 1 13.5 8.5L8 13.5z"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Category */}
        <div className="absolute bottom-3 right-3">
          <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-white/90 bg-black/35 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full">
            {dest.category}
          </span>
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col gap-3 p-4">
        {/* Location */}
        <div className="flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5 text-[#aaa] shrink-0"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M7 1C4.79 1 3 2.79 3 5c0 3.25 4 8 4 8s4-4.75 4-8c0-2.21-1.79-4-4-4z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <circle
              cx="7"
              cy="5"
              r="1.2"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          <span className="text-[12px] text-[#aaa] tracking-[-0.01em]">
            {dest.country}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-[16px] font-medium tracking-[-0.03em] text-black leading-snug">
          {dest.name}
        </h3>

        {/* Tagline */}
        <p className="text-[12.5px] text-[#888] tracking-[-0.01em] leading-relaxed line-clamp-2">
          {dest.tagline}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5 text-[#aaa] shrink-0"
            viewBox="0 0 14 14"
            fill="none"
          >
            <rect
              x="1.5"
              y="2.5"
              width="11"
              height="10"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M1.5 6h11M4.5 1v3M9.5 1v3"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[12px] text-[#aaa] tracking-[-0.01em]">
            {dest.duration}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[0.06]" />

        {/* Price + Book Now */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[18px] font-medium text-black tracking-[-0.04em]">
              ${dest.price.toLocaleString()}
            </span>
            <span className="text-[11px] text-[#aaa] tracking-[-0.01em] ml-0.5">
              /person
            </span>
          </div>
          <Link
            href={`/destinations/${dest._id}`}
            className="flex items-center gap-1.5 text-[12px] font-medium text-black tracking-[0.04em] uppercase border border-black/[0.15] px-3.5 py-2 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-200"
          >
            Book now
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M4 2h6v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function DestinationsPage() {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("");

  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-6xl mx-auto px-5 py-14">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
            Explore the world
          </span>
          <h1 className="text-[36px] md:text-[52px] font-medium tracking-[-0.04em] text-black leading-[1.05] mb-3">
            Explore All Destinations
          </h1>
          <p className="text-[15px] text-[#888] tracking-[-0.01em]">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-6">
          {[
            {
              value: category,
              setter: setCategory,
              placeholder: "Category",
              options: [
                { value: "beach", label: "Beach" },
                { value: "city", label: "City" },
                { value: "nature", label: "Nature" },
                { value: "island", label: "Island" },
                { value: "adventure", label: "Adventure" },
                { value: "culture", label: "Culture" },
                { value: "mountain", label: "Mountain" },
              ],
            },
            {
              value: priceRange,
              setter: setPriceRange,
              placeholder: "Price Range",
              options: [
                { value: "budget", label: "Budget — Under $2,000" },
                { value: "mid", label: "Mid — $2,000 to $4,000" },
                { value: "luxury", label: "Luxury — $4,000+" },
              ],
            },
            {
              value: sortBy,
              setter: setSortBy,
              placeholder: "Sort By",
              options: [
                { value: "popular", label: "Most Popular" },
                { value: "rating", label: "Top Rated" },
                { value: "price-low", label: "Price: Low to High" },
                { value: "price-high", label: "Price: High to Low" },
              ],
            },
          ].map((filter) => (
            <div key={filter.placeholder} className="relative flex-1">
              <select
                value={filter.value}
                onChange={(e) => filter.setter(e.target.value)}
                className="w-full appearance-none bg-white border border-black/[0.12] rounded-xl px-4 py-3.5 text-[13px] tracking-[0.04em] uppercase font-medium outline-none hover:border-black/25 transition-colors cursor-pointer pr-10 text-[#555]"
              >
                <option value="">{filter.placeholder}</option>
                {filter.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#888]"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Result count */}
        <p className="text-[13px] text-[#aaa] tracking-[-0.01em] mb-8">
          Showing {destinations.length} destinations
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest) => (
            <DestinationCard key={dest._id} dest={dest} />
          ))}
        </div>
      </div>
    </main>
  );
}
