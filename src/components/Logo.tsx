"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";
import { BrandLogoLockup } from "./brand/BrandLogoLockup";

const BRAND_LOGO_JPG = "/images/brand/brand-logo.jpg";
const LOGO_PNG = "/images/brand/logo.png";

type LogoSource = "jpg" | "png" | "lockup";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
  size?: "default" | "header" | "footer" | "sm" | "md" | "lg" | "xl";
};

const officialLogoSizes = {
  header: "max-h-[52px] w-[150px] sm:w-[180px]",
  footer: "max-h-[48px] w-[140px] sm:w-[150px]",
  sm: "max-h-[40px] w-[120px]",
  md: "max-h-[52px] w-[160px] sm:w-[180px]",
  lg: "max-h-[72px] w-[200px] sm:w-[220px]",
  xl: "max-h-[100px] w-[240px] sm:max-h-[120px] sm:w-[300px]",
  default: "max-h-[52px] w-[160px] sm:w-[180px]",
} as const;

function resolveLockupSize(size: LogoProps["size"]): "sm" | "md" | "lg" | "xl" {
  if (size === "xl") return "xl";
  if (size === "header" || size === "md") return "md";
  if (size === "footer" || size === "sm") return "sm";
  if (size === "lg") return "lg";
  return "md";
}

function resolveImageDimensions(size: LogoProps["size"]) {
  if (size === "xl") return { width: 300, height: 120 };
  if (size === "lg") return { width: 220, height: 88 };
  if (size === "header") return { width: 180, height: 72 };
  if (size === "footer") return { width: 150, height: 60 };
  if (size === "sm") return { width: 120, height: 48 };
  return { width: 180, height: 72 };
}

async function detectLogoSource(): Promise<LogoSource> {
  for (const [src, source] of [
    [BRAND_LOGO_JPG, "jpg"],
    [LOGO_PNG, "png"],
  ] as const) {
    const available = await new Promise<boolean>((resolve) => {
      const img = new window.Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
    if (available) return source;
  }
  return "lockup";
}

export function Logo({ className, variant = "default", size = "default" }: LogoProps) {
  const [logoSource, setLogoSource] = useState<LogoSource>("jpg");

  useEffect(() => {
    void detectLogoSource().then(setLogoSource);
  }, []);

  const lockupVariant = variant === "light" ? "light" : "default";
  const lockupSize = resolveLockupSize(size);
  const sizeKey = size === "default" ? "default" : size;
  const onDarkSurface = variant === "light";

  if (logoSource === "lockup") {
    return (
      <BrandLogoLockup variant={lockupVariant} size={lockupSize} className={className} />
    );
  }

  const src = logoSource === "jpg" ? BRAND_LOGO_JPG : LOGO_PNG;
  const { width, height } = resolveImageDimensions(size);

  const logoImage = (
    <Image
      src={src}
      alt={business.name}
      width={width}
      height={height}
      className={cn(
        "h-auto w-auto object-contain",
        officialLogoSizes[sizeKey],
        !onDarkSurface && className,
      )}
      priority={size === "header" || size === "xl"}
    />
  );

  if (onDarkSurface) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-2xl bg-white px-3 py-2 shadow-soft sm:px-4 sm:py-2.5",
          className,
        )}
      >
        {logoImage}
      </span>
    );
  }

  return logoImage;
}

export function LogoLink({
  className,
  variant = "default",
  size = "default",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center rounded-md focus-visible:outline-offset-4", className)}
      aria-label={`${business.name} home`}
    >
      <Logo variant={variant} size={size} />
    </Link>
  );
}
