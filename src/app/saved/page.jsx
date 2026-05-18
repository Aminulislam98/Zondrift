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

async function getSaved() {
  const res = await fetch("http://localhost:4000/saved", { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function SavedPage() {
  const saved = await getSaved();

  return (
    <main className="min-h-screen bg-[#f5f5f7] pt-[52px]">
      <div className="max-w-5xl mx-auto px-[clamp(16px,4vw,32px)]">
        {/* Header */}
        <div className="py-[clamp(24px,4vw,40px)]">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#aaa] block mb-2">
            My account
          </span>
          <div className="flex items-end justify-between gap-4">
            <h1 className="text-[clamp(24px,4vw,36px)] font-bold tracking-[-0.04em] text-black leading-tight">
              Saved destinations
            </h1>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[13px] text-[#888] shrink-0">
                {saved.length} saved
              </span>
              <Link
                href="/destinations"
                className="hidden sm:flex items-center gap-1.5 text-[12.5px] font-medium text-[#555] border border-black/[0.12] px-4 py-2 rounded-xl hover:border-black/25 hover:text-black transition-all bg-white shrink-0"
              >
                <FiCompass className="w-3.5 h-3.5" />
                Explore more
              </Link>
            </div>
          </div>
        </div>

        {/* Grid */}
        {saved.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-[clamp(32px,5vw,48px)]">
            {saved.map((dest) => (
              <div
                key={dest._id}
                className="group bg-white rounded-2xl overflow-hidden border border-black/[0.06] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-200 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden bg-black/[0.04] shrink-0">
                  {dest?.image ? (
                    <Image
                      src={dest.image}
                      alt={dest?.name ?? "Destination"}
                      fill
                      quality={80}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <FiMapPin className="w-8 h-8 text-[#ccc]" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                  {/* Category */}
                  <span className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-[0.07em] uppercase text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {dest?.category}
                  </span>

                  {/* Heart */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/95 rounded-full flex items-center justify-center shadow-sm">
                    <FiHeart className="w-3.5 h-3.5 text-black fill-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-4 flex-1">
                  {/* Name + rating */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-black truncate">
                        {dest?.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <FiMapPin className="w-3 h-3 text-[#bbb] shrink-0" />
                        <span className="text-[12px] text-[#888]">
                          {dest?.country}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 bg-black/[0.04] px-2 py-1 rounded-lg">
                      <FiStar className="w-3 h-3 text-black fill-black" />
                      <span className="text-[12px] font-semibold text-black">
                        {dest?.rating}
                      </span>
                    </div>
                  </div>

                  {/* Duration + price */}
                  <div className="flex items-center justify-between bg-black/[0.02] rounded-xl px-3 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <FiClock className="w-3 h-3 text-[#bbb] shrink-0" />
                      <span className="text-[12px] text-[#888]">
                        {dest?.duration}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[15px] font-bold text-black tracking-[-0.03em]">
                        ${dest?.price?.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-[#aaa] ml-0.5">
                        /person
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    <Link
                      href={`/destinations/${dest?._id}`}
                      className="flex-1 flex items-center justify-center gap-1.5 text-[12px] font-semibold text-black border border-black/[0.1] py-2.5 rounded-xl hover:bg-black hover:text-white hover:border-black transition-all duration-200"
                    >
                      View trip
                      <FiArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href={`/bookings/new/${dest?._id}`}
                      className="flex-1 flex items-center justify-center text-[12px] font-semibold text-white bg-black py-2.5 rounded-xl hover:bg-black/80 transition-all duration-200"
                    >
                      Book now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="bg-white rounded-2xl flex flex-col items-center justify-center py-[clamp(48px,8vw,80px)] text-center px-5 mb-8">
            <div className="w-14 h-14 bg-black/[0.04] rounded-2xl flex items-center justify-center mb-4">
              <FiHeart className="w-6 h-6 text-[#ccc]" />
            </div>
            <h3 className="text-[16px] font-semibold text-black tracking-[-0.02em] mb-1.5">
              No saved destinations yet
            </h3>
            <p className="text-[13px] text-[#aaa] mb-6 max-w-xs leading-relaxed">
              Browse destinations and tap the heart icon to save them here for
              later.
            </p>
            <Link
              href="/destinations"
              className="flex items-center gap-2 bg-black text-white text-[13px] font-medium px-6 py-2.5 rounded-xl hover:bg-black/80 transition-colors"
            >
              <FiCompass className="w-4 h-4" />
              Explore destinations
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
