"use client";

import Link from "next/link";

interface TemplateCardProps {
  name: string;
  description: string;
  regularPrice?: number;
  salePrice?: number;
  isFeatured?: boolean;
  status: "available" | "comingSoon";
  ctaLabel: string;
  ctaLink?: string;
}

export default function TemplateCard({
  name,
  description,
  regularPrice,
  salePrice,
  isFeatured = false,
  status,
  ctaLabel,
  ctaLink,
}: TemplateCardProps) {
  const isAvailable = status === "available";

  return (
    <div
      className={`relative flex h-full flex-col gap-4 rounded-3xl border ${
        isFeatured
          ? "border-[#E8A9B8]/60 bg-gradient-to-br from-white via-[#FFF9F6] to-[#F4C2C2]/30 shadow-xl shadow-[#E8A9B8]/20"
          : "border-[#F4C2C2]/60 bg-white/95 shadow-lg shadow-[#E8A9B8]/15"
      } px-6 py-6 md:px-8 md:py-8`}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-6 inline-flex items-center justify-center rounded-full bg-[#D8B878] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md">
          Featured Template
        </div>
      )}
      {status === "comingSoon" && (
        <div className="absolute -top-3 right-6 inline-flex items-center justify-center rounded-full bg-[#B8A9A5] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md">
          Coming Soon
        </div>
      )}

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#2B2B2B] md:text-3xl">
            {name}
          </h3>
          <p className="text-base leading-[1.55] text-[#2B2B2B]/75">
            {description}
          </p>
        </div>

        {isAvailable && (regularPrice || salePrice) && (
          <div className="space-y-3 rounded-2xl border border-[#F4C2C2]/70 bg-gradient-to-br from-[#FFF9F6] via-white to-[#F4C2C2]/40 px-5 py-4 shadow-sm">
            <div className="flex flex-col gap-2">
              {regularPrice && salePrice && regularPrice > salePrice && (
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]/50 line-through">
                  ${regularPrice}
                </p>
              )}
              {salePrice && (
                <div className="flex items-center gap-3">
                  <p className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                    ${salePrice}
                  </p>
                  {regularPrice && salePrice && regularPrice > salePrice && (
                    <span className="inline-flex items-center justify-center rounded-full bg-[#D8B878]/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B878]">
                      On Sale
                    </span>
                  )}
                </div>
              )}
            </div>
            {salePrice && (
              <p className="text-xs leading-relaxed text-[#2B2B2B]/60">
                You'll receive the code and files so you can use this template
                with your own platform and hosting.
              </p>
            )}
          </div>
        )}

        {status === "comingSoon" && (
          <div className="rounded-2xl border border-[#B8A9A5]/40 bg-[#FFF9F6]/80 px-5 py-4 text-sm leading-[1.55] text-[#2B2B2B]/70">
            <p>This template is currently in development. Check back soon!</p>
          </div>
        )}

        <div className="pt-2">
          {isAvailable && ctaLink ? (
            <Link
              href={ctaLink}
              className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-[#E8A9B8] px-6 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-md shadow-[#E8A9B8]/40 transition-all hover:-translate-y-0.5 hover:bg-[#E8A9B8]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B878]"
            >
              {ctaLabel}
            </Link>
          ) : (
            <button
              disabled
              className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-[#B8A9A5]/50 px-6 text-sm font-semibold uppercase tracking-[0.24em] text-white/70 cursor-not-allowed"
            >
              {status === "comingSoon" ? "Coming Soon" : ctaLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

