"use client";

import Link from "next/link";

const footerLinks = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: "My Bookings", href: "/bookings" },
    { label: "Saved Trips", href: "/saved" },
  ],
  Account: [
    { label: "Profile", href: "/profile" },
    { label: "Login", href: "/login" },
    { label: "Sign Up", href: "/register" },
    { label: "Admin", href: "/admin" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/s" },
    { label: "Privacy Policy", href: "/as" },
    { label: "Terms of Service", href: "/a" },
  ],
};

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-black/[0.06]">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-[20px] font-medium tracking-[-0.04em] text-black"
            >
              Zondrift
            </Link>
            <p className="mt-4 text-[13.5px] text-[#888] leading-relaxed tracking-[-0.01em] max-w-xs">
              Plan your trips, discover destinations, and travel smarter — all
              in one place.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full border border-black/[0.1] flex items-center justify-center text-[#888] hover:text-black hover:border-black/30 transition-all duration-200"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[12px] font-medium tracking-[0.1em] uppercase text-black mb-4">
                {category}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-[#888] tracking-[-0.01em] hover:text-black transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/[0.06]">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#aaa] tracking-[-0.01em]">
            © {currentYear} Zondrift. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-[12px] text-[#aaa] hover:text-black transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-[#aaa] hover:text-black transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-[12px] text-[#aaa] hover:text-black transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
