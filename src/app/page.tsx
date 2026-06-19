import {
  MapPin,
  Phone,
  PartyPopper,
  GraduationCap,
  Building2,
  Users,
  Heart,
  ClipboardList,
  CalendarCheck,
  Truck,
} from "lucide-react";
import { business } from "@/data/business";
import { productPreview } from "@/data/menu";
import { homepageCateringEvents, howItWorksSteps } from "@/data/events";
import { homepageGallery } from "@/data/images";
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
import { CateringCollage } from "@/components/CateringCollage";
import { StorefrontOutline } from "@/components/StorefrontOutline";

export const metadata = createPageMetadata({
  title: "iScream Yogurt | Sacramento Frozen Yogurt Truck & Catering",
  description:
    "Find iScream Yogurt around Sacramento or book the mobile frozen yogurt truck for parties, school events, company gatherings, and community celebrations.",
  path: "/",
});

const howItWorksIcons = [ClipboardList, CalendarCheck, Truck];

const cateringIcons = {
  party: PartyPopper,
  school: GraduationCap,
  building: Building2,
  users: Users,
  heart: Heart,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden pb-10 pt-6 sm:pb-14 sm:pt-8 lg:pb-16">
        <SprinklePattern className="opacity-25" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="order-2 lg:order-1">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-teal">
                Mobile dessert truck • Catering available
              </p>
              <h1 className="text-balance leading-[1.05]">
                <span className="block text-[1.75rem] font-extrabold text-brand-navy sm:text-4xl lg:text-[2.75rem]">
                  Sacramento&apos;s
                </span>
                <span className="block text-[1.75rem] font-extrabold text-brand-coral sm:text-4xl lg:text-[2.75rem]">
                  Mobile Frozen
                </span>
                <span className="block text-[1.75rem] font-extrabold text-brand-teal sm:text-4xl lg:text-[2.75rem]">
                  Yogurt Experience
                </span>
              </h1>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-brand-navy/80">
                {business.secondaryDescription}
              </p>
              <p className="accent-handwritten mt-2 text-lg">{business.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <PrimaryButton href="/catering" trackAs="book_truck_click">
                  Book the Truck
                </PrimaryButton>
                <SecondaryButton href="/find-us">Find the Truck</SecondaryButton>
              </div>
              <div className="mt-4">
                <InstagramCTA variant="compact" className="!py-2 !text-sm" />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-semibold text-brand-navy/75">
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

            <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
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
              <div className="absolute -bottom-2 -left-1 z-10 w-[28%] max-w-[140px] overflow-hidden rounded-2xl border-4 border-white shadow-card sm:-left-3 sm:max-w-[150px]">
                <div className="relative aspect-square">
                  <SiteImage
                    imageKey="fruityCerealShakeTruck"
                    alt=""
                    fill
                    sizes="150px"
                    rounded="xl"
                    objectPosition="center bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Product Preview */}
      <section className="bg-white py-12 sm:py-16">
        <Container>
          <SectionHeading
            title="Frozen Yogurt Made Fun"
            description="Classic favorites, specialty creations, and plenty of ways to make your dessert your own."
            align="center"
            className="mb-8"
          />
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {productPreview.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
          <p className="mt-6 text-center text-sm font-semibold text-brand-navy/55">
            Menu items and flavors may vary by event and availability.
          </p>
        </Container>
      </section>

      {/* Catering */}
      <section className="relative overflow-hidden bg-brand-teal py-12 text-white sm:py-16 lg:py-20">
        <SprinklePattern variant="dark" className="opacity-15" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <CateringCollage />
            <div>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                We Cater Sweet Memories
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                From birthday parties to company events, {business.name} brings the truck, the
                treats, and the fun directly to your celebration.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {homepageCateringEvents.map((event) => {
                  const Icon = cateringIcons[event.icon];
                  return (
                    <li
                      key={event.label}
                      className="flex items-center gap-2.5 rounded-xl bg-white/12 px-3 py-2.5 backdrop-blur-sm"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-brand-coral" aria-hidden="true" />
                      <span className="text-sm font-bold leading-tight">{event.label}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-8">
                <PrimaryButton href="/catering" trackAs="book_truck_click">
                  Book Your Event
                </PrimaryButton>
              </div>
              <p className="mt-3 text-base font-bold text-brand-coral">
                We bring the chill. You bring the guests.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="border-y border-brand-navy/5 bg-brand-cream py-12 sm:py-14">
        <Container>
          <SectionHeading title="Bringing the Truck Is Easy" align="center" className="mb-8" />
          <div className="relative mx-auto max-w-4xl">
            <div
              className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-brand-teal/25 md:block"
              aria-hidden="true"
            />
            <ol className="grid gap-6 md:grid-cols-3 md:gap-5">
              {howItWorksSteps.map((step, index) => {
                const Icon = howItWorksIcons[index];
                return (
                  <li
                    key={step.step}
                    className="relative rounded-2xl bg-white p-6 text-center shadow-soft md:px-5 md:py-7"
                  >
                    <span className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-coral text-2xl font-extrabold text-white shadow-soft">
                      {step.step}
                    </span>
                    <Icon className="mx-auto mb-3 h-6 w-6 text-brand-teal" aria-hidden="true" />
                    <h3 className="text-base font-bold text-brand-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-snug text-brand-navy/65">{step.description}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </Container>
      </section>

      {/* Find the Truck */}
      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl shadow-card lg:order-2">
              <SiteImage
                imageKey="truckAngleCloseup"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                rounded="3xl"
              />
            </div>
            <div className="lg:order-1">
              <SectionHeading
                title="Catch Us Around Sacramento"
                description="Our schedule changes throughout the week — confirm before you head out."
              />
              <div className="mt-6 rounded-2xl border border-brand-teal/20 bg-brand-cream p-5 shadow-soft sm:p-6">
                <p className="text-sm font-semibold text-brand-navy/80">
                  Our schedule changes throughout the week.
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <ScheduleCTA />
                  <InstagramCTA variant="compact" />
                </div>
                <a
                  href={business.phone.href}
                  className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-teal"
                >
                  <Phone className="h-4 w-4 text-brand-teal" aria-hidden="true" />
                  Call {business.phone.display}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16">
        <Container>
          <SectionHeading title="The iScream Experience" align="center" className="mb-8" />
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {homepageGallery.map((image) => (
              <div
                key={image.src}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft"
              >
                <SiteImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  objectPosition={image.objectPosition}
                  className="image-hover-zoom"
                />
              </div>
            ))}
          </div>
          <div className="mt-8">
            <InstagramCTA />
          </div>
        </Container>
      </section>

      {/* Future Storefront */}
      <section className="relative overflow-hidden bg-brand-navy py-12 text-white sm:py-16">
        <SprinklePattern variant="dark" className="opacity-10" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
              <SiteImage
                imageKey="truckAngleCloseup"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                rounded="3xl"
              />
              <StorefrontOutline className="pointer-events-none absolute inset-x-4 bottom-4 h-24 w-[calc(100%-2rem)] text-white/30" />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">The Truck Is Just the Beginning</h2>
              <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
                {business.name} is building something bigger for Sacramento. Every visit, follow,
                booking, and shared dessert helps move the dream of a future brick-and-mortar frozen
                yogurt destination forward.
              </p>
              <p className="mt-3 text-lg font-bold text-brand-coral">
                More flavors. More memories. One future home.
              </p>
              <div className="mt-6 max-w-md rounded-2xl bg-white/10 p-5 backdrop-blur-sm sm:p-6">
                <h3 className="font-bold">Join the Journey</h3>
                <p className="mt-1 text-sm text-white/80">
                  Get updates on the truck and the path toward a future storefront.
                </p>
                <div className="mt-4">
                  <NewsletterForm variant="light" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-pink py-12 text-white sm:py-14">
        <Container className="text-center">
          <h2 className="text-balance text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Ready to Make Your Event a Little Sweeter?
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <PrimaryButton
              href="/catering"
              trackAs="book_truck_click"
              className="!bg-white !text-brand-pink hover:!bg-brand-cream"
            >
              Check Event Availability
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
