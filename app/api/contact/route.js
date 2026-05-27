import { buildContactEmail, buildAutoReplyEmail, createContactTransporter } from "../../../lib/mailer";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Remove control characters, newlines, double quotes, backslashes, and angle brackets to prevent header injection or escaping
function sanitizeName(val) {
  return val ? String(val).replace(/[\r\n"\\<>]/g, "").trim() : "";
}

function sanitizeEmail(val) {
  return val ? String(val).replace(/[\r\n"\\<>]/g, "").trim() : "";
}

function sanitizeType(val) {
  return val ? String(val).replace(/[\r\n"\\<>]/g, "").trim() : "";
}

export async function POST(request) {
  try {
    // CSRF Protection / Same-Origin Check
    const host = request.headers.get("host");
    const origin = request.headers.get("origin");
    if (origin) {
      try {
        const originHost = new URL(origin).host;
        const isLocalhost = originHost.startsWith("localhost") || originHost.startsWith("127.0.0.1");
        if (originHost !== host && !isLocalhost) {
          return Response.json(
            { error: "Forbidden: Cross-Origin request blocked." },
            { status: 403 }
          );
        }
      } catch (e) {
        return Response.json(
          { error: "Forbidden: Invalid origin header." },
          { status: 403 }
        );
      }
    }

    // 1. Content-Type Validation
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return Response.json(
        { error: "Content-Type must be application/json." },
        { status: 415 }
      );
    }

    // 2. Safe JSON Parsing
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return Response.json(
        { error: "Invalid JSON format in request body." },
        { status: 400 }
      );
    }

    const rawName = body?.name;
    const rawEmail = body?.email;
    const rawMessage = body?.message;
    const rawType = body?.type;

    // 3. Presence check
    if (!rawName || !rawEmail || !rawMessage) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // 4. Length constraints
    if (
      String(rawName).length > 100 ||
      String(rawEmail).length > 255 ||
      String(rawMessage).length > 5000 ||
      (rawType && String(rawType).length > 50)
    ) {
      return Response.json(
        { error: "Input length limits exceeded (Name <= 100, Email <= 255, Message <= 5000, Type <= 50)." },
        { status: 400 }
      );
    }

    // 5. Sanitization
    const name = sanitizeName(rawName);
    const email = sanitizeEmail(rawEmail);
    const message = String(rawMessage).trim(); // message is safe to contain newlines/quotes as it goes to the email body
    const type = sanitizeType(rawType);

    // 6. Validation
    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const transporter = createContactTransporter();
    
    // Send inquiry notification email to Bhumit (the site owner)
    await transporter.sendMail(buildContactEmail({ name, email, message, type }));

    // Send styled confirmation auto-reply email to the Inquirer (user)
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

// Explicitly handle and reject GET, PUT, DELETE, PATCH with JSON response instead of default Next.js HTML error/404/405 pages.
const methodNotAllowed = () => Response.json(
  { error: "Method Not Allowed. Please use POST." },
  { status: 405 }
);

export { methodNotAllowed as GET };
export { methodNotAllowed as PUT };
export { methodNotAllowed as DELETE };
export { methodNotAllowed as PATCH };

