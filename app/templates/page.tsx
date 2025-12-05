"use client";

import Link from "next/link";

const sectionContainer =
  "mx-auto w-full max-w-[600px] px-5 pb-12 pt-12 md:max-w-6xl md:px-8 md:pb-[72px] md:pt-[72px]";

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

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F6] via-[#FFFFFF] to-[#F4C2C2]/20 text-[#2B2B2B]">
      <main>
        {/* Hero */}
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(232,169,184,0.28),rgba(244,194,194,0)_55%)]" />
          <div
            className={`${sectionContainer} flex flex-col items-center gap-8 text-center`}
          >
            <div className="space-y-6 max-w-3xl">
              <Link href="/" className="inline-block">
                <BuiltByAshleyLogo />
              </Link>
              <h1 className="text-4xl font-bold leading-tight text-[#2B2B2B] md:text-5xl lg:text-6xl">
                Website Templates for Niche Industries
              </h1>
              <p className="text-xl font-medium leading-relaxed text-[#2B2B2B]/80 md:text-2xl">
                Plug-and-play layouts designed for real service businesses. Use
                them on your own platform and hosting — without starting from a
                blank page.
              </p>
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="bg-white/90">
          <div className={`${sectionContainer} space-y-12`}>
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                Available Templates
              </h2>
              <p className="text-lg leading-[1.55] text-[#2B2B2B]/75 max-w-2xl mx-auto">
                Each template includes complete code, styling, and documentation
                so you can customize it to match your brand.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Beauty Booking Template */}
              <div className="flex h-full flex-col gap-6 rounded-3xl border border-[#F4C2C2]/60 bg-white/95 px-6 py-8 shadow-lg shadow-[#E8A9B8]/15 md:px-8 md:py-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-[#E8A9B8]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8A9B8]">
                    Available Now
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2B2B] md:text-3xl">
                    Beauty Booking Website Template
                  </h3>
                  <p className="text-lg leading-[1.55] text-[#2B2B2B]/75">
                    Perfect for salons, spas, and beauty professionals. Includes
                    booking integration, service showcase, and client
                    testimonials.
                  </p>
                  <div className="space-y-3 rounded-2xl border border-[#F4C2C2]/70 bg-gradient-to-br from-[#FFF9F6] via-white to-[#F4C2C2]/40 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold text-[#2B2B2B]/50 line-through">
                        $97
                      </p>
                      <p className="text-3xl font-bold text-[#2B2B2B]">
                        On Sale $77
                      </p>
                    </div>
                    <p className="text-xs leading-relaxed text-[#2B2B2B]/60">
                      One-time purchase. Includes all code and files.
                    </p>
                  </div>
                  <ul className="space-y-2 text-base leading-[1.55] text-[#2B2B2B]/80">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Responsive design
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Booking system ready
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Fully customizable
                    </li>
                  </ul>
                  <a
                    href="https://payhip.com/b/w3Hlz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full min-h-[50px] items-center justify-center rounded-full bg-[#E8A9B8] px-8 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-[#E8A9B8]/40 transition-all hover:-translate-y-0.5 hover:bg-[#E8A9B8]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B878]"
                  >
                    Purchase Template
                  </a>
                </div>
              </div>

              {/* Coaches & Consultants Template */}
              <div className="flex h-full flex-col gap-6 rounded-3xl border border-[#F4C2C2]/60 bg-white/95 px-6 py-8 shadow-lg shadow-[#E8A9B8]/15 md:px-8 md:py-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-[#D8B878]/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B878]">
                    Coming Soon
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2B2B] md:text-3xl">
                    Coaches & Consultants Template
                  </h3>
                  <p className="text-lg leading-[1.55] text-[#2B2B2B]/75">
                    Designed for coaches, consultants, and service providers.
                    Features program showcases, testimonials, and lead capture
                    forms.
                  </p>
                  <div className="space-y-3 rounded-2xl border border-[#F4C2C2]/70 bg-gradient-to-br from-[#FFF9F6] via-white to-[#F4C2C2]/40 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold text-[#2B2B2B]/50 line-through">
                        $97
                      </p>
                      <p className="text-3xl font-bold text-[#2B2B2B]">
                        On Sale $77
                      </p>
                    </div>
                    <p className="text-xs leading-relaxed text-[#2B2B2B]/60">
                      Available soon. Join the waitlist.
                    </p>
                  </div>
                  <ul className="space-y-2 text-base leading-[1.55] text-[#2B2B2B]/80">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Program showcase
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Lead capture forms
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Testimonial sections
                    </li>
                  </ul>
                  <a
                    href="https://forms.gle/MxsiXBDNY5LzcbUz6"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Opens waitlist form"
                    className="inline-flex w-full min-h-[50px] items-center justify-center rounded-full border-2 border-[#D8B878] bg-white px-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#D8B878] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#D8B878]/5 hover:border-[#D8B878]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B878]"
                  >
                    Join the Waitlist
                  </a>
                </div>
              </div>

              {/* Local Service Provider Template */}
              <div className="flex h-full flex-col gap-6 rounded-3xl border border-[#F4C2C2]/60 bg-white/95 px-6 py-8 shadow-lg shadow-[#E8A9B8]/15 md:px-8 md:py-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-[#D8B878]/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B878]">
                    Coming Soon
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2B2B] md:text-3xl">
                    Local Service Provider Template
                  </h3>
                  <p className="text-lg leading-[1.55] text-[#2B2B2B]/75">
                    Ideal for local businesses like plumbers, electricians, and
                    home services. Includes service areas, reviews, and contact
                    forms.
                  </p>
                  <div className="space-y-3 rounded-2xl border border-[#F4C2C2]/70 bg-gradient-to-br from-[#FFF9F6] via-white to-[#F4C2C2]/40 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold text-[#2B2B2B]/50 line-through">
                        $97
                      </p>
                      <p className="text-3xl font-bold text-[#2B2B2B]">
                        On Sale $77
                      </p>
                    </div>
                    <p className="text-xs leading-relaxed text-[#2B2B2B]/60">
                      Available soon. Join the waitlist.
                    </p>
                  </div>
                  <ul className="space-y-2 text-base leading-[1.55] text-[#2B2B2B]/80">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Service area maps
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Review integration
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Contact forms
                    </li>
                  </ul>
                  <a
                    href="https://forms.gle/MxsiXBDNY5LzcbUz6"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Opens waitlist form"
                    className="inline-flex w-full min-h-[50px] items-center justify-center rounded-full border-2 border-[#D8B878] bg-white px-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#D8B878] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#D8B878]/5 hover:border-[#D8B878]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B878]"
                  >
                    Join the Waitlist
                  </a>
                </div>
              </div>

              {/* Realtors Template */}
              <div className="flex h-full flex-col gap-6 rounded-3xl border border-[#F4C2C2]/60 bg-white/95 px-6 py-8 shadow-lg shadow-[#E8A9B8]/15 md:px-8 md:py-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center rounded-full bg-[#D8B878]/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B878]">
                    Coming Soon
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2B2B] md:text-3xl">
                    Realtors Template
                  </h3>
                  <p className="text-lg leading-[1.55] text-[#2B2B2B]/75">
                    Perfect for real estate agents and brokers. Features
                    property listings, virtual tour integration, mortgage
                    calculators, and client testimonials.
                  </p>
                  <div className="space-y-3 rounded-2xl border border-[#F4C2C2]/70 bg-gradient-to-br from-[#FFF9F6] via-white to-[#F4C2C2]/40 px-5 py-4">
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold text-[#2B2B2B]/50 line-through">
                        $97
                      </p>
                      <p className="text-3xl font-bold text-[#2B2B2B]">
                        On Sale $77
                      </p>
                    </div>
                    <p className="text-xs leading-relaxed text-[#2B2B2B]/60">
                      Available soon. Join the waitlist.
                    </p>
                  </div>
                  <ul className="space-y-2 text-base leading-[1.55] text-[#2B2B2B]/80">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Property listings showcase
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Virtual tour integration
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Mortgage calculator
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      Client testimonials
                    </li>
                  </ul>
                  <a
                    href="https://forms.gle/MxsiXBDNY5LzcbUz6"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Opens waitlist form"
                    className="inline-flex w-full min-h-[50px] items-center justify-center rounded-full border-2 border-[#D8B878] bg-white px-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#D8B878] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#D8B878]/5 hover:border-[#D8B878]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B878]"
                  >
                    Join the Waitlist
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[#E8A9B8] bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#E8A9B8] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#D8B878] hover:text-[#D8B878] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9B8]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
