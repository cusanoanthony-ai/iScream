import { NextRequest } from "next/server";
import { newsletterFormSchema } from "@/lib/validation";
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
    const parsed = newsletterFormSchema.safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error);
    }

    if (parsed.data.website) {
      return honeypotTriggeredResponse();
    }

    if (!isEmailConfigured()) {
      return serviceUnavailableResponse(emailUnavailableMessage);
    }

    const { email } = parsed.data;
    const subject = "I Scream Yogurt Newsletter Signup";
    const html = `
      <h2>New newsletter signup</h2>
      <p>A visitor subscribed to email updates from the website.</p>
      ${formatFieldsHtml({ email })}
      <p><em>Note: Until a formal email marketing platform is connected, newsletter signups are forwarded to the business owner.</em></p>
    `;

    const result = await sendEmail({ subject, html, replyTo: email });

    if (!result.success) {
      return serverErrorResponse();
    }

    return successResponse(
      "You're on the list! Thanks for joining the I Scream Yogurt journey.",
    );
  } catch {
    return serverErrorResponse();
  }
}
