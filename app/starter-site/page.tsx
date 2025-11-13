"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
const starterMockup = "/starter-mockup.svg";
const sectionContainer =
  "mx-auto w-full max-w-[600px] px-5 pb-12 pt-12 md:max-w-6xl md:px-8 md:pb-[72px] md:pt-[72px]";

const navLinks = [
  { href: "#overview", label: "Offer Overview" },
  { href: "#process", label: "How It Works" },
  { href: "#proof", label: "Client Wins" },
  { href: "#faq", label: "FAQs" },
  { href: "#book", label: "Start My Site" },
];

const trustStats = [
  {
    stat: "Early partners",
    label: "Welcoming first founders with guided 1:1 support",
  },
  {
    stat: "7 days",
    label: "Kickoff to live homepage in an average of 7 days",
  },
  {
    stat: "0 DIY",
    label: "Copy, design, tech, and launch fully handled for you",
  },
];

const snapshotFeatures = [
  "Custom one-page layout built for your offer",
  "Domain connection + launch configuration handled for you",
  "Responsive design that looks great on every device",
  "One thoughtful round of refinements included",
];

const processSteps = [
  {
    title: "Step 1 · Book & Brief",
    description:
      "Reserve your seat, complete the intake, and share goals, visuals, and audience details. I confirm your launch timeline within 24 hours.",
    note: "Receive a personalized prep checklist and upload links immediately.",
  },
  {
    title: "Step 2 · Copy, design & build",
    description:
      "I write your copy, design the layout, and build everything inside my workspace. You get a private preview and request one focused round of edits.",
    note: "Edit prompts keep your feedback quick and clear — no doc overwhelm.",
  },
  {
    title: "Step 3 · Launch together",
    description:
      "We connect your domain, review the launch checklist, and go live confidently. You leave with simple instructions for future tweaks.",
    note: "Enjoy 30 days of email support, plus optional hosting stewardship.",
  },
];

const timeline = [
  { day: "Day 1", label: "Intake & Kickoff" },
  { day: "Day 4", label: "Preview & Edits" },
  { day: "Day 7", label: "Launch & Support" },
];

const promiseItems = [
  {
    title: "Launch guarantee",
    description: "Ready in seven days or I refund 25% of your fee.",
  },
  {
    title: "Direct access",
    description:
      "BuiltByAshley is a one-woman studio, so you work directly with me — including evening and weekend sessions that fit your schedule.",
  },
  {
    title: "Post-launch care",
    description:
      "30 days of priority updates plus optional hosting stewardship when you need it.",
  },
];

const faqItems = [
  {
    question: "When does the sale end?",
    answer:
      "The moment the remaining discounted seats are booked. I send a heads-up once we’re down to the last spot so you can decide quickly.",
  },
  {
    question: "Can I reserve my spot now and start later?",
    answer:
      "Yes. Lock in the $150 rate today and we’ll schedule your build within the next 60 days—plenty of time to gather photos or copy.",
  },
  {
    question: "Are you a solo designer? What are your office hours?",
    answer:
      "Yes—BuiltByAshley is a one-woman studio. I keep evening and weekend hours so you always work directly with me when it fits your schedule.",
  },
  {
    question: "Can I upgrade or add pages later?",
    answer:
      "Absolutely. We can expand into a multi-page site or add new conversions-focused sections once you’re ready.",
  },
];

const addOnGroups = [
  {
    title: "Launch Prep Essentials",
    blurb: "Keep momentum without tech slowdowns.",
    items: [
      {
        name: "Custom Domain Setup",
        description: "I connect or purchase your .com and handle DNS + SSL.",
        price: "$25",
      },
      {
        name: "Email Setup",
        description: "Create name@yourdomain.com inside Google Workspace.",
        price: "$10/month",
      },
      {
        name: "Copywriting",
        description: "Add a page or sales section written for your voice.",
        price: "$75",
      },
      {
        name: "Booking Calendar Setup",
        description: "Calendly or TidyCal fully integrated with confirmations.",
        price: "$50",
      },
    ],
  },
  {
    title: "Growth Boosters",
    blurb: "Capture leads and nurture your first clients.",
    items: [
      {
        name: "Blog/News Setup",
        description: "Design + format your first two SEO-ready posts.",
        price: "$75",
      },
      {
        name: "SEO Optimization",
        description: "Keyword research, on-page meta, and analytics tracking.",
        price: "$125",
      },
      {
        name: "Brand Kit Design",
        description: "Mini Canva brand kit: logo, colors, typography.",
        price: "$100",
      },
      {
        name: "Social Media Integration",
        description: "Link buttons, share images, and OpenGraph previews.",
        price: "$50",
      },
    ],
  },
];

