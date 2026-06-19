"use client";

import { useState } from "react";
import { newsletterFormSchema } from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { PrimaryButton } from "./PrimaryButton";
import { FormStatus } from "./FormStatus";

export function NewsletterForm({ variant = "default" }: { variant?: "default" | "light" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setMessage("");
    setFieldError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get("email") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const parsed = newsletterFormSchema.safeParse(payload);
    if (!parsed.success) {
      setFieldError(parsed.error.issues[0]?.message ?? "Please check your email.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await response.json()) as { success: boolean; message: string };

      if (data.success) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
        trackEvent("newsletter_signup");
      } else {
        setStatus("error");
        setMessage(data.message);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  const isLight = variant === "light";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      <div>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={cn(
            "w-full rounded-full border-2 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal",
            isLight
              ? "border-white/30 bg-white/10 text-white placeholder:text-white/60"
              : "border-brand-navy/10 bg-white text-brand-navy placeholder:text-brand-navy/40 focus:border-brand-teal",
          )}
          aria-invalid={fieldError ? "true" : undefined}
          aria-describedby={fieldError ? "newsletter-email-error" : undefined}
        />
        {fieldError && (
          <p id="newsletter-email-error" className="mt-1 text-xs font-semibold text-brand-coral">
            {fieldError}
          </p>
        )}
      </div>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <PrimaryButton
        type="submit"
        loading={loading}
        disabled={loading}
        className={cn("w-full", isLight && "!bg-brand-navy hover:!bg-brand-navy/90")}
      >
        Join the List
      </PrimaryButton>
      <FormStatus type={status} message={message} />
    </form>
  );
}
