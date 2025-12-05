export default function DataRightsPage() {
  return (
    <main className="min-h-screen bg-[#FFF6F3] py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-2">
          Your Data Rights
        </h1>
        <p className="text-sm text-[#C0C0C0] mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-[#3A3A3A]">
          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              Overview
            </h2>
            <p className="text-sm leading-relaxed">
              At BuiltByAshley, we respect your privacy and are committed to
              protecting your personal data. This page outlines your rights
              regarding your personal information under applicable data
              protection laws, including GDPR, CCPA, and other privacy
              regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              Your Rights
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#C08090] mb-2">
                  Right to Access
                </h3>
                <p className="text-sm leading-relaxed">
                  You have the right to request access to the personal
                  information we hold about you. This includes information about
                  what data we have, why we have it, and who we share it with.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#C08090] mb-2">
                  Right to Rectification
                </h3>
                <p className="text-sm leading-relaxed">
                  You have the right to request correction of inaccurate or
                  incomplete personal information we hold about you.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#C08090] mb-2">
                  Right to Erasure (Right to be Forgotten)
                </h3>
                <p className="text-sm leading-relaxed">
                  You have the right to request deletion of your personal
                  information in certain circumstances, such as when the data is
                  no longer necessary for the purpose it was collected.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#C08090] mb-2">
                  Right to Restrict Processing
                </h3>
                <p className="text-sm leading-relaxed">
                  You have the right to request that we limit how we use your
                  personal information in certain circumstances.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#C08090] mb-2">
                  Right to Data Portability
                </h3>
                <p className="text-sm leading-relaxed">
                  You have the right to receive your personal information in a
                  structured, commonly used, and machine-readable format, and to
                  transmit that data to another controller.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#C08090] mb-2">
                  Right to Object
                </h3>
                <p className="text-sm leading-relaxed">
                  You have the right to object to processing of your personal
                  information for direct marketing purposes or when processing
                  is based on legitimate interests.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#C08090] mb-2">
                  Right to Withdraw Consent
                </h3>
                <p className="text-sm leading-relaxed">
                  Where processing is based on consent, you have the right to
                  withdraw your consent at any time. Withdrawal of consent does
                  not affect the lawfulness of processing before the withdrawal.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              How to Exercise Your Rights
            </h2>
            <p className="text-sm leading-relaxed mb-2">
              To exercise any of these rights, please contact us at:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
              <li>
                Email:{" "}
                <a
                  href="mailto:hello@builtbyashley.com"
                  className="text-[#C08090] hover:underline"
                >
                  hello@builtbyashley.com
                </a>
              </li>
              <li>Subject line: "Data Rights Request"</li>
            </ul>
            <p className="text-sm leading-relaxed mt-2">
              We will respond to your request within 30 days. We may need to
              verify your identity before processing your request to ensure the
              security of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              Right to Lodge a Complaint
            </h2>
            <p className="text-sm leading-relaxed">
              If you are not satisfied with how we handle your personal
              information or respond to your requests, you have the right to
              lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              California Privacy Rights (CCPA)
            </h2>
            <p className="text-sm leading-relaxed mb-2">
              If you are a California resident, you have additional rights under
              the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
              <li>Right to know what personal information is collected</li>
              <li>
                Right to know if personal information is sold or disclosed
              </li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>
                Right to non-discrimination for exercising your privacy rights
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              Contact Us
            </h2>
            <p className="text-sm leading-relaxed">
              For questions about your data rights or to submit a request,
              please contact us at{" "}
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
            © {new Date().getFullYear()} BuiltByAshley. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
