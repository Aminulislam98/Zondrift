export default function Loading() {
  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-6xl mx-auto px-[clamp(16px,4vw,32px)]">
        {/* ── Back + name ── */}
        <div className="py-[clamp(12px,2vw,20px)] flex flex-col gap-3">
          <div className="h-3 w-28 bg-black/[0.06] rounded animate-pulse" />
          <div className="h-8 w-64 bg-black/[0.08] rounded animate-pulse" />
        </div>

        {/* ── Gallery skeleton ── */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-[clamp(3px,0.4vw,6px)] h-[clamp(180px,25vw,340px)]">
          {/* Main image — spans 2 rows */}
          <div className="row-span-2 bg-black/[0.07] rounded-sm animate-pulse" />
          {/* 4 small images */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-black/[0.06] rounded-sm animate-pulse"
              style={{ animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>

        {/* ── Meta under gallery ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pt-[clamp(16px,2.5vw,24px)] pb-[clamp(16px,2.5vw,24px)] border-b border-black/[0.06]">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-black/[0.05] rounded animate-pulse" />
              <div className="h-5 w-16 bg-black/[0.05] rounded animate-pulse" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-3 w-20 bg-black/[0.05] rounded animate-pulse" />
              <div className="h-3 w-24 bg-black/[0.05] rounded animate-pulse" />
            </div>
          </div>
          <div className="hidden sm:block h-8 w-24 bg-black/[0.05] rounded animate-pulse" />
        </div>

        {/* ── Main content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-[clamp(24px,4vw,48px)] py-[clamp(24px,4vw,40px)]">
          {/* ── Left ── */}
          <div className="flex flex-col gap-[clamp(24px,3.5vw,44px)]">
            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-black/[0.06] border border-black/[0.06]">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white px-4 py-[clamp(12px,1.8vw,18px)] flex flex-col gap-2"
                >
                  <div className="h-2.5 w-16 bg-black/[0.05] rounded animate-pulse" />
                  <div className="h-4 w-20 bg-black/[0.07] rounded animate-pulse" />
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="flex flex-col gap-3">
              <div className="h-5 w-32 bg-black/[0.07] rounded animate-pulse" />
              <div className="h-4 w-full bg-black/[0.06] rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-black/[0.06] rounded animate-pulse" />
              <div className="h-4 w-full bg-black/[0.04] rounded animate-pulse" />
              <div className="h-4 w-4/5 bg-black/[0.04] rounded animate-pulse" />
              <div className="h-4 w-full bg-black/[0.04] rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-black/[0.04] rounded animate-pulse" />
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-3">
              <div className="h-5 w-24 bg-black/[0.07] rounded animate-pulse" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-[clamp(8px,1.2vw,12px)] border-b border-black/[0.05] last:border-0"
                  >
                    <div className="w-4 h-4 bg-black/[0.05] rounded shrink-0 animate-pulse" />
                    <div
                      className="h-3 bg-black/[0.05] rounded animate-pulse flex-1"
                      style={{ width: `${60 + (i % 3) * 15}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Included */}
            <div className="flex flex-col gap-3">
              <div className="h-5 w-32 bg-black/[0.07] rounded animate-pulse" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(16px,2.5vw,32px)]">
                {[...Array(2)].map((_, col) => (
                  <div key={col} className="flex flex-col gap-3">
                    <div className="h-3 w-20 bg-black/[0.06] rounded animate-pulse" />
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-3.5 h-3.5 bg-black/[0.05] rounded shrink-0 animate-pulse" />
                        <div className="h-3 bg-black/[0.05] rounded animate-pulse flex-1" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right — booking card skeleton ── */}
          <div className="hidden lg:block">
            <div className="sticky top-[calc(52px+16px)] border border-black/[0.1] overflow-hidden">
              {/* Price */}
              <div className="px-6 py-5 border-b border-black/[0.07] flex flex-col gap-2">
                <div className="h-9 w-32 bg-black/[0.07] rounded animate-pulse" />
                <div className="h-3 w-24 bg-black/[0.05] rounded animate-pulse" />
              </div>

              {/* Details */}
              <div className="px-6 py-4 border-b border-black/[0.07] flex flex-col">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2.5 border-b border-black/[0.05] last:border-0"
                  >
                    <div className="h-3 w-20 bg-black/[0.05] rounded animate-pulse" />
                    <div className="h-3 w-16 bg-black/[0.06] rounded animate-pulse" />
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="px-6 py-5 flex flex-col gap-3">
                <div className="h-12 w-full bg-black/[0.08] rounded animate-pulse" />
                <div className="h-10 w-full bg-black/[0.05] rounded animate-pulse" />
                <div className="h-3 w-48 bg-black/[0.04] rounded animate-pulse mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky bar skeleton */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-black/[0.08] px-5 py-3.5 flex items-center justify-between gap-4 z-40">
        <div className="flex flex-col gap-1.5">
          <div className="h-6 w-20 bg-black/[0.07] rounded animate-pulse" />
          <div className="h-3 w-28 bg-black/[0.05] rounded animate-pulse" />
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black/[0.06] rounded animate-pulse" />
          <div className="h-10 w-28 bg-black/[0.08] rounded animate-pulse" />
        </div>
      </div>

      <div className="lg:hidden h-[72px]" />
    </main>
  );
}
