import { describe, it, expect } from "vitest";
import { business, getSiteUrl } from "@/data/business";

describe("business configuration", () => {
  it("has correct business name", () => {
    expect(business.name).toBe("iScream Yogurt");
  });

  it("has valid email link", () => {
    expect(business.email.href).toBe("mailto:iscreamyogurt@gmail.com");
    expect(business.email.display).toBe("iscreamyogurt@gmail.com");
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
