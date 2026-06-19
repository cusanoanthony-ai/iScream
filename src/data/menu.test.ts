import { describe, it, expect } from "vitest";
import { menuCategories, productPreview, menuDisclaimer } from "@/data/menu";

describe("menu data", () => {
  it("has four categories", () => {
    expect(menuCategories).toHaveLength(4);
  });

  it("includes Frozen Yogurt category", () => {
    const froyo = menuCategories.find((c) => c.id === "frozen-yogurt");
    expect(froyo).toBeDefined();
    expect(froyo?.items.length).toBeGreaterThan(0);
  });

  it("has product preview cards for homepage", () => {
    expect(productPreview).toHaveLength(4);
    for (const product of productPreview) {
      expect(product.title).toBeTruthy();
      expect(product.href).toMatch(/^\/menu/);
      expect(product.imageKey).toBeTruthy();
    }
  });

  it("includes allergy disclaimer", () => {
    expect(menuDisclaimer).toContain("allerg");
    expect(menuDisclaimer).toContain("availability may change");
  });

  it("does not include prices in menu items", () => {
    for (const category of menuCategories) {
      for (const item of category.items) {
        expect(item).not.toHaveProperty("price");
      }
    }
  });
});
