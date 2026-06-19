"use client";

import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type ExternalLinkCardProps = {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  trackAs?: Parameters<typeof import("@/lib/analytics").trackEvent>[0];
  className?: string;
};

export function ExternalLinkCard({
  href,
  title,
  description,
  icon,
  trackAs,
  className,
}: ExternalLinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex min-h-[120px] flex-col justify-between rounded-2xl bg-white p-5 shadow-soft transition-shadow hover:shadow-card",
        className,
      )}
      onClick={() => {
        if (trackAs) {
          import("@/lib/analytics").then(({ trackEvent }) => trackEvent(trackAs));
        }
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
          {icon}
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-brand-navy/40" aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-bold text-brand-navy">{title}</h3>
        <p className="mt-1 text-sm text-brand-navy/70">{description}</p>
      </div>
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}
