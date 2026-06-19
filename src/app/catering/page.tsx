import { CheckCircle2, PartyPopper } from "lucide-react";
import { eventTypes, cateringBenefits, howItWorksSteps } from "@/data/events";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CateringForm } from "@/components/CateringForm";
import { SiteImage } from "@/components/SiteImage";

export const metadata = createPageMetadata({
  title: "Catering",
  description:
    "Book I Scream Yogurt for birthday parties, school events, company gatherings, and community celebrations throughout Sacramento.",
  path: "/catering",
});

export default function CateringPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-teal py-12 text-white sm:py-16">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <SectionHeading
              title="Bring the I Scream Experience to Your Event"
              description="Turn your next gathering into something people will remember. I Scream Yogurt serves frozen favorites and specialty treats from the truck at events throughout the Sacramento area."
              titleAs="h1"
              className="text-white [&_p]:text-white/90"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
              <SiteImage
                imageKey="truckServingCustomers"
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
          <SectionHeading title="Events We Love" align="center" className="mb-10" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((event) => (
              <article
                key={event.title}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-soft"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                  <PartyPopper className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy">{event.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-navy/70">{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream py-14">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading title="Why Book the Truck?" />
              <ul className="mt-6 space-y-3">
                {cateringBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
                    <span className="font-semibold text-brand-navy">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[3/4] max-w-sm overflow-hidden rounded-2xl shadow-card lg:ml-auto">
              <SiteImage
                imageKey="cateringOfferFlyer"
                alt=""
                fill
                sizes="(max-width: 768px) 80vw, 320px"
                rounded="2xl"
                objectPosition="center top"
              />
              <p className="absolute bottom-0 left-0 right-0 bg-brand-navy/75 px-3 py-2 text-xs text-white/90">
                Marketing graphic — contact us for current catering details.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading title="How It Works" align="center" className="mb-10" />
          <ol className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <li key={step.step} className="text-center">
                <span className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-coral text-lg font-bold text-white">
                  {step.step}
                </span>
                <h3 className="font-bold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-navy/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <SectionHeading title="Request Event Availability" />
              <p className="mt-4 text-brand-navy/75">
                Tell us about your event and we&apos;ll follow up to discuss availability and details.
              </p>
              <p className="mt-4 text-sm text-brand-navy/60">
                Submitting this form does not guarantee availability. The I Scream Yogurt team will
                follow up to discuss your event.
              </p>
              <div className="mt-8 hidden lg:block relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                <SiteImage
                  imageKey="berryCookieFroyoTruck"
                  alt=""
                  fill
                  sizes="400px"
                  rounded="2xl"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-brand-cream p-6 shadow-soft sm:p-8">
                <CateringForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
