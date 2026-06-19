import { describe, it, expect } from "vitest";
import { imageManifest, galleryImages } from "@/data/images";
import fs from "fs";
import path from "path";

describe("image manifest", () => {
  it("defines all required image keys", () => {
    const requiredKeys = [
      "logo",
      "heroTruck",
      "truckSide",
      "truckAtEvent",
      "froyoCup",
      "doleWhip",
      "milkshake",
      "sundae",
      "smoothie",
      "parfait",
      "birthdayEvent",
      "schoolEvent",
      "companyEvent",
      "communityEvent",
      "ownerOrFamily",
      "gallery01",
      "gallery02",
      "gallery03",
      "gallery04",
      "gallery05",
      "gallery06",
    ];

    for (const key of requiredKeys) {
      expect(imageManifest).toHaveProperty(key);
      expect(imageManifest[key as keyof typeof imageManifest].alt).toBeTruthy();
    }
  });

  it("uses local public paths", () => {
    for (const entry of Object.values(imageManifest)) {
      expect(entry.src).toMatch(/^\/images\//);
    }
  });

  it("has six gallery images", () => {
    expect(galleryImages).toHaveLength(6);
  });

  it("builds without real photos present", () => {
    const publicDir = path.join(process.cwd(), "public");
    for (const entry of Object.values(imageManifest)) {
      const filePath = path.join(publicDir, entry.src.replace(/^\//, ""));
      const exists = fs.existsSync(filePath);
      if (!exists) {
        expect(entry.label).toBeTruthy();
        expect(entry.placeholderIcon).toBeTruthy();
      }
    }
  });
});
