"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiMapPin,
  FiClock,
  FiCalendar,
  FiTag,
  FiArrowUpRight,
  FiInbox,
} from "react-icons/fi";
import { DeleteBooking } from "./buttons/DeleteBooking";

const STATUS = {
  confirmed: { label: "Confirmed", className: "bg-black text-white" },
  pending: {
    label: "Pending",
    className: "bg-amber-50 text-amber-600 border border-amber-200",
  },
  cancelled: { label: "Cancelled", className: "bg-black/[0.04] text-[#aaa]" },
};

function StatusBadge({ status }) {
  const s = STATUS[status] || STATUS.pending;
  return (
    <span
      className={`text-[10px] font-semibold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full ${s.className}`}
    >
      {s.label}
    </span>
  );
}

function SectionLabel({ label, count, muted }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <h2
        className={`text-[12px] font-semibold tracking-[0.08em] uppercase ${muted ? "text-[#bbb]" : "text-[#888]"}`}
      >
        {label}
      </h2>
      <span
        className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${muted ? "text-[#ccc] bg-black/[0.03]" : "text-[#888] bg-black/[0.05]"}`}
      >
        {count}
      </span>
    </div>
  );
}

function BookingCard({ booking }) {
  const [status, setStatus] = useState(booking.status);
  const cancelled = status === "cancelled";
  const dest = booking?.destination;

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden border border-black/[0.06] transition-opacity duration-300 ${cancelled ? "opacity-50" : ""}`}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative w-full h-[180px] sm:w-[clamp(140px,18vw,200px)] sm:h-auto sm:min-h-full shrink-0 bg-black/[0.04]">
          {dest?.image ? (
            <Image
              src={dest.image}
              alt={dest?.name ?? "Destination"}
              fill
              quality={80}
              sizes="(max-width: 640px) 100vw, 200px"
              className="object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FiMapPin className="w-6 h-6 text-[#ccc]" />
            </div>
          )}
          {cancelled && (
            <div className="absolute inset-0 bg-white/60 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none" />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 p-[clamp(14px,2.5vw,20px)] gap-3 min-w-0">
          {/* Top */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="mb-2">
                <StatusBadge status={status} />
              </div>
              <h3 className="text-[clamp(14px,2vw,17px)] font-semibold tracking-[-0.03em] text-black mb-1 truncate">
                {dest?.name}
              </h3>
              <div className="flex items-center gap-1.5 flex-wrap">
                <FiMapPin className="w-3 h-3 text-[#bbb] shrink-0" />
                <span className="text-[clamp(11px,1.5vw,12.5px)] text-[#888]">
                  {dest?.country}
                </span>
                <span className="text-[#ddd]">·</span>
                <span className="text-[10px] font-semibold tracking-[0.06em] uppercase text-[#aaa] bg-black/[0.04] px-2 py-0.5 rounded-full whitespace-nowrap">
                  {dest?.category}
                </span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[clamp(16px,2.5vw,20px)] font-bold tracking-[-0.04em] text-black leading-none">
                ${booking?.totalPrice?.toLocaleString()}
              </div>
              <div className="text-[11px] text-[#aaa] mt-0.5">
                {booking?.travellers}{" "}
                {booking?.travellers === 1 ? "person" : "people"}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-black/[0.02] rounded-xl p-3">
            {[
              {
                icon: <FiClock className="w-3 h-3 text-[#bbb] shrink-0" />,
                label: "Duration",
                value: dest?.duration,
              },
              {
                icon: <FiCalendar className="w-3 h-3 text-[#bbb] shrink-0" />,
                label: "Travel date",
                value: booking?.travelDate,
              },
              {
                icon: <FiTag className="w-3 h-3 text-[#bbb] shrink-0" />,
                label: "Per person",
                value: `$${dest?.price?.toLocaleString()}`,
              },
            ].map((d) => (
              <div key={d.label} className="flex items-start gap-1.5">
                <div className="mt-[3px]">{d.icon}</div>
                <div className="min-w-0">
                  <div className="text-[10px] text-[#aaa] tracking-[0.06em] uppercase font-semibold">
                    {d.label}
                  </div>
                  <div className="text-[clamp(11px,1.5vw,12.5px)] text-black font-semibold truncate">
                    {d.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-3 pt-3 border-t border-black/[0.06] flex-wrap">
            <span className="text-[11px] text-[#bbb]">
              Booked {booking?.bookedOn}
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {!cancelled && <DeleteBooking booking={booking} />}
              <Link
                href={`/destinations/${dest?._id}`}
                className="flex items-center gap-1.5 text-[11.5px] font-medium text-[#555] border border-black/[0.1] px-3 py-1.5 rounded-lg hover:text-black hover:border-black/25 transition-all"
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

export default function MyBookingsPage({ BOOKINGS }) {
  const confirmed = BOOKINGS.filter((b) => b.status === "confirmed");
  const pending = BOOKINGS.filter((b) => b.status === "pending");
  const cancelled = BOOKINGS.filter((b) => b.status === "cancelled");

  return (
    <main className="min-h-screen bg-[#f5f5f7] pt-[52px]">
      <div className="max-w-4xl mx-auto px-[clamp(16px,4vw,32px)]">
        {/* Header */}
        <div className="py-[clamp(24px,4vw,40px)]">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#aaa] block mb-2">
            My account
          </span>
          <div className="flex items-end justify-between gap-4">
            <h1 className="text-[clamp(24px,4vw,36px)] font-bold tracking-[-0.04em] text-black leading-tight">
              My bookings
            </h1>
            <span className="text-[13px] text-[#888] mb-1 shrink-0">
              {BOOKINGS.length} total
            </span>
          </div>
        </div>

        {/* Empty state */}
        {BOOKINGS.length === 0 && (
          <div className="bg-white rounded-2xl flex flex-col items-center justify-center py-[clamp(48px,8vw,80px)] text-center px-5 mb-8">
            <div className="w-14 h-14 bg-black/[0.04] rounded-2xl flex items-center justify-center mb-4">
              <FiInbox className="w-6 h-6 text-[#ccc]" />
            </div>
            <h3 className="text-[16px] font-semibold text-black tracking-[-0.02em] mb-1.5">
              No bookings yet
            </h3>
            <p className="text-[13px] text-[#aaa] mb-6 max-w-xs leading-relaxed">
              When you book a trip it will appear here
            </p>
            <Link
              href="/destinations"
              className="bg-black text-white text-[13px] font-medium px-6 py-2.5 rounded-xl hover:bg-black/80 transition-colors"
            >
              Explore destinations
            </Link>
          </div>
        )}

        {/* Confirmed */}
        {confirmed.length > 0 && (
          <div className="mb-6">
            <SectionLabel label="Confirmed" count={confirmed.length} />
            <div className="flex flex-col gap-3">
              {confirmed.map((b) => (
                <BookingCard key={b._id} booking={b} />
              ))}
            </div>
          </div>
        )}

        {/* Pending */}
        {pending.length > 0 && (
          <div className="mb-6">
            <SectionLabel label="Pending" count={pending.length} />
            <div className="flex flex-col gap-3">
              {pending.map((b) => (
                <BookingCard key={b._id} booking={b} />
              ))}
            </div>
          </div>
        )}

        {/* Cancelled */}
        {cancelled.length > 0 && (
          <div className="mb-6">
            <SectionLabel label="Cancelled" count={cancelled.length} muted />
            <div className="flex flex-col gap-3">
              {cancelled.map((b) => (
                <BookingCard key={b._id} booking={b} />
              ))}
            </div>
          </div>
        )}

        <div className="pb-[clamp(32px,5vw,48px)]" />
      </div>
    </main>
  );
}
