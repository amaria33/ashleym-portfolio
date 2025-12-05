import CurrentDate from "../../components/CurrentDate";
import CurrentYear from "../../components/CurrentYear";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FFF6F3] py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-[#C0C0C0] mb-8">
          Last updated: <CurrentDate />
        </p>

        <div className="space-y-6 text-[#3A3A3A]">
          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm leading-relaxed">
              By accessing and using the Website Health Check tool, you accept
              and agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              2. Service Description
            </h2>
            <p className="text-sm leading-relaxed">
              Website Health Check is an AI-powered analysis tool that reviews
              publicly accessible websites for UX, copywriting, and SEO factors.
              The tool provides automated recommendations based on analysis of
              your website's HTML and content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              3. Use License
            </h2>
            <p className="text-sm leading-relaxed mb-2">
              Upon purchase, you are granted a non-exclusive license to use the
              Website Health Check tool for analyzing websites. This license
              includes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
              <li>Unlimited website analyses</li>
              <li>Full access to all features</li>
              <li>Personal and commercial use rights</li>
              <li>Ability to generate reports for clients</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              4. Limitations
            </h2>
            <p className="text-sm leading-relaxed">
              The Website Health Check tool only analyzes publicly accessible
              website content. We do not access password-protected areas,
              databases, or backend systems. Results are provided "as is" and
              should be used as general guidance, not as definitive assessments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              5. Refund Policy
            </h2>
            <p className="text-sm leading-relaxed">
              We offer a 7-day money-back guarantee. If you are not satisfied
              with the service, contact us within 7 days of purchase for a full
              refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              6. Disclaimer of Warranties
            </h2>
            <p className="text-sm leading-relaxed">
              The service is provided "as is" without warranties of any kind,
              either express or implied. We do not guarantee that the analysis
              will be error-free or that the recommendations will achieve
              specific results.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              7. Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed">
              In no event shall Website Health Check be liable for any indirect,
              incidental, special, consequential, or punitive damages arising
              from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              8. Changes to Terms
            </h2>
            <p className="text-sm leading-relaxed">
              We reserve the right to modify these terms at any time. Continued
              use of the service after changes constitutes acceptance of the
              modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              9. Contact Information
            </h2>
            <p className="text-sm leading-relaxed">
              For questions about these Terms of Service, please contact us at{" "}
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
