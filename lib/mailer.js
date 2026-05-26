import nodemailer from "nodemailer";

function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

export function createContactTransporter() {
  const port = Number(process.env.SMTP_PORT || 587);

  return nodemailer.createTransport({
    host: getRequiredEnv("SMTP_HOST"),
    port,
    secure: port === 465,
    auth: {
      user: getRequiredEnv("SMTP_USER"),
      pass: getRequiredEnv("SMTP_PASS"),
    },
  });
}

export function buildContactEmail({ name, email, message, type }) {
  const to = getRequiredEnv("CONTACT_TO_EMAIL");
  const from = process.env.CONTACT_FROM_EMAIL || getRequiredEnv("SMTP_USER");

  const topicLabel = {
    internship: "Internship opportunity",
    job: "Junior dev role",
    freelance: "Freelance project",
    collaboration: "Open source / collaboration",
    other: "Other",
  }[type] || "General Inquiry";

  return {
    from: `"${name}" <${from}>`,
    to,
    replyTo: email,
    subject: `[Portfolio Inquiry] ${topicLabel} from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Regarding: ${topicLabel}`,
      "",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; line-height: 1.6; color: #111111; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background: #05070d; padding: 24px; text-align: center; border-bottom: 2px solid #dc2626;">
          <h2 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 800; letter-spacing: -0.02em;">New Portfolio Inquiry</h2>
        </div>
        <div style="padding: 32px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-weight: 700; color: #64748b; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 700; color: #64748b;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none; font-weight: 600;">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 700; color: #64748b;">Regarding:</td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: 600; display: inline-block; background: #dc2626; padding: 2px 10px; border-radius: 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">${topicLabel}</td>
            </tr>
          </table>
          <p style="font-weight: 700; color: #64748b; margin: 0 0 8px;">Message:</p>
          <div style="padding: 20px; border-left: 4px solid #dc2626; border-radius: 4px; background: #f8fafc; color: #334155; font-size: 15px; white-space: pre-wrap; font-style: italic;">
            ${escapeHtml(message)}
          </div>
        </div>
      </div>
    `,
  };
}

export function buildAutoReplyEmail({ name, email, type }) {
  const from = process.env.CONTACT_FROM_EMAIL || getRequiredEnv("SMTP_USER");

  const topicLabelText = {
    internship: "Internship Opportunity",
    job: "Junior Developer Role",
    freelance: "Freelance Project",
    collaboration: "Collaboration / Open Source",
    other: "General Project Inquiry",
  }[type] || "General Inquiry";

  return {
    from: `"Bhumit Vaghela" <${from}>`,
    to: email,
    subject: `Inquiry Acknowledgment - ${name}`,
    text: [
      `Dear ${name},`,
      "",
      `Thank you for contacting me. This confirms that I have successfully received your inquiry regarding ${topicLabelText}.`,
      "I appreciate your interest in my professional services and experience.",
      "",
      `Inquiry Summary:`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${topicLabelText}`,
      "",
      "I will review your message shortly and follow up with a detailed response within 24 business hours.",
      "",
      "Feel free to check my professional profiles in the meantime:",
      "- GitHub: https://github.com/bhumit1311",
      "- LinkedIn: https://www.linkedin.com/in/bhumit-vaghela-752130330/",
      "",
      "Sincerely,",
      "Bhumit Vaghela",
      "Software Developer"
    ].join("\n"),
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 20px auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background: #ffffff; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);">
        <!-- Header -->
        <div style="background: #0f172a; padding: 32px 24px; text-align: center; border-bottom: 3px solid #dc2626;">
          <div style="display: inline-block; padding: 4px 12px; background: rgba(220,38,38,0.1); border: 1px solid rgba(220,38,38,0.2); border-radius: 6px; margin-bottom: 12px;">
            <span style="color: #f87171; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;">Awaiting Review</span>
          </div>
          <h2 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">Inquiry Successfully Received</h2>
          <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px;">Bhumit Vaghela &mdash; Professional Portfolio</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 32px;">
          <p style="margin: 0 0 16px; font-size: 15px; color: #0f172a; font-weight: 600;">Dear ${escapeHtml(name)},</p>
          
          <p style="margin: 0 0 24px; font-size: 14.5px; color: #334155; line-height: 1.7;">
            Thank you for contacting me. This email confirms that I have received your message regarding <strong>${topicLabelText}</strong>. I appreciate your interest in my professional services and experience.
          </p>

          <!-- Summary Box -->
          <div style="padding: 20px; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0; margin-bottom: 24px;">
            <p style="margin: 0 0 12px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Submission Overview</p>
            <table style="width: 100%; font-size: 13.5px; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 500; width: 110px;">Sender Name:</td>
                <td style="padding: 6px 0; color: #1e293b; font-weight: 600;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Email:</td>
                <td style="padding: 6px 0; color: #1e293b; font-weight: 600;">${escapeHtml(email)}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Inquiry Type:</td>
                <td style="padding: 6px 0; color: #dc2626; font-weight: 600;">${topicLabelText}</td>
              </tr>
            </table>
          </div>

          <p style="margin: 0 0 32px; font-size: 14.5px; color: #334155; line-height: 1.7;">
            I will personally review your inquiry and follow up with a detailed response within <strong>24 business hours</strong>. If your request is time-sensitive, please feel free to reach out directly via my professional channels.
          </p>
          
          <!-- Action Panel -->
          <div style="padding: 24px; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0; margin-bottom: 32px; text-align: center;">
            <p style="margin: 0 0 16px; font-size: 13px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Professional Profiles</p>
            <div style="text-align: center;">
              <a href="https://github.com/bhumit1311" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 10px 20px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; color: #0f172a; text-decoration: none; font-size: 13px; font-weight: 600; margin: 4px 8px; min-width: 100px;">
                GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/bhumit-vaghela-752130330/" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 10px 20px; background: #dc2626; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 600; margin: 4px 8px; min-width: 100px;">
                LinkedIn Network
              </a>
            </div>
          </div>
          
          <!-- Signature -->
          <div style="border-top: 1px solid #e2e8f0; padding-top: 24px;">
            <p style="margin: 0; font-size: 13.5px; color: #64748b;">Sincerely,</p>
            <p style="margin: 4px 0 0; font-size: 15px; color: #0f172a; font-weight: 700;">Bhumit Vaghela</p>
            <p style="margin: 2px 0 0; font-size: 12px; color: #64748b; font-weight: 500;">Software Developer &mdash; Full Stack</p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #f8fafc; padding: 24px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 6px; font-size: 11px; color: #94a3b8; line-height: 1.4;">
            This is an automated system confirmation acknowledging the receipt of your communication. Please do not reply directly to this message.
          </p>
          <p style="margin: 0; font-size: 11px; color: #94a3b8;">
            &copy; ${new Date().getFullYear()} Bhumit Vaghela. All rights reserved.
          </p>
        </div>
      </div>
    `,
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
