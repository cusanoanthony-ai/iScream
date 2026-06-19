export type MenuItem = {
  name: string;
  description?: string;
  imageKey?: keyof typeof imageManifest;
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
  imageKey?: keyof typeof imageManifest;
};

import { imageManifest } from "./images";

export const menuDisclaimer =
  "Menu items, flavors, toppings, and availability may change by event. Please contact us directly regarding allergies or dietary needs. We cannot guarantee an allergen-free preparation environment.";

export const menuCategories: MenuCategory[] = [
  {
    id: "frozen-yogurt",
    name: "Frozen Yogurt",
    description:
      "Choose your frozen yogurt and finish it with your favorite toppings. Flavor and topping availability may change.",
    imageKey: "froyoCup",
    items: [
      { name: "Build Your Own FroYo", imageKey: "froyoCup" },
      { name: "Classic FroYo Cup", imageKey: "froyoCup" },
      { name: "Loaded FroYo Cup", imageKey: "froyoCup" },
      { name: "Seasonal Flavors", imageKey: "froyoCup" },
    ],
  },
  {
    id: "specialty-creations",
    name: "Specialty Creations",
    description:
      "Big flavors, creative combinations, and limited-time favorites inspired by the season.",
    imageKey: "sundae",
    items: [
      { name: "Specialty Sundaes", imageKey: "sundae" },
      { name: "Brownie à la Mode", imageKey: "sundae" },
      { name: "Strawberry Cheesecake Bowl", imageKey: "sundae" },
      { name: "Peach Cobbler Sundae", imageKey: "sundae" },
      { name: "Seasonal Creations", imageKey: "sundae" },
    ],
  },
  {
    id: "cool-refreshing",
    name: "Cool & Refreshing",
    description:
      "Light, refreshing treats perfect for warm Sacramento days and outdoor events.",
    imageKey: "doleWhip",
    items: [
      { name: "Dole Whip", imageKey: "doleWhip" },
      { name: "Smoothies", imageKey: "smoothie" },
      { name: "Chamango", imageKey: "smoothie" },
      { name: "Soda Floats", imageKey: "doleWhip" },
      { name: "Seasonal Refreshers", imageKey: "smoothie" },
    ],
  },
  {
    id: "shakes-more",
    name: "Shakes & More",
    description:
      "Creamy shakes, fruit parfaits, and specialty creations worth chasing down the truck for.",
    imageKey: "milkshake",
    items: [
      { name: "Milkshakes", imageKey: "milkshake" },
      { name: "Fruit Parfaits", imageKey: "parfait" },
      { name: "Specialty Shakes", imageKey: "milkshake" },
    ],
  },
];

export const productPreview = [
  {
    title: "Build Your Own FroYo",
    description:
      "Pick your flavors and pile on the toppings for a dessert that's uniquely yours.",
    imageKey: "froyoCup" as const,
    href: "/menu#frozen-yogurt",
  },
  {
    title: "Specialty Sundaes",
    description:
      "Creative combinations and seasonal favorites with big flavor in every spoonful.",
    imageKey: "sundae" as const,
    href: "/menu#specialty-creations",
  },
  {
    title: "Dole Whip & Refreshing Treats",
    description:
      "Light, tropical, and refreshing—the perfect treat on a warm Sacramento day.",
    imageKey: "doleWhip" as const,
    href: "/menu#cool-refreshing",
  },
  {
    title: "Milkshakes & Smoothies",
    description:
      "Thick, creamy shakes and fruit-forward smoothies for every kind of sweet tooth.",
    imageKey: "milkshake" as const,
    href: "/menu#shakes-more",
  },
];
