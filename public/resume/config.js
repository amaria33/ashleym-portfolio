// ============================================================
// RESUME OPTIMIZER — Stripe Payment Links + Formspree
// ============================================================

window.RESUME_CONFIG = {
  // Formspree: orders only
  formspreeEndpoint: "https://formspree.io/f/xwvgjqlb",

  // Stripe Payment Links
  stripeLinks: {
    starter: "https://buy.stripe.com/5kQ00jdkZ4nwfNF0EtaMU01", // $39.50
    career: "https://buy.stripe.com/bJecN580FcU230TevjaMU02", // $74.50
    pro: "https://buy.stripe.com/4gMeVdep38DM30TgDraMU03", // $124.50
    "jd-pack": "https://buy.stripe.com/14A28r1Ch8DM44XcnbaMU04", // $29
    rush: "https://buy.stripe.com/4gM6oH80F3jsatlgDraMU05", // $29
    "template-pack": "", // coming soon
    bundle: "", // coming soon
  },

  // Freebie uses FormSubmit (free autoresponse) — see freebie form action
  freebiePdfUrl: "/resume/ats-checklist.pdf",
  freebieThanksUrl: "/resume/thanks-freebie.html",

  // Launch sale ends end of day Aug 15, 2026 (local time)
  saleEndIso: "2026-08-15T23:59:59",

  contactEmail: "hello@builtbyashley.com",
};
