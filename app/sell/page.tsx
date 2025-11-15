"use client";

import Link from "next/link";
import { useState } from "react";
import { logEvent } from "../../lib/analytics";

export default function SellPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleBuyNow = async () => {
    // Log analytics event
    logEvent("click_buy_full_report");

    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to start checkout. Please try again.");
      setLoading(false);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Placeholder - no real integration yet
    setEmailSubmitted(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-[#FFF6F3]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F7CDD7] via-[#DCA0B0] to-[#C08090] text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AI-Powered Website Health Check
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Instant UX, Copy, SEO & Score — See What's Holding Your Website
            Back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleBuyNow}
              disabled={loading}
              className="bg-[#C08090] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#A56678] transition-all shadow-lg disabled:opacity-60"
            >
              {loading ? "Processing..." : "Buy Full Report – $7"}
            </button>
            <Link
              href="/demo"
              className="border-2 border-[#D6B36A] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all"
            >
              Try Free Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#3A3A3A] mb-12">
          What You Get
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎨"
            title="Full UX Analysis"
            description="Get detailed insights into your site's navigation, layout, mobile responsiveness, and overall user experience."
          />
          <FeatureCard
            icon="✍️"
            title="Copy Clarity Score"
            description="Understand how clear your messaging is, how compelling your CTAs are, and where to improve conversion copy."
          />
          <FeatureCard
            icon="🔍"
            title="SEO Breakdown"
            description="Review your meta tags, heading structure, alt text, internal links, and other essential SEO factors."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#3A3A3A] mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Enter URL"
              description="Simply paste your website URL into our analyzer."
            />
            <StepCard
              number="2"
              title="AI Analyzes HTML"
              description="Our AI reviews your site's code, content, and structure in seconds."
            />
            <StepCard
              number="3"
              title="Get Full Report"
              description="Receive actionable insights with a clear health score and recommendations."
            />
          </div>
        </div>
      </section>

      {/* SCREENSHOT PLACEHOLDER */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl border-4 border-[#F7CDD7] bg-gradient-to-br from-[#FFF6F3] to-[#F7CDD7] p-8 md:p-16 shadow-lg">
          <div className="aspect-video bg-white/50 rounded-lg border-2 border-[#E7A5B5] flex items-center justify-center">
            <p className="text-[#C08090] font-semibold text-lg">
              Sample Report Screenshot
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#3A3A3A] mb-12">
          Simple, One-Time Pricing
        </h2>
        <div className="bg-white rounded-2xl shadow-xl border-2 border-[#D6B36A] p-8 md:p-12 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-[#C08090] mb-4 text-center">
            Full Website Report
          </h3>
          <ul className="space-y-3 mb-6 text-[#3A3A3A]">
            <li className="flex items-start gap-2">
              <span className="text-[#D6B36A] font-bold">✓</span>
              <span>Complete health score (0-100)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D6B36A] font-bold">✓</span>
              <span>Full UX analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D6B36A] font-bold">✓</span>
              <span>Complete copywriting review</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D6B36A] font-bold">✓</span>
              <span>Full SEO breakdown</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D6B36A] font-bold">✓</span>
              <span>Prioritized recommendations list</span>
            </li>
          </ul>
          <div className="text-center mb-6">
            <p className="text-5xl font-bold text-[#3A3A3A] mb-2">$7</p>
            <p className="text-sm text-[#C0C0C0]">
              One-time payment • No subscription
            </p>
          </div>
          <button
            onClick={handleBuyNow}
            disabled={loading}
            className="w-full bg-[#C08090] text-white py-3 rounded-lg font-semibold hover:bg-[#A56678] transition-all shadow-md disabled:opacity-60"
          >
            {loading ? "Processing..." : "Buy Full Report"}
          </button>
        </div>
      </section>

      {/* EMAIL CAPTURE SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-[#F7CDD7] rounded-2xl p-8 md:p-12 border-2 border-[#D6B36A]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3A3A3A] text-center mb-3">
            Get launch updates and discounts
          </h2>
          <p className="text-center text-[#3A3A3A] mb-6 max-w-xl mx-auto">
            Drop your email to get tips, case studies, and early access to new
            tools.
          </p>

          {!emailSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-[#D6B36A] focus:outline-none focus:ring-2 focus:ring-[#C08090] text-[#3A3A3A]"
                />
                <button
                  type="submit"
                  className="bg-[#C08090] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A56678] transition-all whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <p className="text-[#3A3A3A] font-semibold text-lg">
                ✓ Thanks, you&apos;re on the list!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#3A3A3A] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <FAQItem
              question="How does this work?"
              answer="Our AI-powered tool fetches your website's HTML, analyzes the content, structure, and code, then generates a comprehensive report covering UX, copywriting, and SEO. You get instant actionable insights."
            />
            <FAQItem
              question="Is my data stored?"
              answer="No. We fetch your site's public HTML for analysis but do not store your website data. The analysis is performed in real-time and the report is generated on the spot."
            />
            <FAQItem
              question="Do you access my login or backend?"
              answer="No. We only analyze publicly accessible pages. We don't require any login credentials or access to your site's admin area."
            />
            <FAQItem
              question="Can I use this for clients?"
              answer="Yes! You can run reports for any public website. Many agencies and freelancers use our tool to provide quick audits to their clients."
            />
            <FAQItem
              question="Do you offer refunds?"
              answer="Yes. If you're not satisfied with your report, contact us within 7 days for a full refund, no questions asked."
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3A3A3A] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-4 text-lg font-semibold">Website Health Check</p>
          <p className="text-sm text-[#C0C0C0] mb-4">
            AI-powered insights for better websites.
          </p>
          <p className="text-sm text-[#C0C0C0]">
            Questions? Email us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-[#D6B36A] hover:underline"
            >
              support@example.com
            </a>
          </p>
          <div className="mt-6 flex justify-center gap-6 text-xs text-[#C0C0C0]">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#D6B36A] hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#C08090] mb-2">{title}</h3>
      <p className="text-[#3A3A3A] text-sm">{description}</p>
    </div>
  );
}

type StepCardProps = {
  number: string;
  title: string;
  description: string;
};

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-[#C08090] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-[#3A3A3A] mb-2">{title}</h3>
      <p className="text-[#3A3A3A] text-sm">{description}</p>
    </div>
  );
}

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="border-l-4 border-[#D6B36A] bg-[#FFF6F3] rounded-lg p-6">
      <h3 className="font-semibold text-[#C08090] mb-2 text-lg">{question}</h3>
      <p className="text-[#3A3A3A] text-sm">{answer}</p>
    </div>
  );
}
