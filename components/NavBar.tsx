"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BuiltByAshleyLogo = () => (
  <div className="flex items-center gap-3">
    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-[#E8A9B8] bg-white text-[#E8A9B8] shadow-sm md:h-12 md:w-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5 md:h-6 md:w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="8 6 3 12 8 18" />
        <polyline points="16 6 21 12 16 18" />
        <line x1="12" x2="12" y1="4" y2="20" />
      </svg>
    </span>
    <div className="flex flex-col leading-tight">
      <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#E8A9B8] md:text-[11px]">
        BuiltBy
      </span>
      <span className="text-lg font-semibold text-[#2B2B2B] md:text-xl">
        Ashley
      </span>
    </div>
  </div>
);

export default function NavBar() {
  const pathname = usePathname();
  
  // Check if we're on a BuiltByAshley page (starter-site, templates, or root BuiltByAshley pages)
  const isBuiltByAshleyPage = 
    pathname?.startsWith('/starter-site') || 
    pathname?.startsWith('/templates') ||
    pathname === '/';

  // If on Website Health Check pages, show minimal or no nav (they have their own)
  if (pathname?.startsWith('/website-health-check') || 
      pathname?.startsWith('/demo') || 
      pathname?.startsWith('/sell') ||
      pathname?.startsWith('/success') ||
      pathname?.startsWith('/privacy') ||
      pathname?.startsWith('/terms') ||
      pathname?.startsWith('/cookies') ||
      pathname?.startsWith('/data-rights')) {
    return null; // These pages have their own navigation
  }

  // BuiltByAshley navigation
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#F4C2C2] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-colors hover:opacity-80"
            aria-label="BuiltByAshley Home"
          >
            <BuiltByAshleyLogo />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href="/starter-site"
              className="text-sm font-medium text-[#2B2B2B] hover:text-[#E8A9B8] transition-colors"
            >
              Starter Site
            </Link>
            <Link
              href="/templates"
              className="text-sm font-medium text-[#2B2B2B] hover:text-[#E8A9B8] transition-colors"
            >
              Templates
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-[#2B2B2B] hover:text-[#E8A9B8] transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
