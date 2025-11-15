import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Demo – Website Health Check",
  description:
    "Try a free demo of the Website Health Check tool and see your website health score with limited insights.",
  openGraph: {
    title: "Free Demo – Website Health Check",
    description:
      "Try a free demo of the Website Health Check tool and see your website health score with limited insights.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Demo – Website Health Check",
    description:
      "Try a free demo of the Website Health Check tool and see your website health score with limited insights.",
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
