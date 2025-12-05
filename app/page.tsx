import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F6] via-[#FFFFFF] to-[#F4C2C2]/10 dark:from-[#2B2B2B] dark:via-[#3a3a3a] dark:to-[#2B2B2B]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-[#F4C2C2]/30 dark:bg-[#E8A9B8]/20 text-[#2B2B2B] dark:text-[#F4C2C2] rounded-full text-sm font-medium">
                  AI Maker & HR Analyst
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#2B2B2B] dark:text-[#FFF9F6] leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A9B8] to-[#D8B878]">
                  Ashley Maria
                </span>
              </h1>
              <p className="text-xl text-[#2B2B2B]/80 dark:text-[#FFF9F6]/80 leading-relaxed">
                HR Analyst turned AI Maker & Automation Strategist. I build
                practical, revenue-driven AI workflows and bespoke web
                experiences — complete with hosting support — that help
                professionals and entrepreneurs save time, launch faster, and
                scale smarter without overwhelm.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/starter-site"
                  className="px-8 py-4 bg-[#E8A9B8] hover:bg-[#E8A9B8]/90 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg shadow-[#E8A9B8]/30"
                >
                  Claim 50% Off Starter Site
                </Link>
                <Link
                  href="/templates"
                  className="px-8 py-4 bg-white dark:bg-[#3a3a3a] text-[#2B2B2B] dark:text-[#FFF9F6] border-2 border-[#F4C2C2] dark:border-[#E8A9B8] rounded-lg font-medium hover:border-[#E8A9B8] dark:hover:border-[#D8B878] transition-all"
                >
                  Browse Templates
                </Link>
                <a
                  href="#contact"
                  className="px-8 py-4 bg-white dark:bg-[#3a3a3a] text-[#2B2B2B] dark:text-[#FFF9F6] border-2 border-[#F4C2C2] dark:border-[#E8A9B8] rounded-lg font-medium hover:border-[#E8A9B8] dark:hover:border-[#D8B878] transition-all"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 bg-white dark:bg-[#3a3a3a] text-[#2B2B2B] dark:text-[#FFF9F6] border-2 border-[#F4C2C2] dark:border-[#E8A9B8] rounded-lg font-medium hover:border-[#E8A9B8] dark:hover:border-[#D8B878] transition-all"
                >
                  View Projects
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/ashley-maria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-[#3a3a3a] rounded-lg hover:bg-[#FFF9F6] dark:hover:bg-[#4a4a4a] transition-all shadow-sm hover:shadow-md"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 text-[#2B2B2B] dark:text-[#FFF9F6]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/amaria33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-[#3a3a3a] rounded-lg hover:bg-[#FFF9F6] dark:hover:bg-[#4a4a4a] transition-all shadow-sm hover:shadow-md"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-6 h-6 text-[#2B2B2B] dark:text-[#FFF9F6]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:hello@builtbyashley.com"
                  className="p-3 bg-white dark:bg-[#3a3a3a] rounded-lg hover:bg-[#FFF9F6] dark:hover:bg-[#4a4a4a] transition-all shadow-sm hover:shadow-md"
                  aria-label="Email"
                >
                  <svg
                    className="w-6 h-6 text-[#2B2B2B] dark:text-[#FFF9F6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="flex justify-center md:justify-end animate-fade-in-delayed">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4C2C2] to-[#E8A9B8] rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <Image
                    src="/profile/profile.jpeg"
                    alt="Ashley Maria"
                    fill
                    className="rounded-3xl object-cover shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limited-Time Offer Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#FFF9F6] via-[#FFFFFF] to-[#F4C2C2]/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#2B2B2B] rounded-2xl shadow-xl p-8 md:p-12 border border-[#F4C2C2]/50">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-[#D8B878]/25 text-[#D8B878] rounded-full text-sm font-semibold uppercase tracking-[0.2em] mb-4">
                Limited-Time Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] dark:text-[#FFF9F6] mb-4">
                Guided Starter Site Launch — 50% Off While Spots Last
              </h2>
              <p className="text-lg text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70 leading-relaxed max-w-2xl mx-auto">
                Need a beautiful one-page website launched fast? I design,
                write, build, and host your Starter Site so you can show up
                online with confidence. Pay securely inside the brief intake
                form, then we launch your site in just 7 days (backed by a
                10-business-day guarantee).
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#D8B878] text-xs font-bold text-white flex-shrink-0">
                  ✓
                </span>
                <p className="text-base text-[#2B2B2B]/80 dark:text-[#FFF9F6]/80">
                  No DIY required—copy, layout, and launch handled for you
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#D8B878] text-xs font-bold text-white flex-shrink-0">
                  ✓
                </span>
                <p className="text-base text-[#2B2B2B]/80 dark:text-[#FFF9F6]/80">
                  Guided 7-day timeline with 30-day post-launch support
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/starter-site"
                className="px-8 py-4 bg-white dark:bg-[#3a3a3a] text-[#2B2B2B] dark:text-[#FFF9F6] border-2 border-[#E8A9B8] rounded-lg font-medium hover:border-[#D8B878] hover:text-[#D8B878] transition-all text-center"
              >
                See What's Included
              </Link>
              <Link
                href="/starter-site"
                className="px-8 py-4 bg-[#E8A9B8] hover:bg-[#E8A9B8]/90 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg shadow-[#E8A9B8]/30 text-center"
              >
                Book My Starter Site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-[#2B2B2B]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#2B2B2B] dark:text-[#FFF9F6]">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E8A9B8] to-[#D8B878] mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70 leading-relaxed">
                I'm Ashley Maria, an HR analyst turned AI maker and automation
                strategist. I specialize in building practical, revenue-driven
                AI workflows that help professionals and entrepreneurs save
                time, simplify operations, and scale smarter — without tech
                overwhelm.
              </p>
              <p className="text-lg text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70 leading-relaxed">
                With a background in HR technology and process improvement, I've
                spent years streamlining complex systems. Now, I apply that same
                precision to AI-powered automations — from client onboarding and
                content creation to lead generation and data organization.
              </p>
              <p className="text-lg text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70 leading-relaxed">
                That same thoughtful approach powers my website creation and
                hosting packages. I craft conversion-friendly copy, custom
                layouts, and reliable hosting plans so your online home feels
                effortless for you and inviting for your clients.
              </p>
              <p className="text-lg text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70 leading-relaxed">
                My goal is to bridge the gap between human potential and AI
                efficiency. Whether it's through custom automations, no-code
                tools, or AI-driven digital products, I create solutions that
                work seamlessly behind the scenes so you can focus on growth,
                creativity, and strategy.
              </p>
              <p className="text-lg text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70 leading-relaxed">
                When I'm not building or testing new workflows, you'll find me
                experimenting with emerging AI tools, refining automations, and
                teaching others how to turn their ideas into systems that run on
                autopilot.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-[#F4C2C2]/20 to-[#F4C2C2]/40 dark:from-[#E8A9B8]/10 dark:to-[#E8A9B8]/20 rounded-xl">
                <div className="text-3xl font-bold text-[#E8A9B8] dark:text-[#F4C2C2] mb-2">
                  100+
                </div>
                <div className="text-[#2B2B2B] dark:text-[#FFF9F6] font-medium">
                  Workflows Built
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#E8A9B8]/20 to-[#E8A9B8]/40 dark:from-[#E8A9B8]/10 dark:to-[#E8A9B8]/20 rounded-xl">
                <div className="text-3xl font-bold text-[#E8A9B8] dark:text-[#F4C2C2] mb-2">
                  50+
                </div>
                <div className="text-[#2B2B2B] dark:text-[#FFF9F6] font-medium">
                  Hours Saved/Week
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#D8B878]/20 to-[#D8B878]/40 dark:from-[#D8B878]/10 dark:to-[#D8B878]/20 rounded-xl">
                <div className="text-3xl font-bold text-[#D8B878] dark:text-[#D8B878] mb-2">
                  AI
                </div>
                <div className="text-[#2B2B2B] dark:text-[#FFF9F6] font-medium">
                  Tools Expert
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-[#B8A9A5]/20 to-[#B8A9A5]/40 dark:from-[#B8A9A5]/10 dark:to-[#B8A9A5]/20 rounded-xl">
                <div className="text-3xl font-bold text-[#D8B878] dark:text-[#D8B878] mb-2">
                  Web
                </div>
                <div className="text-[#2B2B2B] dark:text-[#FFF9F6] font-medium">
                  Hosting Partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 bg-[#FFF9F6] dark:bg-[#1a1a1a]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#2B2B2B] dark:text-[#FFF9F6]">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E8A9B8] to-[#D8B878] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Workday Expertise */}
            <div className="bg-white dark:bg-[#2B2B2B] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-[#F4C2C2]/30 dark:bg-[#E8A9B8]/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#E8A9B8] dark:text-[#F4C2C2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2B2B2B] dark:text-[#FFF9F6]">
                AI Tools & Platforms
              </h3>
              <ul className="space-y-2 text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E8A9B8] rounded-full mr-3"></span>
                  ChatGPT & Claude
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E8A9B8] rounded-full mr-3"></span>
                  Make.com & Zapier
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E8A9B8] rounded-full mr-3"></span>
                  Notion & Airtable
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E8A9B8] rounded-full mr-3"></span>
                  AI Agent Development
                </li>
              </ul>
            </div>

            {/* Core Competencies */}
            <div className="bg-white dark:bg-[#2B2B2B] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-[#E8A9B8]/30 dark:bg-[#E8A9B8]/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#E8A9B8] dark:text-[#F4C2C2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2B2B2B] dark:text-[#FFF9F6]">
                Automation Specialties
              </h3>
              <ul className="space-y-2 text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E8A9B8] rounded-full mr-3"></span>
                  Client Onboarding Flows
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E8A9B8] rounded-full mr-3"></span>
                  Content Generation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E8A9B8] rounded-full mr-3"></span>
                  Lead Generation Systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#E8A9B8] rounded-full mr-3"></span>
                  Data Organization
                </li>
              </ul>
            </div>

            {/* AI & Technology */}
            <div className="bg-white dark:bg-[#2B2B2B] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-[#D8B878]/30 dark:bg-[#D8B878]/20 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#D8B878] dark:text-[#D8B878]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#2B2B2B] dark:text-[#FFF9F6]">
                Business Solutions
              </h3>
              <ul className="space-y-2 text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#D8B878] rounded-full mr-3"></span>
                  Revenue-Driven Workflows
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#D8B878] rounded-full mr-3"></span>
                  Process Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#D8B878] rounded-full mr-3"></span>
                  Digital Product Creation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#D8B878] rounded-full mr-3"></span>
                  No-Code Solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white dark:bg-[#2B2B2B]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 text-[#2B2B2B] dark:text-[#FFF9F6]">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E8A9B8] to-[#D8B878] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group bg-[#FFF9F6] dark:bg-[#3a3a3a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/assets/bootcamp.jpeg"
                  alt="AI Bootcamp Landing Page"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#2B2B2B] dark:text-[#FFF9F6] group-hover:text-[#E8A9B8] dark:group-hover:text-[#F4C2C2] transition-colors">
                  AI Bootcamp Landing Page
                </h3>
                <p className="text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70 mb-4">
                  Designed and developed a modern landing page for an AI
                  bootcamp program, featuring interactive elements and
                  conversion-optimized design to attract and enroll students.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F4C2C2]/30 dark:bg-[#E8A9B8]/20 text-[#2B2B2B] dark:text-[#F4C2C2] rounded-full text-sm">
                    Web Design
                  </span>
                  <span className="px-3 py-1 bg-[#D8B878]/30 dark:bg-[#D8B878]/20 text-[#2B2B2B] dark:text-[#D8B878] rounded-full text-sm">
                    HTML/CSS
                  </span>
                  <span className="px-3 py-1 bg-[#E8A9B8]/30 dark:bg-[#E8A9B8]/20 text-[#2B2B2B] dark:text-[#E8A9B8] rounded-full text-sm">
                    Landing Page
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-[#FFF9F6] dark:bg-[#3a3a3a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/assets/tripplanner.jpeg"
                  alt="Trip Planner CrewAI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#2B2B2B] dark:text-[#FFF9F6] group-hover:text-[#D8B878] dark:group-hover:text-[#D8B878] transition-colors">
                  Trip Planner CrewAI
                </h3>
                <p className="text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70 mb-4">
                  Built an AI-powered trip planning system using CrewAI agents
                  that collaboratively research destinations, create
                  itineraries, and optimize travel plans based on preferences
                  and budget.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F4C2C2]/30 dark:bg-[#E8A9B8]/20 text-[#2B2B2B] dark:text-[#F4C2C2] rounded-full text-sm">
                    CrewAI
                  </span>
                  <span className="px-3 py-1 bg-[#B8A9A5]/30 dark:bg-[#B8A9A5]/20 text-[#2B2B2B] dark:text-[#B8A9A5] rounded-full text-sm">
                    AI Agents
                  </span>
                  <span className="px-3 py-1 bg-[#E8A9B8]/30 dark:bg-[#E8A9B8]/20 text-[#2B2B2B] dark:text-[#E8A9B8] rounded-full text-sm">
                    Python
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-[#FFF9F6] dark:bg-[#3a3a3a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/assets/data.jpeg"
                  alt="HR Data Visualization Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#2B2B2B] dark:text-[#FFF9F6] group-hover:text-[#E8A9B8] dark:group-hover:text-[#F4C2C2] transition-colors">
                  HR Data Visualization Dashboard
                </h3>
                <p className="text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70 mb-4">
                  Created an interactive dashboard visualizing HR metrics
                  including employee retention, performance analytics, and
                  workforce trends with real-time data insights for strategic
                  decision-making.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F4C2C2]/30 dark:bg-[#E8A9B8]/20 text-[#2B2B2B] dark:text-[#F4C2C2] rounded-full text-sm">
                    Data Viz
                  </span>
                  <span className="px-3 py-1 bg-[#D8B878]/30 dark:bg-[#D8B878]/20 text-[#2B2B2B] dark:text-[#D8B878] rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-[#B8A9A5]/30 dark:bg-[#B8A9A5]/20 text-[#2B2B2B] dark:text-[#B8A9A5] rounded-full text-sm">
                    Analytics
                  </span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group bg-[#FFF9F6] dark:bg-[#3a3a3a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/assets/resumatch.jpeg"
                  alt="ResuMatch Chrome Extension"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#2B2B2B] dark:text-[#FFF9F6] group-hover:text-[#D8B878] dark:group-hover:text-[#D8B878] transition-colors">
                  ResuMatch Chrome Extension
                </h3>
                <p className="text-[#2B2B2B]/70 dark:text-[#FFF9F6]/70 mb-4">
                  Created an AI-powered Chrome extension that matches resumes
                  with job descriptions, analyzing keyword alignment and
                  providing optimization suggestions to increase application
                  success rates.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F4C2C2]/30 dark:bg-[#E8A9B8]/20 text-[#2B2B2B] dark:text-[#F4C2C2] rounded-full text-sm">
                    Chrome Extension
                  </span>
                  <span className="px-3 py-1 bg-[#E8A9B8]/30 dark:bg-[#E8A9B8]/20 text-[#2B2B2B] dark:text-[#E8A9B8] rounded-full text-sm">
                    AI Matching
                  </span>
                  <span className="px-3 py-1 bg-[#D8B878]/30 dark:bg-[#D8B878]/20 text-[#2B2B2B] dark:text-[#D8B878] rounded-full text-sm">
                    Resume Optimization
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-[#E8A9B8] to-[#F4C2C2]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work? I'd love
            to hear from you!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:hello@builtbyashley.com"
              className="px-8 py-4 bg-white text-[#E8A9B8] rounded-lg font-medium hover:bg-[#FFF9F6] transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/ashley-maria"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#2B2B2B] text-white rounded-lg font-medium hover:bg-[#2B2B2B]/90 transition-all shadow-lg hover:shadow-xl"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#2B2B2B] dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/starter-site"
                    className="text-[#B8A9A5] hover:text-[#E8A9B8] transition-colors"
                  >
                    Starter Site
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templates"
                    className="text-[#B8A9A5] hover:text-[#E8A9B8] transition-colors"
                  >
                    Templates
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-[#B8A9A5] hover:text-[#E8A9B8] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-[#B8A9A5] hover:text-[#E8A9B8] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-[#B8A9A5] hover:text-[#E8A9B8] transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/data-rights"
                    className="text-[#B8A9A5] hover:text-[#E8A9B8] transition-colors"
                  >
                    Data Rights
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#3a3a3a] pt-8 text-center text-[#B8A9A5]">
            <p>
              © {new Date().getFullYear()} Ashley Maria. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
