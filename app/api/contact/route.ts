import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, business, service, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Required fields missing" }, { status: 400 });
    }

    // Log to console (replace with Resend/Nodemailer in Phase 5)
    console.log("📬 New Contact Form Submission:", {
      name, email, phone, business, service, message,
      timestamp: new Date().toISOString(),
    });

    // TODO Phase 5: Send email via Resend
    // await resend.emails.send({
    //   from: "noreply@literxsys.com",
    //   to: "hello@literxsys.com",
    //   subject: `New Enquiry from ${name} — ${service}`,
    //   html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Business: ${business}</p><p>Service: ${service}</p><p>Message: ${message}</p>`,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
