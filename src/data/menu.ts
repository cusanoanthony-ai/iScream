import type { ImageKey } from "./images";

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
  imageKey: ImageKey;
};

export type MenuItem = {
  name: string;
};

export const menuDisclaimer =
  "Menu items, flavors, toppings, and availability may change by event. Please contact us directly regarding allergies or dietary needs. We cannot guarantee an allergen-free preparation environment.";

export const menuCategories: MenuCategory[] = [
  {
    id: "frozen-yogurt",
    name: "Frozen Yogurt",
    description:
      "Choose your frozen yogurt and finish it with your favorite toppings. Flavor and topping availability may change.",
    imageKey: "fruityPebblesFroyoCloseup",
    items: [
      { name: "Build Your Own FroYo" },
      { name: "Classic FroYo Cup" },
      { name: "Loaded FroYo Cup" },
      { name: "Seasonal Flavors" },
    ],
  },
  {
    id: "specialty-creations",
    name: "Specialty Creations",
    description:
      "Big flavors, creative combinations, and limited-time favorites inspired by the season.",
    imageKey: "hotFudgeSundae",
    items: [
      { name: "Specialty Sundaes" },
      { name: "Brownie à la Mode" },
      { name: "Strawberry Cheesecake Bowl" },
      { name: "Peach Cobbler Sundae" },
      { name: "Seasonal Creations" },
    ],
  },
  {
    id: "floats-refreshers",
    name: "Cool & Refreshing",
    description:
      "Light, refreshing treats perfect for warm Sacramento days and outdoor events.",
    imageKey: "mangoChamoyCups",
    items: [
      { name: "Dole Whip" },
      { name: "Smoothies" },
      { name: "Chamango" },
      { name: "Soda Floats" },
      { name: "Seasonal Refreshers" },
    ],
  },
  {
    id: "shakes-more",
    name: "Shakes & More",
    description:
      "Creamy shakes, fruit parfaits, and specialty creations worth chasing down the truck for.",
    imageKey: "twoSpecialtyShakes",
    items: [
      { name: "Milkshakes" },
      { name: "Fruit Parfaits" },
      { name: "Specialty Shakes" },
    ],
  },
];

export const productPreview = [
  {
    title: "Build Your Own FroYo",
    accent: "Custom creations",
    description:
      "Pick your flavors and pile on the toppings for a dessert that's uniquely yours.",
    imageKey: "fruityPebblesFroyoCloseup" as ImageKey,
    href: "/menu#frozen-yogurt",
  },
  {
    title: "Specialty Sundaes",
    accent: "Big flavor",
    description:
      "Creative combinations and seasonal favorites with big flavor in every spoonful.",
    imageKey: "hotFudgeSundae" as ImageKey,
    href: "/menu#specialty-creations",
  },
  {
    title: "Dole Whip & Refreshing Treats",
    accent: "Cool & classic",
    description:
      "Orange floats, root beer floats, and refreshing treats for warm Sacramento days.",
    imageKey: "orangeFloat" as ImageKey,
    href: "/menu#floats-refreshers",
  },
  {
    title: "Milkshakes & Smoothies",
    accent: "Thick & creamy",
    description:
      "Thick, creamy shakes and fruit-forward smoothies for every kind of sweet tooth.",
    imageKey: "twoSpecialtyShakes" as ImageKey,
    href: "/menu#shakes-more",
  },
];
