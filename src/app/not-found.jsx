import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-5 relative overflow-hidden">
      {/* Background decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-black/[0.04]" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-black/[0.04]" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-black/[0.04]" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-black/[0.04]" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-black/[0.04]" />
      </div>

      {/* Giant 404 background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="text-[30vw] font-medium tracking-[-0.06em] text-black/[0.03] leading-none">
          404
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-black/20" />
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#aaa]">
            Error 404
          </span>
          <div className="h-px w-12 bg-black/20" />
        </div>

        {/* Heading */}
        <h1 className="text-[40px] md:text-[64px] font-medium tracking-[-0.05em] text-black leading-[1.0] mb-5">
          Lost in transit
        </h1>

        {/* Sub */}
        <p className="text-[15px] md:text-[16px] text-[#888] tracking-[-0.01em] leading-relaxed mb-12 max-w-sm">
          The page you are looking for has taken an unexpected detour. Let us
          help you find your way back.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-16">
          <Link
            href="/"
            className="w-full sm:w-auto text-center bg-black text-white text-[13.5px] font-medium tracking-[-0.01em] px-8 py-3.5 hover:bg-black/80 transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/destinations"
            className="w-full sm:w-auto text-center text-[13.5px] text-[#555] tracking-[-0.01em] border border-black/[0.12] px-8 py-3.5 hover:border-black/25 hover:text-black transition-colors"
          >
            Explore destinations
          </Link>
        </div>

        {/* Quick links */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {[
            { label: "Destinations", href: "/destinations" },
            { label: "My bookings", href: "/bookings" },
            { label: "Saved", href: "/saved" },
            { label: "Profile", href: "/profile" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12.5px] text-[#bbb] tracking-[-0.01em] hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom brand */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center">
        <span className="text-[12px] font-medium tracking-[-0.02em] text-black/20">
          Zondrift
        </span>
      </div>
    </main>
  );
}
