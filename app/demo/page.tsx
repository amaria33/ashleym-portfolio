"use client";

import { useState } from "react";
import Link from "next/link";
import { logEvent } from "../../lib/analytics";

type Recommendation = {
  item: string;
  impact: string;
};

type AnalysisResult = {
  score: number;
  ux: string;
  copy: string;
  seo: string;
  recommendations: Recommendation[];
};

export default function DemoPage() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    // Normalize URL
    let normalizedUrl = url.trim();
    if (
      !normalizedUrl.startsWith("http://") &&
      !normalizedUrl.startsWith("https://")
    ) {
      normalizedUrl = "https://" + normalizedUrl;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: normalizedUrl }),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("API error:", text);
        setError(
          "The analyzer ran into a problem. Check the server logs for details."
        );
        return;
      }

      const data = (await response.json()) as AnalysisResult;
      setResult(data);

      // Log analytics event
      logEvent("demo_analysis_completed", {
        url: normalizedUrl,
        score: data.score,
      });
    } catch (err) {
      console.error(err);
      setError("Unexpected error while processing the request.");
    } finally {
      setLoading(false);
    }
  };

  // Truncate text to first 1-2 sentences
  const truncateToSentences = (
    text: string,
    sentenceCount: number = 2
  ): string => {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    return sentences.slice(0, sentenceCount).join(" ");
  };

  return (
    <main className="min-h-screen bg-[#FFF6F3]">
      {/* Demo Banner */}
      <div className="bg-[#D6B36A] text-white py-3 px-6 text-center">
        <p className="text-sm font-medium">
          🎉 This is a FREE Demo – Limited results shown.{" "}
          <Link
            href="/sell"
            className="underline font-semibold hover:text-[#FFF6F3]"
          >
            Buy the full report ($7)
          </Link>{" "}
          to unlock all insights!
        </p>
      </div>

      <div className="flex items-center justify-center py-12 px-6">
        <div className="max-w-3xl w-full p-6 md:p-10 rounded-2xl shadow-md bg-white">
          {/* Free Demo Badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-block bg-[#F7CDD7] text-[#3A3A3A] px-4 py-1.5 rounded-full text-xs font-semibold">
              Free Demo
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold text-[#3A3A3A] mb-2 text-center">
            Website Health Check – Free Demo
          </h1>
          <p className="text-sm text-center text-[#3A3A3A] mb-6">
            Try our AI-powered analysis with limited results. Enter your website
            URL below.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-3">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.example.com or www.example.com"
              className="border border-[#F7CDD7] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#D6B36A]"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#C08090] text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-[#DCA0B0] disabled:opacity-60"
            >
              {loading ? "Analyzing..." : "Run Demo Analysis"}
            </button>
          </form>

          {error && <div className="mb-4 text-sm text-red-600">{error}</div>}

          {result && (
            <div className="mt-6 space-y-6">
              {/* Upgrade Banner */}
              <div className="bg-gradient-to-r from-[#F7CDD7] to-[#DCA0B0] rounded-lg p-4 text-center">
                <p className="text-[#3A3A3A] font-semibold mb-2">
                  Want the full analysis?
                </p>
                <Link
                  href="/sell"
                  className="inline-block bg-white text-[#C08090] px-6 py-2 rounded-lg font-semibold hover:bg-[#FFF6F3] transition-all shadow-md"
                >
                  Unlock Full Report – $7
                </Link>
              </div>

              {/* Score section */}
              <div className="flex flex-col items-center justify-center">
                <p className="text-xs uppercase tracking-wide text-[#3A3A3A] mb-2">
                  Website Health Score
                </p>
                <div className="flex items-center justify-center w-32 h-32 rounded-full border-4 border-[#D6B36A] bg-gradient-to-br from-[#DCA0B0] to-[#C08090] shadow-lg">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white">
                    <span className="text-3xl font-bold text-[#C08090]">
                      {Math.round(result.score)}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-[#3A3A3A] text-center max-w-xs">
                  0 = needs major help, 100 = excellent
                </p>
              </div>

              {/* Limited preview cards */}
              <div className="grid gap-4 md:grid-cols-2">
                <DemoResultCard
                  title="UX Review (Preview)"
                  content={truncateToSentences(result.ux, 2)}
                  locked={true}
                />
                <DemoResultCard
                  title="Copywriting Review (Preview)"
                  content={truncateToSentences(result.copy, 2)}
                  locked={true}
                />
              </div>

              {/* Locked sections */}
              <div className="grid gap-4 md:grid-cols-2">
                <LockedCard title="SEO Review" />
                <LockedCard title="Recommended Fixes" />
              </div>

              {/* Note about full version */}
              <div className="bg-[#FFF6F3] border-l-4 border-[#D6B36A] rounded-lg p-4 text-sm text-[#3A3A3A]">
                <p className="italic">
                  <strong>Note:</strong> Full UX, copy, SEO breakdown and
                  detailed recommendations are only available in the full
                  version.
                </p>
              </div>

              {/* CTA to upgrade */}
              <div className="text-center pt-4">
                <Link
                  href="/sell"
                  className="inline-block bg-[#C08090] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#DCA0B0] transition-all shadow-md"
                >
                  Get Full Report with All Insights – $7
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

type DemoResultCardProps = {
  title: string;
  content: string;
  locked?: boolean;
};

function DemoResultCard({ title, content, locked }: DemoResultCardProps) {
  return (
    <div className="border-l-4 border-[#D6B36A] bg-[#FFF6F3] rounded-lg p-4 text-sm text-[#3A3A3A] relative">
      <h2 className="font-semibold mb-2 text-[#C08090]">{title}</h2>
      <p className="whitespace-pre-line">{content}</p>
      {locked && (
        <div className="mt-2 text-xs text-[#C0C0C0] italic">
          ... [Full analysis available in paid version]
        </div>
      )}
    </div>
  );
}

type LockedCardProps = {
  title: string;
};

function LockedCard({ title }: LockedCardProps) {
  return (
    <div className="border-l-4 border-[#C0C0C0] bg-gray-50 rounded-lg p-4 text-sm relative overflow-hidden">
      <h2 className="font-semibold mb-2 text-[#C0C0C0]">{title}</h2>
      <div className="flex items-center justify-center py-8">
        <div className="text-center">
          <div className="text-3xl mb-2">🔒</div>
          <p className="text-xs text-[#C0C0C0]">Locked in demo mode</p>
        </div>
      </div>
    </div>
  );
}
