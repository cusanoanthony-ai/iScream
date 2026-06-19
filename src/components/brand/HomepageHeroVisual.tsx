import Link from "next/link";
import { MapPin, Truck } from "lucide-react";
import { business } from "@/data/business";
import { SiteImage } from "@/components/SiteImage";
import { Logo } from "@/components/Logo";

/** Product-led hero visual — intentional 2-card grid, no awkward overlays */
export function HomepageHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Decorative accents */}
      <div
        className="pointer-events-none absolute -left-3 top-8 h-20 w-20 rounded-full bg-brand-coral/25 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-2 bottom-16 h-24 w-24 rounded-full bg-brand-teal/20 blur-2xl"
        aria-hidden="true"
      />

      <div className="relative grid gap-4 sm:gap-5">
        {/* Primary product card */}
        <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-white bg-white shadow-lift">
          <div className="relative aspect-[4/5] max-h-[440px] sm:max-h-[480px]">
            <SiteImage
              imageKey="hotFudgeSundae"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              rounded="none"
              objectPosition="center top"
            />
          </div>
          <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-teal shadow-soft backdrop-blur-sm">
            Real treats from the truck
          </div>
        </div>

        {/* Supporting row — truck card + brand panel */}
        <div className="grid grid-cols-5 gap-3 sm:gap-4">
          <Link
            href="/find-us"
            className="group relative col-span-2 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-card transition-transform hover:-translate-y-0.5"
          >
            <div className="relative aspect-square">
              <SiteImage
                imageKey="truckAngleCloseup"
                alt=""
                fill
                sizes="160px"
                rounded="none"
                objectPosition="center 60%"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-brand-navy/80 px-2 py-2 text-center">
              <span className="inline-flex items-center gap-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
                <Truck className="h-3 w-3 text-brand-coral" aria-hidden="true" />
                Find the truck
              </span>
            </div>
          </Link>

          <div className="col-span-3 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-brand-teal to-brand-navy p-4 shadow-card sm:p-5">
            <Logo variant="light" size="sm" />
            <div className="mt-3 space-y-2">
              <p className="text-sm font-bold leading-snug text-white">
                Mobile dessert truck serving Sacramento
              </p>
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/85">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-coral" aria-hidden="true" />
                {business.location.display}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
