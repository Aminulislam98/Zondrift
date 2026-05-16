"use client";

import Image from "next/image";
import Link from "next/link";

// ── Hardcoded — replace with MongoDB fetch later ──
// Real app: const dest = await fetch(`/api/destinations/${params.id}`)
const dest = {
  _id: "1",
  name: "Bali Paradise",
  country: "Indonesia",
  category: "Beach",
  style: "Couple",
  tagline: "Where gods meet the ocean",
  image:
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&auto=format&fit=crop&q=85",
  rating: 4.9,
  price: 2700,
  duration: "7 Days / 6 Nights",
  temp: "28°C",
  trips: 2400,
  priceRange: "Mid",
  shortDescription:
    "Tropical temples, lush rice fields and ocean sunsets. Bali is pure magic for every kind of traveller.",
  description:
    "Bali is a living postcard — an Indonesian paradise that feels like a fantasy. The island offers an extraordinary mix of lush jungle, ancient temples, terraced rice paddies, and white sand beaches. Whether you're exploring the spiritual town of Ubud, surfing the waves of Seminyak, or watching the sun dip below the horizon at Tanah Lot temple, every moment in Bali feels like a scene from a dream. The local culture is deeply rooted in Hinduism, making it unlike any other part of Indonesia. You'll encounter elaborate ceremonies, intricate offerings, and the warmth of the Balinese people at every turn.",
  highlights: [
    "Visit the iconic Tanah Lot sea temple at sunset",
    "Explore the terraced rice fields of Tegallalang",
    "Snorkel in the crystal-clear waters of Nusa Penida",
    "Experience a traditional Kecak fire dance performance",
    "Wander through the spiritual town of Ubud",
    "Surf the famous waves of Kuta and Seminyak",
  ],
  included: [
    "Return flights from London",
    "7 nights accommodation — 4 star resort",
    "Daily breakfast included",
    "Airport transfers on arrival and departure",
    "Guided temple tour on day 2",
    "24/7 Zondrift support throughout your trip",
  ],
  notIncluded: [
    "Travel insurance",
    "Personal spending and meals",
    "Optional excursions and activities",
    "Visa fees if applicable",
  ],
};

