export type SiteImageEntry = {
  src: string;
  alt: string;
  objectPosition?: string;
  priority?: boolean;
};

/** Central manifest of every production image path. Prefer WebP. */
export const imageManifest = {
  // Truck
  truckSideProfile: {
    src: "/images/truck/truck-side-profile.webp",
    alt: "I Scream Yogurt mobile dessert truck side profile in Sacramento",
    objectPosition: "center",
    priority: true,
  },
  truckAngleCloseup: {
    src: "/images/truck/truck-angle-closeup.webp",
    alt: "Close-up angle of the I Scream Yogurt truck with colorful branding",
    objectPosition: "center",
  },
  purpleFroyoTruck: {
    src: "/images/truck/purple-froyo-truck.webp",
    alt: "I Scream Yogurt truck serving purple frozen yogurt",
    objectPosition: "center",
  },
  fruityCerealShakeTruck: {
    src: "/images/truck/fruity-cereal-shake-truck.webp",
    alt: "Fruity cereal milkshake held in front of the I Scream Yogurt truck",
    objectPosition: "center bottom",
  },
  berryCookieFroyoTruck: {
    src: "/images/truck/berry-cookie-froyo-truck.webp",
    alt: "Berry cookie frozen yogurt cup in front of the I Scream Yogurt truck",
    objectPosition: "center",
  },
  // Events
  truckServingCustomers: {
    src: "/images/events/truck-serving-customers.webp",
    alt: "I Scream Yogurt truck serving customers at an event",
    objectPosition: "center",
  },
  // Products
  fruityPebblesFroyoCloseup: {
    src: "/images/products/fruity-pebbles-froyo-closeup.webp",
    alt: "Close-up of fruity pebbles frozen yogurt with colorful toppings",
    objectPosition: "center",
  },
  fruityPebblesFroyo: {
    src: "/images/products/fruity-pebbles-froyo.webp",
    alt: "Fruity pebbles frozen yogurt cup from I Scream Yogurt",
    objectPosition: "center",
  },
  hotFudgeSundae: {
    src: "/images/products/hot-fudge-sundae.webp",
    alt: "Hot fudge sundae with whipped topping from I Scream Yogurt",
    objectPosition: "center top",
  },
  orangeFloat: {
    src: "/images/products/orange-float.webp",
    alt: "Orange cream float in a clear cup",
    objectPosition: "center",
  },
  rootBeerFloat: {
    src: "/images/products/root-beer-float.webp",
    alt: "Root beer float with creamy foam",
    objectPosition: "center",
  },
  twoSpecialtyShakes: {
    src: "/images/products/two-specialty-shakes.webp",
    alt: "Two specialty milkshakes from I Scream Yogurt",
    objectPosition: "center",
  },
  peachCobblerSundae: {
    src: "/images/products/peach-cobbler-sundae.webp",
    alt: "Peach cobbler sundae with toppings",
    objectPosition: "center",
  },
  peachCobblerTall: {
    src: "/images/products/peach-cobbler-tall.webp",
    alt: "Tall peach cobbler dessert cup",
    objectPosition: "center top",
  },
  saltedCaramelOreoFroyo: {
    src: "/images/products/salted-caramel-oreo-froyo.webp",
    alt: "Salted caramel Oreo frozen yogurt",
    objectPosition: "center",
  },
  mangoChamoyCups: {
    src: "/images/products/mango-chamoy-cups.webp",
    alt: "Mango chamoy frozen treat cups",
    objectPosition: "center",
  },
  // Marketing
  cateringOfferFlyer: {
    src: "/images/marketing/catering-offer-flyer.webp",
    alt: "I Scream Yogurt catering information flyer",
    objectPosition: "center",
  },
} as const satisfies Record<string, SiteImageEntry>;

export type ImageKey = keyof typeof imageManifest;

/** Gallery entries for homepage and marketing */
export const galleryManifest: SiteImageEntry[] = [
  {
    src: "/images/gallery/berry-cookie-froyo-truck.webp",
    alt: "Berry cookie frozen yogurt at the I Scream Yogurt truck",
    objectPosition: "center",
  },
  {
    src: "/images/gallery/peach-cobbler-sundae.webp",
    alt: "Peach cobbler sundae at I Scream Yogurt",
    objectPosition: "center",
  },
  {
    src: "/images/gallery/mango-chamoy-cups.webp",
    alt: "Mango chamoy cups from I Scream Yogurt",
    objectPosition: "center",
  },
  {
    src: "/images/gallery/salted-caramel-oreo-froyo.webp",
    alt: "Salted caramel Oreo frozen yogurt",
    objectPosition: "center",
  },
  {
    src: "/images/gallery/fruity-pebbles-froyo.webp",
    alt: "Fruity pebbles frozen yogurt",
    objectPosition: "center",
  },
  {
    src: "/images/gallery/truck-serving-customers.webp",
    alt: "I Scream Yogurt truck serving guests at an event",
    objectPosition: "center",
  },
  {
    src: "/images/gallery/truck-side-profile.webp",
    alt: "I Scream Yogurt truck side profile",
    objectPosition: "center",
  },
  {
    src: "/images/gallery/hot-fudge-sundae.webp",
    alt: "Hot fudge sundae from I Scream Yogurt",
    objectPosition: "center top",
  },
];

/** All production image paths for verification script */
export function getAllProductionImagePaths(): string[] {
  const manifestPaths = Object.values(imageManifest).map((e) => e.src);
  const galleryPaths = galleryManifest.map((e) => e.src);
  return [...new Set([...manifestPaths, ...galleryPaths])];
}
