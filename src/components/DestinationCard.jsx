"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const DestinationCard = ({ dest }) => {
  const [saved, setSaved] = useState(false);

  return (
    <div className="group flex flex-col bg-white rounded-md  border border-black/[0.07] overflow-hidden hover:border-black/[0.14] transition-all duration-300">
      {/* ── Image ── */}
      <div className="relative h-[210px] overflow-hidden bg-black">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          quality={80}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* Rating badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-xl">
          <svg className="w-3 h-3 fill-black shrink-0" viewBox="0 0 12 12">
            <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5l-3 1.5.6-3.2L1.2 4.5l3.3-.5z" />
          </svg>
          <span className="text-[12px] font-medium text-black tracking-[-0.02em]">
            {dest.rating}
          </span>
        </div>

        {/* Save button */}
        <button
          onClick={() => setSaved(!saved)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:scale-105 transition-transform duration-200"
          aria-label="Save"
        >
          <svg
            className={`w-4 h-4 transition-colors duration-200 ${saved ? "fill-black stroke-black" : "fill-transparent stroke-black"}`}
            viewBox="0 0 16 16"
            strokeWidth="1.5"
          >
            <path
              d="M8 13.5l-5.5-5a3.5 3.5 0 0 1 5.5-4.4A3.5 3.5 0 0 1 13.5 8.5L8 13.5z"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Category */}
        <div className="absolute bottom-3 right-3">
          <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-white/90 bg-black/35 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full">
            {dest?.category}
          </span>
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col gap-3 p-4">
        {/* Location */}
        <div className="flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5 text-[#aaa] shrink-0"
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
          <span className="text-[12px] text-[#aaa] tracking-[-0.01em]">
            {dest.country}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-[16px] font-medium tracking-[-0.03em] text-black leading-snug">
          {dest.name}
        </h3>

        {/* Tagline */}
        <p className="text-[12.5px] text-[#888] tracking-[-0.01em] leading-relaxed line-clamp-2">
          {dest.tagline}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5 text-[#aaa] shrink-0"
            viewBox="0 0 14 14"
            fill="none"
          >
            <rect
              x="1.5"
              y="2.5"
              width="11"
              height="10"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M1.5 6h11M4.5 1v3M9.5 1v3"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-[12px] text-[#aaa] tracking-[-0.01em]">
            {dest.duration}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[0.06]" />

        {/* Price + Book Now */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[18px] font-medium text-black tracking-[-0.04em]">
              ${dest.price.toLocaleString()}
            </span>
            <span className="text-[11px] text-[#aaa] tracking-[-0.01em] ml-0.5">
              /person
            </span>
          </div>
          <Link
            href={`/destinations/${dest._id}`}
            className="flex items-center gap-1.5 text-[12px] font-medium text-black tracking-[0.04em] uppercase border border-black/[0.15] px-3.5 py-2 rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-200"
          >
            Book now
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M4 2h6v6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
