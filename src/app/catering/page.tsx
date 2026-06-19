import { CheckCircle2 } from "lucide-react";
import { eventTypes, cateringBenefits, howItWorksSteps } from "@/data/events";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { EventTypeCard } from "@/components/EventTypeCard";
import { CateringForm } from "@/components/CateringForm";
import { BrandImage } from "@/components/BrandImage";

export const metadata = createPageMetadata({
  title: "Catering",
  description:
    "Book I Scream Yogurt for birthday parties, school events, company gatherings, and community celebrations throughout Sacramento.",
  path: "/catering",
});

export default function CateringPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-teal py-14 text-white sm:py-18">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <SectionHeading
              title="Bring the I Scream Experience to Your Event"
              description="Turn your next gathering into something people will remember. I Scream Yogurt serves frozen favorites and specialty treats from the truck at events throughout the Sacramento area."
              titleAs="h1"
              className="text-white [&_p]:text-white/85"
            />
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-card">
              <BrandImage imageKey="truckAtEvent" fill sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Events We Love" align="center" className="mb-10" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((event) => (
              <EventTypeCard key={event.title} {...event} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream py-16">
        <Container>
          <SectionHeading title="Why Book the Truck?" align="center" className="mb-10" />
          <ul className="mx-auto grid max-w-3xl gap-4">
            {cateringBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 rounded-xl bg-white px-5 py-4 shadow-soft">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
                <span className="font-semibold text-brand-navy">{benefit}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="How It Works" align="center" className="mb-12" />
          <ol className="grid gap-8 md:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <li key={step.step} className="rounded-2xl bg-white p-6 shadow-soft">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-coral text-lg font-bold text-white">
                  {step.step}
                </span>
                <h3 className="text-xl font-bold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-brand-navy/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Request Event Availability"
            description="Tell us about your event and we'll follow up to discuss availability and details."
            align="center"
            className="mb-10"
          />
          <div className="mx-auto max-w-3xl rounded-2xl bg-brand-cream p-6 shadow-soft sm:p-8">
            <CateringForm />
          </div>
        </Container>
      </section>
    </>
  );
}
