import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Browse destinations",
    description:
      "Explore our curated collection. Filter by category, travel style, and budget to find exactly what you're looking for.",
    link: "/destinations",
    linkLabel: "Explore destinations",
  },
  {
    number: "02",
    title: "Save and plan",
    description:
      "Bookmark destinations you love and build your perfect itinerary at your own pace — no rush, no pressure.",
    link: "/saved",
    linkLabel: "Start planning",
  },
  {
    number: "03",
    title: "Book with confidence",
    description:
      "Submit your booking in minutes. A dedicated advisor confirms within 24 hours. No payment required upfront.",
    link: "/register",
    linkLabel: "Get started",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-[clamp(32px,5vw,56px)] px-[clamp(16px,4vw,40px)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-[clamp(20px,3vw,32px)]">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-2">
            How it works
          </span>
          <h2 className="text-[clamp(20px,3vw,32px)] font-medium tracking-[-0.04em] text-black leading-tight">
            Three steps to your dream trip
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.06]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white flex flex-col gap-3 p-[clamp(16px,3vw,28px)] relative group hover:bg-[#fafafa] transition-colors duration-300"
            >
              {/* Step number */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#aaa] shrink-0">
                  {step.number}
                </span>
                <div className="flex-1 h-px bg-black/[0.07]" />
              </div>

              {/* Title */}
              <h3 className="text-[clamp(14px,1.8vw,17px)] font-semibold tracking-[-0.03em] text-black leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[clamp(12px,1.4vw,13px)] text-[#777] tracking-[-0.01em] leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Link */}
              <Link
                href={step.link}
                className="flex items-center gap-1.5 text-[12px] font-medium text-black tracking-[-0.01em] w-fit group/link mt-1"
              >
                <span className="border-b border-black/20 group-hover/link:border-black transition-colors pb-0.5">
                  {step.linkLabel}
                </span>
                <svg
                  className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform shrink-0"
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

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
