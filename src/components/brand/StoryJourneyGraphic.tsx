import { Truck, Users, Store } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SprinklePattern } from "@/components/SprinklePattern";
import { cn } from "@/lib/utils";

type StoryJourneyGraphicProps = {
  className?: string;
  showLogo?: boolean;
};

const steps = [
  { icon: Truck, label: "Truck today", color: "bg-brand-coral/20 text-brand-coral" },
  { icon: Users, label: "Community growth", color: "bg-brand-pink/20 text-brand-pink" },
  { icon: Store, label: "Future storefront", color: "bg-brand-teal/20 text-brand-teal" },
];

/** Playful truck → community → storefront journey graphic for Our Story */
export function StoryJourneyGraphic({ className, showLogo = true }: StoryJourneyGraphicProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-lift backdrop-blur-sm sm:p-8",
        className,
      )}
    >
      <SprinklePattern variant="dark" className="opacity-15" aria-hidden="true" />
      <div className="relative">
        {showLogo && <Logo variant="light" size="md" />}
        <p
          className={cn(
            "max-w-sm text-sm leading-relaxed text-white/90 sm:text-base",
            showLogo ? "mt-4" : "mt-0",
          )}
        >
          From a mobile dessert experience to a future frozen yogurt destination.
        </p>

        <div className="mt-8">
          <div className="hidden items-center justify-between gap-2 sm:flex">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex flex-1 items-center gap-2">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft",
                        step.color,
                      )}
                    >
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <span className="max-w-[5.5rem] text-[0.65rem] font-bold uppercase leading-tight tracking-wide text-white/85">
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <svg
                      className="h-3 w-full max-w-[3rem] shrink text-brand-cream/70"
                      viewBox="0 0 48 12"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6H40M40 6L34 2M40 6L34 10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="4 3"
                      />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>

          <ol className="space-y-4 sm:hidden">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.label} className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-soft",
                      step.color,
                    )}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                      Step {index + 1}
                    </p>
                    <p className="font-bold text-white">{step.label}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <svg
          className="pointer-events-none absolute -right-2 top-2 h-16 w-16 text-brand-coral/25"
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <circle cx="12" cy="10" r="4" fill="currentColor" />
          <circle cx="48" cy="18" r="3" fill="currentColor" />
          <circle cx="54" cy="44" r="5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
