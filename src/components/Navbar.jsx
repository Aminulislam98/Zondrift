"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ── swap these manually while practicing ──
const isLoggedIn = false;
const mockUser = {
  name: "Aminul",
  initials: "AI",
};
// ─────────────────────────────────────────

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Saved", href: "/saved" },
  { label: "Admin", href: "/admin" },
];

export default function Navbar() {
  const pathname = usePathname();

  // only home page gets the transparent → white scroll effect
  // every other page starts white immediately
  const isHeroPage = pathname === "/";

  const [scrolled, setScrolled] = useState(!isHeroPage);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // scroll listener — only runs on home page
  useEffect(() => {
    // on non-hero pages always keep white
    if (!isHeroPage) {
      setScrolled(true);
      return;
    }

    // on home page listen to scroll
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHeroPage]);

  // reset scrolled state when route changes
  useEffect(() => {
    setScrolled(!isHeroPage);
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname, isHeroPage]);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#profile-dropdown")) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-black/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-[52px] flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className={`text-[17px] font-medium tracking-[-0.04em] transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Zondrift
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-[-0.01em] px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                pathname === link.href
                  ? scrolled
                    ? "text-black font-medium"
                    : "text-white font-medium"
                  : scrolled
                    ? "text-[#555] hover:text-black hover:bg-black/[0.04]"
                    : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <div className="relative" id="profile-dropdown">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border transition-all duration-300 ${
                  scrolled
                    ? "border-black/[0.12] hover:border-black/20"
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-medium transition-colors duration-300 ${
                    scrolled ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  {mockUser.initials}
                </span>
                <span
                  className={`text-[13px] tracking-[-0.01em] transition-colors duration-300 ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  {mockUser.name}
                </span>
                <svg
                  className={`w-3 h-3 transition-all duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  } ${scrolled ? "text-[#aaa]" : "text-white/40"}`}
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2 4l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute right-0 top-[calc(100%+8px)] w-44 bg-white border border-black/[0.08] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden">
                  <div className="p-1.5">
                    <Link
                      href="/profile"
                      className="block px-3 py-2 text-[13px] text-[#333] rounded-xl hover:bg-black/[0.04] transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/bookings"
                      className="block px-3 py-2 text-[13px] text-[#333] rounded-xl hover:bg-black/[0.04] transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      My Bookings
                    </Link>
                    <Link
                      href="/saved"
                      className="block px-3 py-2 text-[13px] text-[#333] rounded-xl hover:bg-black/[0.04] transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Saved
                    </Link>
                  </div>
                  <div className="h-px bg-black/[0.06] mx-1.5" />
                  <div className="p-1.5">
                    <button
                      className="w-full text-left px-3 py-2 text-[13px] text-[#999] rounded-xl hover:bg-black/[0.04] transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className={`text-[13px] tracking-[-0.01em] transition-colors duration-300 ${
                  scrolled
                    ? "text-[#555] hover:text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Log in
              </Link>
              <Link
                href="/register"
                className={`text-[13px] tracking-[-0.01em] px-4 py-1.5 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "bg-black text-white hover:bg-black/80"
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-3.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-black/[0.06]`}
      >
        <div className="px-3 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center justify-between px-3 py-3 text-[15px] rounded-xl transition-colors ${
                pathname === link.href
                  ? "text-black font-medium bg-black/[0.04]"
                  : "text-[#555] hover:bg-black/[0.04] hover:text-black"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <svg
                className="w-3.5 h-3.5 text-[#ccc]"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M5 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
        </div>

        <div className="px-4 pb-4 pt-1 border-t border-black/[0.06]">
          {isLoggedIn ? (
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[12px] font-medium">
                  {mockUser.initials}
                </span>
                <span className="text-[14px] text-black">{mockUser.name}</span>
              </div>
              <button
                className="text-[13px] text-[#999] hover:text-black transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Log out
              </button>
            </div>
          ) : (
            <div className="flex gap-2 pt-1">
              <Link
                href="/login"
                className="flex-1 text-center text-[13.5px] text-[#333] py-2.5 rounded-full border border-black/[0.15] hover:border-black/30 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="flex-1 text-center text-[13.5px] text-white bg-black py-2.5 rounded-full hover:bg-black/80 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
