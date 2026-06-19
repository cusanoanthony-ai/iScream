import { MapPin, Phone, Mail, Instagram, Facebook, Navigation } from "lucide-react";
import { business } from "@/data/business";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { ExternalLinkCard } from "@/components/ExternalLinkCard";
import { SiteImage } from "@/components/SiteImage";
import { PrimaryButton } from "@/components/PrimaryButton";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact I Scream Yogurt by phone, email, or form. Follow us on Instagram and StreetFoodFinder for the latest truck schedule.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <SectionHeading
              title="Let's Make Something Sweet Happen"
              description="Questions, ideas, or just want to say hi? Reach out — and for events, head to our catering page."
              titleAs="h1"
            />
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl shadow-card lg:max-w-none">
              <SiteImage
                imageKey="berryCookieFroyoTruck"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                rounded="3xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-xl font-bold text-brand-navy">Get in Touch</h2>
              <div className="space-y-3">
                <a
                  href={business.phone.href}
                  className="flex min-h-12 items-center gap-3 rounded-xl bg-brand-pink/10 px-4 font-bold text-brand-navy transition-colors hover:bg-brand-pink/15"
                >
                  <Phone className="h-5 w-5 text-brand-pink" aria-hidden="true" />
                  {business.phone.display}
                </a>
                <a
                  href={business.email.href}
                  className="flex min-h-12 items-center gap-3 rounded-xl bg-white px-4 text-brand-navy shadow-soft transition-colors hover:text-brand-teal"
                >
                  <Mail className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                  {business.email.display}
                </a>
                <p className="flex items-start gap-3 px-1 text-brand-navy/75">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
                  {business.location.display}
                </p>
              </div>
              <p className="text-sm text-brand-navy/70">{business.hours}</p>
              <div className="grid gap-3 sm:grid-cols-2">
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
              <PrimaryButton href="/catering" trackAs="book_truck_click" className="w-full sm:w-auto">
                Book Your Event
              </PrimaryButton>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-brand-navy/5 bg-white p-6 shadow-card sm:p-8">
                <h2 className="text-xl font-bold text-brand-navy">Send a Message</h2>
                <p className="mt-2 text-sm text-brand-navy/70">
                  For event bookings, please use our{" "}
                  <a href="/catering" className="font-bold text-brand-teal hover:text-brand-pink">
                    catering request form
                  </a>
                  . If online messaging is unavailable, call {business.phone.display} or message{" "}
                  {business.social.instagram.handle} on Instagram.
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
