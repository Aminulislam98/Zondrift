"use client";

import { useState, useRef, useEffect, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft, FiHeart } from "react-icons/fi";

const CardItem = forwardRef(({ dest }, ref) => {
  const [saved, setSaved] = useState(false);

  const ratingLabel =
    dest.rating >= 9
      ? "Exceptional"
      : dest.rating >= 8.5
        ? "Fabulous"
        : dest.rating >= 8
          ? "Very good"
          : "Good";

  return (
    <Link
      ref={ref}
      href={`/destinations/${dest._id}`}
      className="group flex flex-col shrink-0 w-[clamp(220px,28vw,300px)] bg-white rounded-xl overflow-hidden border border-black/[0.07] hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition-shadow duration-200"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/[0.04]">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          quality={85}
          sizes="(max-width: 640px) 70vw, 300px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setSaved((s) => !s);
          }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
        >
          <FiHeart
            className={`w-4 h-4 transition-colors ${saved ? "fill-black text-black" : "text-[#888]"}`}
          />
        </button>
      </div>

      <div className="flex flex-col gap-2 p-3 flex-1">
        <div>
          <h3 className="text-[clamp(13px,1.5vw,15px)] font-bold tracking-[-0.02em] text-black leading-snug line-clamp-2">
            {dest.name}
          </h3>
          <p className="text-[11.5px] text-[#666] tracking-[-0.01em] mt-0.5 truncate">
            {dest.country}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-[#003b95] px-1.5 py-1 rounded">
            <span className="text-[12px] font-bold text-white leading-none">
              {dest.rating}
            </span>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-black tracking-[-0.01em]">
              {ratingLabel}
            </p>
            <p className="text-[11px] text-[#666]">
              {dest?.trips?.toLocaleString()} trips
            </p>
          </div>
        </div>

        <div className="flex items-end justify-end mt-auto pt-2 border-t border-black/[0.05]">
          <p className="text-[12px] text-[#555] tracking-[-0.01em]">
            Starting from{" "}
            <span className="text-[clamp(14px,1.8vw,16px)] font-bold text-black tracking-[-0.03em]">
              ${dest.price?.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
});

CardItem.displayName = "CardItem";

export default function FeaturedSlider({ destinations }) {
  const [current, setCurrent] = useState(0);
  const [stepSize, setStepSize] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const gapSize = 16;
  const total = destinations.length;

  useEffect(() => {
    const calculate = () => {
      if (!cardRef.current || !containerRef.current || !trackRef.current)
        return;
      const cardW = cardRef.current.offsetWidth;
      const containerW = containerRef.current.offsetWidth;
      const totalTrackW = trackRef.current.scrollWidth;
      // Step one card at a time
      setStepSize(cardW + gapSize);
      // Max we can translate without showing white space
      setMaxTranslate(Math.max(0, totalTrackW - containerW));
      // Reset if out of range
      setCurrent(0);
    };
    const t = setTimeout(calculate, 100);
    window.addEventListener("resize", calculate);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", calculate);
    };
  }, [total]);

  const translateX = current * stepSize;
  // Clamp so we never go past the last card
  const safeTranslate = Math.min(translateX, maxTranslate);

  const atStart = current === 0;
  const atEnd = safeTranslate >= maxTranslate;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => {
    if (!atEnd) setCurrent((c) => c + 1);
  };

  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    touchStartX.current = null;
  };

  return (
    <section className="bg-white py-[clamp(32px,5vw,56px)] overflow-hidden">
      {/* Header */}
      <div className="px-[clamp(16px,4vw,40px)] max-w-[1400px] mx-auto mb-[clamp(16px,2.5vw,28px)]">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold tracking-[-0.03em] text-black">
            Featured destinations
          </h2>
          <Link
            href="/destinations"
            className="text-[clamp(12px,1.5vw,14px)] font-semibold text-[#0071c2] hover:text-[#005fa3] hover:underline transition-colors shrink-0"
          >
            Discover all
          </Link>
        </div>
      </div>

      {/* Slider */}
      <div className="px-[clamp(16px,4vw,40px)] max-w-[1400px] mx-auto">
        <div
          ref={containerRef}
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{
              gap: `${gapSize}px`,
              transform: `translateX(-${safeTranslate}px)`,
            }}
          >
            {destinations.map((dest, i) => (
              <CardItem
                key={dest._id}
                dest={dest}
                ref={i === 0 ? cardRef : null}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="px-[clamp(16px,4vw,40px)] max-w-[1400px] mx-auto mt-[clamp(14px,2vw,24px)]">
        <div className="flex items-center justify-between">
          {/* Buttons */}
          <div className="flex justify-between items-center gap-2 w-full">
            <button
              onClick={prev}
              disabled={atStart}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-black/[0.12] flex items-center justify-center hover:border-black/30 hover:bg-black/[0.03] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FiArrowLeft className="w-3.5 h-3.5 text-black" />
            </button>
            <button
              onClick={next}
              disabled={atEnd}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-black/[0.12] flex items-center justify-center hover:border-black/30 hover:bg-black/[0.03] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FiArrowRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
