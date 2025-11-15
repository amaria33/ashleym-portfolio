import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GTMHead, GTMNoScript } from "../components/GTM";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Website Health Check – AI UX, Copy & SEO Audit",
  description:
    "Paste any URL and get an instant AI-powered report on UX, copy, SEO and an overall health score.",
  openGraph: {
    title: "Website Health Check – AI UX, Copy & SEO Audit",
    description:
      "Paste any URL and get an instant AI-powered report on UX, copy, SEO and an overall health score.",
    type: "website",
    images: ["/og-main.png"], // Placeholder - generate actual OG image later
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Health Check – AI UX, Copy & SEO Audit",
    description:
      "Paste any URL and get an instant AI-powered report on UX, copy, SEO and an overall health score.",
    // images: ["/og-main.png"], // Placeholder - generate actual image later
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GTMHead />
      <body>
        <GTMNoScript />
        <NavBar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
