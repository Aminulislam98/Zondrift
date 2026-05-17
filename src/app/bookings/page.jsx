"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiMapPin,
  FiClock,
  FiCalendar,
  FiTag,
  FiX,
  FiArrowUpRight,
  FiInbox,
} from "react-icons/fi";

// ── Replace with fetch later ──
// const res = await fetch("http://localhost:4000/bookings?userId=USER_ID")
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

// ── Status config ──
const STATUS = {
  confirmed: { label: "Confirmed", className: "bg-black text-white" },
  pending: { label: "Pending", className: "bg-black/[0.06] text-black" },
  cancelled: { label: "Cancelled", className: "bg-black/[0.04] text-[#aaa]" },
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

function SectionLabel({ label, count, muted }) {
  return (
    <div className="flex items-center gap-2.5 mb-[clamp(16px,2.5vw,24px)]">
      <h2
        className={`text-[13px] font-medium tracking-[-0.01em] ${muted ? "text-[#aaa]" : "text-black"}`}
      >
        {label}
      </h2>
      <span
        className={`text-[11px] px-2 py-0.5 ${muted ? "text-[#ccc] bg-black/[0.03]" : "text-[#aaa] bg-black/[0.04]"}`}
      >
        {count}
      </span>
    </div>
  );
}

function BookingCard({ booking }) {
  const [status, setStatus] = useState(booking.status);
  const cancelled = status === "cancelled";
  const dest = booking.destination;

  const handleCancel = async () => {
    // TODO: await fetch(`http://localhost:4000/bookings/${booking._id}`, { method: "PATCH", body: JSON.stringify({ status: "cancelled" }) })
    setStatus("cancelled");
  };

  return (
    <div
      className={`border border-black/[0.08] overflow-hidden transition-opacity duration-300 ${cancelled ? "opacity-50" : ""}`}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative w-full sm:w-[clamp(140px,18vw,200px)] aspect-[16/9] sm:aspect-auto sm:min-h-full shrink-0 bg-black">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            quality={80}
            sizes="(max-width: 640px) 100vw, 200px"
            className="object-cover"
          />
          {cancelled && <div className="absolute inset-0 bg-white/60" />}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 p-[clamp(14px,2.5vw,20px)] gap-[clamp(12px,2vw,16px)] min-w-0">
          {/* Top — name + price */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="mb-1.5">
                <StatusBadge status={status} />
              </div>
              <h3 className="text-[clamp(14px,2vw,17px)] font-medium tracking-[-0.03em] text-black mb-1 truncate">
                {dest.name}
              </h3>
              <div className="flex items-center gap-1.5 flex-wrap">
                <FiMapPin className="w-3 h-3 text-[#bbb] shrink-0" />
                <span className="text-[clamp(11px,1.5vw,13px)] text-[#888] tracking-[-0.01em]">
                  {dest.country}
                </span>
                <span className="text-[#ddd]">·</span>
                <span className="text-[10px] font-medium tracking-[0.06em] uppercase text-[#aaa] bg-black/[0.04] px-1.5 py-0.5 whitespace-nowrap">
                  {dest.category}
                </span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[clamp(16px,2.5vw,20px)] font-medium tracking-[-0.04em] text-black leading-none">
                ${booking.totalPrice.toLocaleString()}
              </div>
              <div className="text-[11px] text-[#aaa] tracking-[-0.01em] mt-0.5">
                {booking.travellers}{" "}
                {booking.travellers === 1 ? "person" : "people"}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-[clamp(8px,1.5vw,12px)]">
            {[
              {
                icon: <FiClock className="w-3 h-3 text-[#bbb] shrink-0" />,
                label: "Duration",
                value: dest.duration,
              },
              {
                icon: <FiCalendar className="w-3 h-3 text-[#bbb] shrink-0" />,
                label: "Travel date",
                value: booking.travelDate,
              },
              {
                icon: <FiTag className="w-3 h-3 text-[#bbb] shrink-0" />,
                label: "Per person",
                value: `$${dest.price.toLocaleString()}`,
              },
            ].map((d) => (
              <div key={d.label} className="flex items-start gap-1.5">
                <div className="mt-[3px]">{d.icon}</div>
                <div className="min-w-0">
                  <div className="text-[10px] text-[#aaa] tracking-[0.06em] uppercase font-medium">
                    {d.label}
                  </div>
                  <div className="text-[clamp(11px,1.5vw,12.5px)] text-black tracking-[-0.01em] font-medium truncate">
                    {d.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer — booked on + actions */}
          <div className="flex items-center justify-between gap-3 pt-[clamp(10px,1.5vw,14px)] border-t border-black/[0.06] flex-wrap">
            <span className="text-[clamp(11px,1.3vw,12px)] text-[#bbb] tracking-[-0.01em] shrink-0">
              Booked {booking.bookedOn}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {!cancelled && (
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-1.5 text-[clamp(11px,1.3vw,12px)] text-[#aaa] tracking-[-0.01em] border border-black/[0.08] px-3 py-1.5 hover:text-red-500 hover:border-red-200 transition-all"
                >
                  <FiX className="w-3 h-3" />
                  Cancel
                </button>
              )}
              <Link
                href={`/destinations/${dest._id}`}
                className="flex items-center gap-1.5 text-[clamp(11px,1.3vw,12px)] text-[#555] tracking-[-0.01em] border border-black/[0.12] px-3 py-1.5 hover:text-black hover:border-black/25 transition-all"
              >
                View trip
                <FiArrowUpRight className="w-3 h-3" />
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
      <div className="max-w-4xl mx-auto px-[clamp(16px,4vw,24px)]">
        {/* Header */}
        <div className="py-[clamp(32px,5vw,48px)] border-b border-black/[0.06]">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
            My account
          </span>
          <h1 className="text-[clamp(26px,5vw,42px)] font-medium tracking-[-0.04em] text-black leading-[1.05] mb-2">
            My bookings
          </h1>
          <p className="text-[clamp(13px,1.5vw,14px)] text-[#888] tracking-[-0.01em]">
            {BOOKINGS.length} booking{BOOKINGS.length !== 1 ? "s" : ""} total
          </p>
        </div>

        {/* Empty state */}
        {BOOKINGS.length === 0 && (
          <div className="flex flex-col items-center justify-center py-[clamp(48px,8vw,96px)] text-center">
            <div className="w-12 h-12 border border-black/[0.08] flex items-center justify-center mb-5">
              <FiInbox className="w-5 h-5 text-[#ccc]" />
            </div>
            <h3 className="text-[clamp(15px,2vw,16px)] font-medium text-black tracking-[-0.02em] mb-2">
              No bookings yet
            </h3>
            <p className="text-[clamp(12px,1.5vw,13px)] text-[#aaa] tracking-[-0.01em] mb-6">
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
          <div className="py-[clamp(24px,4vw,40px)] border-b border-black/[0.06]">
            <SectionLabel label="Confirmed" count={confirmed.length} />
            <div className="flex flex-col gap-[clamp(10px,1.5vw,16px)]">
              {confirmed.map((b) => (
                <BookingCard key={b._id} booking={b} />
              ))}
            </div>
          </div>
        )}

        {/* Pending */}
        {pending.length > 0 && (
          <div className="py-[clamp(24px,4vw,40px)] border-b border-black/[0.06]">
            <SectionLabel label="Pending" count={pending.length} />
            <div className="flex flex-col gap-[clamp(10px,1.5vw,16px)]">
              {pending.map((b) => (
                <BookingCard key={b._id} booking={b} />
              ))}
            </div>
          </div>
        )}

        {/* Cancelled */}
        {cancelled.length > 0 && (
          <div className="py-[clamp(24px,4vw,40px)]">
            <SectionLabel label="Cancelled" count={cancelled.length} muted />
            <div className="flex flex-col gap-[clamp(10px,1.5vw,16px)]">
              {cancelled.map((b) => (
                <BookingCard key={b._id} booking={b} />
              ))}
            </div>
          </div>
        )}

        <div className="pb-[clamp(40px,6vw,64px)]" />
      </div>
    </main>
  );
}
