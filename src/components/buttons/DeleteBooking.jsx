"use client";

import { useState } from "react";
import Image from "next/image";
import { FiTrash2, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteBooking({ booking }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dest = booking.destination;

  const handleDelete = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:4000/booking/${booking._id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    setLoading(false);
    if (res.ok) {
      toast.success(`${dest.name} booking deleted`);
      setOpen(false);
      router.refresh();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 text-[clamp(11px,1.3vw,12px)] text-[#aaa] tracking-[-0.01em] border border-black/[0.08] px-3 py-1.5 hover:text-red-500 hover:border-red-200 transition-all bg-white"
      >
        <FiTrash2 className="w-3 h-3" />
        Delete
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[3px]" />

          {/* Sheet — slides up on mobile, centered on desktop */}
          <div
            className="relative bg-white w-full sm:max-w-[380px] z-10 overflow-hidden sm:mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full width destination image */}
            <div className="relative w-full h-[160px] bg-black">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                quality={85}
                sizes="380px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 w-7 h-7 bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
              >
                <FiX className="w-3.5 h-3.5" />
              </button>

              {/* Dest info overlaid on image */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                <p className="text-[11px] text-white/50 tracking-[0.06em] uppercase mb-0.5">
                  {dest.country} · {booking.travelDate}
                </p>
                <h3 className="text-[18px] font-medium text-white tracking-[-0.03em] leading-tight">
                  {dest.name}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="px-5 pt-5 pb-4">
              <h2 className="text-[15px] font-medium text-black tracking-[-0.03em] mb-1.5">
                Delete this booking?
              </h2>
              <p className="text-[13px] text-[#888] tracking-[-0.01em] leading-relaxed">
                This will permanently remove your booking for{" "}
                <span className="text-black font-medium">{dest.name}</span>.
                This action cannot be undone.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 px-5 pb-5">
              <button
                onClick={handleDelete}
                disabled={loading}
                className="w-full bg-black text-white text-[13.5px] font-medium tracking-[-0.01em] py-3 hover:bg-red-500 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
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
                ) : (
                  <FiTrash2 className="w-4 h-4" />
                )}
                {loading ? "Deleting..." : "Yes, delete booking"}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="w-full text-[13.5px] text-[#555] tracking-[-0.01em] py-3 border border-black/[0.1] hover:border-black/20 hover:text-black transition-all bg-white"
              >
                Keep booking
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
