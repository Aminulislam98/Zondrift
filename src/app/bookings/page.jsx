"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiMapPin,
  FiClock,
  FiCalendar,
  FiUsers,
  FiTag,
  FiX,
  FiArrowUpRight,
  FiInbox,
} from "react-icons/fi";

// ── Replace with MongoDB fetch later ──
// const res = await fetch("http://localhost:4000/bookings?userId=USER_ID")
// const bookings = await res.json()
const BOOKINGS = [
  {
    _id: "b1",
    destination: {
      _id: "1",
      name: "Bali Paradise",
      country: "Indonesia",
      category: "Beach",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80",
      duration: "7 Days / 6 Nights",
      price: 2700,
    },
    travellers: 2,
    totalPrice: 5400,
    bookedOn: "12 May 2026",
    travelDate: "14 Jul 2026",
    status: "confirmed",
  },
  {
    _id: "b2",
    destination: {
      _id: "3",
      name: "Tokyo Explorer",
      country: "Japan",
      category: "City",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&auto=format&fit=crop&q=80",
      duration: "8 Days / 7 Nights",
      price: 3100,
    },
    travellers: 1,
    totalPrice: 3100,
    bookedOn: "2 May 2026",
    travelDate: "20 Aug 2026",
    status: "pending",
  },
  {
    _id: "b3",
    destination: {
      _id: "6",
      name: "Machu Picchu Trek",
      country: "Peru",
      category: "Adventure",
      image:
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&auto=format&fit=crop&q=80",
      duration: "7 Days / 6 Nights",
      price: 2900,
    },
    travellers: 2,
    totalPrice: 5800,
    bookedOn: "28 Apr 2026",
    travelDate: "10 Sep 2026",
    status: "cancelled",
  },
];
// ─────────────────────────────────────

