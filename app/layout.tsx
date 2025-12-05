import "./globals.css";
import type { Metadata } from "next";
import { GTMHead, GTMNoScript } from "../components/GTM";

export const metadata: Metadata = {
  title: "BuiltByAshley | Professional Websites for Service-Based Businesses",
  description:
    "Done-for-you builds and DIY templates designed to help you launch faster and convert better.",
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
      </body>
    </html>
  );
}
