import type { Metadata } from "next";
import Link from "next/link";
import DroneDisclaimer from "@/components/services/DroneDisclaimer";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import ServiceDirectoryCard from "@/components/services/ServiceDirectoryCard";
import ServiceHeroImage from "@/components/services/ServiceHeroImage";

export const metadata: Metadata = {
  title: "Drone Services",
  description:
    "FAA Part 107 aerial documentation in Northeast Ohio for real estate, commercial roofs, mapping, construction progress, video, and deer recovery.",
  alternates: { canonical: "/services/drone" },
  openGraph: {
    title: "Drone Services | Dean Diego Drone",
    description:
      "Real estate packages and custom aerial documentation delivered through a professional capture pipeline.",
    url: "https://deandiego.com/services/drone",
    type: "website",
  },
};

const SERVICES = [
  {
    title: "Real Estate Aerials",
    description:
      "MLS-ready photos, cinematic video, and interactive 3D packages with public starting prices.",
    href: "/services/drone/real-estate",
    eyebrow: "From $200",
    features: [
      "Aerial photo packages",
      "Edited listing video",
      "Interactive 3D delivery",
    ],
  },
  {
    title: "Commercial Roof Inspection",
    description:
      "RTK-tagged roof ortho, surface model, and pin list prepared as a source file for the professional who uses it.",
    href: "/services/drone/roof-inspection",
    eyebrow: "Quote by site",
    features: [
      "2 cm Wide-RGB target",
      "GeoTIFF and DSM",
      "PE-ready source files",
    ],
  },
  {
    title: "Aerial Mapping",
    description:
      "Repeatable grid capture processed into orthomosaics, surface models, point clouds, and site files.",
    href: "/services/drone/mapping",
    eyebrow: "Quote by acreage",
    features: [
      "Orthomosaic GeoTIFF",
      "3D point cloud and model",
      "Surface and volume outputs",
    ],
  },
  {
    title: "Construction Progress",
    description:
      "Consistent flights across milestones so owners and project teams can compare the same site over time.",
    href: "/services/drone/construction-progress",
    eyebrow: "Single or recurring",
    features: [
      "Repeatable flight paths",
      "Milestone documentation",
      "Organized client delivery",
    ],
  },
  {
    title: "Commercial Video",
    description:
      "Cinematic aerial footage for properties, developments, campaigns, and events, edited to the required format.",
    href: "/services/drone/commercial-video",
    eyebrow: "Quote by brief",
    features: [
      "Shot-to-brief capture",
      "Edited campaign deliverables",
      "Horizontal and vertical formats",
    ],
  },
  {
    title: "Deer Recovery",
    description:
      "Thermal search after the taking across the Northeast Ohio service area, with a direct field intake flow.",
    href: "/services/drone/deer-recovery",
    eyebrow: "$250 search",
    features: [
      "Ohio only",
      "$50 more if found dead",
      "Field request and waiver",
    ],
  },
];

export default function DroneServicesPage() {
  return (
    <>
      <section className="border-b border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ServiceBreadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Aerial Documentation" },
            ]}
          />
          <ServiceHeroImage
            src="/images/services/02_drone_hub.jpg"
            alt="Enterprise drone over a suburban Ohio street at dusk"
          />
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Drone Services.
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-gray-400">
            FAA Part 107 capture for listings, commercial sites, mapping, video,
            and thermal recovery. Each service has its own deliverables,
            pricing posture, and next step.
          </p>
          <DroneDisclaimer className="mb-8 max-w-2xl" />
          <div className="flex flex-wrap gap-3">
            {[
              "FAA Part 107 certified",
              "Commercial liability insurance",
              "Northeast Ohio",
              "Professional file delivery",
            ].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              Choose the flight
            </p>
            <h2 className="mb-3 text-3xl font-bold">
              One page for every service.
            </h2>
            <p className="text-gray-400">
              Start with the outcome you need. The detail page shows the
              deliverables, limitations, and booking path.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceDirectoryCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Scope",
              desc: "Share the address, intended use, timeline, and the professional or platform receiving the files.",
            },
            {
              step: "02",
              title: "Fly",
              desc: "Airspace, weather, site access, and capture requirements are checked before launch.",
            },
            {
              step: "03",
              title: "Deliver",
              desc: "Receive organized media or processed files through a download link or client portal.",
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
            Have a property or site in mind?
          </h2>
          <p className="mb-8 text-gray-400">
            Send the location, intended use, and delivery deadline.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact?topic=drone-mapping"
              className="rounded-lg bg-[#DC2626] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#B91C1C]"
            >
              Request a quote
            </Link>
            <Link
              href="/drone/recover"
              className="rounded-lg border border-white/15 px-10 py-4 text-lg font-semibold text-gray-300 transition hover:border-[#DC2626]/40"
            >
              Start deer recovery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
