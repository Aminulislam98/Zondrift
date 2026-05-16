import Image from "next/image";
import Link from "next/link";

export default async function FeaturedDestinations() {
  const res = await fetch("http://localhost:4000/destination");
  const destinations = await res.json();
  return (
    <section className="bg-white py-24 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
              Popular right now
            </span>
            <h2 className="text-[32px] md:text-[42px] font-medium tracking-[-0.04em] text-black leading-[1.1]">
              Featured destinations
            </h2>
          </div>
          <Link
            href="/destinations"
            className="text-[13.5px] text-[#555] tracking-[-0.01em] hover:text-black transition-colors flex items-center gap-1.5 group"
          >
            View all
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.slice(0, 6).map((dest) => (
            <div
              key={dest._id}
              className="group relative rounded-md overflow-hidden bg-black block"
            >
              {/* Image */}
              <div className="relative h-[280px] w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  quality={80}
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              {/* Category Badge */}
              <span className="absolute top-4 left-4 text-[10px] font-medium tracking-[0.1em] uppercase text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-full">
                {dest.category}
              </span>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-[17px] font-medium tracking-[-0.03em] text-white mb-1">
                  {dest.name}
                </h3>
                <p className="text-[12.5px] text-white/60 tracking-[-0.01em] leading-relaxed mb-3 line-clamp-2">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-white/40 tracking-[-0.01em]">
                    {dest.trips}
                  </span>
                  <Link
                    href={`/destinations/${dest._id}`}
                    className="text-[12px] text-white/70 flex items-center gap-1 group-hover:text-white transition-colors duration-200"
                  >
                    Explore
                    <svg
                      className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
