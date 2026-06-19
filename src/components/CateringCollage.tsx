import { SiteImage } from "./SiteImage";

/** Truck-led two-layer composition — no event photo clutter */
export function CateringCollage() {
  return (
    <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
      <div className="relative aspect-[5/4] max-h-[420px] sm:max-h-[460px]">
        <div className="absolute inset-0 overflow-hidden rounded-3xl border-4 border-white/90 shadow-lift">
          <SiteImage
            imageKey="truckSideProfile"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            rounded="3xl"
            objectPosition="center"
          />
        </div>

        <div className="absolute -bottom-1 -right-2 z-10 w-[32%] max-w-[160px] overflow-hidden rounded-2xl border-4 border-white shadow-card sm:-right-3 sm:bottom-0">
          <div className="relative aspect-square">
            <SiteImage
              imageKey="berryCookieFroyoTruck"
              alt=""
              fill
              sizes="160px"
              rounded="xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
