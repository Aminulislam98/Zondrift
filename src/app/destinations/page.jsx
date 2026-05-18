import DestinationCard from "@/components/DestinationCard";
import DestinationFilterBar from "@/components/DestinationFilterBar";

export default async function DestinationsPage() {
  const res = await fetch("http://localhost:4000/destination");
  const destinations = await res.json();

  return (
    <main className="min-h-screen bg-[#f8f8f6] pt-[52px]">
      <div className="max-w-4xl mx-auto px-[clamp(16px,4vw,32px)] py-[clamp(32px,5vw,56px)]">
        {/* Header */}
        <div className="mb-[clamp(20px,3vw,36px)]">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
            Explore the world
          </span>
          <h1 className="text-[clamp(26px,5vw,48px)] font-medium tracking-[-0.04em] text-black leading-[1.05] mb-2">
            All destinations
          </h1>
          <p className="text-[clamp(13px,1.5vw,15px)] text-[#888] tracking-[-0.01em]">
            Find your perfect travel experience from our curated collection
          </p>
        </div>

        {/* Filter Bar */}
        <DestinationFilterBar />

        {/* Result count */}
        <p className="text-[12.5px] text-[#aaa] tracking-[-0.01em] mb-[clamp(12px,2vw,20px)]">
          Showing {destinations.length} destinations
        </p>

        {/* Cards — single column list */}
        <div className="flex flex-col gap-[clamp(10px,1.5vw,14px)]">
          {destinations.map((dest) => (
            <DestinationCard key={dest._id} dest={dest} />
          ))}
        </div>
      </div>
    </main>
  );
}
