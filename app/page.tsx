"use client";

import { useState } from "react";
import Link from "next/link";
import { logEvent } from "../lib/analytics";

type Recommendation = {
  item: string;
  impact: string;
};

type AnalysisResult = {
  score: number; // 0–100
  ux: string;
  copy: string;
  seo: string;
  recommendations: Recommendation[];
};

export default function Home() {
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

    // Normalize URL (auto-add https:// if missing)
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
      logEvent("analysis_completed", { url: normalizedUrl, score: data.score });
    } catch (err) {
      console.error(err);
      setError("Unexpected error while processing the request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFF6F3] py-12 px-4">
      <div className="max-w-3xl w-full p-6 md:p-10 rounded-2xl shadow-md bg-white print:shadow-none">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#3A3A3A] mb-2 text-center">
          Website Health Check – Full Report
        </h1>
        <p className="text-sm text-center text-[#3A3A3A] mb-4">
          Paste your website URL and get an AI-powered review of your UX, copy,
          and SEO — plus an overall health score.
        </p>

        {/* Try Demo Button */}
        <div className="text-center mb-4 print:hidden">
          <Link
            href="/demo"
            className="inline-block text-sm text-[#C08090] hover:text-[#DCA0B0] underline"
          >
            Try Free Demo Instead →
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 mb-3 print:hidden"
        >
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
            {loading ? "Analyzing..." : "Run Full Health Check"}
          </button>
        </form>

        {error && <div className="mb-4 text-sm text-red-600">{error}</div>}

        {/* Print/Save as PDF button, only when there are results */}
        {result && (
          <div className="flex justify-end mb-2 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="text-xs border border-[#D6B36A] text-[#3A3A3A] px-3 py-1 rounded-md hover:bg-[#F7CDD7]"
            >
              Print / Save as PDF
            </button>
          </div>
        )}

        {result && (
          <div className="mt-6 space-y-6">
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
                0 = needs major help, 100 = excellent. Use this as a quick
                guide, not a rigid score.
              </p>
            </div>

            {/* Detail cards */}
            <div className="grid gap-4 md:grid-cols-2">
              <ResultCard title="UX Review" content={result.ux} />
              <ResultCard title="Copywriting Review" content={result.copy} />
              <ResultCard title="SEO Review" content={result.seo} />
              <ResultCard
                title="Recommended Fixes"
                content={result.recommendations
                  .map((r) => `(${r.impact.toUpperCase()}) ${r.item}`)
                  .join("\n")}
              />
            </div>
          </div>
        )}

        {/* Footer CTA */}
        {!result && (
          <div className="mt-6 text-center print:hidden">
            <p className="text-sm text-[#3A3A3A] mb-3">
              Want to unlock full reports for your clients?
            </p>
            <Link
              href="/sell"
              className="inline-block bg-[#D6B36A] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#C08090] transition-all"
            >
              Buy Full Version – $7
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

type ResultCardProps = {
  title: string;
  content: string;
};

function ResultCard({ title, content }: ResultCardProps) {
  return (
    <div className="border-l-4 border-[#D6B36A] bg-[#FFF6F3] rounded-lg p-4 text-sm text-[#3A3A3A] whitespace-pre-line">
      <h2 className="font-semibold mb-2 text-[#C08090]">{title}</h2>
      <p>{content || "No data yet."}</p>
    </div>
  );
}
