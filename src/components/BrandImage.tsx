"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ImageIcon, Truck, Users, IceCream, PartyPopper } from "lucide-react";
import { imageManifest, type ImageKey } from "@/data/images";
import { cn } from "@/lib/utils";

type BrandImageProps = {
  imageKey: ImageKey;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "full";
};

const placeholderIcons = {
  truck: Truck,
  cup: IceCream,
  sundae: IceCream,
  event: PartyPopper,
  people: Users,
  gallery: ImageIcon,
};

const roundedClasses = {
  none: "",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

export function BrandImage({
  imageKey,
  className,
  fill = false,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  rounded = "2xl",
}: BrandImageProps) {
  const entry = imageManifest[imageKey];
  const [hasImage, setHasImage] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    const img = new window.Image();
    img.onload = () => {
      if (!cancelled) setHasImage(true);
    };
    img.onerror = () => {
      if (!cancelled) setHasImage(false);
    };
    img.src = entry.src;
    return () => {
      cancelled = true;
    };
  }, [entry.src]);

  const roundedClass = roundedClasses[rounded];
  const shouldPriority = priority ?? entry.priority ?? false;
  const PlaceholderIcon =
    placeholderIcons[entry.placeholderIcon ?? "gallery"] ?? ImageIcon;

  if (hasImage === null) {
    return (
      <div
        className={cn(
          "animate-pulse bg-brand-teal/10",
          fill ? "absolute inset-0" : "",
          roundedClass,
          className,
        )}
        style={!fill ? { width, height } : undefined}
        aria-hidden="true"
      />
    );
  }

  if (hasImage) {
    return (
      <Image
        src={entry.src}
        alt={entry.alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        sizes={sizes}
        priority={shouldPriority}
        className={cn(
          "object-cover",
          fill ? "absolute inset-0 h-full w-full" : "",
          roundedClass,
          className,
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-brand-teal/15 via-brand-cream to-brand-coral/10 p-6 text-center",
        fill ? "absolute inset-0 h-full w-full" : "",
        roundedClass,
        className,
      )}
      style={!fill ? { width, height } : undefined}
      role="img"
      aria-label={`${entry.label} — photo coming soon`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-sm">
        <PlaceholderIcon className="h-7 w-7 text-brand-teal" aria-hidden="true" />
      </div>
      <p className="max-w-[12rem] text-xs font-semibold uppercase tracking-wide text-brand-navy/60">
        {entry.label}
      </p>
      <p className="text-xs text-brand-navy/45">Photo coming soon</p>
    </div>
  );
}

export { BrandImage as PhotoWithFallback };
