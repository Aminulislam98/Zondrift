import Image from "next/image";
import Link from "next/link";

export default async function FeaturedDestinations() {
  const res = await fetch("http://localhost:4000/destination", {
    next: { revalidate: 60 },
  });
  const destinations = await res.json();
  const featured = destinations.slice(0, 6);

  const ratingLabel = (r) =>
    r >= 9
      ? "Exceptional"
      : r >= 8.5
        ? "Fabulous"
        : r >= 8
          ? "Very good"
          : "Good";

  return (
    <section className="bg-white py-[clamp(32px,5vw,56px)] px-[clamp(16px,4vw,40px)]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-[clamp(16px,2.5vw,28px)]">
          <h2 className="text-[clamp(18px,2.5vw,26px)] font-bold tracking-[-0.03em] text-black">
            Featured destinations
          </h2>
          <Link
            href="/destinations"
            className="text-[clamp(12px,1.5vw,14px)] font-semibold text-[#0071c2] hover:text-[#005fa3] hover:underline transition-colors shrink-0"
          >
            Discover all
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[clamp(8px,1.5vw,12px)]">
          {featured.map((dest) => (
            <Link
              key={dest._id}
              href={`/destinations/${dest._id}`}
              className="group flex flex-col bg-white rounded-xl overflow-hidden border border-black/[0.07] hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition-shadow duration-200"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/[0.04]">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  quality={75}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1.5 p-2.5 flex-1">
                <div>
                  <h3 className="text-[clamp(11px,1.2vw,13px)] font-bold tracking-[-0.02em] text-black leading-snug line-clamp-1">
                    {dest.name}
                  </h3>
                  <p className="text-[10.5px] text-[#888] tracking-[-0.01em] truncate">
                    {dest.country}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <div className="bg-[#003b95] px-1.5 py-0.5 rounded">
                    <span className="text-[10px] font-bold text-white leading-none">
                      {dest.rating}
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-black tracking-[-0.01em] truncate">
                    {ratingLabel(dest.rating)}
                  </span>
                </div>

                {/* Price */}
                <div className="mt-auto pt-1.5 border-t border-black/[0.05]">
                  <p className="text-[10px] text-[#777]">
                    From{" "}
                    <span className="text-[clamp(12px,1.4vw,14px)] font-bold text-black tracking-[-0.03em]">
                      ${dest.price?.toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
