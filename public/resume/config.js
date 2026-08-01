// ============================================================
// RESUME OPTIMIZER — Stripe Payment Links + Formspree
// ============================================================

window.RESUME_CONFIG = {
  // Formspree: orders only
  formspreeEndpoint: "https://formspree.io/f/xwvgjqlb",

  // Package prices (for the order total display)
  prices: {
    starter: 39.5,
    career: 74.5,
    pro: 124.5,
  },

  // Stripe publishable key (safe for frontend) + Buy Buttons
  stripePublishableKey:
    "pk_live_51SSRk8FTmTwKXbYCPUeoG5tge4Z8uM7NPHcSZfZhEl3ncZvkgyYYRUR4JLimVCRpSDP70f8QC2p2RMun7EuJENVN00QtI90Wkh",

  // Prefer Buy Button when set; otherwise Payment Link redirect
  stripeBuyButtons: {
    starter: "buy_btn_1TzSdMFTmTwKXbYCA26zTkoQ", // $39.50
    career: "",
    pro: "",
  },

  // Stripe Payment Links — fallback / packages without a buy button yet
  stripeLinks: {
    starter: "", // using Buy Button above
    career: "https://buy.stripe.com/bJecN580FcU230TevjaMU02", // $74.50
    pro: "https://buy.stripe.com/4gMeVdep38DM30TgDraMU03", // $124.50
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
