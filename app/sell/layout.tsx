import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Full Website Health Report – AI UX, Copy & SEO Audit",
  description:
    "Unlock full website insights, including detailed UX review, copy critique, SEO breakdown and prioritized fixes.",
  openGraph: {
    title: "Buy Full Website Health Report – AI UX, Copy & SEO Audit",
    description:
      "Unlock full website insights, including detailed UX review, copy critique, SEO breakdown and prioritized fixes.",
    type: "website",
    images: ["/og-sell.png"], // Placeholder - generate actual OG image later
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Full Website Health Report – AI UX, Copy & SEO Audit",
    description:
      "Unlock full website insights, including detailed UX review, copy critique, SEO breakdown and prioritized fixes.",
    // images: ["/og-sell.png"], // Placeholder - generate actual image later
  },
};

export default function SellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
