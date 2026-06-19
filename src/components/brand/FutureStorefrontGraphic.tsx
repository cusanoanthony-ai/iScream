import { business } from "@/data/business";
import { Logo } from "@/components/Logo";
import { StorefrontOutline } from "@/components/StorefrontOutline";
import { SprinklePattern } from "@/components/SprinklePattern";
import { NewsletterForm } from "@/components/NewsletterForm";

/** Graphic-forward future storefront panel — no truck photo repeat */
export function FutureStorefrontGraphic() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-teal/40 p-8 shadow-lift sm:p-10">
      <SprinklePattern variant="dark" className="opacity-15" aria-hidden="true" />
      <div className="relative flex flex-col items-center text-center">
        <Logo variant="light" size="lg" />
        <StorefrontOutline className="mt-8 h-20 w-full max-w-xs text-white/35 sm:h-24" />
        <h2 className="mt-6 text-2xl font-extrabold text-white sm:text-3xl">
          The Truck Is Just the Beginning
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
          {business.name} is building something bigger for Sacramento. Every visit, follow,
          booking, and shared dessert helps move the dream of a future brick-and-mortar frozen
          yogurt destination forward.
        </p>
        <p className="mt-3 text-lg font-bold text-brand-coral">
          More flavors. More memories. One future home.
        </p>
        <div className="mt-8 w-full max-w-md rounded-2xl bg-white/10 p-5 backdrop-blur-sm sm:p-6">
          <h3 className="font-bold text-white">Join the Journey</h3>
          <p className="mt-1 text-sm text-white/80">
            Get updates on the truck and the path toward a future storefront.
          </p>
          <div className="mt-4">
            <NewsletterForm variant="light" />
          </div>
        </div>
      </div>
    </div>
  );
}
