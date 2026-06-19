import { NextRequest } from "next/server";
import { cateringFormSchema } from "@/lib/validation";
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
    const parsed = cateringFormSchema.safeParse(body);

    if (!parsed.success) {
      return validationErrorResponse(parsed.error);
    }

    if (parsed.data.website) {
      return honeypotTriggeredResponse();
    }

    if (!isEmailConfigured()) {
      return serviceUnavailableResponse(emailUnavailableMessage);
    }

    const data = parsed.data;
    const subject = `iScream Yogurt Catering Request – ${data.eventDate} – ${data.fullName}`;
    const html = `
      <h2>New catering request</h2>
      ${formatFieldsHtml({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        organization: data.organization,
        eventType: data.eventType,
        eventDate: data.eventDate,
        startTime: data.startTime,
        location: data.location,
        guestCount: data.guestCount,
        hearAbout: data.hearAbout,
        details: data.details,
      })}
    `;

    const result = await sendEmail({ subject, html, replyTo: data.email });

    if (!result.success) {
      return serverErrorResponse();
    }

    return successResponse(
      "Thank you! Your catering request has been submitted. We'll follow up to discuss your event.",
    );
  } catch {
    return serverErrorResponse();
  }
}
