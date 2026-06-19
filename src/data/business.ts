export const business = {
  name: "iScream Yogurt",
  shortName: "ISY",
  primaryDescription: "Sacramento's mobile frozen yogurt experience.",
  secondaryDescription:
    "Frozen yogurt, bold toppings, and sweet memories served at parties, events, workplaces, schools, and community gatherings throughout the Sacramento area.",
  tagline: "Yogurt so delicious, it'll make you SCREAM.",
  phone: {
    display: "209.331.4615",
    href: "tel:+12093314615",
  },
  email: {
    display: "iscreamyogurt@gmail.com",
    href: "mailto:iscreamyogurt@gmail.com",
  },
  location: {
    city: "Sacramento",
    state: "California",
    display: "Sacramento, California",
  },
  serviceArea: "Sacramento and surrounding communities",
  hours:
    "Schedule varies by event and location. Check Instagram or StreetFoodFinder for the latest schedule.",
  social: {
    instagram: {
      handle: "@iscreamyogurt",
      url: "https://www.instagram.com/iscreamyogurt/",
    },
    facebook: {
      url: "https://www.facebook.com/ScreamYogurt/",
    },
    streetFoodFinder: {
      url: "https://streetfoodfinder.com/IScreamYogurt",
      label: "StreetFoodFinder",
    },
    square: {
      url: "https://iscreamyogurt.square.site/",
      label: "Order Online",
    },
  },
  footerDescription:
    "iScream Yogurt brings frozen yogurt, toppings, specialty treats, and unforgettable energy to events throughout the Sacramento area.",
} as const;

export type Business = typeof business;

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000"
  );
}
