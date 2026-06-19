"use client";

import { Instagram } from "lucide-react";
import { business } from "@/data/business";
import { PrimaryButton } from "./PrimaryButton";
import { cn } from "@/lib/utils";

type InstagramCTAProps = {
  className?: string;
  variant?: "default" | "compact";
};

export function InstagramCTA({ className, variant = "default" }: InstagramCTAProps) {
  if (variant === "compact") {
    return (
      <PrimaryButton
        href={business.social.instagram.url}
        external
        trackAs="instagram_click"
        className={cn("gap-2", className)}
      >
        <Instagram className="h-5 w-5" aria-hidden="true" />
        Follow {business.social.instagram.handle}
      </PrimaryButton>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl bg-gradient-to-r from-brand-pink/10 via-brand-coral/10 to-brand-teal/10 p-6 text-center sm:p-8",
        className,
      )}
    >
      <Instagram className="mx-auto h-8 w-8 text-brand-pink" aria-hidden="true" />
      <p className="mt-3 text-lg font-bold text-brand-navy">
        Follow us for daily locations, new flavors, and sweet moments
      </p>
      <PrimaryButton
        href={business.social.instagram.url}
        external
        trackAs="instagram_click"
        className="mt-4"
      >
        Follow {business.social.instagram.handle}
      </PrimaryButton>
    </div>
  );
}
