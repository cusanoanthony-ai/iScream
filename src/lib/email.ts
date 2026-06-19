import { Resend } from "resend";

export type EmailConfig = {
  apiKey: string;
  fromEmail: string;
  toEmail: string;
};

export function getEmailConfig(): EmailConfig | null {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail =
    process.env.CONTACT_TO_EMAIL ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    "iscreamyogurt@gmail.com";

  if (!apiKey || !fromEmail) {
    return null;
  }

  return { apiKey, fromEmail, toEmail };
}

export function isEmailConfigured(): boolean {
  return getEmailConfig() !== null;
}

export async function sendEmail(params: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ success: true } | { success: false; error: string }> {
  const config = getEmailConfig();

  if (!config) {
    return { success: false, error: "Email service not configured." };
  }

  const resend = new Resend(config.apiKey);

  const { error } = await resend.emails.send({
    from: config.fromEmail,
    to: config.toEmail,
    subject: params.subject,
    html: params.html,
    replyTo: params.replyTo,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}

export function formatFieldsHtml(
  fields: Record<string, string | undefined>,
): string {
  const rows = Object.entries(fields)
    .filter(([, value]) => value && value.trim().length > 0)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;vertical-align:top;">${escapeHtml(formatLabel(key))}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(value ?? "")}</td></tr>`,
    )
    .join("");

  return `<table style="border-collapse:collapse;width:100%;max-width:600px;font-family:sans-serif;font-size:14px;">${rows}</table>`;
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const emailUnavailableMessage =
  "We're unable to send your message online right now. Please email iscreamyogurt@gmail.com or send a direct message to @iscreamyogurt on Instagram.";
