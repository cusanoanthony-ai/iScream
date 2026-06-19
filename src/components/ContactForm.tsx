"use client";

import { useState } from "react";
import Link from "next/link";
import {
  contactFormSchema,
  contactReasons,
  type ContactFormData,
} from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";
import { PrimaryButton } from "./PrimaryButton";
import { FormStatus } from "./FormStatus";

const initialState: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  reason: "General Question",
  message: "",
  consent: true as true,
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<Omit<ContactFormData, "consent"> & { consent: boolean }>({
    ...initialState,
    consent: false,
  });
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

    const parsed = contactFormSchema.safeParse(form);
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
      const response = await fetch("/api/contact", {
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
        setForm({ ...initialState, consent: false });
        trackEvent("contact_form_submit");
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
          <label htmlFor="contact-name" className="mb-1 block text-sm font-bold text-brand-navy">
            Name <span className="text-brand-coral">*</span>
          </label>
          <input
            id="contact-name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClass}
            aria-invalid={fieldErrors.name ? "true" : undefined}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
          />
          {fieldErrors.name && (
            <p id="contact-name-error" className="mt-1 text-xs font-semibold text-brand-coral">
              {fieldErrors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1 block text-sm font-bold text-brand-navy">
            Email <span className="text-brand-coral">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass}
            aria-invalid={fieldErrors.email ? "true" : undefined}
          />
          {fieldErrors.email && (
            <p className="mt-1 text-xs font-semibold text-brand-coral">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="mb-1 block text-sm font-bold text-brand-navy">
            Phone <span className="text-brand-navy/50">(optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-reason" className="mb-1 block text-sm font-bold text-brand-navy">
            Reason for contacting <span className="text-brand-coral">*</span>
          </label>
          <select
            id="contact-reason"
            value={form.reason}
            onChange={(e) =>
              updateField("reason", e.target.value as ContactFormData["reason"])
            }
            className={inputClass}
          >
            {contactReasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
          {form.reason === "Catering" && (
            <p className="mt-2 text-sm text-brand-navy/70">
              For event bookings, please use our{" "}
              <Link href="/catering" className="font-bold text-brand-teal hover:text-brand-pink">
                full catering request form
              </Link>
              .
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-bold text-brand-navy">
          Message <span className="text-brand-coral">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClass}
        />
        {fieldErrors.message && (
          <p className="mt-1 text-xs font-semibold text-brand-coral">{fieldErrors.message}</p>
        )}
      </div>

      <label className="flex items-start gap-3 text-sm text-brand-navy/80">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => updateField("consent", e.target.checked)}
          className="mt-1 h-5 w-5 rounded border-brand-navy/20 text-brand-teal focus:ring-brand-teal"
        />
        <span>
          I agree to be contacted about my message. <span className="text-brand-coral">*</span>
        </span>
      </label>
      {fieldErrors.consent && (
        <p className="text-xs font-semibold text-brand-coral">{fieldErrors.consent}</p>
      )}

      <input type="text" name="website" value={form.website} onChange={(e) => updateField("website", e.target.value)} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <PrimaryButton type="submit" loading={loading} disabled={loading}>
        Send Message
      </PrimaryButton>
      <FormStatus type={status} message={message} />
    </form>
  );
}
