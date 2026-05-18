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
    <section className="bg-[#f8f8f6] py-[clamp(48px,4vw,96px)] px-[clamp(16px,4vw,40px)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-[clamp(24px,4vw,48px)]">
          <span className="text-center text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-[clamp(8px,1.5vw,14px)]">
            Why Zondrift
          </span>
          <h2 className="text-[clamp(20px,3vw,30px)] font-semibold tracking-[-0.03em] text-black mb-1.5 text-center">
            Everything you need. Nothing you don't.
          </h2>
        </div>

        {/* Features grid — auto-fit so it never breaks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(8px,1.5vw,16px)]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-[clamp(20px,3vw,32px)] flex flex-col gap-[clamp(12px,2vw,20px)] border border-black/[0.06] hover:border-black/[0.14] transition-colors"
            >
              <div className="w-[clamp(32px,4vw,40px)] h-[clamp(32px,4vw,40px)] bg-black/[0.04] flex items-center justify-center text-black shrink-0">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-[clamp(4px,1vw,8px)]">
                <h3 className="text-[clamp(14px,1.8vw,17px)] font-medium tracking-[-0.03em] text-black">
                  {feature.title}
                </h3>
                <p className="text-[clamp(13px,1.5vw,14px)] text-[#888] tracking-[-0.01em] leading-relaxed">
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
