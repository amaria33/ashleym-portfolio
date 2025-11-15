"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#F7CDD7] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold text-[#C08090] hover:text-[#DCA0B0] transition-colors"
          >
            Website Health Check
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-[#3A3A3A] hover:text-[#C08090] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/demo"
              className="text-sm font-medium text-[#3A3A3A] hover:text-[#C08090] transition-colors"
            >
              Demo
            </Link>
            <Link
              href="/sell"
              className="text-sm font-medium bg-[#C08090] text-white px-4 py-2 rounded-lg hover:bg-[#DCA0B0] transition-colors"
            >
              Buy Full Version
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
