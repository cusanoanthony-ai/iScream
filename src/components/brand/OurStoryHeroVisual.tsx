"use client";

import { ChevronRight, Store, Truck, Users } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SprinklePattern } from "@/components/SprinklePattern";
import { cn } from "@/lib/utils";

const journeySteps = [
  {
    icon: Truck,
    title: "Truck Today",
    description: "Mobile dessert experiences across Sacramento",
    iconClass: "bg-brand-coral/15 text-brand-coral",
  },
  {
    icon: Users,
    title: "Community Growth",
    description: "Building sweet memories at local events",
    iconClass: "bg-brand-pink/15 text-brand-pink",
  },
  {
    icon: Store,
    title: "Future Storefront",
    description: "A permanent destination for even more treats",
    iconClass: "bg-brand-teal/15 text-brand-teal",
  },
];

/** Clean branded journey card for the Our Story hero */
export function OurStoryHeroVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-brand-teal via-brand-navy to-brand-navy shadow-lift">
      <SprinklePattern variant="dark" className="opacity-10" aria-hidden="true" />

      <div className="relative flex flex-col p-6 sm:p-8 lg:p-10">
        <div className="rounded-2xl bg-white px-5 py-4 text-center sm:px-6 sm:py-5">
          <Logo size="lg" className="mx-auto" />
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:grid sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-start sm:gap-3 lg:gap-4">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="contents">
                <div className="flex flex-col items-center text-center sm:px-1">
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-2xl shadow-soft",
                      step.iconClass,
                    )}
                  >
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold text-white sm:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[11rem] text-xs leading-relaxed text-white/80 sm:text-sm">
                    {step.description}
                  </p>
                </div>

                {index < journeySteps.length - 1 && (
                  <>
                    <div
                      className="hidden items-center justify-center self-center pt-6 text-white/35 sm:flex"
                      aria-hidden="true"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </div>
                    <div
                      className="mx-auto h-px w-12 bg-white/20 sm:hidden"
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
