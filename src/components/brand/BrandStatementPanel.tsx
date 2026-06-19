import { business } from "@/data/business";
import { Logo } from "@/components/Logo";
import { SprinklePattern } from "@/components/SprinklePattern";
import { cn } from "@/lib/utils";

type BrandStatementPanelProps = {
  statement?: string;
  className?: string;
};

export function BrandStatementPanel({
  statement = "Frozen yogurt, bold toppings, and sweet memories.",
  className,
}: BrandStatementPanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal to-brand-navy p-8 text-white shadow-lift sm:p-10",
        className,
      )}
    >
      <SprinklePattern variant="dark" className="opacity-15" aria-hidden="true" />
      <div className="relative space-y-6">
        <Logo variant="light" size="lg" />
        <p className="text-xl font-extrabold leading-snug sm:text-2xl">{statement}</p>
        <p className="text-sm font-semibold text-white/80">{business.location.display}</p>
      </div>
    </div>
  );
}
