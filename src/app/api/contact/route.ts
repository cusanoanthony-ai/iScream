import { NextRequest } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import {
  emailUnavailableMessage,
  formatFieldsHtml,
  isEmailConfigured,
  sendEmail,
} from "@/lib/email";
import {
  honeypotTriggeredResponse,
  serverErrorResponse,
  serviceUnavailableResponse,
  successResponse,
  validationErrorResponse,
} from "@/lib/api-utils";

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error);
    }

    if (parsed.data.website) {
      return honeypotTriggeredResponse();
    }

    if (!isEmailConfigured()) {
      return serviceUnavailableResponse(emailUnavailableMessage);
    }

    const { name, email, phone, reason, message } = parsed.data;
    const subject = `I Scream Yogurt Website Contact – ${reason} – ${name}`;
    const html = `
      <h2>New website contact message</h2>
      ${formatFieldsHtml({ name, email, phone, reason, message })}
    `;

    const result = await sendEmail({ subject, html, replyTo: email });

    if (!result.success) {
      return serverErrorResponse();
    }

    return successResponse(
      "Thank you! Your message has been sent. We'll get back to you soon.",
    );
  } catch {
    return serverErrorResponse();
  }
}
