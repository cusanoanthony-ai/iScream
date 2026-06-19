import Image from "next/image";
import { MapPin, Store, Truck, Users } from "lucide-react";
import { business } from "@/data/business";
import { BRAND_LOGO_DEFAULT } from "@/lib/brand-logo";
import { SprinklePattern } from "@/components/SprinklePattern";
import { cn } from "@/lib/utils";

const milestones = [
  {
    icon: Truck,
    label: "Truck today",
    detail: "Mobile dessert energy",
    className: "left-[8%] top-[58%] sm:left-[10%] sm:top-[56%]",
    chipClass: "bg-brand-coral/15 text-brand-coral",
  },
  {
    icon: Users,
    label: "Community growth",
    detail: "Events across Sacramento",
    className: "left-1/2 top-[34%] -translate-x-1/2",
    chipClass: "bg-brand-pink/15 text-brand-pink",
  },
  {
    icon: Store,
    label: "Future storefront",
    detail: "A permanent destination",
    className: "right-[8%] top-[16%] sm:right-[10%] sm:top-[14%]",
    chipClass: "bg-brand-teal/15 text-brand-teal",
  },
];

/** Branded journey illustration for the Our Story hero — no fake photography */
export function OurStoryHeroVisual() {
  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/15 shadow-lift sm:aspect-square lg:aspect-[5/4]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-navy to-brand-navy" />
      <SprinklePattern variant="dark" className="opacity-20" />

      <svg
        className="absolute inset-0 h-full w-full text-brand-cream/35"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M70 260 C120 230, 170 180, 200 150 S280 90, 320 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="10 8"
          strokeLinecap="round"
        />
        <circle cx="70" cy="260" r="8" fill="#ff665f" />
        <circle cx="200" cy="150" r="7" fill="#ed3c83" />
        <circle cx="320" cy="70" r="8" fill="#16a9a5" />
        <circle cx="48" cy="48" r="5" fill="#ff665f" opacity="0.55" />
        <circle cx="350" cy="320" r="6" fill="#ed3c83" opacity="0.45" />
        <circle cx="280" cy="360" r="4" fill="#16a9a5" opacity="0.5" />
      </svg>

      <div className="absolute left-1/2 top-5 z-10 w-[min(88%,15rem)] -translate-x-1/2 rounded-2xl bg-white px-4 py-3 shadow-lift sm:top-6 sm:w-[min(78%,17rem)] sm:px-5 sm:py-4">
        <Image
          src={BRAND_LOGO_DEFAULT}
          alt={business.name}
          width={280}
          height={112}
          className="mx-auto h-auto max-h-[72px] w-full max-w-[240px] object-contain sm:max-h-[88px]"
          priority
        />
      </div>

      {milestones.map((step) => {
        const Icon = step.icon;
        return (
          <div
            key={step.label}
            className={cn("absolute z-10 w-[9.5rem] text-center sm:w-[10.5rem]", step.className)}
          >
            <div
              className={cn(
                "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft sm:h-16 sm:w-16",
                step.chipClass,
              )}
            >
              <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-wide text-white/75">
              {step.label}
            </p>
            <p className="mt-0.5 text-xs font-semibold leading-snug text-white">{step.detail}</p>
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/70 to-transparent px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
        <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-coral">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {business.location.display}
        </p>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/90">
          A playful path from the truck to the community — and someday, a storefront to call home.
        </p>
      </div>
    </div>
  );
}
