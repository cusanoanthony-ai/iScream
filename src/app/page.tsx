import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";
import { productPreview } from "@/data/menu";
import { eventTypes, howItWorksSteps } from "@/data/events";
import { galleryImages } from "@/data/images";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PrimaryButton, SecondaryButton } from "@/components/PrimaryButton";
import { BrandImage } from "@/components/BrandImage";
import { ProductCard } from "@/components/ProductCard";
import { EventTypeCard } from "@/components/EventTypeCard";
import { InstagramCTA } from "@/components/InstagramCTA";
import { ScheduleCTA } from "@/components/ScheduleCTA";
import { FutureStorefrontCTA } from "@/components/FutureStorefrontCTA";
import { SprinklePattern } from "@/components/SprinklePattern";

export const metadata = createPageMetadata({
  title: "I Scream Yogurt | Sacramento Frozen Yogurt Truck & Catering",
  description:
    "Find I Scream Yogurt around Sacramento or book the mobile frozen yogurt truck for parties, school events, company gatherings, and community celebrations.",
  path: "/",
});

export default function HomePage() {
  const homepageEventTypes = eventTypes.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-teal pb-16 pt-10 text-white sm:pb-20 sm:pt-14">
        <SprinklePattern variant="dark" className="opacity-20" />
        <Container className="relative">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
                Mobile dessert truck • Catering available
              </p>
              <h1 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Sacramento&apos;s Mobile Frozen Yogurt Experience
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                {business.secondaryDescription.replace(/—/g, "—")}
              </p>
              <p className="accent-handwritten mt-3 text-lg text-brand-cream sm:text-xl">
                {business.tagline}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryButton href="/catering" trackAs="book_truck_click">
                  Book the Truck
                </PrimaryButton>
                <SecondaryButton href="/find-us" className="border-white bg-transparent text-white hover:bg-white hover:text-brand-teal">
                  Find the Truck
                </SecondaryButton>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold">
                <a href={business.phone.href} className="inline-flex items-center gap-1.5 hover:text-brand-coral">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {business.phone.display}
                </a>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {business.location.display}
                </span>
              </div>
              <div className="mt-4">
                <InstagramCTA variant="compact" className="!bg-brand-pink hover:!bg-brand-coral" />
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
                <BrandImage imageKey="heroTruck" fill priority sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden h-28 w-28 overflow-hidden rounded-2xl border-4 border-white shadow-card sm:block lg:-left-8">
                <BrandImage imageKey="froyoCup" fill sizes="112px" rounded="xl" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Product Preview */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Frozen Yogurt Made Fun"
            description="Classic favorites, specialty creations, and plenty of ways to make your dessert your own."
            align="center"
            className="mb-10"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {productPreview.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-semibold text-brand-navy/60">
            Menu items and flavors may vary by event and availability.
          </p>
        </Container>
      </section>

      {/* Catering */}
      <section className="relative overflow-hidden bg-brand-cream py-16 sm:py-20">
        <SprinklePattern className="opacity-15" />
        <Container className="relative">
          <SectionHeading
            title="We Cater Sweet Memories"
            description="From birthday parties to company events, I Scream Yogurt brings the fun—and the frozen yogurt—to you."
            align="center"
            className="mb-10"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homepageEventTypes.map((event) => (
              <EventTypeCard key={event.title} {...event} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <PrimaryButton href="/catering" trackAs="book_truck_click">
              Book Your Event
            </PrimaryButton>
            <p className="mt-4 text-lg font-semibold text-brand-navy/70">
              We bring the chill. You bring the guests.
            </p>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Bringing the Truck Is Easy" align="center" className="mb-12" />
          <ol className="grid gap-8 md:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <li key={step.step} className="relative rounded-2xl bg-white p-6 shadow-soft">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal text-lg font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-brand-navy/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Find the Truck */}
      <section className="bg-brand-teal py-16 text-white sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Catch Us Around Sacramento"
                description="Our schedule changes as we visit events and locations throughout the area. Check the latest schedule before heading out."
                titleAs="h2"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <ScheduleCTA />
                <InstagramCTA variant="compact" className="!bg-white !text-brand-teal hover:!bg-brand-cream" />
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-card">
              <BrandImage imageKey="truckAtEvent" fill sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="The I Scream Experience" align="center" className="mb-10" />
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {galleryImages.map((key, index) => (
              <div
                key={key}
                className={`relative overflow-hidden rounded-2xl shadow-soft ${
                  index === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:min-h-[320px]" : "aspect-square"
                }`}
              >
                <BrandImage
                  imageKey={key}
                  fill
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 40vw" : "(max-width: 768px) 50vw, 20vw"}
                />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <InstagramCTA />
          </div>
        </Container>
      </section>

      {/* Future Storefront */}
      <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20">
        <SprinklePattern variant="dark" className="opacity-10" />
        <Container className="relative text-center">
          <SectionHeading
            title="The Truck Is Just the Beginning"
            description="I Scream Yogurt is building something bigger for Sacramento. Every visit, follow, booking, and shared dessert helps move the dream of a future brick-and-mortar frozen yogurt destination forward."
            align="center"
            className="mx-auto text-white [&_p]:text-white/80"
            titleAs="h2"
          />
          <p className="mt-6 text-lg font-bold text-brand-coral">
            More flavors. More memories. One future home.
          </p>
          <div className="mt-8">
            <FutureStorefrontCTA />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-brand-coral/10 via-brand-pink/10 to-brand-teal/10 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold text-brand-navy sm:text-4xl">
              Ready to Make Your Event a Little Sweeter?
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PrimaryButton href="/catering" trackAs="book_truck_click">
                Book the Truck
              </PrimaryButton>
              <SecondaryButton href={business.phone.href} trackAs="call_click">
                Call {business.phone.display}
              </SecondaryButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
