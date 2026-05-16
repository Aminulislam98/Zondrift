"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiMapPin,
  FiStar,
  FiClock,
} from "react-icons/fi";

// ── Replace with real fetch from MongoDB later ──
// const res = await fetch("http://localhost:4000/destination")
// const destinations = await res.json()
const destinations = [
  {
    _id: "1",
    name: "Bali Paradise",
    country: "Indonesia",
    category: "Beach",
    price: 2700,
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&auto=format&fit=crop&q=80",
  },
  {
    _id: "2",
    name: "Santorini Escape",
    country: "Greece",
    category: "Island",
    price: 4200,
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&auto=format&fit=crop&q=80",
  },
  {
    _id: "3",
    name: "Tokyo Explorer",
    country: "Japan",
    category: "City",
    price: 3100,
    duration: "8 Days / 7 Nights",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&auto=format&fit=crop&q=80",
  },
  {
    _id: "4",
    name: "Iceland Aurora",
    country: "Iceland",
    category: "Nature",
    price: 5500,
    duration: "6 Days / 5 Nights",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1474690870753-1b92efa1f2d8?w=400&auto=format&fit=crop&q=80",
  },
];
// ───────────────────────────────────────────────

export default function AdminDestinationsPage() {
  const handleDelete = (id) => {
    // TODO: connect delete to Express API
    // await fetch(`http://localhost:4000/destination/${id}`, { method: "DELETE" })
    console.log("delete destination:", id);
  };

  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-5xl mx-auto px-5">
        {/* ── Header ── */}
        <div className="flex items-end justify-between py-12 border-b border-black/[0.06]">
          <div>
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
              Admin panel
            </span>
            <h1 className="text-[32px] md:text-[42px] font-medium tracking-[-0.04em] text-black leading-[1.05]">
              Destinations
            </h1>
            <p className="text-[14px] text-[#888] tracking-[-0.01em] mt-2">
              {destinations.length} destinations published
            </p>
          </div>
          <Link
            href="/admin/add-destination"
            className="flex items-center gap-2 bg-black text-white text-[13px] font-medium tracking-[-0.01em] px-5 py-2.5 hover:bg-black/80 transition-colors"
          >
            <FiPlus className="w-4 h-4" />
            Add new
          </Link>
        </div>

        {/* ── Table header — desktop ── */}
        <div className="hidden md:grid grid-cols-[64px_1fr_120px_100px_100px_120px] gap-4 px-4 py-3 border-b border-black/[0.06]">
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
            Photo
          </span>
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
            Destination
          </span>
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
            Category
          </span>
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
            Price
          </span>
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
            Rating
          </span>
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa] text-right">
            Actions
          </span>
        </div>

        {/* ── Destination rows ── */}
        <div className="flex flex-col divide-y divide-black/[0.05]">
          {destinations.map((dest) => (
            <div key={dest._id}>
              {/* Desktop row */}
              <div className="hidden md:grid grid-cols-[64px_1fr_120px_100px_100px_120px] gap-4 items-center px-4 py-4 hover:bg-black/[0.02] transition-colors">
                {/* Photo */}
                <div className="relative w-14 h-14 overflow-hidden bg-black/[0.05] shrink-0">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    quality={70}
                    className="object-cover"
                  />
                </div>

                {/* Name + details */}
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-[14px] font-medium text-black tracking-[-0.02em] truncate">
                    {dest.name}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <FiMapPin className="w-3 h-3 text-[#aaa] shrink-0" />
                    <span className="text-[12px] text-[#aaa] tracking-[-0.01em]">
                      {dest.country}
                    </span>
                    <span className="text-[#ddd]">·</span>
                    <FiClock className="w-3 h-3 text-[#aaa] shrink-0" />
                    <span className="text-[12px] text-[#aaa] tracking-[-0.01em]">
                      {dest.duration}
                    </span>
                  </div>
                </div>

                {/* Category */}
                <span className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#555] bg-black/[0.04] px-2.5 py-1 w-fit">
                  {dest.category}
                </span>

                {/* Price */}
                <span className="text-[14px] font-medium text-black tracking-[-0.02em]">
                  ${dest.price.toLocaleString()}
                </span>

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <FiStar className="w-3 h-3 text-black" />
                  <span className="text-[14px] font-medium text-black tracking-[-0.02em]">
                    {dest.rating}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 justify-end">
                  <Link
                    href={`/admin/edit-destination/${dest._id}`}
                    className="flex items-center gap-1.5 text-[12px] text-[#555] tracking-[-0.01em] border border-black/[0.12] px-3 py-1.5 hover:border-black/25 hover:text-black transition-all"
                  >
                    <FiEdit2 className="w-3.5 h-3.5" />
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(dest._id)}
                    className="flex items-center gap-1.5 text-[12px] text-[#aaa] tracking-[-0.01em] border border-black/[0.08] px-3 py-1.5 hover:border-red-200 hover:text-red-500 transition-all"
                  >
                    <FiTrash2 className="w-3.5 h-3.5" />
                    Delete
                  </button>
                </div>
              </div>

              {/* Mobile card */}
              <div className="md:hidden flex items-start gap-4 py-4">
                <div className="relative w-16 h-16 overflow-hidden bg-black/[0.05] shrink-0">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    quality={70}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <span className="text-[14px] font-medium text-black tracking-[-0.02em] truncate">
                    {dest.name}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <FiMapPin className="w-3 h-3 text-[#aaa]" />
                    <span className="text-[12px] text-[#aaa]">
                      {dest.country}
                    </span>
                    <span className="text-[#ddd]">·</span>
                    <FiStar className="w-3 h-3 text-[#aaa]" />
                    <span className="text-[12px] text-[#aaa]">
                      {dest.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[12px] font-medium text-black">
                      ${dest.price.toLocaleString()}
                    </span>
                    <span className="text-[#ddd]">·</span>
                    <span className="text-[11px] text-[#555] bg-black/[0.04] px-2 py-0.5 uppercase tracking-[0.06em]">
                      {dest.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Link
                      href={`/admin/edit-destination/${dest._id}`}
                      className="flex items-center gap-1.5 text-[12px] text-[#555] border border-black/[0.12] px-3 py-1.5 hover:text-black transition-colors"
                    >
                      <FiEdit2 className="w-3.5 h-3.5" />
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(dest._id)}
                      className="flex items-center gap-1.5 text-[12px] text-[#aaa] border border-black/[0.08] px-3 py-1.5 hover:text-red-500 hover:border-red-200 transition-colors"
                    >
                      <FiTrash2 className="w-3.5 h-3.5" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Empty state ── */}
        {destinations.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 border border-black/[0.08] flex items-center justify-center mb-5">
              <FiMapPin className="w-5 h-5 text-[#ccc]" />
            </div>
            <h3 className="text-[16px] font-medium text-black tracking-[-0.02em] mb-2">
              No destinations yet
            </h3>
            <p className="text-[13px] text-[#aaa] tracking-[-0.01em] mb-6">
              Add your first destination to get started
            </p>
            <Link
              href="/admin/add-destination"
              className="flex items-center gap-2 bg-black text-white text-[13px] px-5 py-2.5"
            >
              <FiPlus className="w-4 h-4" />
              Add destination
            </Link>
          </div>
        )}

        <div className="pb-16" />
      </div>
    </main>
  );
}
