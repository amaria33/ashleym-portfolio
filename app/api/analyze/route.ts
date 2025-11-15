import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(req: NextRequest) {
  try {
    if (!OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY in environment variables." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const url = body?.url as string | undefined;

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "Missing or invalid 'url'." }, { status: 400 });
    }

    // Fetch the HTML
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Website Health Check Tool)",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch URL. Status: ${res.status}` },
        { status: 400 }
      );
    }

    let html = await res.text();

    // Strip scripts and comments
    html = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<!--[\s\S]*?-->/g, "");

    // Truncate so we don't blow the token limit
    const truncatedHtml = html.slice(0, 15000);

    const systemPrompt = `
You are an expert in website UX, conversion copywriting, and SEO.

Analyze the provided HTML and return a JSON object with FIVE fields:
- "score": an overall website health score from 0 to 100 (number, not string).
- "ux": summary of UX/navigation/layout issues and strengths.
- "copy": summary of messaging, clarity, and CTAs.
- "seo": basic SEO notes (headings, meta, alt text, internal links).
- "recommendations": an array of 3–7 items, each with { "item": string, "impact": "high" | "medium" | "low" }.

Keep the language simple and actionable.
Return ONLY valid JSON. No extra text.
    `.trim();

    const userPrompt = `
Here is the HTML of the website to analyze:

${truncatedHtml}
    `.trim();

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.3,
      }),
    });

    if (!openaiRes.ok) {
      const text = await openaiRes.text();
      console.error("OpenAI error:", text);
      return NextResponse.json(
        { error: "OpenAI request failed", details: text },
        { status: 500 }
      );
    }

    const completion = await openaiRes.json();
    const raw = completion.choices?.[0]?.message?.content;

    if (!raw || typeof raw !== "string") {
      return NextResponse.json(
        { error: "Unexpected OpenAI response format." },
        { status: 500 }
      );
    }

    // Try to parse JSON (in case the model returns code fences)
    const cleaned = raw.replace(/```json|```/g, "").trim();
    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch (err) {
      console.error("JSON parse error:", err, cleaned);
      return NextResponse.json(
        { error: "Failed to parse AI response as JSON." },
        { status: 500 }
      );
    }

    return NextResponse.json(parsed, { status: 200 });
  } catch (err) {
    console.error("Unexpected server error:", err);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}

