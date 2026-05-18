export default function Loading() {
  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-4xl mx-auto px-[clamp(16px,4vw,24px)]">
        {/* Header skeleton */}
        <div className="py-[clamp(32px,5vw,48px)] border-b border-black/[0.06] flex flex-col gap-2.5">
          <div className="h-2.5 w-24 bg-black/[0.05] rounded animate-pulse" />
          <div className="h-9 w-48 bg-black/[0.08] rounded animate-pulse" />
          <div className="h-3 w-28 bg-black/[0.04] rounded animate-pulse" />
        </div>

        {/* Section label skeleton */}
        <div className="pt-[clamp(24px,4vw,40px)] mb-[clamp(16px,2.5vw,24px)] flex items-center gap-2.5">
          <div className="h-3.5 w-20 bg-black/[0.07] rounded animate-pulse" />
          <div className="h-5 w-6 bg-black/[0.04] rounded animate-pulse" />
        </div>

        {/* Booking card skeletons */}
        <div className="flex flex-col gap-[clamp(10px,1.5vw,16px)]">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="border border-black/[0.08] overflow-hidden"
              style={{ opacity: 1 - i * 0.2 }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image skeleton */}
                <div className="w-full h-[140px] sm:w-[clamp(140px,18vw,200px)] sm:h-auto sm:min-h-[160px] bg-black/[0.07] shrink-0 animate-pulse" />

                {/* Content skeleton */}
                <div className="flex flex-col justify-between flex-1 p-[clamp(14px,2.5vw,20px)] gap-[clamp(12px,2vw,16px)] min-w-0">
                  {/* Top — status + name + price */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-2 min-w-0">
                      <div className="h-5 w-20 bg-black/[0.06] rounded animate-pulse" />
                      <div className="h-4 w-36 bg-black/[0.07] rounded animate-pulse" />
                      <div className="flex items-center gap-1.5">
                        <div className="h-3 w-16 bg-black/[0.05] rounded animate-pulse" />
                        <div className="h-3 w-12 bg-black/[0.04] rounded animate-pulse" />
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="h-6 w-20 bg-black/[0.07] rounded animate-pulse" />
                      <div className="h-3 w-14 bg-black/[0.04] rounded animate-pulse" />
                    </div>
                  </div>

                  {/* Details grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-[clamp(8px,1.5vw,12px)]">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="flex items-start gap-1.5">
                        <div className="w-3 h-3 bg-black/[0.05] rounded shrink-0 mt-0.5 animate-pulse" />
                        <div className="flex flex-col gap-1">
                          <div className="h-2.5 w-14 bg-black/[0.04] rounded animate-pulse" />
                          <div className="h-3.5 w-20 bg-black/[0.06] rounded animate-pulse" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between gap-3 pt-[clamp(10px,1.5vw,14px)] border-t border-black/[0.06]">
                    <div className="h-3 w-28 bg-black/[0.04] rounded animate-pulse" />
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-20 bg-black/[0.05] rounded animate-pulse" />
                      <div className="h-8 w-20 bg-black/[0.05] rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pb-[clamp(40px,6vw,64px)]" />
      </div>
    </main>
  );
}
