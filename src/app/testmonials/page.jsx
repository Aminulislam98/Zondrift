import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "London, UK",
    initials: "SM",
    rating: 5,
    destination: "Bali Paradise",
    review:
      "Zondrift made planning our honeymoon completely effortless. The advisor was incredible — everything was sorted within hours and the trip was absolutely perfect.",
  },
  {
    name: "James Okafor",
    location: "Manchester, UK",
    initials: "JO",
    rating: 5,
    destination: "Tokyo Explorer",
    review:
      "I had never travelled solo before and was nervous. Zondrift held my hand through every step. Tokyo was the best trip of my life — already booking my next one.",
  },
  {
    name: "Priya Sharma",
    location: "Birmingham, UK",
    initials: "PS",
    rating: 5,
    destination: "Santorini Escape",
    review:
      "The no-upfront-payment policy was what made me trust them. Everything was exactly as described. Santorini was breathtaking and the whole experience was seamless.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-[clamp(48px,8vw,96px)] px-[clamp(16px,4vw,40px)] border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[clamp(12px,2vw,20px)] mb-[clamp(24px,4vw,48px)]">
          <div>
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-[clamp(8px,1.5vw,14px)]">
              Traveller stories
            </span>
            <h2 className="text-[clamp(24px,4vw,48px)] font-medium tracking-[-0.04em] text-black leading-[1.05]">
              Real trips. Real people.
            </h2>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-3.5 h-3.5 text-black fill-black" />
              ))}
            </div>
            <span className="text-[clamp(12px,1.5vw,13px)] text-[#888] tracking-[-0.01em] whitespace-nowrap">
              5.0 from 200+ travellers
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(8px,1.5vw,16px)]">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-[clamp(16px,2.5vw,24px)] p-[clamp(20px,3vw,28px)] bg-[#f8f8f6]"
            >
              {/* Stars + destination */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-0.5 shrink-0">
                  {[...Array(t.rating)].map((_, i) => (
                    <FiStar key={i} className="w-3 h-3 text-black fill-black" />
                  ))}
                </div>
                <span className="text-[10px] font-medium tracking-[0.06em] uppercase text-[#bbb] truncate text-right">
                  {t.destination}
                </span>
              </div>

              {/* Review */}
              <p className="text-[clamp(13px,1.6vw,15px)] text-black/70 tracking-[-0.01em] leading-[1.75] flex-1">
                "{t.review}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-[clamp(30px,3.5vw,36px)] h-[clamp(30px,3.5vw,36px)] bg-black flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-medium text-white tracking-[0.04em]">
                    {t.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-[clamp(12px,1.5vw,13px)] font-medium text-black tracking-[-0.02em] truncate">
                    {t.name}
                  </p>
                  <p className="text-[clamp(11px,1.3vw,11.5px)] text-[#aaa] tracking-[-0.01em] truncate">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
