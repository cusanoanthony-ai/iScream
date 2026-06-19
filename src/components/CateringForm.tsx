"use client";

import { useState } from "react";
import {
  cateringFormSchema,
  type CateringFormData,
} from "@/lib/validation";
import { cateringEventTypes, hearAboutOptions } from "@/data/events";
import { trackEvent } from "@/lib/analytics";
import { PrimaryButton } from "./PrimaryButton";
import { FormStatus } from "./FormStatus";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  eventType: cateringEventTypes[0] ?? "",
  eventDate: "",
  startTime: "",
  location: "",
  guestCount: "",
  hearAbout: hearAboutOptions[0] ?? "",
  details: "",
  consent: false,
  website: "",
};

export function CateringForm() {
  const [form, setForm] = useState(initialState);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[key as string];
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setMessage("");
    setFieldErrors({});

    const payload = {
      ...form,
      consent: form.consent ? (true as const) : (false as unknown as true),
    };

    const parsed = cateringFormSchema.safeParse(payload);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const path = issue.path[0]?.toString();
        if (path && !errors[path]) errors[path] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/catering", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await response.json()) as {
        success: boolean;
        message: string;
        fieldErrors?: Record<string, string>;
      };

      if (data.success) {
        setStatus("success");
        setMessage(data.message);
        setForm(initialState);
        trackEvent("catering_form_submit");
      } else {
        setStatus("error");
        setMessage(data.message);
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border-2 border-brand-navy/10 bg-white px-4 py-3 text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-teal";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {Object.keys(fieldErrors).length > 0 && (
        <div role="alert" className="rounded-xl bg-brand-coral/10 px-4 py-3 text-sm font-semibold text-brand-navy">
          Please correct the highlighted fields below.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="catering-fullName" className="mb-1 block text-sm font-bold text-brand-navy">
            Full name <span className="text-brand-coral">*</span>
          </label>
          <input id="catering-fullName" value={form.fullName} onChange={(e) => updateField("fullName", e.target.value)} className={inputClass} />
          {fieldErrors.fullName && <p className="mt-1 text-xs font-semibold text-brand-coral">{fieldErrors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="catering-email" className="mb-1 block text-sm font-bold text-brand-navy">
            Email <span className="text-brand-coral">*</span>
          </label>
          <input id="catering-email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} className={inputClass} />
          {fieldErrors.email && <p className="mt-1 text-xs font-semibold text-brand-coral">{fieldErrors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="catering-phone" className="mb-1 block text-sm font-bold text-brand-navy">
            Phone <span className="text-brand-coral">*</span>
          </label>
          <input id="catering-phone" type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} className={inputClass} />
          {fieldErrors.phone && <p className="mt-1 text-xs font-semibold text-brand-coral">{fieldErrors.phone}</p>}
        </div>
        <div>
          <label htmlFor="catering-organization" className="mb-1 block text-sm font-bold text-brand-navy">
            Organization or company <span className="text-brand-navy/50">(optional)</span>
          </label>
          <input id="catering-organization" value={form.organization} onChange={(e) => updateField("organization", e.target.value)} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="catering-eventType" className="mb-1 block text-sm font-bold text-brand-navy">
            Event type <span className="text-brand-coral">*</span>
          </label>
          <select id="catering-eventType" value={form.eventType} onChange={(e) => updateField("eventType", e.target.value)} className={inputClass}>
            {cateringEventTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {fieldErrors.eventType && <p className="mt-1 text-xs font-semibold text-brand-coral">{fieldErrors.eventType}</p>}
        </div>
        <div>
          <label htmlFor="catering-hearAbout" className="mb-1 block text-sm font-bold text-brand-navy">
            How did you hear about us? <span className="text-brand-coral">*</span>
          </label>
          <select id="catering-hearAbout" value={form.hearAbout} onChange={(e) => updateField("hearAbout", e.target.value)} className={inputClass}>
            {hearAboutOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="catering-eventDate" className="mb-1 block text-sm font-bold text-brand-navy">
            Requested event date <span className="text-brand-coral">*</span>
          </label>
          <input id="catering-eventDate" type="date" value={form.eventDate} onChange={(e) => updateField("eventDate", e.target.value)} className={inputClass} />
          {fieldErrors.eventDate && <p className="mt-1 text-xs font-semibold text-brand-coral">{fieldErrors.eventDate}</p>}
        </div>
        <div>
          <label htmlFor="catering-startTime" className="mb-1 block text-sm font-bold text-brand-navy">
            Approximate start time <span className="text-brand-coral">*</span>
          </label>
          <input id="catering-startTime" type="time" value={form.startTime} onChange={(e) => updateField("startTime", e.target.value)} className={inputClass} />
          {fieldErrors.startTime && <p className="mt-1 text-xs font-semibold text-brand-coral">{fieldErrors.startTime}</p>}
        </div>
        <div>
          <label htmlFor="catering-guestCount" className="mb-1 block text-sm font-bold text-brand-navy">
            Estimated guest count <span className="text-brand-coral">*</span>
          </label>
          <input id="catering-guestCount" value={form.guestCount} onChange={(e) => updateField("guestCount", e.target.value)} className={inputClass} placeholder="e.g. 50" />
          {fieldErrors.guestCount && <p className="mt-1 text-xs font-semibold text-brand-coral">{fieldErrors.guestCount}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="catering-location" className="mb-1 block text-sm font-bold text-brand-navy">
          Event location or city <span className="text-brand-coral">*</span>
        </label>
        <input id="catering-location" value={form.location} onChange={(e) => updateField("location", e.target.value)} className={inputClass} />
        {fieldErrors.location && <p className="mt-1 text-xs font-semibold text-brand-coral">{fieldErrors.location}</p>}
      </div>

      <div>
        <label htmlFor="catering-details" className="mb-1 block text-sm font-bold text-brand-navy">
          Event details <span className="text-brand-coral">*</span>
        </label>
        <textarea id="catering-details" rows={5} value={form.details} onChange={(e) => updateField("details", e.target.value)} className={inputClass} placeholder="Tell us about your event, setup needs, and anything else we should know." />
        {fieldErrors.details && <p className="mt-1 text-xs font-semibold text-brand-coral">{fieldErrors.details}</p>}
      </div>

      <label className="flex items-start gap-3 text-sm text-brand-navy/80">
        <input type="checkbox" checked={form.consent} onChange={(e) => updateField("consent", e.target.checked)} className="mt-1 h-5 w-5 rounded border-brand-navy/20 text-brand-teal focus:ring-brand-teal" />
        <span>
          I understand that submitting this form is a request and does not confirm a booking. <span className="text-brand-coral">*</span>
        </span>
      </label>
      {fieldErrors.consent && <p className="text-xs font-semibold text-brand-coral">{fieldErrors.consent}</p>}

      <input type="text" name="website" value={form.website} onChange={(e) => updateField("website", e.target.value)} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <p className="text-sm text-brand-navy/70">
        Submitting this form does not guarantee availability. The I Scream Yogurt team will follow up to discuss your event.
      </p>

      <PrimaryButton type="submit" loading={loading} disabled={loading}>
        Request Event Availability
      </PrimaryButton>
      <FormStatus type={status} message={message} />
    </form>
  );
}
