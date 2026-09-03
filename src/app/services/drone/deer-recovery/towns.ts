export type Town = {
  slug: string;
  name: string;
  county: string;
};

export const TOWNS: Town[] = [
  { slug: "youngstown", name: "Youngstown", county: "Mahoning" },
  { slug: "boardman", name: "Boardman", county: "Mahoning" },
  { slug: "austintown", name: "Austintown", county: "Mahoning" },
  { slug: "canfield", name: "Canfield", county: "Mahoning" },
  { slug: "poland", name: "Poland", county: "Mahoning" },
];

export const COUNTIES = ["Mahoning", "Trumbull", "Columbiana", "Portage", "Stark"] as const;

export function townBySlug(slug: string): Town | undefined {
  return TOWNS.find((t) => t.slug === slug);
}
