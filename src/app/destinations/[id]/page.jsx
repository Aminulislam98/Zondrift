import Link from "next/link";
import {
  FiArrowLeft,
  FiMapPin,
  FiStar,
  FiCheck,
  FiX,
  FiArrowUpRight,
  FiHeart,
  FiThermometer,
  FiClock,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import DestinationGallery from "@/components/DestinationGallery";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DestinationDetailPage({ params }) {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log("this is token:", token);
  const res = await fetch(`http://localhost:4000/destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const dest = await res.json();

  return (
    <main className="min-h-screen bg-[#f5f5f7] pt-[52px]">
      <div className="max-w-6xl mx-auto px-[clamp(16px,4vw,32px)]">
        {/* ── Back + name ── */}
        <div className="py-[clamp(12px,2vw,20px)]">
          <Link
            href="/destinations"
            className="flex items-center gap-1.5 text-[clamp(11px,1.5vw,13px)] text-[#888] hover:text-black transition-colors w-fit mb-[clamp(10px,1.5vw,16px)]"
          >
            <FiArrowLeft className="w-3.5 h-3.5 shrink-0" />
            All destinations
          </Link>
          <h1 className="text-[clamp(22px,4vw,38px)] font-bold tracking-[-0.04em] text-black leading-tight">
            {dest.name}
          </h1>
        </div>

        {/* ── Gallery ── */}
        <DestinationGallery image={dest.image} images={dest.images} />

        {/* ── Meta ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pt-[clamp(16px,2.5vw,24px)] pb-[clamp(16px,2.5vw,24px)]">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#777] bg-white border border-black/[0.07] px-2.5 py-1 rounded-full">
                {dest.category}
              </span>
              <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-[#777] bg-white border border-black/[0.07] px-2.5 py-1 rounded-full">
                {dest.style}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <div className="flex items-center gap-1.5">
                <FiMapPin className="w-3.5 h-3.5 text-[#aaa] shrink-0" />
                <span className="text-[clamp(12px,1.5vw,14px)] text-[#666]">
                  {dest.country}
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-black/[0.07] px-2.5 py-1 rounded-full">
                <FiStar className="w-3 h-3 text-black shrink-0" />
                <span className="text-[clamp(12px,1.5vw,13px)] font-semibold text-black">
                  {dest.rating}
                </span>
                <span className="text-[clamp(11px,1.3vw,12px)] text-[#aaa]">
                  ({dest?.trips?.toLocaleString()} trips)
                </span>
              </div>
            </div>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-[12.5px] font-medium text-[#555] bg-white border border-black/[0.1] px-4 py-2 rounded-xl hover:border-black/25 hover:text-black transition-all shrink-0 self-start">
            <FiHeart className="w-3.5 h-3.5" />
            Save
          </button>
        </div>

        {/* ── Main content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 pb-[clamp(32px,5vw,48px)]">
          {/* ── Left ── */}
          <div className="flex flex-col gap-4 min-w-0">
            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  icon: <FiTag className="w-3.5 h-3.5" />,
                  label: "Price",
                  value: `$${dest.price.toLocaleString()}/person`,
                },
                {
                  icon: <FiClock className="w-3.5 h-3.5" />,
                  label: "Duration",
                  value: dest.duration,
                },
                {
                  icon: <FiThermometer className="w-3.5 h-3.5" />,
                  label: "Temperature",
                  value: dest.temp,
                },
                {
                  icon: <FiTag className="w-3.5 h-3.5" />,
                  label: "Price range",
                  value: dest.priceRange,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl flex flex-col gap-1.5 px-4 py-[clamp(12px,1.8vw,16px)]"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#ccc] shrink-0">{stat.icon}</span>
                    <span className="text-[10px] font-semibold tracking-[0.07em] uppercase text-[#aaa]">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-[clamp(12px,1.4vw,14px)] font-semibold text-black truncate">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="bg-white rounded-2xl p-[clamp(16px,3vw,24px)]">
              <h2 className="text-[clamp(15px,2vw,18px)] font-bold tracking-[-0.03em] text-black mb-3">
                About this destination
              </h2>
              <p className="text-[clamp(14px,1.6vw,15.5px)] text-black font-medium tracking-[-0.01em] leading-[1.7] mb-3">
                {dest.shortDescription}
              </p>
              <p className="text-[clamp(13px,1.5vw,14.5px)] text-[#555] tracking-[-0.01em] leading-[1.85]">
                {dest.description}
              </p>
            </div>

            {/* Highlights */}
            {dest.highlights?.length > 0 && (
              <div className="bg-white rounded-2xl p-[clamp(16px,3vw,24px)]">
                <h2 className="text-[clamp(15px,2vw,18px)] font-bold tracking-[-0.03em] text-black mb-3">
                  Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                  {dest.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 py-[clamp(8px,1.2vw,12px)] border-b border-black/[0.05] last:border-0 sm:[&:nth-last-child(-n+2)]:border-0"
                    >
                      <FiCheck className="w-4 h-4 shrink-0 mt-0.5 text-black/30" />
                      <span className="text-[clamp(13px,1.4vw,14px)] text-[#333] tracking-[-0.01em] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Included / Not included */}
            {(dest.included?.length > 0 || dest.notIncluded?.length > 0) && (
              <div className="bg-white rounded-2xl p-[clamp(16px,3vw,24px)]">
                <h2 className="text-[clamp(15px,2vw,18px)] font-bold tracking-[-0.03em] text-black mb-3">
                  What's included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(16px,2.5vw,32px)]">
                  {dest.included?.length > 0 && (
                    <div className="flex flex-col gap-[clamp(8px,1.2vw,12px)]">
                      <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-black mb-1">
                        Included
                      </p>
                      {dest.included.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <FiCheck className="w-3.5 h-3.5 shrink-0 mt-0.5 text-black/30" />
                          <span className="text-[clamp(13px,1.4vw,14px)] text-[#333] tracking-[-0.01em] leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  {dest.notIncluded?.length > 0 && (
                    <div className="flex flex-col gap-[clamp(8px,1.2vw,12px)]">
                      <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#aaa] mb-1">
                        Not included
                      </p>
                      {dest.notIncluded.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <FiX className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#ccc]" />
                          <span className="text-[clamp(13px,1.4vw,14px)] text-[#aaa] tracking-[-0.01em] leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ── Right — booking card ── */}
          <div className="hidden lg:block">
            <div className="sticky top-[calc(52px+16px)] bg-white rounded-2xl overflow-hidden border border-black/[0.07]">
              {/* Price */}
              <div className="px-6 py-5 border-b border-black/[0.06]">
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.05em] text-black leading-none">
                    ${dest.price.toLocaleString()}
                  </span>
                  <span className="text-[13px] text-[#aaa]">/ person</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <FiStar className="w-3 h-3 text-black shrink-0" />
                  <span className="text-[13px] font-semibold text-black">
                    {dest.rating}
                  </span>
                  <span className="text-[#ddd]">·</span>
                  <span className="text-[13px] text-[#aaa]">
                    {dest?.trips?.toLocaleString()} trips
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="px-6 py-4 border-b border-black/[0.06]">
                {[
                  {
                    icon: <FiClock className="w-3.5 h-3.5" />,
                    label: "Duration",
                    value: dest.duration,
                  },
                  {
                    icon: <FiThermometer className="w-3.5 h-3.5" />,
                    label: "Temperature",
                    value: dest.temp,
                  },
                  {
                    icon: <FiTag className="w-3.5 h-3.5" />,
                    label: "Category",
                    value: dest.category,
                  },
                  {
                    icon: <FiUsers className="w-3.5 h-3.5" />,
                    label: "Best for",
                    value: dest.style,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2.5 border-b border-black/[0.05] last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#ccc] shrink-0">{item.icon}</span>
                      <span className="text-[13px] text-[#888]">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[13px] font-semibold text-black">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="px-6 py-5 flex flex-col gap-3">
                <Link
                  href={`/bookings/new/${dest._id}`}
                  className="w-full bg-black text-white text-[13.5px] font-semibold tracking-[-0.01em] py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-black/80 transition-colors"
                >
                  Book now
                  <FiArrowUpRight className="w-4 h-4" />
                </Link>
                <button className="w-full border border-black/[0.1] text-[#555] text-[13px] py-2.5 rounded-xl hover:border-black/25 hover:text-black transition-all flex items-center justify-center gap-2">
                  <FiHeart className="w-4 h-4" />
                  Save to wishlist
                </button>
                <p className="text-[11px] text-[#bbb] text-center leading-relaxed">
                  No payment now. A Zondrift advisor will contact you within 24
                  hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile sticky bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.08] px-[clamp(16px,4vw,24px)] py-3.5 flex items-center justify-between gap-4 z-40">
        <div>
          <div className="text-[clamp(18px,5vw,22px)] font-bold tracking-[-0.04em] text-black leading-none">
            ${dest.price.toLocaleString()}
          </div>
          <div className="text-[clamp(10px,2.5vw,12px)] text-[#aaa] mt-0.5">
            per person · {dest.duration}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="w-10 h-10 bg-white border border-black/[0.1] rounded-xl flex items-center justify-center hover:border-black/25 transition-colors shrink-0">
            <FiHeart className="w-4 h-4 text-[#aaa]" />
          </button>
          <Link
            href={`/bookings/new/${dest._id}`}
            className="bg-black text-white text-[clamp(12px,3vw,13.5px)] font-semibold px-[clamp(16px,4vw,24px)] py-2.5 rounded-xl hover:bg-black/80 transition-colors flex items-center gap-1.5"
          >
            Book now
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="lg:hidden h-[72px]" />
    </main>
  );
}
