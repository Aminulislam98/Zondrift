"use client";

import Image from "next/image";
import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function DestinationGallery({ image, images = [] }) {
  const [lightbox, setLightbox] = useState(null);

  const allImages = [image, ...images.filter(Boolean)].filter(Boolean);
  const slots = [...allImages, ...Array(5).fill(null)].slice(0, 5);

  const openLightbox = (i) => {
    if (allImages[i]) setLightbox(i);
  };
  const prev = () => setLightbox((i) => (i > 0 ? i - 1 : allImages.length - 1));
  const next = () => setLightbox((i) => (i < allImages.length - 1 ? i + 1 : 0));

  return (
    <>
      {/* ── Gallery grid ── */}
      <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-[clamp(3px,0.4vw,6px)] h-[clamp(180px,25vw,340px)]">
        {/* Main image — spans 2 rows */}
        <div
          className="relative row-span-2 overflow-hidden bg-black/[0.04] cursor-pointer group"
          onClick={() => openLightbox(0)}
        >
          {slots[0] ? (
            <>
              <Image
                src={slots[0]}
                alt="Main"
                fill
                priority
                quality={75}
                sizes="(max-width: 768px) 50vw, 40vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[12px] text-[#bbb] tracking-[-0.01em]">
                No image
              </span>
            </div>
          )}
        </div>

        {/* 4 smaller images */}
        {slots.slice(1, 5).map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden bg-black/[0.04] cursor-pointer group"
            onClick={() => openLightbox(i + 1)}
          >
            {src ? (
              <>
                <Image
                  src={src}
                  alt={`Photo ${i + 2}`}
                  fill
                  quality={70}
                  sizes="(max-width: 768px) 25vw, 15vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                {i === 3 && allImages.length > 5 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-[13px] font-medium tracking-[-0.01em]">
                      +{allImages.length - 5} photos
                    </span>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-[11px] text-[#ccc] tracking-[-0.01em]">
                  No image
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-9 h-9 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <FiX className="w-5 h-5" />
          </button>

          <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[13px] text-white/60 tracking-[-0.01em]">
            {lightbox + 1} / {allImages.length}
          </span>

          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
          )}

          <div
            className="relative w-full max-w-4xl mx-[clamp(48px,8vw,80px)] aspect-[16/10]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[lightbox]}
              alt={`Photo ${lightbox + 1}`}
              fill
              quality={85}
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {allImages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 w-10 h-10 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
