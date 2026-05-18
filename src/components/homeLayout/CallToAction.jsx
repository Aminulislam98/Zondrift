import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[#f8f8f6] py-[clamp(48px,8vw,96px)] px-[clamp(16px,4vw,40px)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-[clamp(16px,2.5vw,28px)]">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa]">
            Start today
          </span>

          <h2 className="text-[clamp(28px,6vw,64px)] font-medium tracking-[-0.05em] text-black leading-[1.0] max-w-[min(90%,700px)]">
            Your next adventure starts here.
          </h2>

          <p className="text-[clamp(13px,1.6vw,15px)] text-[#888] tracking-[-0.01em] leading-relaxed max-w-[min(90%,380px)]">
            Join thousands of travellers who plan their trips with Zondrift — no
            stress, no surprises.
          </p>

          {/* Buttons — stack on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[clamp(8px,1.5vw,12px)] w-full sm:w-auto mt-[clamp(4px,1vw,8px)]">
            <Link
              href="/destinations"
              className="text-center px-[clamp(20px,4vw,32px)] py-[clamp(10px,1.8vw,14px)] bg-black text-white text-[clamp(13px,1.5vw,14px)] font-medium tracking-[-0.02em] hover:bg-black/80 transition-colors"
            >
              Explore destinations
            </Link>
            <Link
              href="/register"
              className="text-center px-[clamp(20px,4vw,32px)] py-[clamp(10px,1.8vw,14px)] border border-black/[0.15] text-black text-[clamp(13px,1.5vw,14px)] tracking-[-0.02em] hover:border-black/30 transition-colors"
            >
              Create free account
            </Link>
          </div>

          <p className="text-[clamp(10px,1.3vw,11.5px)] text-[#ccc] tracking-[-0.01em]">
            No credit card required · Free to sign up · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
