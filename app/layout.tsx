import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GTMHead, GTMNoScript } from "../components/GTM";

export const metadata: Metadata = {
  title: "BuiltByAshley | AI Maker & Web Studio",
  description:
    "Portfolio and booking site for Ashley Maria, an AI maker and automation strategist helping founders launch polished web experiences fast.",
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
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
