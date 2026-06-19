export type ImageManifestEntry = {
  src: string;
  alt: string;
  label: string;
  category: "brand" | "truck" | "products" | "events" | "team" | "gallery";
  priority?: boolean;
  placeholderIcon?: "truck" | "cup" | "sundae" | "event" | "people" | "gallery";
};

export const imageManifest = {
  logo: {
    src: "/images/brand/logo.png",
    alt: "I Scream Yogurt logo",
    label: "Official Logo",
    category: "brand",
    placeholderIcon: "cup",
  },
  heroTruck: {
    src: "/images/truck/hero-truck.jpg",
    alt: "I Scream Yogurt mobile dessert truck",
    label: "Hero Truck Photo",
    category: "truck",
    priority: true,
    placeholderIcon: "truck",
  },
  truckSide: {
    src: "/images/truck/truck-side.jpg",
    alt: "Side view of the I Scream Yogurt truck",
    label: "Truck Side Photo",
    category: "truck",
    placeholderIcon: "truck",
  },
  truckAtEvent: {
    src: "/images/truck/truck-at-event.jpg",
    alt: "I Scream Yogurt truck serving at an event",
    label: "Truck at Event",
    category: "truck",
    placeholderIcon: "truck",
  },
  froyoCup: {
    src: "/images/products/froyo-cup.jpg",
    alt: "Frozen yogurt cup with colorful toppings",
    label: "FroYo Cup",
    category: "products",
    placeholderIcon: "cup",
  },
  doleWhip: {
    src: "/images/products/dole-whip.jpg",
    alt: "Refreshing Dole Whip treat",
    label: "Dole Whip",
    category: "products",
    placeholderIcon: "cup",
  },
  milkshake: {
    src: "/images/products/milkshake.jpg",
    alt: "Creamy milkshake from I Scream Yogurt",
    label: "Milkshake",
    category: "products",
    placeholderIcon: "cup",
  },
  sundae: {
    src: "/images/products/sundae.jpg",
    alt: "Specialty sundae with toppings",
    label: "Specialty Sundae",
    category: "products",
    placeholderIcon: "sundae",
  },
  smoothie: {
    src: "/images/products/smoothie.jpg",
    alt: "Fruit smoothie",
    label: "Smoothie",
    category: "products",
    placeholderIcon: "cup",
  },
  parfait: {
    src: "/images/products/parfait.jpg",
    alt: "Layered fruit parfait",
    label: "Fruit Parfait",
    category: "products",
    placeholderIcon: "cup",
  },
  birthdayEvent: {
    src: "/images/events/birthday-event.jpg",
    alt: "Birthday party catered by I Scream Yogurt",
    label: "Birthday Event",
    category: "events",
    placeholderIcon: "event",
  },
  schoolEvent: {
    src: "/images/events/school-event.jpg",
    alt: "School event with I Scream Yogurt truck",
    label: "School Event",
    category: "events",
    placeholderIcon: "event",
  },
  companyEvent: {
    src: "/images/events/company-event.jpg",
    alt: "Company event catered by I Scream Yogurt",
    label: "Company Event",
    category: "events",
    placeholderIcon: "event",
  },
  communityEvent: {
    src: "/images/events/community-event.jpg",
    alt: "Community gathering with I Scream Yogurt",
    label: "Community Event",
    category: "events",
    placeholderIcon: "event",
  },
  ownerOrFamily: {
    src: "/images/team/owner-or-family.jpg",
    alt: "I Scream Yogurt owner or family",
    label: "Owner or Family Photo",
    category: "team",
    placeholderIcon: "people",
  },
  gallery01: {
    src: "/images/gallery/gallery-01.jpg",
    alt: "I Scream Yogurt truck at a Sacramento event",
    label: "Gallery: The Truck",
    category: "gallery",
    placeholderIcon: "truck",
  },
  gallery02: {
    src: "/images/gallery/gallery-02.jpg",
    alt: "Frozen yogurt cup with toppings",
    label: "Gallery: FroYo Cup",
    category: "gallery",
    placeholderIcon: "cup",
  },
  gallery03: {
    src: "/images/gallery/gallery-03.jpg",
    alt: "Specialty sundae creation",
    label: "Gallery: Sundae",
    category: "gallery",
    placeholderIcon: "sundae",
  },
  gallery04: {
    src: "/images/gallery/gallery-04.jpg",
    alt: "Crowd enjoying I Scream Yogurt at an event",
    label: "Gallery: Event Crowd",
    category: "gallery",
    placeholderIcon: "event",
  },
  gallery05: {
    src: "/images/gallery/gallery-05.jpg",
    alt: "Customer enjoying frozen yogurt",
    label: "Gallery: Customer Experience",
    category: "gallery",
    placeholderIcon: "people",
  },
  gallery06: {
    src: "/images/gallery/gallery-06.jpg",
    alt: "Catering setup with I Scream Yogurt truck",
    label: "Gallery: Catering Setup",
    category: "gallery",
    placeholderIcon: "truck",
  },
} as const satisfies Record<string, ImageManifestEntry>;

export type ImageKey = keyof typeof imageManifest;

export const galleryImages: ImageKey[] = [
  "gallery01",
  "gallery02",
  "gallery03",
  "gallery04",
  "gallery05",
  "gallery06",
];
