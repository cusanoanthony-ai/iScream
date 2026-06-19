import { describe, it, expect } from "vitest";
import { business, getSiteUrl } from "@/data/business";

describe("business configuration", () => {
  it("has correct business name", () => {
    expect(business.name).toBe("iScream Yogurt");
  });

  it("has valid phone link", () => {
    expect(business.phone.href).toBe("tel:+12093314615");
    expect(business.phone.display).toBe("209.331.4615");
  });

  it("has Instagram URL", () => {
    expect(business.social.instagram.url).toBe(
      "https://www.instagram.com/iscreamyogurt/",
    );
    expect(business.social.instagram.handle).toBe("@iscreamyogurt");
  });

  it("has StreetFoodFinder URL", () => {
    expect(business.social.streetFoodFinder.url).toBe(
      "https://streetfoodfinder.com/IScreamYogurt",
    );
  });

  it("returns site URL with fallback", () => {
    const url = getSiteUrl();
    expect(url).toMatch(/^https?:\/\//);
  });
});
