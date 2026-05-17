"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiMapPin,
  FiClock,
  FiStar,
  FiArrowRight,
  FiArrowLeft,
} from "react-icons/fi";

export default function FeaturedSlider({ destinations }) {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef(null);
  const gapSize = 16;
  const total = destinations.length;

  // Measure actual card width after render
  useEffect(() => {
    const measure = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const touchStartX = useRef(null);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next(); // swipe left → next
    if (diff < -50) prev(); // swipe right → prev
    touchStartX.current = null;
  };

  const translateX = current * (cardWidth + gapSize);

  return (
    <section className="bg-white py-[clamp(40px,7vw,50px)] overflow-hidden">
      {/* Header */}
      <div className="px-[clamp(16px,4vw,40px)] max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-4 mb-[clamp(20px,3vw,36px)]">
          <div>
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-[clamp(6px,1vw,10px)]">
              Popular right now
            </span>
            <h2 className="text-[clamp(22px,4vw,42px)] font-medium tracking-[-0.04em] text-black leading-[1.05]">
              Featured destinations
            </h2>
          </div>
          <Link
            href="/destinations"
            className="flex items-center gap-1.5 text-[clamp(12px,1.5vw,13.5px)] text-[#555] tracking-[-0.01em] hover:text-black transition-colors shrink-0 group border border-black/[0.12] px-4 py-2 hover:border-black/25"
          >
            All destinations
            <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      {/* Slider */}
      <div className="px-[clamp(16px,4vw,40px)] max-w-[1400px] mx-auto">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{
              gap: `${gapSize}px`,
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {destinations.map((dest, i) => (
              <Link
                key={dest._id}
                href={`/destinations/${dest._id}`}
                ref={i === 0 ? cardRef : null}
                className="group flex flex-col shrink-0 w-[clamp(260px,38vw,520px)]"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 38vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 px-2 py-1">
                    <FiStar className="w-3 h-3 text-black fill-black" />
                    <span className="text-[12px] font-medium text-black">
                      {dest.rating}
                    </span>
                  </div>

                  {/* Category */}
                  <span className="absolute top-3 left-3 text-[10px] font-medium tracking-[0.08em] uppercase text-white/90 bg-black/30 backdrop-blur-sm border border-white/15 px-2.5 py-1">
                    {dest.category}
                  </span>
                </div>

                {/* Info */}
                <div className="pt-[clamp(10px,1.5vw,14px)] flex flex-col gap-[clamp(6px,1vw,8px)]">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <FiMapPin className="w-3 h-3 text-[#bbb] shrink-0" />
                        <span className="text-[clamp(11px,1.3vw,12px)] text-[#999] tracking-[-0.01em] truncate">
                          {dest.country}
                        </span>
                      </div>
                      <h3 className="text-[clamp(15px,2vw,18px)] font-medium tracking-[-0.03em] text-black truncate">
                        {dest.name}
                      </h3>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="text-[clamp(15px,2vw,18px)] font-medium text-black tracking-[-0.03em]">
                        ${dest.price?.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-[#aaa] block">
                        /person
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <FiClock className="w-3 h-3 text-[#bbb]" />
                      <span className="text-[clamp(11px,1.3vw,12.5px)] text-[#999] tracking-[-0.01em]">
                        {dest.duration}
                      </span>
                    </div>
                    <span className="text-[clamp(11px,1.3vw,12.5px)] font-medium text-black flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                      Book now
                      <FiArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="px-[clamp(16px,4vw,40px)] max-w-[1400px] mx-auto mt-[clamp(16px,2.5vw,28px)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[clamp(13px,1.5vw,15px)] font-medium text-black tracking-[-0.02em]">
              {current + 1}/{total}
            </span>
            <div className="w-[clamp(80px,12vw,160px)] h-px bg-black/[0.08] relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-black transition-all duration-500"
                style={{ width: `${((current + 1) / total) * 100}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Previous"
              className="w-[clamp(36px,4vw,44px)] h-[clamp(36px,4vw,44px)] border border-black/[0.12] flex items-center justify-center hover:border-black/30 hover:bg-black/[0.03] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FiArrowLeft className="w-4 h-4 text-black" />
            </button>
            <button
              onClick={next}
              disabled={current === total - 1}
              aria-label="Next"
              className="w-[clamp(36px,4vw,44px)] h-[clamp(36px,4vw,44px)] border border-black/[0.12] flex items-center justify-center hover:border-black/30 hover:bg-black/[0.03] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FiArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
