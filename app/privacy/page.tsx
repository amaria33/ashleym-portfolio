import CurrentDate from "../../components/CurrentDate";
import CurrentYear from "../../components/CurrentYear";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FFF6F3] py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#C0C0C0] mb-8">
          Last updated: <CurrentDate />
        </p>

        <div className="space-y-6 text-[#3A3A3A]">
          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              1. Information We Collect
            </h2>
            <p className="text-sm leading-relaxed mb-2">
              When you use the Website Health Check tool, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
              <li>Website URLs you submit for analysis</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Basic usage data and analytics</li>
              <li>Email address (if provided for support)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-sm leading-relaxed mb-2">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
              <li>Provide website analysis services</li>
              <li>Process payments and prevent fraud</li>
              <li>Improve our service and user experience</li>
              <li>Send important service updates (if applicable)</li>
              <li>Respond to support inquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              3. Data Storage and Retention
            </h2>
            <p className="text-sm leading-relaxed">
              We do not permanently store the HTML content or analysis results
              of websites you analyze. Website data is processed in real-time
              and discarded after the analysis is complete. Payment information
              is securely handled by Stripe and is not stored on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              4. Third-Party Services
            </h2>
            <p className="text-sm leading-relaxed mb-2">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
              <li>
                <strong>Stripe:</strong> For secure payment processing
              </li>
              <li>
                <strong>OpenAI:</strong> For AI-powered website analysis
              </li>
              <li>
                <strong>Vercel:</strong> For hosting and analytics
              </li>
            </ul>
            <p className="text-sm leading-relaxed mt-2">
              These services have their own privacy policies governing how they
              handle data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              5. Cookies and Tracking
            </h2>
            <p className="text-sm leading-relaxed">
              We use minimal cookies and tracking technologies to improve user
              experience and analyze usage patterns. This includes basic
              analytics to understand how users interact with our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              6. Data Security
            </h2>
            <p className="text-sm leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your data. However, no method of transmission over the
              internet is 100% secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              7. Your Rights
            </h2>
            <p className="text-sm leading-relaxed mb-2">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              8. Children's Privacy
            </h2>
            <p className="text-sm leading-relaxed">
              Our service is not intended for users under the age of 13. We do
              not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              9. Changes to This Policy
            </h2>
            <p className="text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              10. Contact Us
            </h2>
            <p className="text-sm leading-relaxed">
              If you have questions about this Privacy Policy or how we handle
              your data, please contact us at{" "}
              <a
                href="mailto:hello@builtbyashley.com"
                className="text-[#C08090] hover:underline"
              >
                hello@builtbyashley.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-[#F7CDD7]">
          <p className="text-xs text-center text-[#C0C0C0]">
            © <CurrentYear /> Website Health Check. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
