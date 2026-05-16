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
    <section className="bg-white py-14 md:py-24 px-5 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
          <div>
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa] block mb-3">
              Traveller stories
            </span>
            <h2 className="text-[28px] md:text-[48px] font-medium tracking-[-0.04em] text-black leading-[1.05]">
              Real trips. Real people.
            </h2>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-3.5 h-3.5 text-black fill-black" />
              ))}
            </div>
            <span className="text-[13px] text-[#888] tracking-[-0.01em]">
              5.0 from 200+ travellers
            </span>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col gap-5 p-6 bg-[#f8f8f6]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <FiStar key={i} className="w-3 h-3 text-black fill-black" />
                  ))}
                </div>
                <span className="text-[11px] font-medium tracking-[0.06em] uppercase text-[#bbb]">
                  {t.destination}
                </span>
              </div>

              <p className="text-[14px] md:text-[15px] text-black/70 tracking-[-0.01em] leading-[1.7] flex-1">
                {t.review}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-black flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-medium text-white tracking-[0.04em]">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-[13px] font-medium text-black tracking-[-0.02em]">
                    {t.name}
                  </p>
                  <p className="text-[11.5px] text-[#aaa] tracking-[-0.01em]">
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
