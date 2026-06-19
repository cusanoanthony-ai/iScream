import { CheckCircle2, PartyPopper } from "lucide-react";
import { eventTypes, cateringBenefits, howItWorksSteps } from "@/data/events";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CateringForm } from "@/components/CateringForm";
import { CateringCollage } from "@/components/CateringCollage";
import { SprinklePattern } from "@/components/SprinklePattern";

export const metadata = createPageMetadata({
  title: "Catering",
  description:
    "Book iScream Yogurt for birthday parties, school events, company gatherings, and community celebrations throughout Sacramento.",
  path: "/catering",
});

export default function CateringPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-teal py-12 text-white sm:py-16 lg:py-20">
        <SprinklePattern variant="dark" className="opacity-10" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <SectionHeading
              title="Bring the iScream Experience to Your Event"
              description="Turn your next gathering into something people will remember. iScream Yogurt serves frozen favorites and specialty treats from the truck at events throughout the Sacramento area."
              titleAs="h1"
              className="text-white [&_p]:text-white/90"
            />
            <CateringCollage />
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

      <section className="relative overflow-hidden bg-brand-cream py-14 sm:py-16">
        <SprinklePattern className="opacity-20" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Why Book the Truck?" align="center" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {cateringBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
                  <span className="font-semibold text-brand-navy">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeading title="How It Works" align="center" className="mb-10" />
          <div className="relative mx-auto max-w-4xl">
            <div
              className="absolute left-[16%] right-[16%] top-5 hidden h-px bg-brand-teal/25 md:block"
              aria-hidden="true"
            />
            <ol className="grid gap-6 md:grid-cols-3 md:gap-4">
              {howItWorksSteps.map((step) => (
                <li
                  key={step.step}
                  className="rounded-2xl bg-brand-cream/80 p-6 text-center shadow-soft md:px-4"
                >
                  <span className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-coral text-lg font-extrabold text-white shadow-soft">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-brand-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-brand-navy/65">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading title="Request Event Availability" align="center" />
            <p className="mt-4 text-center text-brand-navy/75">
              Tell us about your event and we&apos;ll follow up to discuss availability and details.
            </p>
            <p className="mt-3 text-center text-sm text-brand-navy/60">
              Submitting this form does not guarantee availability. The iScream Yogurt team will
              follow up to discuss your event.
            </p>
            <div className="mt-8 rounded-2xl border border-brand-navy/5 bg-brand-cream p-6 shadow-soft sm:p-8">
              <CateringForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
