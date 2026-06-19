import { cn } from "@/lib/utils";

type BrandLogoLockupProps = {
  variant?: "default" | "light" | "onTeal";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizeClasses = {
  sm: {
    main: "text-[1.35rem]",
    sub: "text-[1.15rem]",
  },
  md: {
    main: "text-[1.65rem] sm:text-[1.85rem]",
    sub: "text-[1.25rem] sm:text-[1.4rem]",
  },
  lg: {
    main: "text-[1.85rem] sm:text-[2.25rem]",
    sub: "text-[1.5rem] sm:text-[1.75rem]",
  },
  xl: {
    main: "text-4xl sm:text-5xl",
    sub: "text-2xl sm:text-[2.35rem]",
  },
};

/** Branded text wordmark — Fredoka + Pacifico lockup */
export function BrandLogoLockup({
  variant = "default",
  size = "md",
  className,
}: BrandLogoLockupProps) {
  const isLight = variant === "light";
  const onTeal = variant === "onTeal";
  const sizes = sizeClasses[size];

  const screamColor = isLight || onTeal ? "text-white" : "text-brand-navy";
  const yogurtColor = isLight
    ? "text-brand-cream"
    : onTeal
      ? "text-brand-teal"
      : "text-brand-teal";
  const shadowClass =
    isLight || onTeal
      ? "drop-shadow-[0_1px_0_rgba(0,0,0,0.18)]"
      : "drop-shadow-[0_1px_0_rgba(18,48,71,0.14)]";

  return (
    <span className={cn("inline-flex flex-col leading-[0.92]", className)} aria-hidden="true">
      <span
        className={cn(
          "font-display font-extrabold tracking-[-0.04em]",
          sizes.main,
          shadowClass,
        )}
      >
        <span className="text-brand-coral">i</span>
        <span className={screamColor}>Scream</span>
      </span>
      <span
        className={cn(
          "font-wordmark-script -mt-0.5 -rotate-1 pl-0.5 leading-none",
          sizes.sub,
          yogurtColor,
        )}
      >
        Yogurt
      </span>
    </span>
  );
}
