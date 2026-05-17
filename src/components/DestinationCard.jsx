"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiMapPin,
  FiStar,
  FiClock,
  FiHeart,
  FiArrowRight,
  FiUsers,
  FiTag,
} from "react-icons/fi";

const DestinationCard = ({ dest }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="group bg-white rounded-xl border border-black/[0.06] overflow-hidden shadow  p-2">
      <div className="flex flex-col sm:flex-row">
        {/* ── Image ──
            mobile: full width, fixed height
            desktop: fixed width, stretches to card height */}
        <div className="relative w-full h-[200px] sm:w-[240px] sm:h-auto shrink-0 overflow-hidden ">
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            quality={85}
            sizes="(max-width: 640px) 100vw, 240px"
            className="object-cover rounded-md transition-transform duration-500 group-hover:scale-[1.03] overflow-hidden"
          />
          {/* Heart */}
          <button
            onClick={() => setSaved(!saved)}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 shadow-md flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Save"
          >
            <FiHeart
              className={`w-3.5 h-3.5 transition-colors ${saved ? "fill-black text-black" : "text-[#888]"}`}
            />
          </button>
          {/* Category */}
          <span className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-[0.08em] uppercase text-white bg-black/50 px-2.5 py-1">
            {dest.category}
          </span>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col flex-1 min-w-0 px-5 py-4 relative">
          {/* Rating — top right */}
          <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5 bg-[#f2f2f2] px-2.5 py-1 rounded-md">
              <FiStar className="w-3 h-3 text-[#444] fill-[#444]" />
              <span className="text-[13px] font-bold text-[#222] tracking-[-0.01em]">
                {dest.rating}
              </span>
            </div>
            <span className="text-[11px] text-[#aaa] tracking-[-0.01em] text-right">
              {dest?.trips?.toLocaleString()} trips
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 mb-1 pr-20">
            <FiMapPin className="w-3 h-3 text-[#bbb] shrink-0" />
            <span className="text-[12px] text-[#888] tracking-[-0.01em] truncate">
              {dest.country}
            </span>
          </div>

          {/* Name */}
          <h3 className="text-[clamp(14px,1.8vw,16px)] font-bold tracking-[-0.03em] text-black mb-1.5 pr-20 leading-snug truncate">
            {dest.name}
          </h3>

          {/* Tagline */}
          <p className="text-[12.5px] text-[#666] tracking-[-0.01em] leading-relaxed mb-3 line-clamp-1">
            {dest.tagline}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-2 flex-wrap mb-auto">
            <div className="flex items-center gap-1">
              <FiClock className="w-3 h-3 text-[#bbb] shrink-0" />
              <span className="text-[11.5px] text-[#888] tracking-[-0.01em] whitespace-nowrap">
                {dest.duration}
              </span>
            </div>
            <span className="text-[#ddd]">·</span>
            <div className="flex items-center gap-1">
              <FiUsers className="w-3 h-3 text-[#bbb] shrink-0" />
              <span className="text-[11.5px] text-[#888] tracking-[-0.01em] whitespace-nowrap">
                {dest.style}
              </span>
            </div>
            <span className="text-[#ddd]">·</span>
            <div className="flex items-center gap-1">
              <FiTag className="w-3 h-3 text-[#bbb] shrink-0" />
              <span className="text-[11.5px] text-[#888] tracking-[-0.01em] whitespace-nowrap">
                {dest.priceRange}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-black/[0.06] mt-3 mb-3" />

          {/* Price + CTA */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-[clamp(18px,2.5vw,22px)] font-bold text-black tracking-[-0.04em] leading-none">
                  ${dest.price.toLocaleString()}
                </span>
                <span className="text-[11px] text-[#aaa] ml-1 tracking-[-0.01em]">
                  /person
                </span>
              </div>
              <p className="text-[11px] text-[#bbb] tracking-[-0.01em] mt-0.5">
                from ${(dest.price * 2).toLocaleString()} for 2
              </p>
            </div>
            <Link
              href={`/destinations/${dest._id}`}
              className="flex items-center gap-1.5 bg-[#0071c2] text-white text-[12.5px] font-semibold tracking-[-0.01em] px-4 py-2 rounded-lg hover:bg-[#005fa3] transition-colors whitespace-nowrap shrink-0"
            >
              View deal
              <FiArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
