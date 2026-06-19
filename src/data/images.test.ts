import { describe, it, expect } from "vitest";
import { imageManifest, galleryManifest, homepageGallery, getAllProductionImagePaths } from "@/data/images";
import fs from "fs";
import path from "path";

describe("image manifest", () => {
  it("defines all required truck and product keys", () => {
    const requiredKeys = [
      "truckSideProfile",
      "truckAngleCloseup",
      "fruityCerealShakeTruck",
      "truckServingCustomers",
      "fruityPebblesFroyoCloseup",
      "hotFudgeSundae",
      "orangeFloat",
      "twoSpecialtyShakes",
      "cateringOfferFlyer",
    ];

    for (const key of requiredKeys) {
      expect(imageManifest).toHaveProperty(key);
      expect(imageManifest[key as keyof typeof imageManifest].alt).toBeTruthy();
    }
  });

  it("uses webp paths under /images/", () => {
    for (const entry of Object.values(imageManifest)) {
      expect(entry.src).toMatch(/^\/images\/.+\.webp$/);
    }
  });

  it("has four homepage gallery images", () => {
    expect(homepageGallery).toHaveLength(4);
  });

  it("has full gallery manifest", () => {
    expect(galleryManifest.length).toBeGreaterThanOrEqual(6);
  });

  it("all production paths exist on disk", () => {
    const publicDir = path.join(process.cwd(), "public");
    for (const webPath of getAllProductionImagePaths()) {
      const filePath = path.join(publicDir, webPath.replace(/^\//, ""));
      expect(fs.existsSync(filePath), `Missing: ${webPath}`).toBe(true);
    }
  });
});
