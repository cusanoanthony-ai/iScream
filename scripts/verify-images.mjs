#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

/** Paths referenced in src/data/images.ts — keep in sync */
const productionPaths = [
  "/images/brand/brand-logo.jpg",
  "/images/truck/truck-side-profile.webp",
  "/images/truck/truck-angle-closeup.webp",
  "/images/truck/purple-froyo-truck.webp",
  "/images/truck/fruity-cereal-shake-truck.webp",
  "/images/truck/berry-cookie-froyo-truck.webp",
  "/images/events/truck-serving-customers.webp",
  "/images/products/fruity-pebbles-froyo-closeup.webp",
  "/images/products/fruity-pebbles-froyo.webp",
  "/images/products/hot-fudge-sundae.webp",
  "/images/products/orange-float.webp",
  "/images/products/root-beer-float.webp",
  "/images/products/two-specialty-shakes.webp",
  "/images/products/peach-cobbler-sundae.webp",
  "/images/products/peach-cobbler-tall.webp",
  "/images/products/salted-caramel-oreo-froyo.webp",
  "/images/products/mango-chamoy-cups.webp",
  "/images/marketing/catering-offer-flyer.webp",
  "/images/gallery/berry-cookie-froyo-truck.webp",
  "/images/gallery/peach-cobbler-sundae.webp",
  "/images/gallery/mango-chamoy-cups.webp",
  "/images/gallery/salted-caramel-oreo-froyo.webp",
  "/images/gallery/fruity-pebbles-froyo.webp",
  "/images/gallery/truck-serving-customers.webp",
  "/images/gallery/truck-side-profile.webp",
  "/images/gallery/hot-fudge-sundae.webp",
  "/images/gallery/orange-float.webp",
  "/images/gallery/fruity-cereal-shake-truck.webp",
];

const missing = [];
for (const webPath of productionPaths) {
  const filePath = path.join(publicDir, webPath.replace(/^\//, ""));
  if (!fs.existsSync(filePath)) {
    missing.push(webPath);
  }
}

if (missing.length > 0) {
  console.error("Missing production images:\n");
  for (const p of missing) {
    console.error(`  ✗ ${p}`);
  }
  console.error(`\n${missing.length} image(s) missing. Add files under public/ before launch.`);
  process.exit(1);
}

console.log(`✓ All ${productionPaths.length} production image paths verified.`);
