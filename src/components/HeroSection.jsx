"use client";
import Image from "next/image";
import Link from "next/link";

const HeroImage =
  "https://images.unsplash.com/photo-1483631224226-a219224bb76e?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-150 overflow-hidden">
      {/* Background Image */}
      <Image
        src={HeroImage}
        alt="Zondrift hero — travel destination"
        fill
        priority
        quality={90}
        className="object-cover object-center"
      />

      {/* Dark overlay — makes white navbar text readable */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Bottom fade — blends into page below */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-white/50 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
        {/* Eyebrow tag */}
        <span className="inline-block text-[11px] font-medium tracking-[0.16em] uppercase text-white/70 mb-5">
          Plan your next adventure
        </span>

        {/* Heading */}
        <h1 className="text-[44px] md:text-[64px] lg:text-[76px] font-medium text-white tracking-[-0.04em] leading-[1.05] max-w-3xl mb-6">
          The world is waiting.
          <br />
          <span className="text-white/60">Where to next?</span>
        </h1>

        {/* Subtext */}
        <p className="text-[15px] md:text-[17px] text-white/70 font-normal tracking-[-0.01em] max-w-md mb-10 leading-relaxed">
          Discover destinations, plan your trips, and book with confidence all
          in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/destinations"
            className="px-6 py-3 bg-white text-black text-[14px] font-medium tracking-[-0.02em] rounded-full hover:bg-white/90 transition-all duration-200"
          >
            Explore destinations
          </Link>
          <Link
            href="/signup"
            className="px-6 py-3 bg-white/10 text-white text-[14px] font-medium tracking-[-0.02em] rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200"
          >
            Get started
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[11px] text-white/80 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-white/20" />
        </div>
      </div>
    </section>
  );
}
