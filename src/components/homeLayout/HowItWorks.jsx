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
    <section className="bg-[#f8f8f6] py-[clamp(32px,2vw,56px)] px-[clamp(16px,4vw,40px)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-[clamp(24px,4vw,40px)]">
          <span className="text-center text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-2">
            How it works
          </span>
          <h2 className="text-[clamp(20px,3vw,30px)] font-semibold tracking-[-0.03em] text-black mb-1.5 text-center">
            Three steps to your dream trip
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(12px,2vw,20px)]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-[clamp(20px,3vw,32px)] flex flex-col gap-3"
            >
              {/* Number */}
              <span className="text-[13px] font-bold text-[#bbb] tracking-[0.06em]">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-[clamp(15px,1.8vw,18px)] font-semibold tracking-[-0.02em] text-black leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[clamp(13px,1.4vw,14px)] text-[#666] leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Link */}
              <Link
                href={step.link}
                className="flex items-center gap-1.5 text-[12.5px] font-medium text-black mt-2 w-fit hover:opacity-60 transition-opacity"
              >
                {step.linkLabel}
                <svg
                  className="w-3 h-3 shrink-0"
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
          ))}
        </div>
      </div>
    </section>
  );
}
