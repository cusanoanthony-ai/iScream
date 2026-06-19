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

const cateringIcons = {
  party: PartyPopper,
  school: GraduationCap,
  building: Building2,
  users: Users,
  heart: Heart,
};

/** Catering visual — official logo + one strong product image; no truck photo */
export function CateringGraphicPanel() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="overflow-hidden rounded-3xl border border-white/20 bg-white shadow-lift">
        <div className="relative aspect-[5/4] overflow-hidden">
          <SiteImage
            imageKey="hotFudgeSundae"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            rounded="none"
            objectPosition="center top"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="space-y-4 px-5 pb-5 pt-2 sm:px-6 sm:pb-6">
          <div className="flex flex-col items-center rounded-2xl bg-brand-cream/80 px-4 py-4 text-center">
            <Logo size="md" />
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-brand-coral">
              Real treats for your event
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-2">
            {homepageCateringEvents.map((event) => {
              const Icon = cateringIcons[event.icon];
              return (
                <li
                  key={event.label}
                  className="flex items-center gap-2 rounded-lg bg-brand-teal/10 px-2.5 py-2"
                >
                  <Icon className="h-4 w-4 shrink-0 text-brand-coral" aria-hidden="true" />
                  <span className="text-xs font-bold leading-tight text-brand-navy">{event.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
