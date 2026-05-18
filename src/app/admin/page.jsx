import Link from "next/link";
import Image from "next/image";
import {
  FiPlus,
  FiMapPin,
  FiEdit2,
  FiStar,
  FiTrendingUp,
  FiGrid,
  FiDollarSign,
} from "react-icons/fi";
import { DeleteDestination } from "@/components/buttons/DeleteDestination";

export default async function AdminDestinationsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`, {
    cache: "no-store",
  });
  const destinations = await res.json();

  const avgPrice = Math.round(
    destinations.reduce((a, b) => a + b.price, 0) / destinations.length,
  );
  const avgRating = (
    destinations.reduce((a, b) => a + b.rating, 0) / destinations.length
  ).toFixed(1);
  const categories = [...new Set(destinations.map((d) => d.category))].length;

  const stats = [
    {
      label: "Total",
      value: destinations.length,
      sub: "destinations",
      icon: <FiGrid className="w-4 h-4" />,
    },
    {
      label: "Categories",
      value: categories,
      sub: "types",
      icon: <FiTrendingUp className="w-4 h-4" />,
    },
    {
      label: "Avg price",
      value: `$${avgPrice.toLocaleString()}`,
      sub: "per person",
      icon: <FiDollarSign className="w-4 h-4" />,
    },
    {
      label: "Avg rating",
      value: avgRating,
      sub: "out of 5.0",
      icon: <FiStar className="w-4 h-4" />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f5f7] pt-[52px]">
      <div className="max-w-5xl mx-auto px-[clamp(16px,4vw,32px)] py-[clamp(24px,4vw,40px)]">
        {/* ── Header ── */}
        <div className="flex items-center justify-between mb-[clamp(20px,3vw,32px)]">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#86868b] mb-1">
              Admin panel
            </p>
            <h1 className="text-[clamp(22px,4vw,34px)] font-semibold tracking-[-0.03em] text-black leading-tight">
              Destinations
            </h1>
          </div>
          <Link
            href="/admin/add-destination"
            className="flex items-center gap-2 bg-black text-white text-[13px] font-medium px-4 py-2.5 hover:bg-black/80 transition-colors rounded-lg"
          >
            <FiPlus className="w-4 h-4" />
            <span className="hidden sm:inline">Add destination</span>
            <span className="sm:hidden">Add</span>
          </Link>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(8px,1.5vw,12px)] mb-[clamp(20px,3vw,28px)]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-[clamp(14px,2.5vw,20px)] flex flex-col gap-[clamp(10px,1.5vw,14px)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#86868b]">
                  {s.label}
                </span>
                <span className="text-[#c7c7cc]">{s.icon}</span>
              </div>
              <div>
                <div className="text-[clamp(20px,3vw,26px)] font-semibold tracking-[-0.03em] text-black leading-none">
                  {s.value}
                </div>
                <div className="text-[11px] text-[#aeaeb2] mt-1 tracking-[-0.01em]">
                  {s.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── List ── */}
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* List header */}
          <div className="flex items-center justify-between px-[clamp(16px,3vw,24px)] py-4 border-b border-black/[0.06]">
            <h2 className="text-[15px] font-semibold tracking-[-0.02em] text-black">
              All destinations
            </h2>
            <span className="text-[13px] text-[#86868b] tracking-[-0.01em]">
              {destinations.length} total
            </span>
          </div>

          {/* Desktop table header */}
          <div className="hidden md:grid grid-cols-[52px_1fr_100px_80px_72px_110px] gap-4 px-6 py-2.5 bg-[#f5f5f7] border-b border-black/[0.05]">
            {["", "Destination", "Category", "Price", "Rating", ""].map(
              (h, i) => (
                <span
                  key={i}
                  className={`text-[11px] font-medium tracking-[0.06em] uppercase text-[#86868b] ${i === 5 ? "text-right" : ""}`}
                >
                  {h}
                </span>
              ),
            )}
          </div>

          {/* Rows */}
          {destinations.length > 0 ? (
            <div className="divide-y divide-black/[0.05]">
              {destinations.map((dest) => (
                <div key={dest._id}>
                  {/* ── Desktop row ── */}
                  <div className="hidden md:grid grid-cols-[52px_1fr_100px_80px_72px_110px] gap-4 px-6 py-3.5 hover:bg-[#f5f5f7] transition-colors duration-150 group items-center">
                    <div className="relative w-[52px] h-9 rounded-lg overflow-hidden bg-black/[0.04] shrink-0">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        quality={70}
                        sizes="52px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-[13.5px] font-medium text-black tracking-[-0.02em] truncate">
                        {dest.name}
                      </span>
                      <div className="flex items-center gap-1">
                        <FiMapPin className="w-3 h-3 text-[#aeaeb2] shrink-0" />
                        <span className="text-[12px] text-[#86868b] tracking-[-0.01em] truncate">
                          {dest.country}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-medium tracking-[0.04em] text-[#636366] bg-[#f2f2f7] px-2.5 py-1 rounded-md whitespace-nowrap">
                        {dest.category}
                      </span>
                    </div>

                    <div>
                      <span className="text-[13.5px] font-medium text-black tracking-[-0.02em]">
                        ${dest.price.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <FiStar className="w-3 h-3 text-[#aeaeb2]" />
                      <span className="text-[13px] font-medium text-black tracking-[-0.02em]">
                        {dest.rating}
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <Link
                        href={`/admin/edit-destination/${dest._id}`}
                        className="flex items-center justify-center gap-1 text-[12px] text-[#636366] border border-black/[0.1] px-2.5 py-1.5 rounded-lg hover:border-black/20 hover:text-black transition-all w-full"
                      >
                        <FiEdit2 className="w-3.5 h-3.5" />
                        Edit
                      </Link>
                      <DeleteDestination dest={dest} />
                    </div>
                  </div>

                  {/* ── Mobile row ── */}
                  <div className="md:hidden flex flex-col">
                    {/* Info */}
                    <div className="flex items-center gap-3 px-4 py-3.5">
                      <div className="relative w-12 h-10 rounded-xl overflow-hidden bg-black/[0.04] shrink-0">
                        <Image
                          src={dest.image}
                          alt={dest.name}
                          fill
                          quality={70}
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                        <span className="text-[14px] font-medium text-black tracking-[-0.02em] truncate">
                          {dest.name}
                        </span>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[12px] text-[#86868b] tracking-[-0.01em] truncate">
                            {dest.country}
                          </span>
                          <span className="text-[10px] font-medium text-[#636366] bg-[#f2f2f7] px-2 py-0.5 rounded-md whitespace-nowrap">
                            {dest.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end shrink-0">
                        <span className="text-[13px] font-semibold text-black tracking-[-0.02em]">
                          ${dest.price.toLocaleString()}
                        </span>
                        <div className="flex items-center gap-0.5">
                          <FiStar className="w-2.5 h-2.5 text-[#aeaeb2]" />
                          <span className="text-[11px] text-[#86868b]">
                            {dest.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 px-4 pb-3.5">
                      <Link
                        href={`/admin/edit-destination/${dest._id}`}
                        className="flex-1 flex items-center justify-center gap-1.5 text-[12.5px] text-[#636366] border border-black/[0.1] py-2 rounded-lg hover:border-black/20 hover:text-black transition-all"
                      >
                        <FiEdit2 className="w-3.5 h-3.5" />
                        Edit
                      </Link>
                      <div className="flex-1">
                        <DeleteDestination dest={dest} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-[clamp(40px,6vw,64px)] text-center px-5">
              <div className="w-14 h-14 bg-[#f2f2f7] rounded-2xl flex items-center justify-center mb-4">
                <FiMapPin className="w-6 h-6 text-[#aeaeb2]" />
              </div>
              <h3 className="text-[16px] font-semibold text-black tracking-[-0.02em] mb-1">
                No destinations yet
              </h3>
              <p className="text-[13px] text-[#86868b] tracking-[-0.01em] mb-5">
                Add your first destination to get started
              </p>
              <Link
                href="/admin/add-destination"
                className="flex items-center gap-2 bg-black text-white text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-black/80 transition-colors"
              >
                <FiPlus className="w-4 h-4" />
                Add destination
              </Link>
            </div>
          )}

          {/* Footer */}
          {destinations.length > 0 && (
            <div className="px-[clamp(16px,3vw,24px)] py-3 border-t border-black/[0.05] bg-[#fafafa]">
              <span className="text-[12px] text-[#aeaeb2] tracking-[-0.01em]">
                {destinations.length} destination
                {destinations.length !== 1 ? "s" : ""} total
              </span>
            </div>
          )}
        </div>

        <div className="pb-[clamp(32px,5vw,48px)]" />
      </div>
    </main>
  );
}
