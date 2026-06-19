import {
  MapPin,
  PartyPopper,
  GraduationCap,
  Building2,
  Users,
  Heart,
  ClipboardList,
  CalendarCheck,
  Truck,
  Mail,
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
import { SprinklePattern } from "@/components/SprinklePattern";
import { CateringGraphicPanel } from "@/components/brand/CateringGraphicPanel";
import { HomepageHeroVisual } from "@/components/brand/HomepageHeroVisual";
import { FutureStorefrontGraphic } from "@/components/brand/FutureStorefrontGraphic";

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
      {/* Hero — product-led visual composition */}
      <section className="hero-gradient relative overflow-hidden pb-10 pt-6 sm:pb-14 sm:pt-8 lg:pb-16">
        <SprinklePattern className="opacity-25" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
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
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy/75">
                <MapPin className="h-4 w-4 text-brand-teal" aria-hidden="true" />
                {business.location.display}
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <HomepageHeroVisual />
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

      {/* Catering — product-led branded visual, no truck photo */}
      <section className="relative overflow-hidden bg-brand-teal py-12 text-white sm:py-16 lg:py-20">
        <SprinklePattern variant="dark" className="opacity-15" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <CateringGraphicPanel />
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

      {/* How It Works — design only */}
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

      {/* Find the Truck — schedule cards only, no truck photo */}
      <section className="relative bg-white py-12 sm:py-16">
        <SprinklePattern className="opacity-10" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              title="Catch Us Around Sacramento"
              description="Our schedule changes throughout the week — confirm before you head out."
              align="center"
            />
            <div className="mt-8 rounded-2xl border border-brand-teal/20 bg-brand-cream p-5 shadow-soft sm:p-8">
              <p className="text-center text-sm font-semibold text-brand-navy/80">
                Our schedule changes throughout the week.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <ScheduleCTA />
                <InstagramCTA variant="compact" />
              </div>
              <div className="mt-6 text-center">
                <SecondaryButton href="/find-us">View Full Schedule Info</SecondaryButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery — products only */}
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

      {/* Future Storefront — graphic panel, no truck photo */}
      <section className="relative overflow-hidden bg-brand-navy py-12 sm:py-16">
        <SprinklePattern variant="dark" className="opacity-10" aria-hidden="true" />
        <Container className="relative">
          <FutureStorefrontGraphic />
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
              href={business.email.href}
              className="!inline-flex !items-center !gap-2 !border-white !bg-transparent !text-white hover:!bg-white hover:!text-brand-navy"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Us
            </SecondaryButton>
          </div>
        </Container>
      </section>
    </>
  );
}