export default function StarterSitePromoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F6] via-[#FFFFFF] to-[#F4C2C2]/20 text-[#2B2B2B]">
      <main>
        {/* Announcement Bar */}
        <div className="bg-[#3A2F32] text-white/95">
          <div className="mx-auto flex w-full max-w-[600px] items-center justify-center gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 md:max-w-6xl md:px-8 md:text-sm">
            <span className="text-lg">🕒</span>
            <span>Starter Sites 50% Off — Guided Build Included</span>
          </div>
        </div>

        {/* Quick Nav */}
        <nav className="sticky top-0 z-20 bg-white/92 shadow-sm backdrop-blur">
          <div className="mx-auto flex w-full max-w-[600px] flex-wrap items-center justify-center gap-3 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#2B2B2B]/70 md:max-w-6xl md:justify-between md:px-8 md:text-sm">
            <span className="tracking-[0.32em] text-[#E8A9B8]">Explore</span>
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border border-[#E8A9B8]/50 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#2B2B2B]/70 transition-colors hover:border-[#E8A9B8] hover:text-[#E8A9B8]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section id="overview" className="relative">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(232,169,184,0.28),rgba(244,194,194,0)_55%)]" />
          <div className="mx-auto flex w-full max-w-[600px] flex-col items-center px-5 py-16 text-center md:max-w-6xl md:grid md:grid-cols-[1.1fr,0.9fr] md:items-center md:gap-16 md:px-8 md:py-24 md:text-left lg:py-28">
            <div className="flex flex-col items-center gap-8 md:items-start">
              <div className="space-y-5 md:space-y-6 md:max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E47DA0]">
                  Starter Site, done-for-you in 7 days — now 50% off
                </p>
                <h1 className="text-3xl font-bold leading-tight text-[#2B2B2B] md:text-4xl lg:text-5xl">
                  Launch the client-ready site—no DIY, no guesswork.
                </h1>
                <p className="text-base font-medium leading-relaxed text-[#2B2B2B]/80 md:text-lg">
                  Full build, copy, and launch support — $150 early-bird rate.
                </p>
                <p className="text-base leading-relaxed text-[#2B2B2B]/70">
                  Created for solopreneurs, creatives, and small nonprofits who
                  want to go live without the overwhelm.
                </p>
                <p className="text-sm font-semibold text-[#2B2B2B]/75 md:text-base">
                  ⭐ Trusted by first-time founders — launch-ready in 7 days.
                </p>
              </div>

              <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:items-center md:gap-6">
                <Link
                  href="https://form.jotform.com/253147754374059"
                  className="inline-flex w-full min-h-[50px] items-center justify-center rounded-full bg-[#E8A9B8] px-8 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-[#E8A9B8]/40 transition-all hover:-translate-y-0.5 hover:bg-[#E8A9B8]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8B878] md:w-auto"
                >
                  Start My Site
                </Link>
                <Link
                  href="mailto:hello@builtbyashley.com"
                  className="inline-flex w-full min-h-[50px] items-center justify-center rounded-full border border-[#E8A9B8] bg-white px-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#E8A9B8] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#D8B878] hover:text-[#D8B878] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9B8] md:w-auto"
                >
                  Talk With Ashley
                </Link>
              </div>

              <div className="flex flex-col items-center gap-4 md:items-start">
                <p className="text-sm font-semibold text-[#2B2B2B]/70 md:text-base">
                  BuiltByAshley is a one-woman studio with evening and weekend
                  hours—so we meet when it fits your life.
                </p>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F6CFE0] bg-[#FDECEF] px-5 py-2 text-sm font-semibold text-[#5A4D52] shadow-sm">
                  <span className="text-base">⚡</span>
                  <span>
                    75% of discounted Starter Sites are spoken for—secure yours
                    before pricing returns to $300.
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                  <p className="inline-flex items-center gap-2 rounded-full border border-[#E8A9B8]/50 bg-white/90 px-4 py-2 text-sm font-medium text-[#2B2B2B]/70 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#D8B878]" />
                    Only 7 discounted Starter Sites left this month.
                  </p>
                  <p className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#2B2B2B]/60 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E8A9B8]" />
                    Reserve now & launch within a week
                  </p>
                </div>
              </div>

              <div className="w-full space-y-3 rounded-2xl border border-[#E8A9B8]/40 bg-white/92 px-5 py-5 shadow-sm md:max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E8A9B8]">
                  Not ready to launch yet?
                </p>
                <p className="text-base leading-relaxed text-[#2B2B2B]/75">
                  Grab the free “Next Five Steps” checklist to prep your launch
                  like a pro.
                </p>
                <Link
                  href="https://form.jotform.com/253148490064053"
                  className="inline-flex w-full min-h-[48px] items-center justify-center rounded-xl border border-[#E8A9B8] bg-white px-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#E8A9B8] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#D8B878] hover:text-[#D8B878] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9B8]"
                >
                  Get The Checklist
                </Link>
                <p className="text-xs leading-relaxed text-[#2B2B2B]/60">
                  Friendly, tactical website launch tips once or twice a month.
                  No fluff.
                </p>
              </div>

              <p className="text-base font-medium leading-relaxed text-[#2B2B2B]/65 md:max-w-xl">
                Guided support from blank page to launch—no web experience
                required.
              </p>
            </div>

            <div className="relative mt-8 w-full space-y-6 md:mt-0">
              <div className="relative w-full rounded-3xl border border-white/60 bg-white/95 px-6 py-6 shadow-2xl shadow-[#E8A9B8]/20 backdrop-blur md:px-8 md:py-8">
                <div className="space-y-6">
                  <div className="space-y-4 text-center md:text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#E8A9B8]">
                      Starter Site Snapshot
                    </p>
                    <h2 className="text-3xl font-bold leading-[1.12] text-[#2B2B2B]">
                      Your done-for-you website — ready in 7 days.
                    </h2>
                    <ul className="space-y-3 text-left text-base leading-relaxed text-[#2B2B2B]/80">
                      {snapshotFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 rounded-2xl border border-[#F4C2C2]/50 bg-[#FFF9F6]/80 px-4 py-3 shadow-sm md:px-6 md:py-4"
                        >
                          <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#D8B878] text-xs font-bold text-white">
                            ✓
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-5 rounded-2xl border border-[#F4C2C2]/70 bg-gradient-to-br from-[#FFF9F6] via-white to-[#F4C2C2]/40 px-5 py-6 shadow-sm md:px-8 md:py-7">
                    <div className="flex flex-col gap-3 text-center md:flex-row md:items-end md:justify-between">
                      <div className="md:text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]/50 line-through">
                          Was $300
                        </p>
                        <p className="text-4xl font-bold text-[#2B2B2B] md:text-[2.75rem]">
                          Now $150
                        </p>
                      </div>
                      <span className="inline-flex items-center justify-center rounded-full bg-[#D8B878]/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B878]">
                        LIMITED EARLY-BIRD PRICING
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#E8A9B8]/40 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E8A9B8]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#E8A9B8]" />
                        LAUNCH GUARANTEE INCLUDED
                      </span>
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]/60 text-center">
                      The full experience — now half off.
                    </p>
                  </div>

                  <div className="space-y-5 rounded-2xl border border-[#E8A9B8]/40 bg-white/92 px-5 py-5 text-left text-sm leading-[1.55] text-[#2B2B2B]/75 shadow-sm md:px-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-[#E8A9B8]">
                      What to expect next
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <span className="text-[#D8B878]">•</span>
                        <span>
                          Reserve your seat and choose the kickoff week that
                          fits your schedule.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#D8B878]">•</span>
                        <span>
                          Receive a prep checklist, content upload links, and
                          scheduling details within 24 hours.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-[#D8B878]">•</span>
                        <span>
                          Review private previews, submit edits, and launch with
                          a guided checklist from me.
                        </span>
                      </li>
                    </ul>
                    <div className="space-y-3">
                      <Link
                        href="https://form.jotform.com/253147754374059"
                        className="inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-[#E8A9B8] px-6 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-md shadow-[#E8A9B8]/40 transition hover:-translate-y-0.5 hover:bg-[#E8A9B8]/90"
                      >
                        Reserve My Seat
                      </Link>
                      <p className="text-center text-sm text-[#2B2B2B]/65 md:text-left">
                        Prefer to chat first?{" "}
                        <Link
                          href="mailto:hello@builtbyashley.com"
                          className="font-semibold text-[#E8A9B8] underline decoration-[#E8A9B8]/40 underline-offset-4 hover:decoration-[#E8A9B8]"
                        >
                          Email Ashley to schedule a consult.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
        <section className="bg-white">
          <div
            className={`${sectionContainer} grid gap-4 pt-10 pb-14 mb-12 md:max-w-5xl md:grid-cols-3 md:gap-6 md:pt-16 md:pb-20 md:mb-16`}
          >
            {trustStats.map(({ stat, label }) => (
              <div
                key={stat}
                className="flex flex-col items-center gap-1 rounded-2xl border border-[#F4C2C2]/40 bg-white/95 px-4 py-5 text-center text-sm font-semibold text-[#2B2B2B]/70 shadow-sm md:items-start md:px-6 md:text-left md:text-base"
              >
                <span className="text-2xl font-bold text-[#E8A9B8] uppercase tracking-[0.06em]">
                  {stat}
                </span>
                <span className="leading-[1.5]">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-white/90" id="proof">
          <div
            className={`${sectionContainer} mt-12 rounded-3xl border border-[#F4C2C2]/50 bg-white/95 px-5 py-8 shadow-xl shadow-[#E8A9B8]/15 md:mt-16 md:space-y-12 md:px-12 md:py-12`}
          >
            <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
              <div className="space-y-8">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                    What&apos;s included in your Starter Site
                  </h2>
                  <p className="text-lg leading-[1.55] text-[#2B2B2B]/75">
                    Everything you need for a polished, credible one-page site
                    that helps you book your first conversations.
                  </p>
                </div>
                <ul className="grid gap-4 text-base leading-[1.55] text-[#2B2B2B]/80 md:grid-cols-2">
                  {snapshotFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-[#F4C2C2]/60 bg-[#FFF9F6]/80 px-4 py-4 shadow-sm md:px-6"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E8A9B8]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2 rounded-2xl border border-[#E8A9B8]/40 bg-[#E8A9B8]/10 px-5 py-5 text-[#2B2B2B]/80 md:px-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8A9B8]">
                    Need more support?
                  </h3>
                  <p className="leading-[1.55]">
                    Add hosting, maintenance, or growth add-ons anytime as your
                    site evolves.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="absolute -inset-4 hidden rounded-3xl bg-gradient-to-br from-[#E8A9B8]/30 via-[#F4C2C2]/20 to-[#D8B878]/25 blur-3xl md:block" />
                <div className="relative w-full overflow-hidden rounded-3xl border border-[#F4C2C2]/60 bg-white shadow-2xl shadow-[#E8A9B8]/20">
                  <Image
                    src={starterMockup}
                    alt="Simple 1-page Starter Site layout mockup with hero, content blocks, and CTA"
                    width={900}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                  <p className="border-t border-[#F4C2C2]/60 bg-white px-6 py-4 text-center text-sm font-semibold leading-[1.55] text-[#2B2B2B]/70">
                    Visual mockup of the Starter Site layout with hero, content
                    blocks, and CTA.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-base font-medium leading-[1.55] text-[#2B2B2B]/75">
              Perfect for personal brands, consultants, micro nonprofits, and
              creatives who want a clean, credible, conversion-ready
              site—without the tech overwhelm.
            </p>
          </div>
        </section>

        {/* First Clients Focus */}
        <section className="bg-white">
          <div
            className={`${sectionContainer} mt-12 mb-16 flex flex-col gap-6 rounded-3xl border border-[#E8A9B8]/40 bg-[#FFF9F6]/85 px-5 py-6 shadow-lg shadow-[#E8A9B8]/20 md:mt-16 md:max-w-5xl md:mb-20 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-10`}
          >
            <div className="space-y-4 md:max-w-xl">
              <h3 className="text-2xl font-bold leading-[1.15] text-[#2B2B2B] md:text-3xl">
                Your first clients, simplified
              </h3>
              <p className="text-base leading-[1.55] text-[#2B2B2B]/75 md:text-lg">
                We focus on the must-have pieces so you can start booking
                conversations, even if you&apos;re juggling a full-time job.
              </p>
              <ul className="space-y-3 text-base leading-[1.55] text-[#2B2B2B]/75">
                {[
                  "Hero, service, and trust copy written to invite action",
                  "Inquiry or booking form routed straight to your inbox or calendar",
                  "30-day post-launch tweaks while real feedback rolls in",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#D8B878]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-[#F4C2C2]/50 bg-white px-5 py-5 text-base leading-[1.55] text-[#2B2B2B]/75 shadow-sm md:max-w-xs md:px-6">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E8A9B8]">
                Launch notes
              </span>
              <p>
                You also get the “Next Five Steps” mini guide with promo
                prompts, checklist, and who to notify on launch day.
              </p>
            </div>
          </div>
        </section>

        {/* Hosting & Support */}
        <section className="bg-[#FFF9F6]">
          <div
            className={`${sectionContainer} mt-12 space-y-8 rounded-3xl border border-[#F4C2C2]/50 bg-white/95 px-5 py-8 shadow-lg shadow-[#E8A9B8]/20 md:mt-16 md:max-w-5xl md:px-10 md:py-10`}
          >
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                Hosting and support that just works
              </h2>
              <p className="text-lg leading-[1.55] text-[#2B2B2B]/75">
                Keep your Starter Site secure, fast, and updated with reliable
                stewardship from BuiltByAshley—no hidden fees.
              </p>
            </div>
            <div className="space-y-5 rounded-2xl border border-[#E8A9B8]/40 bg-[#FFF9F6]/85 px-5 py-5 text-center md:text-left md:px-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E8A9B8]">
                    Hosting & Support
                  </p>
                  <p className="mt-2 text-3xl font-bold text-[#2B2B2B] md:text-[2.5rem]">
                    $25/month
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D8B878]/45 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B878]">
                  Monitoring, updates, and priority fixes included
                </span>
              </div>
              <div className="rounded-2xl border border-dashed border-[#E8A9B8]/45 bg-white/65 px-5 py-4 text-sm leading-[1.55] text-[#2B2B2B]/75">
                <p>
                  Need full maintenance, backups, and quarterly SEO refreshes?
                  Add the Care Plan for{" "}
                  <span className="font-semibold text-[#2B2B2B]">
                    $90/month
                  </span>{" "}
                  whenever you&apos;re ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Optional Add-Ons */}
        <section id="add-ons" className="bg-white">
          <div
            className={`${sectionContainer} mt-12 space-y-8 rounded-3xl border border-[#F4C2C2]/50 bg-white/95 px-5 py-8 shadow-xl shadow-[#E8A9B8]/20 md:mt-16 md:px-10 md:py-12`}
          >
            <div className="space-y-3 text-center md:text-left">
              <span className="inline-flex items-center justify-center rounded-full bg-[#E8A9B8]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#E8A9B8]">
                Optional add-ons
              </span>
              <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                Add extra power when you&apos;re ready
              </h2>
              <p className="text-lg leading-[1.55] text-[#2B2B2B]/75">
                Pick and layer services that keep your launch moving and make
                follow-up effortless. We&apos;ll confirm the best fit on your
                vision call.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {addOnGroups.map(({ title, blurb, items }) => (
                <div
                  key={title}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-[#F4C2C2]/60 bg-white/95 px-5 py-5 shadow-sm shadow-[#E8A9B8]/15 md:px-8"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#2B2B2B]">
                      {title}
                    </h3>
                    <p className="text-sm leading-[1.55] text-[#2B2B2B]/70">
                      {blurb}
                    </p>
                  </div>
                  <ul className="space-y-4">
                    {items.map(({ name, description, price }) => (
                      <li
                        key={name}
                        className="rounded-xl border border-[#F4C2C2]/40 bg-[#FFF9F6]/80 px-4 py-4 md:px-5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-base font-semibold text-[#2B2B2B]">
                            {name}
                          </span>
                          <span className="text-sm font-semibold text-[#E8A9B8]">
                            {price}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-[1.55] text-[#2B2B2B]/70">
                          {description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-center leading-[1.55] text-[#2B2B2B]/60">
              Start with the core build, then layer new pieces as your offers
              evolve.
            </p>
          </div>
        </section>

        {/* Why this sale exists */}
        <section id="why" className="bg-white">
          <div
            className={`${sectionContainer} mt-12 flex flex-col gap-10 md:mt-16 md:max-w-4xl`}
          >
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                Why I&apos;m offering 50% off right now
              </h2>
              <p className="text-lg leading-[1.55] text-[#2B2B2B]/75">
                As a one-woman studio expanding my Starter Site portfolio, I’m
                opening a handful of early-bird seats for founders who need
                momentum. You get a conversion-ready launch pad for $150 while I
                add more real-world results to showcase. Once these spots are
                claimed, the package returns to $300.
              </p>
            </div>

            <div className="grid gap-8 rounded-3xl bg-gradient-to-br from-[#F4C2C2]/30 via-[#FFF9F6] to-[#E8A9B8]/30 px-6 py-10 shadow-lg md:grid-cols-2 md:gap-10 md:px-12 md:py-12">
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold text-[#2B2B2B]">
                  You receive
                </h3>
                <ul className="space-y-4 text-[#2B2B2B]/75">
                  <li>Brand-aligned copy and layout built to convert</li>
                  <li>Launch checklist and 30-day support as you go live</li>
                  <li>
                    Flexible evening + weekend collaboration when you need it
                  </li>
                </ul>
              </div>
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold text-[#2B2B2B]">
                  I ask in return
                </h3>
                <ul className="space-y-4 text-[#2B2B2B]/75">
                  <li>Reserve quickly — discounted seats are truly limited</li>
                  <li>
                    Gather your photos, logo, and must-have details upfront
                  </li>
                  <li>
                    Share your vision and feedback — I’ll handle the polish
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Launch Plan */}
        <section id="process" className="bg-[#FFFFFF]/90">
          <div className={`${sectionContainer} mt-12 space-y-12 md:mt-16`}>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold md:text-4xl">
                What happens after you book
              </h2>
              <p className="text-lg leading-[1.55] text-[#2B2B2B]/75">
                A simple three-step, one-week path from idea to live site — no
                web experience needed.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {processSteps.map(({ title, description, note }, index) => (
                <div
                  key={title}
                  className="flex h-full flex-col gap-3 rounded-3xl border border-[#F4C2C2]/40 bg-white px-5 py-6 shadow-lg shadow-[#E8A9B8]/20 md:px-8 md:py-8"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#F4C2C2]/60 bg-[#FFF9F6]/80 text-lg font-bold text-[#F4C2C2] md:h-12 md:w-12 md:text-xl">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-[#2B2B2B] md:text-xl">
                    {title}
                  </h3>
                  <p className="text-base leading-[1.55] text-[#2B2B2B]/75">
                    {description}
                  </p>
                  <div className="mt-2 flex items-start gap-2 text-sm font-medium leading-[1.55] text-[#2B2B2B]/65">
                    <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-[#E8A9B8]" />
                    <span>{note}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-gradient-to-r from-[#E8A9B8]/22 via-[#F4C2C2]/28 to-[#D8B878]/22 px-6 py-8 shadow-inner md:px-10">
                <div className="flex flex-col items-center gap-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#2B2B2B]/70 sm:flex-row sm:items-center sm:gap-8">
                  {timeline.map(({ day, label }, idx) => (
                    <Fragment key={day}>
                      <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                        <span className="inline-flex h-9 min-w-[8rem] items-center justify-center rounded-full border border-white/40 bg-white/80 px-6 text-base font-bold text-[#E8A9B8] shadow-sm">
                          {day}
                        </span>
                        <span className="text-xs text-[#2B2B2B]/60 sm:text-sm">
                          {label}
                        </span>
                      </div>
                      {idx < timeline.length - 1 && (
                        <div className="hidden flex-1 items-center sm:flex">
                          <div className="flex w-full items-center gap-2">
                            <div className="h-0.5 flex-1 bg-gradient-to-r from-white/50 via-white/30 to-white/10" />
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/70 text-lg font-bold text-[#D8B878] shadow-sm">
                              →
                            </span>
                            <div className="h-0.5 flex-1 bg-gradient-to-r from-white/10 via-white/30 to-white/50" />
                          </div>
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
              <p className="text-center text-base font-medium leading-[1.55] text-[#2B2B2B]/75">
                Need to move faster? Ask about the four-day accelerated
                build—it&apos;s perfect when your copy and visuals are ready to
                go.
              </p>
            </div>
          </div>
        </section>

        {/* Urgency & FAQs */}
        <section id="faq" className="bg-white">
          <div
            className={`${sectionContainer} mt-16 space-y-10 md:mt-20 md:max-w-5xl`}
          >
            <div className="flex flex-col gap-6 rounded-3xl bg-gradient-to-r from-[#E8A9B8]/22 via-[#FFF9F6] to-[#D8B878]/24 px-6 py-8 text-center shadow-lg md:flex-row md:items-center md:justify-between md:px-10 md:text-left">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                  Book before the discounted spots disappear
                </h2>
                <p className="text-lg leading-[1.55] text-[#2B2B2B]/75">
                  Once the remaining Starter Site seats are taken, pricing
                  returns to $300. Reserve now, then start when your calendar
                  allows.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link
                  href="https://form.jotform.com/253147754374059"
                  className="inline-flex w-full min-h-[50px] items-center justify-center gap-3 rounded-full bg-[#D8B878] px-10 text-sm font-semibold uppercase tracking-[0.24em] text-[#2B2B2B] shadow-lg shadow-[#D8B878]/30 transition-all hover:-translate-y-0.5 hover:bg-[#D8B878]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A9B8] md:w-auto"
                >
                  <span className="text-base md:text-lg">→</span>
                  <span>Start My Site</span>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {faqItems.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group rounded-2xl border border-[#F4C2C2]/60 bg-[#FFF9F6]/85 px-5 py-4 shadow-sm transition"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-[#2B2B2B] marker:content-['']">
                    {question}
                    <span className="text-xl text-[#E8A9B8] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-base leading-[1.55] text-[#2B2B2B]/75">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* My Promise */}
        <section className="bg-[#FFF9F6]">
          <div className={`${sectionContainer} space-y-10 md:max-w-5xl`}>
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold text-[#2B2B2B] md:text-4xl">
                My promise: integrity, excellence, ongoing care
              </h2>
              <p className="text-lg leading-[1.55] text-[#2B2B2B]/75">
                You&apos;re not just buying a page — you&apos;re gaining a
                partner who cares deeply about your mission and momentum.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {promiseItems.map(({ title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#F4C2C2]/50 bg-[#FFF9F6]/85 px-5 py-6 shadow-sm md:px-6"
                >
                  <h3 className="text-lg font-semibold text-[#2B2B2B]">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-[1.55] text-[#2B2B2B]/75">
                    {description}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-[#E8A9B8]/18 px-6 py-5 text-center text-sm font-semibold uppercase tracking-[0.28em] text-[#E8A9B8]">
              Steward-led design rooted in integrity, honesty, and joyful
              service
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section
          id="book"
          className="bg-gradient-to-br from-[#E8A9B8] via-[#E79CB2] to-[#D39A72] text-white"
        >
          <div
            className={`${sectionContainer} flex min-h-[480px] flex-col gap-8 text-center md:max-w-4xl md:text-left`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold md:text-4xl">
                Secure your $150 Starter Site before pricing resets
              </h2>
              <p className="text-lg font-semibold leading-[1.5] text-white/95 md:text-xl">
                Only 7 discounted seats remain this month. Reserve your spot now
                and we’ll launch a conversion-ready home on your timeline.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
              <Link
                href="https://form.jotform.com/253147754374059"
                className="inline-flex w-full min-h-[50px] items-center justify-center rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#E8A9B8] shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-[#FFF9F6] md:w-auto"
              >
                Start My Site
              </Link>
              <Link
                href="mailto:hello@builtbyashley.com"
                className="inline-flex w-full min-h-[50px] items-center justify-center rounded-full border border-white/70 px-8 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-white/10 md:w-auto"
              >
                Ask A Question
              </Link>
            </div>
            <div className="space-y-3 rounded-2xl bg-white/15 px-6 py-6 text-left text-sm leading-[1.55] text-white/85 md:text-base">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90 md:text-base">
                ⭐ Your Starter Site Includes
              </p>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-lg">•</span>
                  <span>Single, simple payment — no extra invoices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">•</span>
                  <span>30-day post-launch support check-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">•</span>
                  <span>Seven-day launch guarantee or 25% refund</span>
                </li>
              </ul>
            </div>
            <p className="flex items-center justify-center gap-2 text-sm text-white/80 md:justify-start md:text-base">
              Prefer a personal touch? <span>✉️</span>
              <Link
                href="mailto:hello@builtbyashley.com"
                className="font-semibold underline decoration-white/60 underline-offset-4 hover:decoration-white"
              >
                hello@builtbyashley.com
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
