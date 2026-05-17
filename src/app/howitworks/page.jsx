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
      "Bookmark destinations you love, compare options, and build your perfect itinerary at your own pace — no rush, no pressure.",
    link: "/saved",
    linkLabel: "Start planning",
  },
  {
    number: "03",
    title: "Book with confidence",
    description:
      "Submit your booking in minutes. A dedicated advisor confirms everything within 24 hours. No payment required upfront — ever.",
    link: "/register",
    linkLabel: "Get started",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white  py-5 sm:py-7   px-[clamp(16px,4vw,40px)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[clamp(10px,2vw,20px)] mb-[clamp(40px,6vw,80px)]">
          <div>
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-[clamp(8px,1.2vw,12px)]">
              How it works
            </span>
            <h2 className="text-[clamp(24px,4vw,48px)] font-medium tracking-[-0.04em] text-black leading-[1.05]">
              Three steps to your dream trip
            </h2>
          </div>
          <p className="text-[clamp(13px,1.5vw,15px)] text-[#888] tracking-[-0.01em] leading-relaxed md:max-w-[220px] md:text-right">
            From discovery to booking in minutes.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.06]">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="bg-white flex flex-col justify-between gap-[clamp(32px,5vw,56px)] p-[clamp(24px,4vw,48px)] relative group hover:bg-[#fafafa] transition-colors duration-300"
            >
              {/* Top — number + connector line */}
              <div>
                <div className="flex items-center gap-4 mb-[clamp(20px,3vw,36px)]">
                  <span className="text-[clamp(11px,1.3vw,12px)] font-medium tracking-[0.1em] uppercase text-[#aaa]">
                    Step {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block flex-1 h-px bg-black/[0.1]">
                      <div className="w-1.5 h-1.5 rounded-full bg-black/20 ml-auto -mt-[3px]" />
                    </div>
                  )}
                </div>

                {/* Giant number */}
                <div className="relative mb-[clamp(16px,2.5vw,28px)]">
                  <span className="text-[clamp(72px,12vw,140px)] font-medium tracking-[-0.06em] text-black/[0.05] leading-none select-none block">
                    {step.number}
                  </span>
                </div>

                {/* Title + description */}
                <h3 className="text-[clamp(18px,2.5vw,26px)] font-medium tracking-[-0.04em] text-black leading-[1.15] mb-[clamp(10px,1.5vw,16px)]">
                  {step.title}
                </h3>
                <p className="text-[clamp(13px,1.5vw,14.5px)] text-[#777] tracking-[-0.01em] leading-[1.8]">
                  {step.description}
                </p>
              </div>

              {/* Bottom — link */}
              <Link
                href={step.link}
                className="flex items-center gap-2 text-[clamp(12px,1.4vw,13px)] font-medium text-black tracking-[-0.01em] w-fit group/link"
              >
                <span className="border-b border-black/20 group-hover/link:border-black transition-colors duration-200 pb-0.5">
                  {step.linkLabel}
                </span>
                <svg
                  className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200 shrink-0"
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
