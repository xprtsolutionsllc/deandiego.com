import { COUNTIES, type Town } from "./towns";

const HUB = "https://deandiego.com/services/drone/deer-recovery";

function countyAreas() {
  return COUNTIES.map((name) => ({
    "@type": "AdministrativeArea" as const,
    name: `${name} County, Ohio`,
  }));
}

export function deerRecoveryJsonLd(town?: Town) {
  const url = town ? `${HUB}/${town.slug}` : HUB;
  const description = town
    ? `Thermal drone deer recovery in ${town.name}, ${town.county} County, Ohio. $250 to come out. $50 more if we find it.`
    : "Thermal drone deer recovery in Northeast Ohio. $250 to come out. $50 more if we find it.";
  const townCity = town
    ? { "@type": "City" as const, name: `${town.name}, Ohio` }
    : null;
  const counties = countyAreas();
  const businessAreaServed = townCity ? [townCity, ...counties] : counties;
  const serviceAreaServed = townCity ? [townCity] : counties;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dean Diego Drone",
    legalName: "XPRT Solutions LLC dba Dean Diego Drone",
    url,
    description,
    areaServed: businessAreaServed,
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Thermal drone deer recovery",
        serviceType: "Thermal drone deer recovery",
        url,
        provider: {
          "@type": "LocalBusiness",
          name: "Dean Diego Drone",
        },
        areaServed: serviceAreaServed,
        offers: [
          {
            "@type": "Offer",
            name: "Search",
            description: "$250 to come out",
            price: "250",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            name: "Found",
            description: "$50 more if we find it",
            price: "50",
            priceCurrency: "USD",
          },
        ],
      },
    },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
