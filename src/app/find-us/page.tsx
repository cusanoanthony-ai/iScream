import { MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BrandImage } from "@/components/BrandImage";
import { ScheduleCTA } from "@/components/ScheduleCTA";
import { InstagramCTA } from "@/components/InstagramCTA";
import { PrimaryButton, SecondaryButton } from "@/components/PrimaryButton";
import { ExternalLinkCard } from "@/components/ExternalLinkCard";
import { Instagram, Navigation } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Find the Truck",
  description:
    "Find where I Scream Yogurt is serving around Sacramento. Check the live schedule on StreetFoodFinder or follow @iscreamyogurt on Instagram.",
  path: "/find-us",
});

export default function FindUsPage() {
  return (
    <>
      <section className="bg-brand-teal py-14 text-white sm:py-18">
        <Container>
          <SectionHeading
            title="Find the Truck"
            description="I Scream Yogurt is mobile, so the best place to catch us changes throughout the week."
            titleAs="h1"
            className="text-white [&_p]:text-white/85"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <ExternalLinkCard
                  href={business.social.streetFoodFinder.url}
                  title="StreetFoodFinder"
                  description="View the live truck schedule and upcoming stops."
                  icon={<Navigation className="h-5 w-5" />}
                  trackAs="streetfoodfinder_click"
                />
                <ExternalLinkCard
                  href={business.social.instagram.url}
                  title="Instagram"
                  description="Follow for daily locations and updates."
                  icon={<Instagram className="h-5 w-5" />}
                  trackAs="instagram_click"
                />
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-soft">
                <h2 className="text-lg font-bold text-brand-navy">Before You Head Out</h2>
                <p className="mt-3 text-brand-navy/75">
                  Today&apos;s location may change due to events, weather, or private bookings.
                  Confirm the latest stop through StreetFoodFinder or Instagram before traveling.
                </p>
                <div className="mt-6 space-y-3">
                  <ScheduleCTA />
                  <InstagramCTA variant="compact" />
                </div>
              </div>

              <div className="space-y-3 text-brand-navy">
                <a href={business.phone.href} className="flex min-h-12 items-center gap-2 font-bold hover:text-brand-teal">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {business.phone.display}
                </a>
                <p className="flex items-start gap-2 text-brand-navy/75">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  Serving {business.serviceArea}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-card">
                <BrandImage imageKey="truckSide" fill sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="rounded-2xl border-2 border-dashed border-brand-teal/30 bg-brand-teal/5 p-6 text-center">
                <h2 className="font-bold text-brand-navy">Upcoming Locations</h2>
                <p className="mt-2 text-sm text-brand-navy/70">
                  Check StreetFoodFinder or Instagram for the latest schedule. We do not publish
                  unverified location details on this site.
                </p>
                <SecondaryButton
                  href={business.social.streetFoodFinder.url}
                  external
                  trackAs="streetfoodfinder_click"
                  className="mt-4"
                >
                  View Live Schedule
                </SecondaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream py-16">
        <Container className="text-center">
          <SectionHeading
            title="Want the Truck to Come to You?"
            description="Planning a party, school event, company gathering, or community celebration? Ask about bringing I Scream Yogurt directly to your event."
            align="center"
          />
          <PrimaryButton href="/catering" className="mt-8" trackAs="book_truck_click">
            Request Catering
          </PrimaryButton>
        </Container>
      </section>
    </>
  );
}
