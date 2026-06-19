import { MapPin, Phone, MessageCircle, Calendar, Truck } from "lucide-react";
import { business } from "@/data/business";
import { productPreview } from "@/data/menu";
import { homepageCateringEvents, howItWorksSteps } from "@/data/events";
import { galleryManifest } from "@/data/images";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PrimaryButton, SecondaryButton } from "@/components/PrimaryButton";
import { SiteImage } from "@/components/SiteImage";
import { ProductCard } from "@/components/ProductCard";
import { InstagramCTA } from "@/components/InstagramCTA";
import { ScheduleCTA } from "@/components/ScheduleCTA";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SprinklePattern } from "@/components/SprinklePattern";

export const metadata = createPageMetadata({
  title: "I Scream Yogurt | Sacramento Frozen Yogurt Truck & Catering",
  description:
    "Find I Scream Yogurt around Sacramento or book the mobile frozen yogurt truck for parties, school events, company gatherings, and community celebrations.",
  path: "/",
});

const stepIcons = [MessageCircle, Calendar, Truck];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden pb-12 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
        <SprinklePattern className="opacity-25" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="order-2 lg:order-1">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-teal sm:text-sm">
                Mobile dessert truck • Catering available
              </p>
              <h1 className="text-balance leading-[1.05]">
                <span className="block text-3xl font-extrabold text-brand-navy sm:text-4xl lg:text-5xl">
                  Sacramento&apos;s
                </span>
                <span className="block text-3xl font-extrabold text-brand-coral sm:text-4xl lg:text-5xl">
                  Mobile Frozen
                </span>
                <span className="block text-3xl font-extrabold text-brand-teal sm:text-4xl lg:text-5xl">
                  Yogurt Experience
                </span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-navy/80 sm:text-lg">
                {business.secondaryDescription}
              </p>
              <p className="accent-handwritten mt-3 text-lg sm:text-xl">{business.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryButton href="/catering" trackAs="book_truck_click">
                  Book the Truck
                </PrimaryButton>
                <SecondaryButton href="/find-us">Find the Truck</SecondaryButton>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <InstagramCTA variant="compact" className="!py-2.5 !text-sm" />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-bold text-brand-navy/80">
                <a href={business.phone.href} className="inline-flex items-center gap-1.5 hover:text-brand-coral">
                  <Phone className="h-4 w-4 text-brand-teal" aria-hidden="true" />
                  {business.phone.display}
                </a>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-brand-teal" aria-hidden="true" />
                  {business.location.display}
                </span>
              </div>
            </div>

            <div className="relative order-1 mx-auto w-full max-w-xl lg:order-2 lg:max-w-none">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-white shadow-lift sm:aspect-[4/3]">
                <SiteImage
                  imageKey="truckSideProfile"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  rounded="3xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-2 z-10 w-[38%] max-w-[180px] overflow-hidden rounded-2xl border-4 border-white shadow-card sm:-left-6 sm:max-w-[200px]">
                <div className="relative aspect-square">
                  <SiteImage
                    imageKey="fruityCerealShakeTruck"
                    alt=""
                    fill
                    sizes="200px"
                    rounded="xl"
                  />
                </div>
              </div>
              <div
                className="absolute -right-2 -top-2 h-16 w-16 rounded-full bg-brand-pink/20 blur-xl sm:h-24 sm:w-24"
                aria-hidden="true"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Product Preview */}
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <SectionHeading
            title="Frozen Yogurt Made Fun"
            description="Classic favorites, specialty creations, and plenty of ways to make your dessert your own."
            align="center"
            className="mb-10"
          />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {productPreview.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-semibold text-brand-navy/55">
            Menu items and flavors may vary by event and availability.
          </p>
        </Container>
      </section>

      {/* Catering */}
      <section className="relative overflow-hidden bg-brand-teal py-14 text-white sm:py-20">
        <SprinklePattern variant="dark" className="opacity-15" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift lg:order-1">
              <SiteImage
                imageKey="truckServingCustomers"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                rounded="3xl"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                We Cater Sweet Memories
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                From birthday parties to company events, I Scream Yogurt brings the fun—and the
                frozen yogurt—to you.
              </p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {homepageCateringEvents.map((event) => (
                  <li
                    key={event}
                    className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur-sm"
                  >
                    {event}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PrimaryButton href="/catering" trackAs="book_truck_click">
                  Book Your Event
                </PrimaryButton>
              </div>
              <p className="mt-4 text-lg font-bold text-brand-coral">
                We bring the chill. You bring the guests.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading title="Bringing the Truck Is Easy" align="center" className="mb-12" />
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-brand-teal/20 md:block" aria-hidden="true" />
            <ol className="grid gap-8 md:grid-cols-3">
              {howItWorksSteps.map((step) => {
                const Icon = stepIcons[step.step - 1] ?? MessageCircle;
                return (
                  <li key={step.step} className="relative text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal text-white shadow-card">
                      <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-brand-coral text-sm font-bold">
                        {step.step}
                      </span>
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{step.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </section>

      {/* Find the Truck */}
      <section className="bg-brand-cream py-14 sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Catch Us Around Sacramento"
                description="Our schedule changes as we visit events and locations throughout the area. Check the latest schedule before heading out."
              />
              <div className="mt-6 space-y-4">
                <ScheduleCTA showNote />
                <InstagramCTA variant="compact" />
              </div>
              <a
                href={business.phone.href}
                className="mt-6 inline-flex items-center gap-2 font-bold text-brand-navy hover:text-brand-teal"
              >
                <Phone className="h-5 w-5 text-brand-teal" aria-hidden="true" />
                {business.phone.display}
              </a>
            </div>
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl shadow-card">
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

      {/* Gallery */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading title="The I Scream Experience" align="center" className="mb-10" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryManifest.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl shadow-soft ${
                  index === 0
                    ? "col-span-2 row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[280px]"
                    : index === 5
                      ? "col-span-2 aspect-[2/1] md:col-span-1 md:aspect-square"
                      : "aspect-square"
                }`}
              >
                <SiteImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 40vw"
                      : "(max-width: 768px) 50vw, 20vw"
                  }
                  objectPosition={image.objectPosition}
                  className="image-hover-zoom"
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
      <section className="relative overflow-hidden bg-brand-navy py-14 text-white sm:py-20">
        <SprinklePattern variant="dark" className="opacity-10" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
              <SiteImage
                imageKey="purpleFroyoTruck"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                rounded="3xl"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-dashed border-white/20"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">The Truck Is Just the Beginning</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                I Scream Yogurt is building something bigger for Sacramento. Every visit, follow,
                booking, and shared dessert helps move the dream of a future brick-and-mortar frozen
                yogurt destination forward.
              </p>
              <p className="mt-4 text-xl font-bold text-brand-coral">
                More flavors. More memories. One future home.
              </p>
              <div className="mt-8 max-w-md rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="font-bold">Join the Journey</h3>
                <p className="mt-1 text-sm text-white/80">
                  Follow along and get updates as the I Scream Yogurt community grows.
                </p>
                <div className="mt-4">
                  <NewsletterForm variant="light" />
                </div>
                <div className="mt-4">
                  <InstagramCTA variant="compact" className="!bg-brand-pink" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-pink py-14 text-white sm:py-16">
        <Container className="text-center">
          <h2 className="text-balance text-3xl font-extrabold sm:text-4xl">
            Ready to Make Your Event a Little Sweeter?
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PrimaryButton
              href="/catering"
              trackAs="book_truck_click"
              className="!bg-white !text-brand-pink hover:!bg-brand-cream"
            >
              Book the Truck
            </PrimaryButton>
            <SecondaryButton
              href={business.phone.href}
              trackAs="call_click"
              className="!border-white !bg-transparent !text-white hover:!bg-white hover:!text-brand-navy"
            >
              Call {business.phone.display}
            </SecondaryButton>
          </div>
        </Container>
      </section>
    </>
  );
}
