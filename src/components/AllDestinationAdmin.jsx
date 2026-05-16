"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiClock, FiEdit2, FiMapPin, FiStar, FiTrash2 } from "react-icons/fi";

const AllDestinationAdmin = ({ dest }) => {
  return (
    <div>
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
              <span className="text-[12px] text-[#aaa]">{dest.country}</span>
              <span className="text-[#ddd]">·</span>
              <FiStar className="w-3 h-3 text-[#aaa]" />
              <span className="text-[12px] text-[#aaa]">{dest.rating}</span>
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
    </div>
  );
};

export default AllDestinationAdmin;
