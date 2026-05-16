import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[#f8f8f6] py-14 md:py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#aaa]">
            Start today
          </span>

          <h2 className="text-[32px] md:text-[60px] font-medium tracking-[-0.05em] text-black leading-[1.0] max-w-2xl">
            Your next adventure starts here.
          </h2>

          <p className="text-[14px] md:text-[15px] text-[#888] tracking-[-0.01em] leading-relaxed max-w-sm">
            Join thousands of travellers who plan their trips with Zondrift — no
            stress, no surprises.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              href="/destinations"
              className="w-full sm:w-auto text-center px-7 py-3 bg-black text-white text-[13.5px] font-medium tracking-[-0.02em] hover:bg-black/80 transition-colors"
            >
              Explore destinations
            </Link>
            <Link
              href="/register"
              className="w-full sm:w-auto text-center px-7 py-3 border border-black/[0.15] text-black text-[13.5px] tracking-[-0.02em] hover:border-black/30 transition-colors"
            >
              Create free account
            </Link>
          </div>

          <p className="text-[11.5px] text-[#ccc] tracking-[-0.01em]">
            No credit card required · Free to sign up · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
