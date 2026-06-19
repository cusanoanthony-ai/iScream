import { cn } from "@/lib/utils";

type SprinklePatternProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function SprinklePattern({ className, variant = "light" }: SprinklePatternProps) {
  const fill = variant === "light" ? "var(--brand-teal)" : "var(--brand-cream)";

  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full opacity-30", className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="sprinkles" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
          <rect x="4" y="6" width="6" height="2" rx="1" fill={fill} transform="rotate(25 7 7)" />
          <rect x="28" y="12" width="5" height="2" rx="1" fill="var(--brand-coral)" transform="rotate(-15 30 13)" />
          <rect x="16" y="32" width="6" height="2" rx="1" fill="var(--brand-pink)" transform="rotate(40 19 33)" />
          <rect x="38" y="36" width="5" height="2" rx="1" fill={fill} transform="rotate(-30 40 37)" />
          <rect x="8" y="22" width="4" height="2" rx="1" fill="var(--brand-coral)" transform="rotate(10 10 23)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sprinkles)" />
    </svg>
  );
}
