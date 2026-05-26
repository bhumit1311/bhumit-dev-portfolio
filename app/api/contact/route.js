import { buildContactEmail, buildAutoReplyEmail, createContactTransporter } from "../../../lib/mailer";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const message = body?.message?.trim();
    const type = body?.type;

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const transporter = createContactTransporter();
    
    // 1. Send inquiry notification email to Bhumit (the site owner)
    await transporter.sendMail(buildContactEmail({ name, email, message, type }));

    // 2. Send styled confirmation auto-reply email to the Inquirer (user)
    try {
      await transporter.sendMail(buildAutoReplyEmail({ name, email, type }));
    } catch (autoReplyError) {
      // Log auto-reply failure, but don't fail the client response if the main inquiry went through
      console.error("Auto-reply email failed to send:", autoReplyError);
    }

    return Response.json({ ok: true });
  } catch (error) {
    if (
      error.message?.includes("SMTP_") ||
      error.message?.includes("CONTACT_")
    ) {
      return Response.json(
        {
          error:
            "Contact backend is not configured yet. Add SMTP settings and CONTACT_TO_EMAIL to enable delivery.",
        },
        { status: 503 }
      );
    }

    return Response.json(
      { error: "Email delivery failed. Please verify the SMTP settings and try again." },
      { status: 500 }
    );
  }
}
