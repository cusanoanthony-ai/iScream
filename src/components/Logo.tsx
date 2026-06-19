"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

const LOGO_PATH = "/images/brand/logo.png";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
  size?: "default" | "header" | "footer";
};

export function Logo({ className, variant = "default", size = "default" }: LogoProps) {
  const [hasLogo, setHasLogo] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setHasLogo(true);
    img.onerror = () => setHasLogo(false);
    img.src = LOGO_PATH;
  }, []);

  if (hasLogo) {
    const width = size === "header" ? 170 : size === "footer" ? 150 : 140;
    return (
      <Image
        src={LOGO_PATH}
        alt={business.name}
        width={width}
        height={Math.round(width * 0.35)}
        className={cn("h-auto w-auto object-contain", size === "header" && "max-h-[52px] w-[150px] sm:w-[170px]", className)}
        priority={size === "header"}
      />
    );
  }

  const isHeader = size === "header";
  const isLight = variant === "light";

  return (
    <span
      className={cn(
        "font-display leading-[0.95] tracking-tight",
        isHeader ? "text-[1.65rem] sm:text-[1.85rem]" : "text-xl sm:text-2xl",
        "font-extrabold",
        isLight ? "text-white" : "text-brand-navy",
        className,
      )}
      style={isHeader ? { minWidth: "150px", maxWidth: "190px" } : undefined}
    >
      <span className="block">I Scream</span>
      <span className={cn("block", isLight ? "text-brand-cream" : "text-brand-teal")}>
        Yogurt
      </span>
    </span>
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
