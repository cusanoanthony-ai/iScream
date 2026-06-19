import { z } from "zod";
import { cateringEventTypes, hearAboutOptions } from "@/data/events";

const eventTypeValues = cateringEventTypes as [string, ...string[]];
const hearAboutValues = hearAboutOptions as [string, ...string[]];

const trimmedString = (max: number) =>
  z
    .string()
    .trim()
    .min(1, "This field is required.")
    .max(max, `Must be ${max} characters or fewer.`);

const optionalTrimmedString = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Must be ${max} characters or fewer.`)
    .optional()
    .or(z.literal(""));

export const honeypotSchema = z
  .string()
  .max(0, "Invalid submission.")
  .optional()
  .or(z.literal(""));

export const contactReasons = [
  "General Question",
  "Catering",
  "Event Partnership",
  "Location Suggestion",
  "Media or Collaboration",
  "Other",
] as const;

export const contactFormSchema = z.object({
  name: trimmedString(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  phone: optionalTrimmedString(30),
  reason: z.enum(contactReasons, {
    errorMap: () => ({ message: "Please select a reason for contacting." }),
  }),
  message: trimmedString(2000),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Please confirm you agree to be contacted about your message.",
    }),
  }),
  website: honeypotSchema,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const cateringFormSchema = z.object({
  fullName: trimmedString(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  phone: trimmedString(30),
  organization: optionalTrimmedString(150),
  eventType: z.enum(eventTypeValues, {
    errorMap: () => ({ message: "Please select an event type." }),
  }),
  eventDate: trimmedString(20),
  startTime: trimmedString(20),
  location: trimmedString(200),
  guestCount: z
    .string()
    .trim()
    .min(1, "Please provide an estimated guest count.")
    .max(20),
  hearAbout: z.enum(hearAboutValues, {
    errorMap: () => ({ message: "Please tell us how you heard about us." }),
  }),
  details: trimmedString(3000),
  consent: z.literal(true, {
    errorMap: () => ({
      message:
        "Please acknowledge that submitting this form is a request and does not confirm a booking.",
    }),
  }),
  website: honeypotSchema,
});

export type CateringFormData = z.infer<typeof cateringFormSchema>;

export const newsletterFormSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  website: honeypotSchema,
});

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;
