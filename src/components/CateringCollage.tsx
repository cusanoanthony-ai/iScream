import { SiteImage } from "./SiteImage";

/** Layered photo collage for homepage catering section */
export function CateringCollage() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      <div
        className="relative aspect-[4/5] max-h-[520px] sm:aspect-[5/4] sm:max-h-none"
      >
        {/* Primary truck — slight playful tilt */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl border-4 border-white/90 shadow-lift sm:-rotate-1">
          <SiteImage
            imageKey="truckSideProfile"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            rounded="3xl"
          />
        </div>

        {/* Product overlay */}
        <div className="absolute -bottom-3 -right-2 z-10 w-[42%] max-w-[200px] overflow-hidden rounded-2xl border-4 border-white shadow-card sm:-right-4 sm:bottom-2 sm:rotate-2">
          <div className="relative aspect-square">
            <SiteImage
              imageKey="berryCookieFroyoTruck"
              alt=""
              fill
              sizes="200px"
              rounded="xl"
            />
          </div>
        </div>

        {/* Supporting event snapshot */}
        <div className="absolute -left-2 top-6 z-10 hidden w-[32%] max-w-[140px] overflow-hidden rounded-xl border-2 border-white shadow-card sm:block sm:-rotate-3">
          <div className="relative aspect-[4/3]">
            <SiteImage
              imageKey="truckServingCustomers"
              alt=""
              fill
              sizes="140px"
              rounded="lg"
              objectPosition="center top"
            />
          </div>
        </div>

        {/* Accent sparkle */}
        <div
          className="pointer-events-none absolute -right-1 top-4 h-14 w-14 rounded-full bg-brand-coral/30 blur-2xl"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
