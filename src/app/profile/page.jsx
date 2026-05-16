import Image from "next/image";
import Link from "next/link";
import {
  FiEdit2,
  FiBookmark,
  FiClock,
  FiLogOut,
  FiChevronRight,
} from "react-icons/fi";

// ── Replace with real session later ──
const user = {
  name: "Aminul Islam",
  email: "aminul@example.com",
  avatar:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  location: "Sutton, London",
  joinedDate: "January 2026",
  totalBookings: 3,
  savedDestinations: 5,
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white pt-[52px]">
      <div className="max-w-lg mx-auto px-5 py-14 flex flex-col gap-10">
        {/* ── Identity ── */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="relative w-20 h-20 overflow-hidden bg-black">
            <Image
              src={user.avatar}
              alt={user.name}
              fill
              className="object-cover"
              quality={85}
            />
          </div>
          <div>
            <h1 className="text-[22px] font-medium text-black tracking-[-0.04em]">
              {user.name}
            </h1>
            <p className="text-[13px] text-[#aaa] tracking-[-0.01em] mt-1">
              {user.email}
            </p>
            <p className="text-[12px] text-[#bbb] tracking-[-0.01em] mt-0.5">
              {user.location} · Joined {user.joinedDate}
            </p>
          </div>
          <Link
            href="/profile/edit"
            className="flex items-center gap-1.5 text-[12.5px] text-[#555] border border-black/[0.12] px-4 py-2 hover:text-black hover:border-black/25 transition-all"
          >
            <FiEdit2 className="w-3.5 h-3.5" />
            Edit profile
          </Link>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Bookings", value: user.totalBookings, href: "/bookings" },
            { label: "Saved", value: user.savedDestinations, href: "/saved" },
          ].map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="flex flex-col items-center py-6 border border-black/[0.08] hover:border-black/20 transition-colors gap-1"
            >
              <span className="text-[28px] font-medium text-black tracking-[-0.05em]">
                {s.value}
              </span>
              <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#aaa]">
                {s.label}
              </span>
            </Link>
          ))}
        </div>

        {/* ── Menu ── */}
        <div className="flex flex-col border-t border-black/[0.06]">
          {[
            {
              icon: <FiClock className="w-4 h-4" />,
              label: "My bookings",
              href: "/bookings",
            },
            {
              icon: <FiBookmark className="w-4 h-4" />,
              label: "Saved destinations",
              href: "/saved",
            },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between py-4 border-b border-black/[0.06] group"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#bbb]">{item.icon}</span>
                <span className="text-[14px] text-black tracking-[-0.01em]">
                  {item.label}
                </span>
              </div>
              <FiChevronRight className="w-4 h-4 text-[#ccc] group-hover:text-black transition-colors" />
            </Link>
          ))}

          <button className="flex items-center gap-3 py-4 text-left group">
            <FiLogOut className="w-4 h-4 text-[#bbb]" />
            <span className="text-[14px] text-[#888] tracking-[-0.01em] group-hover:text-black transition-colors">
              Sign out
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
