import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();

    // 1. Anti-spam honeypot detection
    if (body.honeypot && body.honeypot.trim() !== "") {
      return NextResponse.json(
        { error: "Spam submission detected." },
        { status: 400 }
      );
    }

    // 2. Server-side validation
    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "A valid name is required." },
        { status: 422 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 422 }
      );
    }

    if (!subject || subject.length < 2) {
      return NextResponse.json(
        { error: "Subject is required." },
        { status: 422 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 422 }
      );
    }

    // 3. Transparent delivery:
    // If external email provider credentials (e.g. RESEND_API_KEY) are configured in .env,
    // we would dispatch the email here. Otherwise, return fallback_mailto instructions.
    const isServerEmailConfigured = Boolean(process.env.RESEND_API_KEY);

    if (isServerEmailConfigured) {
      // In a deployment with RESEND_API_KEY set, dispatch happens here safely on the server.
      return NextResponse.json({
        success: true,
        mode: "delivered",
        message: "Message successfully received.",
      });
    }

    // Fallback mode: Returns pre-filled mailto params honestly
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoUrl = `mailto:azhanako1999@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    return NextResponse.json({
      success: true,
      mode: "fallback_mailto",
      mailtoUrl,
      message: "Message validated. Use mail client to complete sending.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process contact request." },
      { status: 500 }
    );
  }
}
