import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#FFF6F3] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-[#D6B36A] to-[#C08090] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-4">
            Thank You for Your Purchase!
          </h1>
          <p className="text-lg text-[#3A3A3A] mb-2">
            Your payment was successful.
          </p>
          <p className="text-sm text-[#C0C0C0]">
            You now have full access to the Website Health Check tool.
          </p>
        </div>

        <div className="bg-[#FFF6F3] border-l-4 border-[#D6B36A] rounded-lg p-6 mb-8 text-left">
          <h2 className="font-semibold text-[#C08090] mb-3">What's Next?</h2>
          <ul className="space-y-2 text-sm text-[#3A3A3A]">
            <li className="flex items-start gap-2">
              <span className="text-[#D6B36A] font-bold mt-0.5">✓</span>
              <span>Run unlimited full website health checks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D6B36A] font-bold mt-0.5">✓</span>
              <span>Get complete UX, copy, and SEO analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D6B36A] font-bold mt-0.5">✓</span>
              <span>Access prioritized recommendations for every site</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#D6B36A] font-bold mt-0.5">✓</span>
              <span>Print or save reports as PDF</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-[#C08090] text-white py-3 rounded-lg font-semibold hover:bg-[#DCA0B0] transition-all shadow-md"
          >
            Start Analyzing Websites →
          </Link>
          <p className="text-xs text-[#C0C0C0]">
            Need help?{" "}
            <a
              href="mailto:support@example.com"
              className="text-[#C08090] hover:underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
