import { business, getSiteUrl } from "@/data/business";

export function JsonLd() {
  const siteUrl = getSiteUrl();

  const schema = {
    "@context": "https://schema.org",
    "@type": ["FoodEstablishment", "LocalBusiness"],
    name: business.name,
    description: business.primaryDescription,
    url: siteUrl,
    email: business.email.display,
    areaServed: {
      "@type": "City",
      name: business.location.city,
      containedInPlace: {
        "@type": "State",
        name: business.location.state,
      },
    },
    sameAs: [
      business.social.instagram.url,
      business.social.facebook.url,
      business.social.streetFoodFinder.url,
    ],
    menu: `${siteUrl}/menu`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "iScream Yogurt Menu",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MenuItem",
            name: "Mobile Frozen Yogurt Catering",
            url: `${siteUrl}/catering`,
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: business.email.display,
      availableLanguage: "English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
