// ============================================================
// RESUME OPTIMIZER — Stripe Payment Links + Formspree
// ============================================================

window.RESUME_CONFIG = {
  // Formspree: orders only
  formspreeEndpoint: "https://formspree.io/f/xwvgjqlb",

  // Package + add-on prices (for the order total display)
  prices: {
    starter: 39.5,
    career: 74.5,
    pro: 124.5,
    jd: 29,
    rush: 29,
  },

  // ONE checkout per combo (Stripe Payment Link with all line items on that link).
  // Key format: package | package+jd | package+rush | package+jd+rush
  stripeLinks: {
    starter: "https://buy.stripe.com/5kQ00jdkZ4nwfNF0EtaMU01", // $39.50
    "starter+jd": "", // $68.50
    "starter+rush": "", // $68.50
    "starter+jd+rush": "", // $97.50

    career: "https://buy.stripe.com/bJecN580FcU230TevjaMU02", // $74.50
    "career+jd": "", // $103.50
    "career+rush": "", // $103.50
    "career+jd+rush": "", // $132.50

    pro: "https://buy.stripe.com/4gMeVdep38DM30TgDraMU03", // $124.50
    "pro+jd": "", // $153.50
    "pro+rush": "", // $153.50
    "pro+jd+rush": "", // $182.50

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
