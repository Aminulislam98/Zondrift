import DestinationAdminCard from "@/components/AllDestinationAdmin";
import Link from "next/link";
import { FiPlus, FiMapPin } from "react-icons/fi";

export default async function AdminDestinationsPage() {
  const res = await fetch("http://localhost:4000/destination");
  const destinations = await res.json();

  const handleDelete = (id) => {
    // TODO: connect delete to Express API
    // await fetch(`http://localhost:4000/destination/${id}`, { method: "DELETE" })
    console.log("delete destination:", id);
  };

  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-5xl mx-auto px-5">
        {/* ── Header ── */}
        <div className="flex items-end justify-between py-12 border-b border-black/[0.06]">
          <div>
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
              Admin panel
            </span>
            <h1 className="text-[32px] md:text-[42px] font-medium tracking-[-0.04em] text-black leading-[1.05]">
              Destinations
            </h1>
            <p className="text-[14px] text-[#888] tracking-[-0.01em] mt-2">
              {destinations.length} destinations published
            </p>
          </div>
          <Link
            href="/addDestination"
            className="flex items-center gap-2 bg-black text-white text-[13px] font-medium tracking-[-0.01em] px-5 py-2.5 hover:bg-black/80 transition-colors"
          >
            <FiPlus className="w-4 h-4" />
            Add new
          </Link>
        </div>

        {/* ── Table header — desktop ── */}
        <div className="hidden md:grid grid-cols-[64px_1fr_120px_100px_100px_120px] gap-4 px-4 py-3 border-b border-black/[0.06]">
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
            Photo
          </span>
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
            Destination
          </span>
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
            Category
          </span>
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
            Price
          </span>
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
            Rating
          </span>
          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa] text-right">
            Actions
          </span>
        </div>

        {/* ── Destination rows ── */}
        <div className="flex flex-col divide-y divide-black/[0.05]">
          {destinations.map((dest) => (
            <DestinationAdminCard
              key={dest._id}
              dest={dest}
            ></DestinationAdminCard>
          ))}
        </div>

        {/* ── Empty state ── */}
        {destinations.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 border border-black/[0.08] flex items-center justify-center mb-5">
              <FiMapPin className="w-5 h-5 text-[#ccc]" />
            </div>
            <h3 className="text-[16px] font-medium text-black tracking-[-0.02em] mb-2">
              No destinations yet
            </h3>
            <p className="text-[13px] text-[#aaa] tracking-[-0.01em] mb-6">
              Add your first destination to get started
            </p>
            <Link
              href="/admin/add-destination"
              className="flex items-center gap-2 bg-black text-white text-[13px] px-5 py-2.5"
            >
              <FiPlus className="w-4 h-4" />
              Add destination
            </Link>
          </div>
        )}

        <div className="pb-16" />
      </div>
    </main>
  );
}
