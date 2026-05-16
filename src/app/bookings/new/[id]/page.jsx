"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiUser,
  FiMail,
  FiPhone,
  FiCalendar,
  FiUsers,
  FiMessageSquare,
  FiMapPin,
  FiClock,
  FiCheck,
} from "react-icons/fi";

// ── Hardcoded destination — replace with fetch using searchParams.destination ──
// Real:
// const searchParams = useSearchParams()
// const destId = searchParams.get("destination")
// const res = await fetch(`http://localhost:4000/destination/${destId}`)
// const dest = await res.json()
const dest = {
  _id: "1",
  name: "Bali Paradise",
  country: "Indonesia",
  category: "Beach",
  duration: "7 Days / 6 Nights",
  image:
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop&q=80",
  price: 2700,
  rating: 4.9,
  included: [
    "Return flights from London",
    "7 nights accommodation",
    "Daily breakfast",
    "Airport transfers",
  ],
};
// ─────────────────────────────────────────────────

const inputClass =
  "w-full h-11 px-3.5 text-[13.5px] text-black tracking-[-0.01em] bg-white border border-black/[0.15] rounded-none outline-none focus:border-black transition-colors placeholder:text-[#bbb]";

const labelClass =
  "text-[13px] font-medium text-black tracking-[-0.01em] block mb-1.5";

const descClass = "text-[12px] text-[#aaa] tracking-[-0.01em] mt-1 block";

function Field({ label, hint, children }) {
  return (
    <div className="flex flex-col w-full">
      <label className={labelClass}>{label}</label>
      {children}
      {hint && <span className={descClass}>{hint}</span>}
    </div>
  );
}

