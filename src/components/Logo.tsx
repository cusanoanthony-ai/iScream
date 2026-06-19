"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";
import { BrandLogoLockup } from "./brand/BrandLogoLockup";

const LOGO_PNG = "/images/brand/logo.png";
const LOGO_SVG = "/images/brand/logo.svg";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
  size?: "default" | "header" | "footer" | "sm" | "md" | "lg";
};

function resolveLockupSize(size: LogoProps["size"]): "sm" | "md" | "lg" | "xl" {
  if (size === "header" || size === "md") return "md";
  if (size === "footer" || size === "sm") return "sm";
  if (size === "lg") return "lg";
  return "md";
}

export function Logo({ className, variant = "default", size = "default" }: LogoProps) {
  const [asset, setAsset] = useState<"png" | "svg" | "lockup">("lockup");

  useEffect(() => {
    const png = new window.Image();
    png.onload = () => setAsset("png");
    png.onerror = () => {
      const svg = new window.Image();
      svg.onload = () => setAsset("svg");
      svg.onerror = () => setAsset("lockup");
      svg.src = LOGO_SVG;
    };
    png.src = LOGO_PNG;
  }, []);

  const lockupVariant = variant === "light" ? "light" : "default";
  const lockupSize = resolveLockupSize(size);

  if (asset === "png") {
    const width = size === "header" || size === "lg" ? 180 : size === "footer" ? 150 : 140;
    return (
      <Image
        src={LOGO_PNG}
        alt={business.name}
        width={width}
        height={Math.round(width * 0.35)}
        className={cn(
          "h-auto w-auto object-contain",
          (size === "header" || size === "md") && "max-h-[52px] w-[150px] sm:w-[180px]",
          size === "lg" && "max-h-[64px] w-[200px] sm:w-[220px]",
          className,
        )}
        priority={size === "header"}
      />
    );
  }

  if (asset === "svg") {
    const width =
      size === "lg" ? 220 : size === "header" || size === "md" ? 180 : size === "footer" ? 150 : 140;
    return (
      <Image
        src={LOGO_SVG}
        alt={business.name}
        width={width}
        height={Math.round(width * 0.27)}
        className={cn(
          "h-auto w-auto object-contain",
          size === "header" && "max-h-[52px] w-[150px] sm:w-[180px]",
          size === "lg" && "max-h-[64px] w-[200px] sm:w-[220px]",
          className,
        )}
        priority={size === "header"}
      />
    );
  }

  return (
    <BrandLogoLockup variant={lockupVariant} size={lockupSize} className={className} />
  );
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
