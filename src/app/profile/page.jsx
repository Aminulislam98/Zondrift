"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiEdit2,
  FiBookmark,
  FiClock,
  FiLogOut,
  FiChevronRight,
  FiMapPin,
  FiCalendar,
  FiUser,
} from "react-icons/fi";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Format joined date
  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-GB", {
        month: "long",
        year: "numeric",
      })
    : null;

  const handleSignOut = async () => {
    await authClient.signOut();
    window.location.href = "/login";
  };

  if (isPending) {
    return (
      <main className="min-h-screen bg-[#f5f5f7] pt-[52px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-black/10 border-t-black rounded-full animate-spin" />
          <span className="text-[13px] text-[#aaa]">Loading profile...</span>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-[#f5f5f7] pt-[52px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[14px] text-[#888] mb-4">
            Please sign in to view your profile
          </p>
          <Link
            href="/login"
            className="bg-black text-white text-[13px] px-5 py-2.5 rounded-lg hover:bg-black/80 transition-colors"
          >
            Sign in
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f5f7] pt-[52px]">
      <div className="max-w-5xl mx-auto px-[clamp(16px,4vw,40px)]">
        {/* ── Profile header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-[clamp(24px,4vw,40px)] mb-6">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative w-[clamp(64px,8vw,80px)] h-[clamp(64px,8vw,80px)] rounded-full overflow-hidden shrink-0 bg-black/[0.06]">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user.name ?? "User"}
                  fill
                  quality={85}
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FiUser className="w-7 h-7 text-[#bbb]" />
                </div>
              )}
            </div>
            <div>
              <h1 className="text-[clamp(18px,2.5vw,24px)] font-bold text-black tracking-[-0.03em] leading-tight">
                {user?.name ?? "User"}
              </h1>
              <p className="text-[13px] text-[#888]">{user?.email}</p>
            </div>
          </div>
          <Link
            href="/profile/edit"
            className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#555] border border-black/[0.15] px-4 py-2 rounded-full hover:text-black hover:border-black/30 transition-all bg-white self-start sm:self-center shrink-0"
          >
            <FiEdit2 className="w-3.5 h-3.5" />
            Edit profile
          </Link>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 pb-[clamp(32px,5vw,48px)]">
          {/* ── Left ── */}
          <div className="flex flex-col gap-4">
            {/* About card */}
            <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
              <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#aaa]">
                About
              </p>
              <div className="flex flex-col gap-2">
                {user?.email && (
                  <div className="flex items-center gap-2.5">
                    <FiUser className="w-3.5 h-3.5 text-[#bbb] shrink-0" />
                    <span className="text-[13.5px] text-[#555]">
                      {user.email}
                    </span>
                  </div>
                )}
                {joinedDate && (
                  <div className="flex items-center gap-2.5">
                    <FiCalendar className="w-3.5 h-3.5 text-[#bbb] shrink-0" />
                    <span className="text-[13.5px] text-[#555]">
                      Member since {joinedDate}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Menu card */}
            <div className="bg-white rounded-2xl overflow-hidden divide-y divide-black/[0.05]">
              <div className="px-5 py-3.5">
                <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#aaa]">
                  My account
                </p>
              </div>
              {[
                {
                  icon: <FiClock className="w-4 h-4" />,
                  label: "My bookings",
                  href: "/bookings",
                  desc: "View all your trips",
                },
                {
                  icon: <FiBookmark className="w-4 h-4" />,
                  label: "Saved destinations",
                  href: "/saved",
                  desc: "Your wishlist",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-5 py-4 hover:bg-black/[0.02] transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-black/[0.05] flex items-center justify-center text-[#666] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-black tracking-[-0.01em]">
                        {item.label}
                      </p>
                      <p className="text-[12px] text-[#aaa]">{item.desc}</p>
                    </div>
                  </div>
                  <FiChevronRight className="w-4 h-4 text-[#ccc] group-hover:text-black transition-colors" />
                </Link>
              ))}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3.5 px-5 py-4 hover:bg-black/[0.02] transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <FiLogOut className="w-4 h-4 text-red-400" />
                </div>
                <span className="text-[14px] font-medium text-red-400 tracking-[-0.01em]">
                  Sign out
                </span>
              </button>
            </div>
          </div>

          {/* ── Right — stats ── */}
          <div className="flex flex-col gap-4">
            {[
              {
                label: "Bookings",
                href: "/bookings",
                emoji: "✈️",
                desc: "Trips booked",
              },
              {
                label: "Saved",
                href: "/saved",
                emoji: "❤️",
                desc: "On your wishlist",
              },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="bg-white rounded-2xl p-6 flex items-center gap-5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow group"
              >
                <div className="w-14 h-14 rounded-2xl bg-black/[0.04] flex items-center justify-center text-3xl shrink-0 group-hover:bg-black/[0.07] transition-colors">
                  {s.emoji}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-black">
                    {s.label}
                  </p>
                  <p className="text-[12px] text-[#aaa]">{s.desc}</p>
                </div>
                <FiChevronRight className="w-4 h-4 text-[#ccc] group-hover:text-black transition-colors ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
