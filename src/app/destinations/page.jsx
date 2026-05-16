import DestinationCard from "@/components/DestinationCard";
import DestinationFilterBar from "@/components/DestinationFilterBar";

export default async function DestinationsPage() {
  const res = await fetch("http://localhost:4000/destination");
  const destinations = await res.json();
  return (
    <main className="min-h-screen bg-white pt-13">
      <div className="max-w-6xl mx-auto px-5 py-14">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
            Explore the world
          </span>
          <h1 className="text-[36px] md:text-[52px] font-medium tracking-[-0.04em] text-black leading-[1.05] mb-3">
            Explore All Destinations
          </h1>
          <p className="text-[15px] text-[#888] tracking-[-0.01em]">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        {/* Filter Bar */}
        <DestinationFilterBar />

        {/* Result count */}
        <p className="text-[13px] text-[#aaa] tracking-[-0.01em] mb-8">
          Showing {destinations.length} destinations
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest) => (
            <DestinationCard key={dest._id} dest={dest} />
          ))}
        </div>
      </div>
    </main>
  );
}
