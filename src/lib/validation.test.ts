import { describe, it, expect } from "vitest";
import {
  contactFormSchema,
  cateringFormSchema,
  newsletterFormSchema,
} from "@/lib/validation";

describe("contact form validation", () => {
  const validContact = {
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "",
    reason: "General Question" as const,
    message: "Hello, I have a question about your truck.",
    consent: true as const,
    website: "",
  };

  it("accepts valid contact submission", () => {
    const result = contactFormSchema.safeParse(validContact);
    expect(result.success).toBe(true);
  });

  it("rejects missing name", () => {
    const result = contactFormSchema.safeParse({ ...validContact, name: "" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactFormSchema.safeParse({
      ...validContact,
      email: "not-an-email",
    });
    expect(result.success).toBe(false);
  });

  it("rejects without consent", () => {
    const result = contactFormSchema.safeParse({
      ...validContact,
      consent: false,
    });
    expect(result.success).toBe(false);
  });

  it("rejects honeypot fill", () => {
    const result = contactFormSchema.safeParse({
      ...validContact,
      website: "spam",
    });
    expect(result.success).toBe(false);
  });
});

describe("catering form validation", () => {
  const validCatering = {
    fullName: "Jane Doe",
    email: "jane@example.com",
    phone: "209-555-0100",
    organization: "Sac School",
    eventType: "Birthday Parties",
    eventDate: "2026-08-15",
    startTime: "14:00",
    location: "Sacramento, CA",
    guestCount: "50",
    hearAbout: "Instagram",
    details: "Outdoor birthday party in the backyard.",
    consent: true as const,
    website: "",
  };

  it("accepts valid catering submission", () => {
    const result = cateringFormSchema.safeParse(validCatering);
    expect(result.success).toBe(true);
  });

  it("rejects missing event date", () => {
    const result = cateringFormSchema.safeParse({
      ...validCatering,
      eventDate: "",
    });
    expect(result.success).toBe(false);
  });

  it("rejects missing phone", () => {
    const result = cateringFormSchema.safeParse({
      ...validCatering,
      phone: "",
    });
    expect(result.success).toBe(false);
  });

  it("rejects without booking consent", () => {
    const result = cateringFormSchema.safeParse({
      ...validCatering,
      consent: false,
    });
    expect(result.success).toBe(false);
  });
});

describe("newsletter form validation", () => {
  it("accepts valid email", () => {
    const result = newsletterFormSchema.safeParse({
      email: "fan@example.com",
      website: "",
    });
    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = newsletterFormSchema.safeParse({
      email: "bad",
      website: "",
    });
    expect(result.success).toBe(false);
  });
});
