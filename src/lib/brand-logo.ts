/** Official brand logo assets — prefer PNG, then WebP, then JPG. */
export const BRAND_LOGO_PATHS = [
  "/images/brand/brand-logo.png",
  "/images/brand/brand-logo.webp",
  "/images/brand/brand-logo.jpg",
] as const;

/** Default path when a single asset is known to exist in the repo. */
export const BRAND_LOGO_DEFAULT = "/images/brand/brand-logo.jpg";

export type BrandLogoFormat = "png" | "webp" | "jpg";

export function formatFromBrandLogoPath(path: string): BrandLogoFormat | null {
  if (path.endsWith(".png")) return "png";
  if (path.endsWith(".webp")) return "webp";
  if (path.endsWith(".jpg")) return "jpg";
  return null;
}
