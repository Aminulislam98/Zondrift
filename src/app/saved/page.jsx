import Image from "next/image";
import Link from "next/link";
import {
  FiHeart,
  FiStar,
  FiCompass,
  FiArrowUpRight,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

// ── Fetch saved destinations ──
async function getSaved() {
  const res = await fetch("http://localhost:4000/saved", {
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function SavedPage() {
  const saved = await getSaved();

  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 py-12 border-b border-black/[0.06]">
          <div>
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
              My account
            </span>
            <h1 className="text-[32px] md:text-[42px] font-medium tracking-[-0.04em] text-black leading-[1.05]">
              Saved destinations
            </h1>
            <p className="text-[14px] text-[#888] tracking-[-0.01em] mt-2">
              {saved.length} destination{saved.length !== 1 ? "s" : ""} saved
            </p>
          </div>
          <Link
            href="/destinations"
            className="flex items-center gap-2 text-[13px] text-[#555] border border-black/[0.12] px-5 py-2.5 hover:border-black/25 hover:text-black transition-all w-fit"
          >
            <FiCompass className="w-4 h-4" />
            Explore more
          </Link>
        </div>

        {/* Grid */}
        {saved.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 py-12">
            {saved.map((dest) => (
              <div key={dest._id} className="group flex flex-col">
                {/* Image */}
                <div className="relative h-[220px] overflow-hidden bg-black mb-3">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    quality={80}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Category */}
                  <span className="absolute bottom-3 left-3 text-[10px] font-medium tracking-[0.08em] uppercase text-white/90 bg-black/30 backdrop-blur-sm border border-white/15 px-2.5 py-1">
                    {dest.category}
                  </span>

                  {/* Saved heart */}
                  <div className="absolute top-3 right-3 w-7 h-7 bg-white/95 flex items-center justify-center">
                    <FiHeart className="w-3.5 h-3.5 text-black fill-black" />
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-medium tracking-[-0.03em] text-black truncate">
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <FiMapPin className="w-3 h-3 text-[#bbb] shrink-0" />
                      <span className="text-[12px] text-[#999] tracking-[-0.01em]">
                        {dest.country}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0 mt-0.5">
                    <FiStar className="w-3 h-3 text-black fill-black" />
                    <span className="text-[13px] font-medium text-black">
                      {dest.rating}
                    </span>
                  </div>
                </div>

                {/* Duration + price */}
                <div className="flex items-center justify-between mt-1 mb-4">
                  <div className="flex items-center gap-1.5">
                    <FiClock className="w-3 h-3 text-[#bbb]" />
                    <span className="text-[12px] text-[#999] tracking-[-0.01em]">
                      {dest.duration}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[15px] font-medium text-black tracking-[-0.02em]">
                      ${dest.price?.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-[#aaa]">/person</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-auto">
                  <Link
                    href={`/destinations/${dest._id}`}
                    className="flex-1 flex items-center justify-center gap-1.5 text-[12.5px] font-medium text-black border border-black/[0.12] py-2.5 hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                  >
                    View trip
                    <FiArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href={`/bookings/new?destination=${dest._id}`}
                    className="flex-1 flex items-center justify-center text-[12.5px] text-[#555] border border-black/[0.08] py-2.5 hover:border-black/20 hover:text-black transition-all duration-200"
                  >
                    Book now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-14 h-14 border border-black/[0.08] flex items-center justify-center mb-6">
              <FiHeart className="w-5 h-5 text-[#ccc]" />
            </div>
            <h3 className="text-[18px] font-medium text-black tracking-[-0.03em] mb-2">
              No saved destinations yet
            </h3>
            <p className="text-[13.5px] text-[#aaa] tracking-[-0.01em] mb-8 max-w-xs leading-relaxed">
              Browse destinations and tap the heart icon to save them here for
              later.
            </p>
            <Link
              href="/destinations"
              className="flex items-center gap-2 bg-black text-white text-[13px] font-medium px-6 py-2.5 hover:bg-black/80 transition-colors"
            >
              <FiCompass className="w-4 h-4" />
              Explore destinations
            </Link>
          </div>
        )}

        <div className="pb-16" />
      </div>
    </main>
  );
}
