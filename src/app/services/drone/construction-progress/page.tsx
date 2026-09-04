import type { Metadata } from "next";
import Link from "next/link";
import DroneDisclaimer from "@/components/services/DroneDisclaimer";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";

export const metadata: Metadata = {
  title: "Construction Progress Documentation",
  description:
    "Repeatable aerial construction progress documentation in Northeast Ohio for owners, contractors, and project teams.",
  alternates: { canonical: "/services/drone/construction-progress" },
  openGraph: {
    title: "Construction Progress Documentation | Dean Diego Drone",
    description:
      "Consistent flights across project milestones with organized photos, site views, and delivery.",
    url: "https://deandiego.com/services/drone/construction-progress",
    type: "website",
  },
};

const USES = [
  {
    title: "Owner visibility",
    description:
      "Give off-site owners a consistent view of the whole project instead of disconnected phone photos.",
  },
  {
    title: "Milestone records",
    description:
      "Document site conditions at excavation, structure, enclosure, exterior, and completion milestones.",
  },
  {
    title: "Team communication",
    description:
      "Share organized aerial sets that make location and project context easier to understand.",
  },
  {
    title: "Marketing updates",
    description:
      "Create approved progress media for stakeholders, development updates, and project announcements.",
  },
];

const DELIVERY = [
  "Repeatable viewpoints and flight paths",
  "Dated aerial photo sets",
  "Whole-site context images",
  "Optional milestone video",
  "Organized download or client portal",
  "Single-visit or recurring cadence",
];

export default function ConstructionProgressPage() {
  return (
    <>
      <section className="border-b border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ServiceBreadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Aerial Documentation", href: "/services/drone" },
              { label: "Construction Progress" },
            ]}
          />
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Construction Progress Documentation.
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-gray-400">
            Repeatable aerial capture across project milestones. Each visit
            shows the site from consistent positions so owners and project
            teams can compare progress without reconstructing the story.
          </p>
          <DroneDisclaimer className="mb-8 max-w-2xl" />
          <Link
            href="/contact?topic=drone-mapping"
            className="inline-block rounded-lg bg-[#DC2626] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Set up progress flights
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              Uses
            </p>
            <h2 className="mb-3 text-3xl font-bold">
              One site, understandable over time.
            </h2>
            <p className="text-gray-400">
              Progress media becomes more useful when the cadence, viewpoints,
              and delivery stay consistent.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {USES.map((use) => (
              <article
                key={use.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="mb-3 text-xl font-semibold">{use.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {use.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              Delivery
            </p>
            <h2 className="mb-4 text-3xl font-bold">
              Scoped as one visit or a cadence.
            </h2>
            <p className="leading-relaxed text-gray-400">
              The quote reflects site size, access, deliverables, and visit
              schedule. Recurring work is planned around project milestones,
              not an arbitrary content calendar.
            </p>
          </div>
          <ul className="space-y-3">
            {DELIVERY.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-300"
              >
                <svg
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#DC2626]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Set the baseline",
              desc: "Confirm the site boundary, useful viewpoints, milestones, and who receives the files.",
            },
            {
              step: "02",
              title: "Repeat the capture",
              desc: "Return at the agreed milestones and follow the same capture plan when conditions allow.",
            },
            {
              step: "03",
              title: "Organize the record",
              desc: "Deliver each dated visit in a consistent structure so changes are easy to compare.",
            },
          ].map((item) => (
            <div key={item.step}>
              <div className="mb-4 font-mono text-5xl font-bold text-[#DC2626]">
                {item.step}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-r from-[#DC2626]/5 to-transparent py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Need a repeatable site record?
          </h2>
          <p className="mb-8 text-gray-400">
            Send the address, current phase, and the next milestone.
          </p>
          <Link
            href="/contact?topic=drone-mapping"
            className="inline-block rounded-lg bg-[#DC2626] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Request a progress quote
          </Link>
        </div>
      </section>
    </>
  );
}
