import { business } from "@/data/business";
import { Logo } from "@/components/Logo";
import { SprinklePattern } from "@/components/SprinklePattern";
import { cn } from "@/lib/utils";

type LogoFeatureCardProps = {
  tagline?: string;
  variant?: "default" | "light" | "onTeal";
  className?: string;
};

export function LogoFeatureCard({
  tagline = business.tagline,
  variant = "default",
  className,
}: LogoFeatureCardProps) {
  const isLight = variant === "light" || variant === "onTeal";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl p-8 shadow-lift sm:p-10",
        variant === "onTeal"
          ? "border border-white/20 bg-white/10 backdrop-blur-sm"
          : isLight
            ? "bg-brand-navy text-white"
            : "bg-white",
        className,
      )}
    >
      <SprinklePattern variant={isLight ? "dark" : "light"} className="opacity-20" aria-hidden="true" />
      <div className="relative flex flex-col items-center text-center">
        <Logo variant={isLight ? "light" : "default"} size="lg" />
        <p
          className={cn(
            "mt-5 max-w-xs text-base font-semibold leading-relaxed",
            isLight ? "text-white/85" : "text-brand-navy/75",
          )}
        >
          {tagline}
        </p>
      </div>
    </div>
  );
}
