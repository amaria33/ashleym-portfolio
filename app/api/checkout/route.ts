import { NextResponse } from "next/server";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

export async function POST() {
  try {
    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Missing STRIPE_SECRET_KEY in environment variables." },
        { status: 500 }
      );
    }

    // Create Stripe Checkout Session
    const response = await fetch(
      "https://api.stripe.com/v1/checkout/sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "payment_method_types[]": "card",
          "line_items[0][price_data][currency]": "usd",
          "line_items[0][price_data][product_data][name]":
            "Full Website Health Check Report",
          "line_items[0][price_data][product_data][description]":
            "Complete AI-powered analysis of your website's UX, copywriting, and SEO with actionable recommendations",
          "line_items[0][price_data][unit_amount]": "700",
          "line_items[0][quantity]": "1",
          mode: "payment",
          success_url: `${
            process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
          }/success`,
          cancel_url: `${
            process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
          }/sell`,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Stripe API error:", errorText);
      return NextResponse.json(
        { error: "Failed to create checkout session", details: errorText },
        { status: 500 }
      );
    }

    const session = await response.json();

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err) {
    console.error("Unexpected checkout error:", err);
    return NextResponse.json(
      { error: "Unexpected server error during checkout." },
      { status: 500 }
    );
  }
}
