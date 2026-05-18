"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiMapPin,
  FiClock,
  FiCheck,
  FiUsers,
} from "react-icons/fi";
import {
  Input,
  Label,
  TextField,
  TextArea,
  Description,
  FieldError,
  Form,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const inputClass =
  "w-full h-11 px-3.5 text-[13.5px] text-black tracking-[-0.01em] bg-[#f8f8f8] border border-black/[0.08] rounded-xl outline-none focus:border-black focus:bg-white transition-colors placeholder:text-[#bbb]";
const labelClass =
  "text-[12.5px] font-semibold text-black tracking-[-0.01em] mb-1.5 block";
const descClass = "text-[11.5px] text-[#aaa] tracking-[-0.01em] mt-1 block";
const errorClass = "text-[11.5px] text-red-500 tracking-[-0.01em] mt-1 block";

export default function BookingForm({ dest }) {
  const [travellers, setTravellers] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;
  const totalPrice = dest.price * travellers;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const bookingData = Object.fromEntries(form.entries());

    bookingData.userId = user?.id;
    bookingData.destinationId = dest._id;
    bookingData.destinationName = dest.name;
    bookingData.destinationImage = dest.image;
    bookingData.destination = {
      _id: dest._id,
      name: dest.name,
      image: dest.image,
      country: dest.country,
      category: dest.category,
      duration: dest.duration,
      price: dest.price,
    };
    bookingData.travellers = Number(travellers);
    bookingData.totalPrice = totalPrice;
    bookingData.pricePerPerson = dest.price;
    bookingData.status = "pending";
    bookingData.bookedOn = new Date().toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    await fetch("http://localhost:4000/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  // ── Success screen ──
  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f5f5f7] pt-[52px] flex items-center justify-center px-5">
        <div className="bg-white rounded-2xl max-w-md w-full text-center p-[clamp(32px,5vw,48px)]">
          <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mx-auto mb-5">
            <FiCheck className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-[24px] font-bold tracking-[-0.04em] text-black mb-2">
            Booking received
          </h1>
          <p className="text-[13.5px] text-[#888] leading-relaxed mb-1.5">
            A travel advisor will contact you within 24 hours to confirm your
            trip to{" "}
            <span className="text-black font-semibold">{dest.name}</span>.
          </p>
          <p className="text-[12.5px] text-[#aaa] mb-8">
            Check your email for a confirmation summary.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
            <Link
              href="/bookings"
              className="bg-black text-white text-[13px] font-semibold px-6 py-2.5 rounded-xl hover:bg-black/80 transition-colors"
            >
              View my bookings
            </Link>
            <Link
              href="/destinations"
              className="text-[13px] font-medium text-[#555] border border-black/[0.12] px-6 py-2.5 rounded-xl hover:border-black/25 transition-colors"
            >
              Explore more
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7] pt-[52px]">
      <div className="max-w-5xl mx-auto px-[clamp(16px,4vw,32px)]">
        {/* Header */}
        <div className="py-[clamp(20px,3vw,32px)]">
          <Link
            href={`/destinations/${dest._id}`}
            className="flex items-center gap-2 text-[12.5px] text-[#888] hover:text-black transition-colors mb-5 w-fit"
          >
            <FiArrowLeft className="w-3.5 h-3.5" />
            Back to destination
          </Link>
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#aaa] block mb-2">
            Booking
          </span>
          <h1 className="text-[clamp(22px,4vw,34px)] font-bold tracking-[-0.04em] text-black">
            Complete your booking
          </h1>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 pb-[clamp(32px,5vw,48px)]">
          {/* ── Left — Form ── */}
          <Form
            onSubmit={handleSubmit}
            validationBehavior="native"
            className="flex flex-col gap-4"
          >
            {/* Section 01 — Personal details */}
            <div className="bg-white rounded-2xl p-[clamp(16px,3vw,24px)] flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-white">01</span>
                </div>
                <h2 className="text-[15px] font-semibold tracking-[-0.02em] text-black">
                  Personal details
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextField name="fullName" isRequired className="w-full">
                  <Label className={labelClass}>Full name *</Label>
                  <Input placeholder="Aminul Islam" className={inputClass} />
                  <FieldError className={errorClass} />
                </TextField>
                <TextField name="phone" isRequired className="w-full">
                  <Label className={labelClass}>Phone number *</Label>
                  <Input
                    type="tel"
                    placeholder="+44 7700 000000"
                    className={inputClass}
                  />
                  <FieldError className={errorClass} />
                </TextField>
              </div>

              <TextField name="email" isRequired className="w-full">
                <Label className={labelClass}>Email address *</Label>
                <Input
                  type="email"
                  placeholder="aminul@example.com"
                  className={inputClass}
                />
                <Description className={descClass}>
                  Booking confirmation will be sent to this email
                </Description>
                <FieldError className={errorClass} />
              </TextField>
            </div>

            {/* Section 02 — Trip details */}
            <div className="bg-white rounded-2xl p-[clamp(16px,3vw,24px)] flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-black rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-white">02</span>
                </div>
                <h2 className="text-[15px] font-semibold tracking-[-0.02em] text-black">
                  Trip details
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Travellers counter */}
                <div className="flex flex-col gap-1.5">
                  <Label className={labelClass}>Number of travellers</Label>
                  <div className="flex items-center bg-[#f8f8f8] border border-black/[0.08] rounded-xl h-11 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setTravellers(Math.max(1, travellers - 1))}
                      className="w-11 h-full flex items-center justify-center text-[#888] hover:text-black hover:bg-black/[0.04] transition-colors border-r border-black/[0.08]"
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
                    <div className="flex-1 flex items-center justify-center gap-2">
                      <FiUsers className="w-3.5 h-3.5 text-[#bbb]" />
                      <span className="text-[13.5px] font-medium text-black tracking-[-0.02em]">
                        {travellers} {travellers === 1 ? "person" : "people"}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setTravellers(Math.min(20, travellers + 1))
                      }
                      className="w-11 h-full flex items-center justify-center text-[#888] hover:text-black hover:bg-black/[0.04] transition-colors border-l border-black/[0.08]"
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
                  <span className={descClass}>
                    ${dest.price.toLocaleString()} × {travellers} = $
                    {totalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Travel date */}
                <TextField name="travelDate" isRequired className="w-full">
                  <Label className={labelClass}>Preferred travel date *</Label>
                  <Input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className={inputClass}
                  />
                  <Description className={descClass}>
                    We will confirm the exact date with you
                  </Description>
                  <FieldError className={errorClass} />
                </TextField>
              </div>

              {/* Special requests */}
              <TextField name="specialRequests" className="w-full">
                <Label className={labelClass}>Special requests</Label>
                <TextArea
                  placeholder="Dietary requirements, accessibility needs, room preferences..."
                  className="w-full px-3.5 py-3 text-[13.5px] text-black tracking-[-0.01em] bg-[#f8f8f8] border border-black/[0.08] rounded-xl outline-none focus:border-black focus:bg-white transition-colors placeholder:text-[#bbb] resize-none leading-relaxed min-h-[100px]"
                />
                <Description className={descClass}>
                  Optional — anything we should know
                </Description>
              </TextField>
            </div>

            {/* Notice */}
            <div className="bg-white rounded-2xl px-5 py-4 border border-black/[0.06]">
              <p className="text-[13px] text-[#555] leading-relaxed">
                <span className="font-semibold text-black">
                  No payment required now.
                </span>{" "}
                A Zondrift travel advisor will review your booking and contact
                you within 24 hours.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white text-[13.5px] font-semibold tracking-[-0.01em] py-4 rounded-2xl hover:bg-black/80 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
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
          </Form>

          {/* ── Right — Summary card ── */}
          <div className="hidden lg:block">
            <div className="sticky top-[calc(52px+16px)] bg-white rounded-2xl overflow-hidden border border-black/[0.07]">
              {/* Image */}
              <div className="relative h-[160px] bg-black">
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
                {/* Dest info */}
                <div>
                  <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-black mb-1">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <FiMapPin className="w-3 h-3 text-[#aaa]" />
                    <span className="text-[12.5px] text-[#888]">
                      {dest.country}
                    </span>
                    <span className="text-[#ddd]">·</span>
                    <FiClock className="w-3 h-3 text-[#aaa]" />
                    <span className="text-[12.5px] text-[#888]">
                      {dest.duration}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-black/[0.06]" />

                {/* Pricing */}
                <div className="flex flex-col gap-2 bg-black/[0.02] rounded-xl p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[12.5px] text-[#888]">
                      Price per person
                    </span>
                    <span className="text-[12.5px] font-semibold text-black">
                      ${dest.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12.5px] text-[#888]">
                      Travellers
                    </span>
                    <span className="text-[12.5px] font-semibold text-black">
                      × {travellers}
                    </span>
                  </div>
                  <div className="h-px bg-black/[0.08]" />
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-black">
                      Total estimate
                    </span>
                    <span className="text-[22px] font-bold text-black tracking-[-0.04em]">
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#aaa]">
                    Final price confirmed by your advisor
                  </span>
                </div>

                <div className="h-px bg-black/[0.06]" />

                {/* Included */}
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#aaa] mb-3">
                    Included
                  </p>
                  <div className="flex flex-col gap-2">
                    {dest?.included?.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <FiCheck className="w-3.5 h-3.5 text-black/40 shrink-0 mt-0.5" />
                        <span className="text-[12.5px] text-[#555] leading-relaxed">
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
      </div>

      {/* Mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.08] px-5 py-4 flex items-center justify-between gap-4 z-40">
        <div>
          <div className="text-[11px] text-[#aaa]">Total estimate</div>
          <div className="text-[20px] font-bold tracking-[-0.04em] text-black">
            ${totalPrice.toLocaleString()}
          </div>
        </div>
        <div className="text-[12px] text-[#888]">
          {travellers} {travellers === 1 ? "person" : "people"} ·{" "}
          {dest.duration}
        </div>
      </div>

      <div className="lg:hidden h-24" />
    </main>
  );
}
