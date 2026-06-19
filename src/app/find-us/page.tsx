import { MapPin, Phone, Instagram, Navigation } from "lucide-react";
import { business } from "@/data/business";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteImage } from "@/components/SiteImage";
import { ScheduleCTA } from "@/components/ScheduleCTA";
import { InstagramCTA } from "@/components/InstagramCTA";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ExternalLinkCard } from "@/components/ExternalLinkCard";
import { SprinklePattern } from "@/components/SprinklePattern";

export const metadata = createPageMetadata({
  title: "Find the Truck",
  description:
    "Find where iScream Yogurt is serving around Sacramento. Check the live schedule on StreetFoodFinder or follow @iscreamyogurt on Instagram.",
  path: "/find-us",
});

export default function FindUsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-teal py-12 text-white sm:py-16">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <SectionHeading
              title="Find the Truck"
              description="iScream Yogurt is mobile, so the best place to catch us changes throughout the week."
              titleAs="h1"
              className="text-white [&_p]:text-white/90"
            />
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-lift">
              <SiteImage
                imageKey="truckAngleCloseup"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                rounded="3xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-14 sm:py-20">
        <SprinklePattern className="opacity-15" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-2xl border-2 border-brand-teal/25 bg-brand-teal/5 p-6 shadow-soft sm:p-8">
              <h2 className="text-xl font-extrabold text-brand-navy">Live Schedule</h2>
              <p className="mt-3 font-semibold text-brand-navy/80">
                Our schedule changes throughout the week.
              </p>
              <p className="mt-2 text-sm text-brand-navy/70">
                Today&apos;s location may change due to events, weather, or private bookings.
                Confirm the latest stop before you head out.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <ScheduleCTA />
                <InstagramCTA variant="compact" />
              </div>
              <a
                href={business.phone.href}
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-teal"
              >
                <Phone className="h-4 w-4 text-brand-teal" aria-hidden="true" />
                Call {business.phone.display}
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
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

            <p className="mt-8 flex items-start justify-center gap-2 text-center text-brand-navy/75">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
              Serving {business.serviceArea}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-brand-pink/10 py-14">
        <Container className="text-center">
          <SectionHeading
            title="Want the Truck to Come to You?"
            description="Planning a party, school event, company gathering, or community celebration? Ask about bringing iScream Yogurt directly to your event."
            align="center"
          />
          <PrimaryButton href="/catering" className="mt-8" trackAs="book_truck_click">
            Book Your Event
          </PrimaryButton>
        </Container>
      </section>
    </>
  );
}
