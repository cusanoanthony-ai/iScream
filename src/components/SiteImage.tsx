import Image from "next/image";
import { imageManifest, type ImageKey, type SiteImageEntry } from "@/data/images";
import { cn } from "@/lib/utils";

type SiteImageProps = {
  imageKey?: ImageKey;
  src?: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  rounded?: "none" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  objectPosition?: string;
};

const roundedClasses = {
  none: "",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
};

export function SiteImage({
  imageKey,
  src: srcProp,
  alt,
  className,
  fill = false,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
  rounded = "none",
  objectPosition,
}: SiteImageProps) {
  const entry: SiteImageEntry | undefined = imageKey ? imageManifest[imageKey] : undefined;
  const src = srcProp ?? entry?.src ?? "";
  const resolvedAlt = alt || entry?.alt || "";
  const resolvedPriority = priority ?? entry?.priority ?? false;
  const resolvedObjectPosition = objectPosition ?? entry?.objectPosition ?? "center";
  const roundedClass = roundedClasses[rounded];

  return (
    <Image
      src={src}
      alt={resolvedAlt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={resolvedPriority}
      className={cn(
        "object-cover",
        fill && "absolute inset-0 h-full w-full",
        roundedClass,
        className,
      )}
      style={{ objectPosition: resolvedObjectPosition }}
    />
  );
}

/** @deprecated Use SiteImage — kept for gradual migration */
export function BrandImage({
  imageKey,
  alt,
  ...props
}: Omit<SiteImageProps, "alt"> & { imageKey: ImageKey; alt?: string }) {
  const entry = imageManifest[imageKey];
  return <SiteImage imageKey={imageKey} alt={alt ?? entry.alt} {...props} />;
}

export { SiteImage as PhotoWithFallback };
