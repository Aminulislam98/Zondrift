import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Browse destinations",
    description:
      "Explore our curated collection across the world. Filter by category, travel style, and budget to find exactly what you are looking for.",
    link: "/destinations",
    linkLabel: "Explore destinations",
  },
  {
    number: "02",
    title: "Save and plan",
    description:
      "Bookmark destinations you love, compare options, and build your perfect trip at your own pace.",
    link: "/saved",
    linkLabel: "View saved",
  },
  {
    number: "03",
    title: "Book with confidence",
    description:
      "Submit your booking in minutes. A dedicated advisor confirms everything within 24 hours. No payment required upfront.",
    link: "/register",
    linkLabel: "Get started",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-14 md:py-24 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-16 pb-8 md:pb-12 border-b border-black/[0.06]">
          <div>
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
              How it works
            </span>
            <h2 className="text-[28px] md:text-[48px] font-medium tracking-[-0.04em] text-black leading-[1.05]">
              Three steps to your dream trip
            </h2>
          </div>
          <p className="text-[14px] text-[#888] tracking-[-0.01em] leading-relaxed md:max-w-xs md:text-right">
            From discovery to booking in minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr_180px] gap-4 md:gap-8 py-8 md:py-10 items-start ${
                i < steps.length - 1 ? "border-b border-black/[0.06]" : ""
              }`}
            >
              {/* Step number — smaller on mobile */}
              <span className="text-[40px] md:text-[64px] font-medium tracking-[-0.06em] text-black/[0.07] leading-none select-none">
                {step.number}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[17px] md:text-[20px] font-medium tracking-[-0.03em] text-black">
                  {step.title}
                </h3>
                <p className="text-[13.5px] md:text-[14.5px] text-[#888] tracking-[-0.01em] leading-relaxed">
                  {step.description}
                </p>
                {/* Link shows inline on mobile */}
                <Link
                  href={step.link}
                  className="flex items-center gap-1.5 text-[13px] text-[#555] tracking-[-0.01em] hover:text-black transition-colors group mt-1 md:hidden w-fit"
                >
                  {step.linkLabel}
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Link — right aligned on desktop only */}
              <div className="hidden md:flex md:justify-end items-start">
                <Link
                  href={step.link}
                  className="flex items-center gap-1.5 text-[13px] text-[#555] tracking-[-0.01em] hover:text-black transition-colors group"
                >
                  {step.linkLabel}
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 7h8M7 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
