"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { business } from "@/data/business";
import { imageManifest } from "@/data/images";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  const [hasLogo, setHasLogo] = useState<boolean | null>(null);
  const logoSrc = imageManifest.logo.src;

  useEffect(() => {
    let cancelled = false;
    const img = new window.Image();
    img.onload = () => {
      if (!cancelled) setHasLogo(true);
    };
    img.onerror = () => {
      if (!cancelled) setHasLogo(false);
    };
    img.src = logoSrc;
    return () => {
      cancelled = true;
    };
  }, [logoSrc]);

  if (hasLogo) {
    return (
      <Image
        src={logoSrc}
        alt={business.name}
        width={160}
        height={48}
        className={cn("h-10 w-auto object-contain sm:h-12", className)}
        priority
      />
    );
  }

  return (
    <span
      className={cn(
        "font-display text-lg font-bold leading-tight sm:text-xl",
        variant === "light" ? "text-white" : "text-brand-navy",
        className,
      )}
    >
      I Scream
      <span className={variant === "light" ? "text-brand-coral" : "text-brand-teal"}>
        {" "}
        Yogurt
      </span>
    </span>
  );
}

export function LogoLink({ className, variant = "default" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center rounded-md", className)}
      aria-label={`${business.name} home`}
    >
      <Logo variant={variant} />
    </Link>
  );
}
