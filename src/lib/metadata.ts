import type { Metadata } from "next";
import { business, getSiteUrl } from "@/data/business";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string | null;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  ogImage = null,
}: PageMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? title
      : `${title} | ${business.name}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: business.name,
      locale: "en_US",
      type: "website",
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`,
                width: 1200,
                height: 630,
                alt: `${business.name} — ${business.primaryDescription}`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(ogImage
        ? { images: [ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`] }
        : {}),
    },
  };
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${business.name} | Sacramento Frozen Yogurt Truck & Catering`,
    template: `%s | ${business.name}`,
  },
  description:
    "Find iScream Yogurt around Sacramento or book the mobile frozen yogurt truck for parties, school events, company gatherings, and community celebrations.",
  keywords: [
    "frozen yogurt",
    "food truck",
    "Sacramento",
    "catering",
    "mobile dessert",
    "iScream Yogurt",
  ],
};