const STATUS = {
  confirmed: {
    label: "Confirmed",
    className: "bg-black text-white",
  },
  pending: {
    label: "Pending",
    className: "bg-black/[0.06] text-black",
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-black/[0.04] text-[#aaa]",
  },
};

function StatusBadge({ status }) {
  const s = STATUS[status] || STATUS.pending;
  return (
    <span
      className={`text-[10px] font-medium tracking-[0.08em] uppercase px-2.5 py-1 ${s.className}`}
    >
      {s.label}
    </span>
  );
}

function BookingCard({ booking }) {
  const [cancelled, setCancelled] = useState(booking.status === "cancelled");
  const [status, setStatus] = useState(booking.status);

  const handleCancel = () => {
    // TODO: PATCH to Express API
    // await fetch(`http://localhost:4000/bookings/${booking._id}`, {
    //   method: "PATCH",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ status: "cancelled" }),
    // })
    setStatus("cancelled");
    setCancelled(true);
  };

  const dest = booking.destination;

  return (
    <div
      className={`border border-black/[0.08] overflow-hidden transition-all duration-200 ${
        status === "cancelled" ? "opacity-60" : ""
      }`}
    >
      {/* Top — image + info */}
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative w-full sm:w-[200px] h-[180px] sm:h-auto shrink-0 bg-black">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            quality={80}
            className="object-cover"
          />
          {status === "cancelled" && (
            <div className="absolute inset-0 bg-white/60" />
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between flex-1 p-5 gap-4">
          {/* Top row */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <StatusBadge status={status} />
              </div>
              <h3 className="text-[17px] font-medium tracking-[-0.03em] text-black mb-1">
                {dest.name}
              </h3>
              <div className="flex items-center gap-1.5">
                <FiMapPin className="w-3.5 h-3.5 text-[#aaa]" />
                <span className="text-[13px] text-[#888] tracking-[-0.01em]">
                  {dest.country}
                </span>
                <span className="text-[#ddd]">·</span>
                <span className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#aaa] bg-black/[0.04] px-2 py-0.5">
                  {dest.category}
                </span>
              </div>
            </div>

            {/* Total price */}
            <div className="text-right shrink-0">
              <div className="text-[20px] font-medium tracking-[-0.04em] text-black">
                ${booking.totalPrice.toLocaleString()}
              </div>
              <div className="text-[11px] text-[#aaa] tracking-[-0.01em]">
                total · {booking.travellers}{" "}
                {booking.travellers === 1 ? "person" : "people"}
              </div>
            </div>
          </div>

          {/* Details row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="flex items-center gap-2">
              <FiClock className="w-3.5 h-3.5 text-[#bbb] shrink-0" />
              <div>
                <div className="text-[10px] text-[#aaa] tracking-[0.06em] uppercase font-medium">
                  Duration
                </div>
                <div className="text-[12.5px] text-black tracking-[-0.01em] font-medium">
                  {dest.duration}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="w-3.5 h-3.5 text-[#bbb] shrink-0" />
              <div>
                <div className="text-[10px] text-[#aaa] tracking-[0.06em] uppercase font-medium">
                  Travel date
                </div>
                <div className="text-[12.5px] text-black tracking-[-0.01em] font-medium">
                  {booking.travelDate}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FiTag className="w-3.5 h-3.5 text-[#bbb] shrink-0" />
              <div>
                <div className="text-[10px] text-[#aaa] tracking-[0.06em] uppercase font-medium">
                  Per person
                </div>
                <div className="text-[12.5px] text-black tracking-[-0.01em] font-medium">
                  ${dest.price.toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row — booked on + actions */}
          <div className="flex items-center justify-between pt-3 border-t border-black/[0.06]">
            <span className="text-[12px] text-[#aaa] tracking-[-0.01em]">
              Booked on {booking.bookedOn}
            </span>
            <div className="flex items-center gap-2">
              {!cancelled && (
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-1.5 text-[12px] text-[#aaa] tracking-[-0.01em] border border-black/[0.08] px-3 py-1.5 hover:text-red-500 hover:border-red-200 transition-all"
                >
                  <FiX className="w-3.5 h-3.5" />
                  Cancel
                </button>
              )}
              <Link
                href={`/destinations/${dest._id}`}
                className="flex items-center gap-1.5 text-[12px] text-[#555] tracking-[-0.01em] border border-black/[0.12] px-3 py-1.5 hover:text-black hover:border-black/25 transition-all"
              >
                View trip
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyBookingsPage() {
  const confirmed = BOOKINGS.filter((b) => b.status === "confirmed");
  const pending = BOOKINGS.filter((b) => b.status === "pending");
  const cancelled = BOOKINGS.filter((b) => b.status === "cancelled");

  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="py-12 border-b border-black/[0.06]">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
            My account
          </span>
          <h1 className="text-[32px] md:text-[42px] font-medium tracking-[-0.04em] text-black leading-[1.05] mb-2">
            My bookings
          </h1>
          <p className="text-[14px] text-[#888] tracking-[-0.01em]">
            {BOOKINGS.length} booking{BOOKINGS.length !== 1 ? "s" : ""} total
          </p>
        </div>

        {/* Empty state */}
        {BOOKINGS.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 border border-black/[0.08] flex items-center justify-center mb-5">
              <FiInbox className="w-5 h-5 text-[#ccc]" />
            </div>
            <h3 className="text-[16px] font-medium text-black tracking-[-0.02em] mb-2">
              No bookings yet
            </h3>
            <p className="text-[13px] text-[#aaa] tracking-[-0.01em] mb-6">
              When you book a trip it will appear here
            </p>
            <Link
              href="/destinations"
              className="bg-black text-white text-[13px] font-medium tracking-[-0.01em] px-6 py-2.5 hover:bg-black/80 transition-colors"
            >
              Explore destinations
            </Link>
          </div>
        )}

        {/* Confirmed */}
        {confirmed.length > 0 && (
          <div className="py-10 border-b border-black/[0.06]">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-[13px] font-medium tracking-[-0.01em] text-black">
                Confirmed
              </h2>
              <span className="text-[11px] text-[#aaa] bg-black/[0.04] px-2 py-0.5">
                {confirmed.length}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {confirmed.map((b) => (
                <BookingCard key={b._id} booking={b} />
              ))}
            </div>
          </div>
        )}

        {/* Pending */}
        {pending.length > 0 && (
          <div className="py-10 border-b border-black/[0.06]">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-[13px] font-medium tracking-[-0.01em] text-black">
                Pending
              </h2>
              <span className="text-[11px] text-[#aaa] bg-black/[0.04] px-2 py-0.5">
                {pending.length}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {pending.map((b) => (
                <BookingCard key={b._id} booking={b} />
              ))}
            </div>
          </div>
        )}

        {/* Cancelled */}
        {cancelled.length > 0 && (
          <div className="py-10">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-[13px] font-medium tracking-[-0.01em] text-[#aaa]">
                Cancelled
              </h2>
              <span className="text-[11px] text-[#ccc] bg-black/[0.03] px-2 py-0.5">
                {cancelled.length}
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {cancelled.map((b) => (
                <BookingCard key={b._id} booking={b} />
              ))}
            </div>
          </div>
        )}

        <div className="pb-16" />
      </div>
    </main>
  );
}