function StatPill({ label, value }) {
  return (
    <div className="flex flex-col gap-1 px-5 py-4 border-r border-black/[0.08] flex-1 min-w-[120px] last:border-r-0">
      <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
        {label}
      </span>
      <span className="text-[15px] font-medium tracking-[-0.03em] text-black">
        {value}
      </span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
      <circle
        cx="8"
        cy="8"
        r="7"
        stroke="black"
        strokeWidth="1.2"
        opacity="0.25"
      />
      <path
        d="M5 8l2 2 4-4"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="#ccc" strokeWidth="1.2" />
      <path
        d="M5.5 10.5l5-5M10.5 10.5l-5-5"
        stroke="#ccc"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function DestinationDetailPage({ params }) {
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <div className="relative w-full h-[55vh] md:h-[70vh] min-h-[400px] bg-black">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {/* Back */}
        <Link
          href="/destinations"
          className="absolute top-[68px] left-5 md:left-10 flex items-center gap-2 text-[13px] text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm border border-white/15 px-3.5 py-2 rounded-full"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
            <path
              d="M9 2L4 7l5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All destinations
        </Link>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-5 md:px-10 pb-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/70 bg-white/10 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded-full">
                {dest.category}
              </span>
              <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/70 bg-white/10 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded-full">
                {dest.style}
              </span>
            </div>
            <h1 className="text-[36px] md:text-[56px] font-medium tracking-[-0.04em] text-white leading-[1.05] mb-2">
              {dest.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5 text-white/50"
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
                <span className="text-[14px] text-white/60 tracking-[-0.01em]">
                  {dest.country}
                </span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 fill-white/70" viewBox="0 0 12 12">
                  <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5l-3 1.5.6-3.2L1.2 4.5l3.3-.5z" />
                </svg>
                <span className="text-[14px] text-white/60 tracking-[-0.01em]">
                  {dest.rating} rating
                </span>
              </div>
              <span className="text-white/20">·</span>
              <span className="text-[14px] text-white/60 tracking-[-0.01em]">
                {dest.trips.toLocaleString()} trips planned
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="flex overflow-x-auto border-l border-black/[0.08]">
            <StatPill
              label="Price"
              value={`$${dest.price.toLocaleString()}/person`}
            />
            <StatPill label="Duration" value={dest.duration} />
            <StatPill label="Temperature" value={dest.temp} />
            <StatPill label="Price range" value={dest.priceRange} />
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14 py-14">
          {/* ── Left ── */}
          <div className="flex flex-col gap-14">
            {/* Overview */}
            <div>
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#aaa] block mb-5">
                Overview
              </span>
              <p className="text-[16px] text-black font-medium tracking-[-0.02em] leading-[1.65] mb-4">
                {dest.shortDescription}
              </p>
              <p className="text-[15px] text-[#555] tracking-[-0.01em] leading-[1.8]">
                {dest.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#aaa] block mb-5">
                Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[14px] text-[#333] tracking-[-0.01em] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's included */}
            <div>
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#aaa] block mb-5">
                What's included
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3.5">
                  <p className="text-[12px] font-medium tracking-[0.06em] uppercase text-black mb-1">
                    Included
                  </p>
                  {dest.included.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-[14px] text-[#333] tracking-[-0.01em] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3.5">
                  <p className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#aaa] mb-1">
                    Not included
                  </p>
                  {dest.notIncluded.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CrossIcon />
                      <span className="text-[14px] text-[#aaa] tracking-[-0.01em] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right — Booking card ── */}
          <div className="hidden lg:block">
            <div className="sticky top-[72px] border border-black/[0.1] p-6 flex flex-col gap-5">
              {/* Price */}
              <div>
                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className="text-[34px] font-medium tracking-[-0.05em] text-black">
                    ${dest.price.toLocaleString()}
                  </span>
                  <span className="text-[14px] text-[#aaa] tracking-[-0.01em]">
                    / person
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 fill-black" viewBox="0 0 12 12">
                    <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5l-3 1.5.6-3.2L1.2 4.5l3.3-.5z" />
                  </svg>
                  <span className="text-[13px] font-medium text-black tracking-[-0.01em]">
                    {dest.rating}
                  </span>
                  <span className="text-[#ddd]">·</span>
                  <span className="text-[13px] text-[#aaa] tracking-[-0.01em]">
                    {dest.trips.toLocaleString()} trips
                  </span>
                </div>
              </div>

              <div className="h-px bg-black/[0.06]" />

              {/* Details */}
              <div className="flex flex-col gap-3">
                {[
                  { label: "Duration", value: dest.duration },
                  { label: "Temperature", value: dest.temp },
                  { label: "Category", value: dest.category },
                  { label: "Best for", value: dest.style },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-[13px] text-[#888] tracking-[-0.01em]">
                      {item.label}
                    </span>
                    <span className="text-[13px] font-medium text-black tracking-[-0.01em]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-black/[0.06]" />

              {/* Book now */}
              <Link
                href={`/bookings/new?destination=${dest._id}`}
                className="w-full bg-black text-white text-[13.5px] font-medium tracking-[-0.01em] py-3.5 flex items-center justify-center gap-2 hover:bg-black/80 transition-colors"
              >
                Book now
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 12L12 2M5 2h7v7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <p className="text-[11.5px] text-[#bbb] tracking-[-0.01em] text-center leading-relaxed">
                No payment now. A Zondrift advisor will contact you within 24
                hours.
              </p>

              {/* Save */}
              <button className="w-full border border-black/[0.1] text-[#555] text-[13px] tracking-[-0.01em] py-2.5 hover:border-black/25 hover:text-black transition-all flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    d="M8 13.5l-5.5-5a3.5 3.5 0 0 1 5.5-4.4A3.5 3.5 0 0 1 13.5 8.5L8 13.5z"
                    strokeLinejoin="round"
                  />
                </svg>
                Save to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile sticky bottom bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.08] px-5 py-4 flex items-center justify-between gap-4 z-40">
        <div>
          <div className="text-[22px] font-medium tracking-[-0.04em] text-black">
            ${dest.price.toLocaleString()}
          </div>
          <div className="text-[12px] text-[#aaa] tracking-[-0.01em]">
            per person · {dest.duration}
          </div>
        </div>
        <Link
          href={`/bookings/new?destination=${dest._id}`}
          className="bg-black text-white text-[13.5px] font-medium tracking-[-0.01em] px-7 py-3 hover:bg-black/80 transition-colors"
        >
          Book now
        </Link>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="lg:hidden h-24" />
    </main>
  );
}
