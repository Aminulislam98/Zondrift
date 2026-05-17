export default function DestinationCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-black/[0.06] overflow-hidden shadow p-2">
      <div className="flex flex-col sm:flex-row">
        {/* Image skeleton */}
        <div className="w-full h-[200px] sm:w-[240px] sm:min-h-[180px] shrink-0 bg-black/[0.07] rounded-md animate-pulse" />

        {/* Content skeleton */}
        <div className="flex flex-col flex-1 min-w-0 px-5 py-4 gap-3 relative">
          {/* Rating — top right */}
          <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
            <div className="h-7 w-14 bg-black/[0.06] rounded-md animate-pulse" />
            <div className="h-3 w-12 bg-black/[0.04] rounded animate-pulse" />
          </div>

          {/* Location */}
          <div className="h-3 w-20 bg-black/[0.05] rounded animate-pulse" />

          {/* Name */}
          <div className="h-4 w-44 bg-black/[0.07] rounded animate-pulse" />

          {/* Tagline */}
          <div className="h-3 w-64 bg-black/[0.05] rounded animate-pulse" />

          {/* Meta */}
          <div className="flex items-center gap-2">
            <div className="h-3 w-20 bg-black/[0.05] rounded animate-pulse" />
            <div className="h-3 w-1 bg-black/[0.04] rounded animate-pulse" />
            <div className="h-3 w-14 bg-black/[0.05] rounded animate-pulse" />
            <div className="h-3 w-1 bg-black/[0.04] rounded animate-pulse" />
            <div className="h-3 w-10 bg-black/[0.05] rounded animate-pulse" />
          </div>

          {/* Divider */}
          <div className="h-px bg-black/[0.06]" />

          {/* Price + button */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1.5">
              <div className="h-6 w-24 bg-black/[0.07] rounded animate-pulse" />
              <div className="h-3 w-32 bg-black/[0.04] rounded animate-pulse" />
            </div>
            {/* Plain grey button — no colour */}
            <div className="h-9 w-24 bg-black/[0.07] rounded-lg animate-pulse shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
