import { business } from "@/data/business";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BrandImage } from "@/components/BrandImage";
import { InstagramCTA } from "@/components/InstagramCTA";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata = createPageMetadata({
  title: "Our Story",
  description:
    "Learn about I Scream Yogurt's mobile frozen yogurt truck and the vision to grow into a permanent Sacramento destination.",
  path: "/our-story",
});

const storySections = [
  {
    title: "Where We Are Today",
    content:
      "Today, I Scream Yogurt is a mobile dessert experience serving Sacramento and surrounding communities. The truck brings customizable frozen yogurt, specialty treats, and memorable energy directly to the people—at parties, schools, workplaces, and community events.",
  },
  {
    title: "Why the Truck Matters",
    content:
      "The truck lets us meet people where they are. Every event is a chance to share something sweet, create a fun atmosphere, and build connections with the community one cup at a time.",
  },
  {
    title: "Where We're Going",
    content:
      "The long-term vision is to grow the I Scream Yogurt community and eventually create a permanent destination where customers can enjoy more flavors, more choices, and the same energy they know from the truck.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <section className="bg-brand-navy py-14 text-white sm:py-18">
        <Container>
          <SectionHeading
            title="A Food Truck With a Bigger Dream"
            titleAs="h1"
            className="text-white"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6 text-lg leading-relaxed text-brand-navy/80">
              <p>
                I Scream Yogurt was created to bring the fun of frozen yogurt directly to the
                people. Instead of waiting for customers to visit a shop, the truck brings
                customizable treats, specialty desserts, and an unforgettable experience to events
                and communities throughout the Sacramento area.
              </p>
              <p>
                The truck is the heart of the business today, but it is also the beginning of
                something larger. The long-term vision is to grow the I Scream Yogurt community and
                eventually create a permanent destination where customers can enjoy more flavors,
                more choices, and the same energy they know from the truck.
              </p>
              <blockquote className="rounded-2xl border-l-4 border-brand-pink bg-brand-pink/5 px-6 py-5 text-xl font-bold italic text-brand-navy">
                &ldquo;We&apos;re not only serving dessert. We&apos;re building the community that
                can help turn a mobile favorite into a permanent Sacramento destination.&rdquo;
              </blockquote>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card">
              <BrandImage imageKey="ownerOrFamily" fill sizes="(max-width: 1024px) 100vw, 40vw" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-cream py-16">
        <Container className="space-y-12">
          {storySections.map((section) => (
            <article key={section.title}>
              <h2 className="text-2xl font-bold text-brand-navy">{section.title}</h2>
              <p className="mt-3 max-w-3xl text-lg leading-relaxed text-brand-navy/75">
                {section.content}
              </p>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading title="Join the Journey" />
              <p className="mt-4 text-brand-navy/75">
                Follow along on Instagram and join our email list for updates on the truck, new
                treats, and the path toward a future storefront in {business.location.city}.
              </p>
              <div className="mt-6">
                <InstagramCTA variant="compact" />
              </div>
            </div>
            <div id="story-newsletter" className="rounded-2xl bg-white p-6 shadow-soft sm:p-8">
              <h3 className="text-xl font-bold text-brand-navy">Stay Connected</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                Be part of the community helping I Scream Yogurt grow.
              </p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
