"use client";

import { MapPin } from "lucide-react";
import { business } from "@/data/business";
import { PrimaryButton } from "./PrimaryButton";
import { cn } from "@/lib/utils";

type ScheduleCTAProps = {
  className?: string;
  showNote?: boolean;
};

export function ScheduleCTA({ className, showNote = false }: ScheduleCTAProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <PrimaryButton
        href={business.social.streetFoodFinder.url}
        external
        trackAs="streetfoodfinder_click"
        className="w-full sm:w-auto"
      >
        <MapPin className="h-5 w-5" aria-hidden="true" />
        View Live Schedule
      </PrimaryButton>
      {showNote && (
        <p className="text-sm text-brand-navy/70">
          Today&apos;s location may change due to events, weather, or private bookings.
          Confirm the latest stop through StreetFoodFinder or Instagram before traveling.
        </p>
      )}
    </div>
  );
}
