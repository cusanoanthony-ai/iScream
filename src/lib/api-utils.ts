import { NextResponse } from "next/server";
import { ZodError } from "zod";

export function validationErrorResponse(error: ZodError) {
  const fieldErrors: Record<string, string> = {};
  for (const issue of error.issues) {
    const path = issue.path.join(".");
    if (!fieldErrors[path]) {
      fieldErrors[path] = issue.message;
    }
  }
  return NextResponse.json(
    { success: false, message: "Please check the form and try again.", fieldErrors },
    { status: 400 },
  );
}

export function honeypotTriggeredResponse() {
  return NextResponse.json({ success: true, message: "Thank you!" });
}

export function serviceUnavailableResponse(message: string) {
  return NextResponse.json({ success: false, message }, { status: 503 });
}

export function successResponse(message: string) {
  return NextResponse.json({ success: true, message });
}

export function serverErrorResponse() {
  return NextResponse.json(
    {
      success: false,
      message:
        "Something went wrong on our end. Please try again or contact us directly.",
    },
    { status: 500 },
  );
}
