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

export default async function DestinationDetailPage({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:4000/destination/${id}`);
  const dest = await res.json();

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Image ── */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[280px] max-h-[80vh] bg-black overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

        {/* Back */}
        <Link
          href="/destinations"
          className="absolute top-[calc(52px+16px)] left-[clamp(16px,4vw,40px)] flex items-center gap-2 text-[clamp(11px,1.5vw,13px)] text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm border border-white/15 px-3 py-1.5"
        >
          <FiArrowLeft className="w-3.5 h-3.5 shrink-0" />
          All destinations
        </Link>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-[clamp(16px,4vw,40px)] pb-[clamp(24px,4vw,48px)]">
          <div className="max-w-6xl mx-auto">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-[clamp(8px,1.5vw,14px)] flex-wrap">
              <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/70 bg-white/10 backdrop-blur-sm border border-white/15 px-2.5 py-1">
                {dest.category}
              </span>
              <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/70 bg-white/10 backdrop-blur-sm border border-white/15 px-2.5 py-1">
                {dest.style}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-[clamp(28px,5vw,64px)] font-medium tracking-[-0.04em] text-white leading-[1.0] mb-[clamp(8px,1.5vw,14px)]">
              {dest.name}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <div className="flex items-center gap-1.5">
                <FiMapPin className="w-3 h-3 text-white/50 shrink-0" />
                <span className="text-[clamp(12px,1.5vw,14px)] text-white/60 tracking-[-0.01em]">
                  {dest.country}
                </span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-1.5">
                <FiStar className="w-3 h-3 text-white/50 shrink-0" />
                <span className="text-[clamp(12px,1.5vw,14px)] text-white/60 tracking-[-0.01em]">
                  {dest.rating} rating
                </span>
              </div>
              <span className="text-white/20">·</span>
              <div className="flex items-center gap-1.5">
                <FiUsers className="w-3 h-3 text-white/50 shrink-0" />
                <span className="text-[clamp(12px,1.5vw,14px)] text-white/60 tracking-[-0.01em]">
                  {dest?.trips?.toLocaleString()} trips planned
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="border-y border-black/[0.07] bg-white">
        <div className="max-w-6xl mx-auto px-[clamp(16px,4vw,40px)]">
          <div className="grid grid-cols-2 md:grid-cols-4">
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
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1.5 px-4 py-[clamp(14px,2vw,22px)]
                  ${i % 2 === 0 ? "border-r border-black/[0.07]" : ""}
                  ${i < 2 ? "border-b md:border-b-0 border-black/[0.07]" : ""}
                  ${i === 1 || i === 3 ? "md:border-r-0" : ""}
                  ${i === 2 ? "md:border-r border-black/[0.07]" : ""}
                `}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-[#bbb] shrink-0">{stat.icon}</span>
                  <span className="text-[10px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
                    {stat.label}
                  </span>
                </div>
                <span className="text-[clamp(13px,1.5vw,15px)] font-medium tracking-[-0.02em] text-black truncate">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto px-[clamp(16px,4vw,40px)] py-[clamp(32px,5vw,64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-[clamp(32px,5vw,64px)]">
          {/* ── Left — content ── */}
          <div className="flex flex-col gap-[clamp(28px,4vw,56px)] min-w-0">
            {/* Overview */}
            <section>
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#aaa] block mb-[clamp(12px,2vw,20px)]">
                Overview
              </span>
              <p className="text-[clamp(15px,1.8vw,17px)] text-black font-medium tracking-[-0.02em] leading-[1.7] mb-[clamp(12px,2vw,20px)]">
                {dest.shortDescription}
              </p>
              <p className="text-[clamp(13.5px,1.6vw,15px)] text-[#666] tracking-[-0.01em] leading-[1.85]">
                {dest.description}
              </p>
            </section>

            {/* Highlights */}
            {dest.highlights?.length > 0 && (
              <section>
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#aaa] block mb-[clamp(12px,2vw,20px)]">
                  Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
                  {dest.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 py-[clamp(10px,1.5vw,14px)] border-b border-black/[0.05] last:border-0 sm:[&:nth-last-child(-n+2)]:border-0"
                    >
                      <FiCheck className="w-4 h-4 shrink-0 mt-0.5 text-black/30" />
                      <span className="text-[clamp(13px,1.5vw,14px)] text-[#333] tracking-[-0.01em] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Included / Not included */}
            {(dest.included?.length > 0 || dest.notIncluded?.length > 0) && (
              <section>
                <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#aaa] block mb-[clamp(12px,2vw,20px)]">
                  What's included
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(20px,3vw,40px)]">
                  {dest.included?.length > 0 && (
                    <div className="flex flex-col gap-[clamp(8px,1.5vw,14px)]">
                      <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-black mb-1">
                        Included
                      </p>
                      {dest.included.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <FiCheck className="w-3.5 h-3.5 shrink-0 mt-0.5 text-black/30" />
                          <span className="text-[clamp(13px,1.5vw,14px)] text-[#333] tracking-[-0.01em] leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  {dest.notIncluded?.length > 0 && (
                    <div className="flex flex-col gap-[clamp(8px,1.5vw,14px)]">
                      <p className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa] mb-1">
                        Not included
                      </p>
                      {dest.notIncluded.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <FiX className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#ccc]" />
                          <span className="text-[clamp(13px,1.5vw,14px)] text-[#aaa] tracking-[-0.01em] leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* ── Right — booking card ── */}
          <div className="hidden lg:block">
            <div className="sticky top-[calc(52px+24px)] border border-black/[0.1] overflow-hidden">
              {/* Price header */}
              <div className="px-6 py-6 border-b border-black/[0.07]">
                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className="text-[clamp(28px,3vw,38px)] font-medium tracking-[-0.05em] text-black leading-none">
                    ${dest.price.toLocaleString()}
                  </span>
                  <span className="text-[13px] text-[#aaa] tracking-[-0.01em]">
                    / person
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiStar className="w-3 h-3 text-black shrink-0" />
                  <span className="text-[13px] font-medium text-black">
                    {dest.rating}
                  </span>
                  <span className="text-[#ddd]">·</span>
                  <span className="text-[13px] text-[#aaa]">
                    {dest?.trips?.toLocaleString()} trips
                  </span>
                </div>
              </div>

              {/* Trip details */}
              <div className="px-6 py-4 border-b border-black/[0.07] flex flex-col gap-0">
                {[
                  {
                    icon: <FiClock className="w-3.5 h-3.5" />,
                    label: "Duration",
                    value: dest.duration,
                  },
                  {
                    icon: <FiThermometer className="w-3.5 h-3.5" />,
                    label: "Temperature",
                    value: `${dest.temp}°C`,
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
                    className="flex items-center justify-between py-3 border-b border-black/[0.05] last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#ccc] shrink-0">{item.icon}</span>
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

              {/* Actions */}
              <div className="px-6 py-5 flex flex-col gap-3">
                <Link
                  href={`/bookings/new/${dest._id}`}
                  className="w-full bg-black text-white text-[13.5px] font-medium tracking-[-0.01em] py-3.5 flex items-center justify-center gap-2 hover:bg-black/80 transition-colors"
                >
                  Book now
                  <FiArrowUpRight className="w-4 h-4" />
                </Link>
                <button className="w-full border border-black/[0.1] text-[#555] text-[13px] tracking-[-0.01em] py-2.5 hover:border-black/25 hover:text-black transition-all flex items-center justify-center gap-2">
                  <FiHeart className="w-4 h-4" />
                  Save to wishlist
                </button>
                <p className="text-[11.5px] text-[#bbb] tracking-[-0.01em] text-center leading-relaxed">
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
          <div className="text-[clamp(18px,5vw,22px)] font-medium tracking-[-0.04em] text-black leading-none">
            ${dest.price.toLocaleString()}
          </div>
          <div className="text-[clamp(10px,2.5vw,12px)] text-[#aaa] tracking-[-0.01em] mt-0.5">
            per person · {dest.duration}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button className="w-10 h-10 border border-black/[0.1] flex items-center justify-center hover:border-black/25 transition-colors shrink-0">
            <FiHeart className="w-4 h-4 text-[#aaa]" />
          </button>
          <Link
            href={`/bookings/new/${dest._id}`}
            className="bg-black text-white text-[clamp(12px,3vw,13.5px)] font-medium tracking-[-0.01em] px-[clamp(16px,4vw,24px)] py-2.5 hover:bg-black/80 transition-colors flex items-center gap-1.5"
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
