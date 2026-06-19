import { Instagram } from "lucide-react";
import { menuCategories, menuDisclaimer } from "@/data/menu";
import { business } from "@/data/business";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BrandImage } from "@/components/BrandImage";
import { PrimaryButton } from "@/components/PrimaryButton";
import { InstagramCTA } from "@/components/InstagramCTA";

export const metadata = createPageMetadata({
  title: "Menu",
  description:
    "Explore frozen yogurt, specialty creations, refreshing treats, and shakes from I Scream Yogurt's mobile dessert truck.",
  path: "/menu",
});

export default function MenuPage() {
  return (
    <>
      <section className="bg-brand-teal py-14 text-white sm:py-18">
        <Container>
          <SectionHeading
            title="Find Your Favorite Way to Scream"
            description="From customizable frozen yogurt to specialty desserts and refreshing treats, there is always something worth chasing down the truck for."
            titleAs="h1"
            className="text-white [&_p]:text-white/85"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-16">
          {menuCategories.map((category) => (
            <article key={category.id} id={category.id}>
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-brand-navy">{category.name}</h2>
                  <p className="mt-3 text-lg text-brand-navy/75">{category.description}</p>
                  <ul className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-soft"
                      >
                        <span className="font-semibold text-brand-navy">{item.name}</span>
                        <span className="text-xs font-bold uppercase tracking-wide text-brand-teal">
                          Availability varies
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {category.imageKey && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card">
                    <BrandImage
                      imageKey={category.imageKey}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}

          <div className="rounded-2xl border-2 border-brand-navy/10 bg-brand-cream p-6 sm:p-8">
            <h2 className="text-xl font-bold text-brand-navy">Important Menu Information</h2>
            <p className="mt-3 text-brand-navy/75">{menuDisclaimer}</p>
          </div>

          <div className="flex flex-col items-start gap-6 rounded-2xl bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy">Current Specials</h2>
              <p className="mt-2 text-brand-navy/75">
                Follow us on Instagram for the latest flavors, seasonal creations, and truck locations.
              </p>
            </div>
            <PrimaryButton
              href={business.social.instagram.url}
              external
              trackAs="instagram_click"
              className="gap-2"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              Check Instagram
            </PrimaryButton>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-brand-navy">Planning an Event?</h2>
            <p className="mt-2 text-brand-navy/75">
              Bring the full I Scream Yogurt experience to your next celebration.
            </p>
            <PrimaryButton href="/catering" className="mt-6" trackAs="book_truck_click">
              Book Catering
            </PrimaryButton>
          </div>
        </Container>
      </section>
    </>
  );
}
