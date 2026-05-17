export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] pt-[52px]">
      <div className="max-w-5xl mx-auto px-[clamp(16px,4vw,32px)] py-[clamp(24px,4vw,40px)]">
        {/* ── Header ── */}
        <div className="flex items-center justify-between mb-[clamp(20px,3vw,32px)]">
          <div className="flex flex-col gap-2">
            <div className="h-2.5 w-20 bg-black/[0.06] rounded animate-pulse" />
            <div className="h-8 w-40 bg-black/[0.08] rounded animate-pulse" />
          </div>
          <div className="h-10 w-28 bg-black/[0.07] rounded-lg animate-pulse" />
        </div>

        {/* ── Stats — 4 cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[clamp(8px,1.5vw,12px)] mb-[clamp(20px,3vw,28px)]">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-[clamp(14px,2.5vw,20px)] flex flex-col gap-[clamp(10px,1.5vw,14px)]"
            >
              <div className="flex items-center justify-between">
                <div className="h-2.5 w-16 bg-black/[0.05] rounded animate-pulse" />
                <div className="h-4 w-4 bg-black/[0.05] rounded animate-pulse" />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="h-7 w-12 bg-black/[0.08] rounded animate-pulse" />
                <div className="h-2.5 w-20 bg-black/[0.04] rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* ── Table ── */}
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Table header */}
          <div className="flex items-center justify-between px-[clamp(16px,3vw,24px)] py-4 border-b border-black/[0.06]">
            <div className="h-5 w-36 bg-black/[0.07] rounded animate-pulse" />
            <div className="h-3 w-16 bg-black/[0.05] rounded animate-pulse" />
          </div>

          {/* Desktop column headers */}
          <div className="hidden md:grid grid-cols-[52px_1fr_100px_80px_72px_110px] gap-4 px-6 py-2.5 bg-[#f5f5f7] border-b border-black/[0.05]">
            {[0, 120, 60, 40, 40, 60].map((w, i) => (
              <div
                key={i}
                className={`h-2.5 bg-black/[0.05] rounded animate-pulse ${i === 0 ? "w-8" : ""}`}
                style={{ width: w || undefined }}
              />
            ))}
          </div>

          {/* Rows */}
          <div className="divide-y divide-black/[0.05]">
            {[...Array(6)].map((_, i) => (
              <div key={i} style={{ opacity: 1 - i * 0.1 }}>
                {/* Desktop row */}
                <div className="hidden md:grid grid-cols-[52px_1fr_100px_80px_72px_110px] gap-4 px-6 py-3.5 items-center">
                  <div className="w-[52px] h-9 bg-black/[0.06] rounded-lg animate-pulse" />
                  <div className="flex flex-col gap-1.5">
                    <div className="h-3.5 w-32 bg-black/[0.07] rounded animate-pulse" />
                    <div className="h-2.5 w-20 bg-black/[0.04] rounded animate-pulse" />
                  </div>
                  <div className="h-6 w-16 bg-black/[0.05] rounded-md animate-pulse" />
                  <div className="h-3.5 w-14 bg-black/[0.07] rounded animate-pulse" />
                  <div className="h-3.5 w-8 bg-black/[0.05] rounded animate-pulse" />
                  <div className="flex flex-col gap-1.5 items-end">
                    <div className="h-7 w-full bg-black/[0.05] rounded-lg animate-pulse" />
                    <div className="h-7 w-full bg-black/[0.05] rounded-lg animate-pulse" />
                  </div>
                </div>

                {/* Mobile row */}
                <div className="md:hidden flex flex-col divide-y divide-black/[0.04]">
                  <div className="flex items-center gap-3 px-4 py-3.5">
                    <div className="w-12 h-10 bg-black/[0.06] rounded-xl animate-pulse shrink-0" />
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="h-3.5 w-32 bg-black/[0.07] rounded animate-pulse" />
                      <div className="h-2.5 w-24 bg-black/[0.04] rounded animate-pulse" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="h-3.5 w-14 bg-black/[0.07] rounded animate-pulse" />
                      <div className="h-2.5 w-8 bg-black/[0.04] rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 pb-3.5 pt-2.5">
                    <div className="flex-1 h-8 bg-black/[0.05] rounded-lg animate-pulse" />
                    <div className="flex-1 h-8 bg-black/[0.05] rounded-lg animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table footer */}
          <div className="px-[clamp(16px,3vw,24px)] py-3 border-t border-black/[0.05] bg-[#fafafa]">
            <div className="h-3 w-32 bg-black/[0.04] rounded animate-pulse" />
          </div>
        </div>

        <div className="pb-[clamp(32px,5vw,48px)]" />
      </div>
    </main>
  );
}
