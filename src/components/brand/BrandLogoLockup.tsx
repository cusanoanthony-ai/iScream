import { cn } from "@/lib/utils";

type BrandLogoLockupProps = {
  variant?: "default" | "light" | "onTeal";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizeClasses = {
  sm: { main: "text-xl", sub: "text-[0.65rem] tracking-[0.18em]" },
  md: { main: "text-[1.65rem] sm:text-[1.85rem]", sub: "text-xs tracking-[0.2em]" },
  lg: { main: "text-3xl sm:text-4xl", sub: "text-sm tracking-[0.22em]" },
  xl: { main: "text-4xl sm:text-5xl", sub: "text-base tracking-[0.24em]" },
};

/** Branded wordmark lockup — used when official raster logo is unavailable */
export function BrandLogoLockup({
  variant = "default",
  size = "md",
  className,
}: BrandLogoLockupProps) {
  const isLight = variant === "light";
  const onTeal = variant === "onTeal";
  const sizes = sizeClasses[size];

  return (
    <span
      className={cn("inline-flex flex-col leading-none", className)}
      aria-hidden="true"
    >
      <span className={cn("font-display font-extrabold", sizes.main)}>
        <span className={cn(isLight || onTeal ? "text-brand-coral" : "text-brand-coral")}>i</span>
        <span className={cn(isLight ? "text-white" : onTeal ? "text-white" : "text-brand-navy")}>
          Scream
        </span>
      </span>
      <span
        className={cn(
          "mt-1 inline-flex w-fit rounded-full px-2 py-0.5 font-display font-bold uppercase",
          sizes.sub,
          isLight
            ? "bg-white/15 text-brand-cream"
            : onTeal
              ? "bg-white/20 text-white"
              : "bg-brand-teal/10 text-brand-teal",
        )}
      >
        Yogurt
      </span>
    </span>
  );
}
