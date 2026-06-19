"use client";

import Link from "next/link";
import Image from "next/image";
import { business } from "@/data/business";
import { cn } from "@/lib/utils";

const LOGO_PATH = "/images/brand/logo.png";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <span
      className={cn(
        "font-display text-xl font-extrabold leading-tight tracking-tight sm:text-2xl",
        variant === "light" ? "text-white" : "text-brand-navy",
        className,
      )}
    >
      I Scream
      <span className={variant === "light" ? "text-brand-cream" : "text-brand-teal"}>
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
