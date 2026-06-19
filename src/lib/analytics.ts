type TrackEventName =
  | "book_truck_click"
  | "call_click"
  | "instagram_click"
  | "streetfoodfinder_click"
  | "square_click"
  | "catering_form_submit"
  | "newsletter_signup"
  | "contact_form_submit";

export function trackEvent(name: TrackEventName, properties?: Record<string, string>) {
  if (typeof window === "undefined") return;

  const payload = { name, ...properties };

  if (typeof window.va === "function") {
    window.va("event", payload);
  }
}

declare global {
  interface Window {
    va?: (action: string, payload: Record<string, string>) => void;
  }
}
