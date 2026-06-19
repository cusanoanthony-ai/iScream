import {
  PartyPopper,
  GraduationCap,
  Building2,
  Users,
  Heart,
} from "lucide-react";
import { homepageCateringEvents } from "@/data/events";
import { SiteImage } from "@/components/SiteImage";
import { Logo } from "@/components/Logo";
import { SprinklePattern } from "@/components/SprinklePattern";

const cateringIcons = {
  party: PartyPopper,
  school: GraduationCap,
  building: Building2,
  users: Users,
  heart: Heart,
};

/** Catering visual — one strong product photo plus logo and event chips */
export function CateringGraphicPanel() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lift backdrop-blur-sm sm:p-8">
        <SprinklePattern variant="dark" className="opacity-10" aria-hidden="true" />
        <div className="relative space-y-6">
          <Logo variant="light" size="md" />

          <div className="relative mx-auto aspect-[4/5] max-w-[300px] overflow-hidden rounded-2xl border-4 border-white/90 shadow-card">
            <SiteImage
              imageKey="hotFudgeSundae"
              alt=""
              fill
              sizes="300px"
              rounded="xl"
              objectPosition="center top"
            />
          </div>

          <ul className="grid grid-cols-2 gap-2">
            {homepageCateringEvents.map((event) => {
              const Icon = cateringIcons[event.icon];
              return (
                <li
                  key={event.label}
                  className="flex items-center gap-2 rounded-lg bg-white/12 px-2.5 py-2"
                >
                  <Icon className="h-4 w-4 shrink-0 text-brand-coral" aria-hidden="true" />
                  <span className="text-xs font-bold leading-tight">{event.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
