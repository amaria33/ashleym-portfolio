export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#FFF6F3] py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-2">
          Cookie Policy
        </h1>
        <p className="text-sm text-[#C0C0C0] mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 text-[#3A3A3A]">
          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              What Are Cookies?
            </h2>
            <p className="text-sm leading-relaxed">
              Cookies are small text files that are placed on your device when
              you visit a website. They are widely used to make websites work
              more efficiently and provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              How We Use Cookies
            </h2>
            <p className="text-sm leading-relaxed mb-2">
              BuiltByAshley uses cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
              <li>To ensure the website functions properly</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To remember your preferences and settings</li>
              <li>To improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              Types of Cookies We Use
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#C08090] mb-2">
                  Essential Cookies
                </h3>
                <p className="text-sm leading-relaxed">
                  These cookies are necessary for the website to function
                  properly. They enable core functionality such as security,
                  network management, and accessibility.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#C08090] mb-2">
                  Analytics Cookies
                </h3>
                <p className="text-sm leading-relaxed">
                  These cookies help us understand how visitors interact with
                  our website by collecting and reporting information
                  anonymously.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#C08090] mb-2">
                  Preference Cookies
                </h3>
                <p className="text-sm leading-relaxed">
                  These cookies remember your choices and preferences to provide
                  a more personalized experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              Third-Party Cookies
            </h2>
            <p className="text-sm leading-relaxed mb-2">
              We may use third-party services that set cookies on your device,
              including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
              <li>Google Analytics for website analytics</li>
              <li>Google Tag Manager for tag management</li>
              <li>Other analytics and marketing tools</li>
            </ul>
            <p className="text-sm leading-relaxed mt-2">
              These third parties have their own privacy policies and cookie
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              Managing Cookies
            </h2>
            <p className="text-sm leading-relaxed mb-2">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm ml-4">
              <li>
                Browser settings: Most browsers allow you to refuse or accept
                cookies
              </li>
              <li>
                Browser extensions: Use privacy-focused extensions to block
                cookies
              </li>
              <li>
                Opt-out tools: Use industry opt-out tools for advertising
                cookies
              </li>
            </ul>
            <p className="text-sm leading-relaxed mt-2">
              Please note that disabling cookies may affect the functionality of
              our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#C08090] mb-3">
              Contact Us
            </h2>
            <p className="text-sm leading-relaxed">
              If you have questions about our use of cookies, please contact us
              at{" "}
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
