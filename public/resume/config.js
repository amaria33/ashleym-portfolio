// ============================================================
// RESUME OPTIMIZER — Stripe Payment Links + Formspree
// ============================================================

window.RESUME_CONFIG = {
  // Orders use native Formspree POST (AJAX fails when reCAPTCHA is enabled)
  formspreeEndpoint: "https://formspree.io/f/xwvgjqlb",

  // Package prices (for the order total display)
  prices: {
    starter: 39.5,
    career: 74.5,
    pro: 124.5,
  },

  // Add-on prices (Pro already includes a cover letter)
  addonPrices: {
    coverLetter: 14.5,
  },

  // Stripe publishable key (safe for frontend) + Buy Buttons
  stripePublishableKey:
    "pk_live_51SSRk8FTmTwKXbYCPUeoG5tge4Z8uM7NPHcSZfZhEl3ncZvkgyYYRUR4JLimVCRpSDP70f8QC2p2RMun7EuJENVN00QtI90Wkh",

  // Buy Buttons (optional display) — Payment Links are the reliable checkout
  stripeBuyButtons: {
    starter: "buy_btn_1TzSdMFTmTwKXbYCA26zTkoQ", // $39.50
    career: "buy_btn_1TzSfKFTmTwKXbYClJEbKPfp", // $74.50
    pro: "buy_btn_1TzSg0FTmTwKXbYCJDVnSicf", // $124.50
  },

  // Stripe Payment Links — used for checkout redirect on the pay page
  stripeLinks: {
    starter: "https://buy.stripe.com/5kQ00jdkZ4nwfNF0EtaMU01", // $39.50
    career: "https://buy.stripe.com/bJecN580FcU230TevjaMU02", // $74.50
    pro: "https://buy.stripe.com/4gMeVdep38DM30TgDraMU03", // $124.50
    "template-pack": "", // coming soon
    bundle: "", // coming soon
  },

  // Combined Payment Links: package + Cover Letter add-on in ONE checkout.
  // Create these in Stripe (see instructions), then paste the links here.
  stripeLinksWithCoverLetter: {
    starter: "https://buy.stripe.com/aFabJ1ep33js8ld5YNaMU09", // Starter + Cover Letter — $54.00
    career: "https://buy.stripe.com/aFaaEX5Sx3js9ph0EtaMU0a", // Career + Cover Letter — $89.00
  },

  // Standalone Cover Letter add-on link (fallback / upsell band)
  stripeCoverLetterLink: "https://buy.stripe.com/00weVd4OtaLU0SLaf3aMU08", // $14.50

  // Freebie uses FormSubmit (free autoresponse) — see freebie form action
  freebiePdfUrl: "/resume/ats-checklist.pdf",
  freebieThanksUrl: "/resume/thanks-freebie.html",

  // Launch sale ends end of day Aug 15, 2026 (local time)
  saleEndIso: "2026-08-15T23:59:59",

  contactEmail: "hello@builtbyashley.com",
};
