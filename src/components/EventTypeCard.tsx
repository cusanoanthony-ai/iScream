import { BrandImage } from "./BrandImage";
import type { ImageKey } from "@/data/images";

type EventTypeCardProps = {
  title: string;
  description: string;
  imageKey: ImageKey;
};

export function EventTypeCard({ title, description, imageKey }: EventTypeCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-soft">
      <div className="relative aspect-[16/10]">
        <BrandImage
          imageKey={imageKey}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          rounded="none"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">{description}</p>
      </div>
    </article>
  );
}
