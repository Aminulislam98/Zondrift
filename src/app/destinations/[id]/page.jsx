import Image from "next/image";
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

function StatPill({ icon, label, value }) {
  return (
    <div className="flex flex-col gap-1.5 px-4 py-5">
      <div className="flex items-center gap-1.5">
        <span className="text-[#bbb]">{icon}</span>
        <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
          {label}
        </span>
      </div>
      <span className="text-[14px] md:text-[15px] font-medium tracking-[-0.03em] text-black">
        {value}
      </span>
    </div>
  );
}

export default async function DestinationDetailPage({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:4000/destination/${id}`);
  const dest = await res.json();
  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <div className="relative w-full h-[55vh] md:h-[70vh] min-h-[400px] bg-black">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          priority
          quality={70}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        {/* Back button */}
        <Link
          href="/destinations"
          className="absolute top-[68px] left-5 md:left-10 flex items-center gap-2 text-[13px] text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm border border-white/15 px-3.5 py-2 rounded-full"
        >
          <FiArrowLeft className="w-3.5 h-3.5" />
          All destinations
        </Link>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 right-0 px-5 md:px-10 pb-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/70 bg-white/10 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded-full">
                {dest.category}
              </span>
              <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/70 bg-white/10 backdrop-blur-sm border border-white/15 px-2.5 py-1 rounded-full">
                {dest.style}
              </span>
            </div>
            <h1 className="text-[36px] md:text-[56px] font-medium tracking-[-0.04em] text-white leading-[1.05] mb-2">
              {dest.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <div className="flex items-center gap-1.5">
                <FiMapPin className="w-3.5 h-3.5 text-white/50" />
                <span className="text-[14px] text-white/60 tracking-[-0.01em]">
                  {dest.country}
                </span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-1.5">
                <FiStar className="w-3 h-3 text-white/60" />
                <span className="text-[14px] text-white/60 tracking-[-0.01em]">
                  {dest.rating} rating
                </span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-1.5">
                <FiUsers className="w-3 h-3 text-white/60" />
                <span className="text-[14px] text-white/60 tracking-[-0.01em]">
                  {dest?.trips?.toLocaleString()} trips planned
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="border-b border-black/[0.08]">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 ">
            <StatPill
              icon={<FiTag className="w-3.5 h-3.5" />}
              label="Price"
              value={`$${dest.price.toLocaleString()}/person`}
            />
            <StatPill
              icon={<FiClock className="w-3.5 h-3.5" />}
              label="Duration"
              value={dest.duration}
            />
            <StatPill
              icon={<FiThermometer className="w-3.5 h-3.5" />}
              label="Temperature"
              value={`${dest.temp}°C`}
            />
            <StatPill
              icon={<FiTag className="w-3.5 h-3.5" />}
              label="Price range"
              value={dest.priceRange}
            />
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14 py-14">
          {/* ── Left ── */}
          <div className="flex flex-col gap-14">
            {/* Overview */}
            <div>
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#aaa] block mb-5">
                Overview
              </span>
              <p className="text-[16px] text-black font-medium tracking-[-0.02em] leading-[1.65] mb-4">
                {dest.shortDescription}
              </p>
              <p className="text-[15px] text-[#555] tracking-[-0.01em] leading-[1.8]">
                {dest.description}
              </p>
            </div>

            {/* Highlights */}
            {dest.highlights?.length > 0 && (
              <div>
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#aaa] block mb-5">
                  Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {dest.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FiCheck className="w-4 h-4 shrink-0 mt-0.5 text-black/40" />
                      <span className="text-[14px] text-[#333] tracking-[-0.01em] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What's included */}
            {(dest.included?.length > 0 || dest.notIncluded?.length > 0) && (
              <div>
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#aaa] block mb-5">
                  What's included
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {dest.included?.length > 0 && (
                    <div className="flex flex-col gap-3.5">
                      <p className="text-[12px] font-medium tracking-[0.06em] uppercase text-black mb-1">
                        Included
                      </p>
                      {dest.included.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <FiCheck className="w-4 h-4 shrink-0 mt-0.5 text-black/40" />
                          <span className="text-[14px] text-[#333] tracking-[-0.01em] leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  {dest.notIncluded?.length > 0 && (
                    <div className="flex flex-col gap-3.5">
                      <p className="text-[12px] font-medium tracking-[0.06em] uppercase text-[#aaa] mb-1">
                        Not included
                      </p>
                      {dest.notIncluded.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <FiX className="w-4 h-4 shrink-0 mt-0.5 text-[#ccc]" />
                          <span className="text-[14px] text-[#aaa] tracking-[-0.01em] leading-relaxed">
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

          {/* ── Right — Booking card ── */}
          <div className="hidden lg:block">
            <div className="sticky top-[72px] border border-black/[0.1] p-6 flex flex-col gap-5">
              {/* Price */}
              <div>
                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className="text-[34px] font-medium tracking-[-0.05em] text-black">
                    ${dest.price.toLocaleString()}
                  </span>
                  <span className="text-[14px] text-[#aaa] tracking-[-0.01em]">
                    / person
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiStar className="w-3 h-3 text-black" />
                  <span className="text-[13px] font-medium text-black tracking-[-0.01em]">
                    {dest.rating}
                  </span>
                  <span className="text-[#ddd]">·</span>
                  <FiUsers className="w-3 h-3 text-[#aaa]" />
                  <span className="text-[13px] text-[#aaa] tracking-[-0.01em]">
                    {dest?.trips?.toLocaleString()} trips
                  </span>
                </div>
              </div>

              <div className="h-px bg-black/[0.06]" />

              {/* Details */}
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: <FiClock className="w-3.5 h-3.5 text-[#bbb]" />,
                    label: "Duration",
                    value: dest.duration,
                  },
                  {
                    icon: <FiThermometer className="w-3.5 h-3.5 text-[#bbb]" />,
                    label: "Temperature",

                    value: `${dest.temp}°C`,
                  },
                  {
                    icon: <FiTag className="w-3.5 h-3.5 text-[#bbb]" />,
                    label: "Category",
                    value: dest.category,
                  },
                  {
                    icon: <FiUsers className="w-3.5 h-3.5 text-[#bbb]" />,
                    label: "Best for",
                    value: dest.style,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="text-[13px] text-[#888] tracking-[-0.01em]">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[13px] font-medium text-black tracking-[-0.01em]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-black/[0.06]" />

              {/* Book now */}
              <Link
                href={`/bookings/new/${dest._id}`}
                className="w-full bg-black text-white text-[13.5px] font-medium tracking-[-0.01em] py-3.5 flex items-center justify-center gap-2 hover:bg-black/80 transition-colors"
              >
                Book now
                <FiArrowUpRight className="w-4 h-4" />
              </Link>

              <p className="text-[11.5px] text-[#bbb] tracking-[-0.01em] text-center leading-relaxed">
                No payment now. A Zondrift advisor will contact you within 24
                hours.
              </p>

              {/* Save */}
              <button className="w-full border border-black/[0.1] text-[#555] text-[13px] tracking-[-0.01em] py-2.5 hover:border-black/25 hover:text-black transition-all flex items-center justify-center gap-2">
                <FiHeart className="w-4 h-4" />
                Save to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile sticky bottom bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.08] px-5 py-4 flex items-center justify-between gap-4 z-40">
        <div>
          <div className="text-[22px] font-medium tracking-[-0.04em] text-black">
            ${dest.price.toLocaleString()}
          </div>
          <div className="text-[12px] text-[#aaa] tracking-[-0.01em]">
            per person · {dest.duration}
          </div>
        </div>
        <Link
          href={`/bookings/new/${dest._id}`}
          className="bg-black text-white text-[13.5px] font-medium tracking-[-0.01em] px-7 py-3 hover:bg-black/80 transition-colors flex items-center gap-2"
        >
          Book now
          <FiArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Spacer for mobile sticky bar */}
      <div className="lg:hidden h-24" />
    </main>
  );
}
