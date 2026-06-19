import {
  PartyPopper,
  GraduationCap,
  Building2,
  Users,
  Heart,
} from "lucide-react";
import { homepageCateringEvents } from "@/data/events";
import { SiteImage } from "@/components/SiteImage";
import { SprinklePattern } from "@/components/SprinklePattern";

const cateringIcons = {
  party: PartyPopper,
  school: GraduationCap,
  building: Building2,
  users: Users,
  heart: Heart,
};

/** Catering visual — truck-led to contrast product hero; event chips, no duplicate product */
export function CateringGraphicPanel() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-lift backdrop-blur-sm">
        <SprinklePattern variant="dark" className="opacity-10" aria-hidden="true" />

        <div className="relative aspect-[4/3] overflow-hidden">
          <SiteImage
            imageKey="truckSideProfile"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            rounded="none"
            objectPosition="center 78%"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent" />
        </div>

        <div className="relative space-y-4 p-5 sm:p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-coral">
            We bring the truck to you
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {homepageCateringEvents.map((event) => {
              const Icon = cateringIcons[event.icon];
              return (
                <li
                  key={event.label}
                  className="flex items-center gap-2 rounded-lg bg-white/12 px-2.5 py-2 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-brand-coral" aria-hidden="true" />
                  <span className="text-xs font-bold leading-tight text-white">{event.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
