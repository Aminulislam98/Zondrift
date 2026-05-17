import DestinationCardSkeleton from "@/components/DestinationCardSkeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] pt-[52px]">
      <div className="max-w-4xl mx-auto px-[clamp(16px,4vw,32px)] py-[clamp(32px,5vw,56px)]">
        {/* Header skeleton */}
        <div className="mb-[clamp(20px,3vw,36px)] flex flex-col gap-2.5">
          <div className="h-3 w-28 bg-black/[0.06] rounded animate-pulse" />
          <div className="h-10 w-52 bg-black/[0.07] rounded animate-pulse" />
          <div className="h-3.5 w-80 bg-black/[0.05] rounded animate-pulse" />
        </div>

        {/* Filter bar skeleton — 3 dropdowns matching DestinationFilterBar */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="relative flex-1">
              <div className="w-full h-[50px] bg-white border border-black/[0.08] rounded-md animate-pulse" />
            </div>
          ))}
        </div>

        {/* Result count skeleton */}
        <div className="h-3 w-36 bg-black/[0.05] rounded animate-pulse mb-[clamp(12px,2vw,20px)]" />

        {/* Card skeletons */}
        <div className="flex flex-col gap-[clamp(10px,1.5vw,14px)]">
          {[...Array(4)].map((_, i) => (
            <div key={i} style={{ opacity: 1 - i * 0.18 }}>
              <DestinationCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
