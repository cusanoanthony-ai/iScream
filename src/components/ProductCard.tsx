import Link from "next/link";
import { SiteImage } from "./SiteImage";
import type { ImageKey } from "@/data/images";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  title: string;
  accent: string;
  description: string;
  imageKey: ImageKey;
  href: string;
  className?: string;
};

export function ProductCard({
  title,
  accent,
  description,
  imageKey,
  href,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SiteImage
          imageKey={imageKey}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          rounded="none"
          className="image-hover-zoom"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-teal">{accent}</p>
        <h3 className="mt-1 min-h-[3.5rem] text-lg font-bold leading-snug text-brand-navy sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-brand-navy/70">{description}</p>
        <span className="mt-4 text-sm font-bold text-brand-coral group-hover:text-brand-pink">
          View on menu →
        </span>
      </div>
    </Link>
  );
}
