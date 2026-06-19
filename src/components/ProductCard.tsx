import Link from "next/link";
import { BrandImage } from "./BrandImage";
import type { ImageKey } from "@/data/images";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  title: string;
  description: string;
  imageKey: ImageKey;
  href: string;
  className?: string;
};

export function ProductCard({
  title,
  description,
  imageKey,
  href,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-shadow hover:shadow-card",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <BrandImage
          imageKey={imageKey}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          rounded="none"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-brand-navy">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-navy/70">
          {description}
        </p>
        <span className="mt-4 text-sm font-bold text-brand-teal group-hover:text-brand-pink">
          View on menu →
        </span>
      </div>
    </Link>
  );
}
