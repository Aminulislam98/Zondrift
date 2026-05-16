import { FiShield, FiZap, FiHeart, FiHeadphones } from "react-icons/fi";

const features = [
  {
    icon: <FiShield className="w-5 h-5" />,
    title: "No payment upfront",
    description:
      "Book with zero risk. We confirm availability first — you only pay when everything is locked in.",
  },
  {
    icon: <FiZap className="w-5 h-5" />,
    title: "24 hour confirmation",
    description:
      "A dedicated travel advisor reviews every booking and gets back to you within 24 hours.",
  },
  {
    icon: <FiHeart className="w-5 h-5" />,
    title: "Curated destinations",
    description:
      "Every destination is hand-picked and verified. No filler — only places worth your time.",
  },
  {
    icon: <FiHeadphones className="w-5 h-5" />,
    title: "24/7 support",
    description:
      "From booking to landing back home, our team is always on hand to help with anything.",
  },
];

export default function WhyZondrift() {
  return (
    <section className="bg-[#f8f8f6] py-14 md:py-24 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
            Why Zondrift
          </span>
          <h2 className="text-[28px] md:text-[48px] font-medium tracking-[-0.04em] text-black leading-[1.05] max-w-lg">
            Everything you need. Nothing you don't.
          </h2>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 md:p-8 flex flex-col gap-4 border border-black/[0.06] hover:border-black/[0.12] transition-colors"
            >
              <div className="w-9 h-9 bg-black/[0.04] flex items-center justify-center text-black shrink-0">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-[15px] md:text-[17px] font-medium tracking-[-0.03em] text-black">
                  {feature.title}
                </h3>
                <p className="text-[13.5px] text-[#888] tracking-[-0.01em] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