export default function BookingPage() {
  const [travellers, setTravellers] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const totalPrice = dest.price * travellers;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const bookingData = Object.fromEntries(form.entries());

    // attach extra fields
    bookingData.destinationId = dest._id;
    bookingData.destinationName = dest.name;
    bookingData.travellers = Number(travellers);
    bookingData.totalPrice = totalPrice;
    bookingData.pricePerPerson = dest.price;
    bookingData.status = "pending";
    bookingData.bookedOn = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    console.log("booking data:", bookingData);

    // TODO: send to Express API
    // const res = await fetch("http://localhost:4000/bookings", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(bookingData),
    // })
    // const data = await res.json()

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  // ── Success state ──
  if (submitted) {
    return (
      <main className="min-h-screen bg-white pt-[52px] flex items-center justify-center px-5">
        <div className="max-w-md w-full text-center py-20">
          <div className="w-14 h-14 bg-black flex items-center justify-center mx-auto mb-6">
            <FiCheck className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-[28px] font-medium tracking-[-0.04em] text-black mb-3">
            Booking received
          </h1>
          <p className="text-[14px] text-[#888] tracking-[-0.01em] leading-relaxed mb-2">
            Thank you for booking with Zondrift. A travel advisor will contact
            you within 24 hours to confirm your trip to{" "}
            <span className="text-black font-medium">{dest.name}</span>.
          </p>
          <p className="text-[13px] text-[#aaa] tracking-[-0.01em] mb-10">
            Check your email for a confirmation summary.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <Link
              href="/bookings"
              className="bg-black text-white text-[13px] font-medium tracking-[-0.01em] px-6 py-2.5 hover:bg-black/80 transition-colors"
            >
              View my bookings
            </Link>
            <Link
              href="/destinations"
              className="text-[13px] text-[#555] tracking-[-0.01em] border border-black/[0.15] px-6 py-2.5 hover:border-black/30 transition-colors"
            >
              Explore more
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-5xl mx-auto px-5">
        {/* Header */}
        <div className="py-10 border-b border-black/[0.06]">
          <Link
            href={`/destinations/${dest._id}`}
            className="flex items-center gap-2 text-[13px] text-[#888] hover:text-black transition-colors mb-6 w-fit"
          >
            <FiArrowLeft className="w-3.5 h-3.5" />
            Back to destination
          </Link>
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
            Booking
          </span>
          <h1 className="text-[30px] md:text-[40px] font-medium tracking-[-0.04em] text-black leading-[1.05]">
            Complete your booking
          </h1>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 py-12">
          {/* ── Left — Form ── */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            {/* Section 1 — Personal details */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-black flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-medium text-white">01</span>
                </div>
                <h2 className="text-[15px] font-medium tracking-[-0.02em] text-black">
                  Personal details
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full name">
                    <div className="relative">
                      <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#bbb]" />
                      <input
                        name="fullName"
                        required
                        placeholder="Aminul Islam"
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </Field>

                  <Field label="Phone number">
                    <div className="relative">
                      <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#bbb]" />
                      <input
                        name="phone"
                        required
                        type="tel"
                        placeholder="+44 7700 000000"
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </Field>
                </div>

                <Field
                  label="Email address"
                  hint="Booking confirmation will be sent to this email"
                >
                  <div className="relative">
                    <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#bbb]" />
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="aminul@example.com"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </Field>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-black/[0.06]" />

            {/* Section 2 — Trip details */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-black flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-medium text-white">02</span>
                </div>
                <h2 className="text-[15px] font-medium tracking-[-0.02em] text-black">
                  Trip details
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Number of travellers */}
                  <Field
                    label="Number of travellers"
                    hint={`$${dest.price.toLocaleString()} × ${travellers} = $${totalPrice.toLocaleString()}`}
                  >
                    <div className="flex items-center border border-black/[0.15] h-11">
                      <button
                        type="button"
                        onClick={() =>
                          setTravellers(Math.max(1, travellers - 1))
                        }
                        className="w-11 h-full flex items-center justify-center text-[#888] hover:text-black hover:bg-black/[0.03] transition-colors border-r border-black/[0.1]"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2 7h10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                      <div className="flex-1 flex items-center justify-center">
                        <FiUsers className="w-3.5 h-3.5 text-[#bbb] mr-2" />
                        <span className="text-[14px] font-medium text-black tracking-[-0.02em]">
                          {travellers} {travellers === 1 ? "person" : "people"}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setTravellers(Math.min(20, travellers + 1))
                        }
                        className="w-11 h-full flex items-center justify-center text-[#888] hover:text-black hover:bg-black/[0.03] transition-colors border-l border-black/[0.1]"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M6 2v8M2 6h8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </Field>

                  {/* Travel date */}
                  <Field
                    label="Preferred travel date"
                    hint="We will confirm the exact date with you"
                  >
                    <div className="relative">
                      <FiCalendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#bbb] pointer-events-none" />
                      <input
                        name="travelDate"
                        required
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </Field>
                </div>

                {/* Special requests */}
                <Field
                  label="Special requests"
                  hint="Dietary requirements, accessibility needs, room preferences etc."
                >
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3.5 top-3.5 w-3.5 h-3.5 text-[#bbb]" />
                    <textarea
                      name="specialRequests"
                      rows={4}
                      placeholder="Any special requirements or requests for your trip..."
                      className="w-full px-3.5 py-3 pl-10 text-[13.5px] text-black tracking-[-0.01em] bg-white border border-black/[0.15] rounded-none outline-none focus:border-black transition-colors placeholder:text-[#bbb] resize-none leading-relaxed"
                    />
                  </div>
                </Field>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-black/[0.06]" />

            {/* Notice */}
            <div className="bg-black/[0.02] border border-black/[0.06] px-4 py-4">
              <p className="text-[13px] text-[#555] tracking-[-0.01em] leading-relaxed">
                <span className="font-medium text-black">
                  No payment required now.
                </span>{" "}
                A Zondrift travel advisor will review your booking and contact
                you within 24 hours to confirm availability and arrange payment.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white text-[13.5px] font-medium tracking-[-0.01em] py-4 hover:bg-black/80 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      opacity="0.25"
                    />
                    <path
                      d="M12 2a10 10 0 0 1 10 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  Confirm booking
                  <FiCheck className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* ── Right — Summary card ── */}
          <div className="hidden lg:block">
            <div className="sticky top-[72px] border border-black/[0.1] overflow-hidden">
              {/* Destination image */}
              <div className="relative h-[180px] bg-black">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  quality={80}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="p-5 flex flex-col gap-4">
                {/* Destination info */}
                <div>
                  <h3 className="text-[16px] font-medium tracking-[-0.03em] text-black mb-1">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <FiMapPin className="w-3.5 h-3.5 text-[#aaa]" />
                    <span className="text-[13px] text-[#888] tracking-[-0.01em]">
                      {dest.country}
                    </span>
                    <span className="text-[#ddd]">·</span>
                    <FiClock className="w-3.5 h-3.5 text-[#aaa]" />
                    <span className="text-[13px] text-[#888] tracking-[-0.01em]">
                      {dest.duration}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-black/[0.06]" />

                {/* Price breakdown */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-[#888] tracking-[-0.01em]">
                      Price per person
                    </span>
                    <span className="text-[13px] font-medium text-black tracking-[-0.02em]">
                      ${dest.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] text-[#888] tracking-[-0.01em]">
                      Travellers
                    </span>
                    <span className="text-[13px] font-medium text-black tracking-[-0.02em]">
                      × {travellers}
                    </span>
                  </div>
                  <div className="h-px bg-black/[0.06]" />
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-black tracking-[-0.01em]">
                      Total estimate
                    </span>
                    <span className="text-[20px] font-medium text-black tracking-[-0.04em]">
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#aaa] tracking-[-0.01em]">
                    Final price confirmed by your advisor
                  </span>
                </div>

                <div className="h-px bg-black/[0.06]" />

                {/* What's included */}
                <div>
                  <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa] mb-3">
                    Included
                  </p>
                  <div className="flex flex-col gap-2">
                    {dest.included.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <FiCheck className="w-3.5 h-3.5 text-black/40 shrink-0 mt-0.5" />
                        <span className="text-[12.5px] text-[#555] tracking-[-0.01em] leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile summary bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.08] px-5 py-4 flex items-center justify-between gap-4 z-40">
          <div>
            <div className="text-[11px] text-[#aaa] tracking-[-0.01em]">
              Total estimate
            </div>
            <div className="text-[20px] font-medium tracking-[-0.04em] text-black">
              ${totalPrice.toLocaleString()}
            </div>
          </div>
          <div className="text-[12px] text-[#888] tracking-[-0.01em]">
            {travellers} {travellers === 1 ? "person" : "people"} ·{" "}
            {dest.duration}
          </div>
        </div>

        <div className="lg:hidden h-24" />
      </div>
    </main>
  );
}
