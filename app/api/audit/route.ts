import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, business, website, service, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    console.log("🔍 New Free Audit Request:", {
      name, email, phone, business, website, service, message,
      timestamp: new Date().toISOString(),
    });

    // TODO Phase 5: Send email via Resend
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Audit API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
