import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleAs: TitleTag = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-teal">
          {eyebrow}
        </p>
      )}
      <TitleTag className="text-balance text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
        {title}
      </TitleTag>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-brand-navy/75 sm:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
