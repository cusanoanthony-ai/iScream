import { MapPin, Phone, Mail, Instagram, Facebook, Navigation } from "lucide-react";
import { business } from "@/data/business";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { ExternalLinkCard } from "@/components/ExternalLinkCard";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact I Scream Yogurt by phone, email, or form. Follow us on Instagram and StreetFoodFinder for the latest truck schedule.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-teal py-14 text-white sm:py-18">
        <Container>
          <SectionHeading
            title="Let's Make Something Sweet Happen"
            titleAs="h1"
            className="text-white"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-xl font-bold text-brand-navy">Get in Touch</h2>
              <div className="space-y-4">
                <a href={business.phone.href} className="flex min-h-12 items-center gap-3 font-bold text-brand-navy hover:text-brand-teal">
                  <Phone className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                  {business.phone.display}
                </a>
                <a href={business.email.href} className="flex min-h-12 items-center gap-3 text-brand-navy hover:text-brand-teal">
                  <Mail className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                  {business.email.display}
                </a>
                <p className="flex items-start gap-3 text-brand-navy/75">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
                  {business.location.display}
                </p>
              </div>

              <p className="text-sm text-brand-navy/70">{business.hours}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <ExternalLinkCard
                  href={business.social.instagram.url}
                  title="Instagram"
                  description={business.social.instagram.handle}
                  icon={<Instagram className="h-5 w-5" />}
                  trackAs="instagram_click"
                />
                <ExternalLinkCard
                  href={business.social.facebook.url}
                  title="Facebook"
                  description="Follow our page"
                  icon={<Facebook className="h-5 w-5" />}
                />
                <ExternalLinkCard
                  href={business.social.streetFoodFinder.url}
                  title="StreetFoodFinder"
                  description="Live truck schedule"
                  icon={<Navigation className="h-5 w-5" />}
                  trackAs="streetfoodfinder_click"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-6 shadow-soft sm:p-8">
                <h2 className="text-xl font-bold text-brand-navy">Send a Message</h2>
                <p className="mt-2 text-sm text-brand-navy/70">
                  For event bookings, please use our{" "}
                  <a href="/catering" className="font-bold text-brand-teal hover:text-brand-pink">
                    catering request form
                  </a>
                  .
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
