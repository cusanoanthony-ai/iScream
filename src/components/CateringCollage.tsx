import { SiteImage } from "./SiteImage";

/** Layered photo collage for homepage catering section */
export function CateringCollage() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative aspect-[4/5] max-h-[480px] sm:aspect-[5/4] sm:max-h-[520px]">
        <div className="absolute inset-0 overflow-hidden rounded-3xl border-4 border-white/90 shadow-lift sm:-rotate-1">
          <SiteImage
            imageKey="truckSideProfile"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            rounded="3xl"
          />
        </div>

        <div className="absolute -bottom-2 -right-1 z-10 w-[44%] max-w-[210px] overflow-hidden rounded-2xl border-4 border-white shadow-card sm:-right-3 sm:bottom-1 sm:rotate-2">
          <div className="relative aspect-square">
            <SiteImage
              imageKey="berryCookieFroyoTruck"
              alt=""
              fill
              sizes="210px"
              rounded="xl"
            />
          </div>
        </div>

        <div className="absolute -left-1 top-5 z-10 hidden w-[30%] max-w-[130px] overflow-hidden rounded-xl border-2 border-white shadow-card sm:block sm:-rotate-2">
          <div className="relative aspect-[4/3]">
            <SiteImage
              imageKey="truckServingCustomers"
              alt=""
              fill
              sizes="130px"
              rounded="lg"
              objectPosition="center 20%"
            />
          </div>
        </div>

        <div
          className="pointer-events-none absolute -right-1 top-3 h-12 w-12 rounded-full bg-brand-coral/40 blur-xl"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
