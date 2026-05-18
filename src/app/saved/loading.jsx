export default function Loading() {
  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header skeleton */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 py-12 border-b border-black/[0.06]">
          <div className="flex flex-col gap-2.5">
            <div className="h-2.5 w-24 bg-black/[0.05] rounded animate-pulse" />
            <div className="h-9 w-56 bg-black/[0.08] rounded animate-pulse" />
            <div className="h-3 w-28 bg-black/[0.04] rounded animate-pulse" />
          </div>
          <div className="h-10 w-32 bg-black/[0.05] rounded animate-pulse" />
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 py-12">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col"
              style={{ opacity: 1 - i * 0.1 }}
            >
              {/* Image */}
              <div className="h-[220px] bg-black/[0.07] mb-3 animate-pulse" />

              {/* Name + rating */}
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div className="flex flex-col gap-1.5 min-w-0 flex-1">
                  <div className="h-4 w-36 bg-black/[0.07] rounded animate-pulse" />
                  <div className="h-3 w-24 bg-black/[0.05] rounded animate-pulse" />
                </div>
                <div className="h-4 w-10 bg-black/[0.06] rounded animate-pulse shrink-0" />
              </div>

              {/* Duration + price */}
              <div className="flex items-center justify-between mt-1 mb-4">
                <div className="h-3 w-20 bg-black/[0.05] rounded animate-pulse" />
                <div className="h-4 w-16 bg-black/[0.07] rounded animate-pulse" />
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-auto">
                <div className="flex-1 h-10 bg-black/[0.05] rounded animate-pulse" />
                <div className="flex-1 h-10 bg-black/[0.04] rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
