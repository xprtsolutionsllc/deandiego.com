import type { Metadata } from "next";
import Link from "next/link";
import DroneDisclaimer from "@/components/services/DroneDisclaimer";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import ServiceHeroImage from "@/components/services/ServiceHeroImage";

export const metadata: Metadata = {
  title: "Aerial Mapping & Reality Capture",
  description:
    "Aerial mapping in Northeast Ohio with orthomosaic GeoTIFFs, surface models, point clouds, textured models, and site documentation.",
  alternates: { canonical: "/services/drone/mapping" },
  openGraph: {
    title: "Aerial Mapping & Reality Capture | Dean Diego Drone",
    description:
      "Repeatable grid capture processed into orthomosaics, surface models, point clouds, and site files.",
    url: "https://deandiego.com/services/drone/mapping",
    type: "website",
  },
};

const DELIVERABLES = [
  {
    title: "Orthomosaic",
    description:
      "A stitched, georeferenced top-down image delivered as a GeoTIFF for site context and downstream mapping work.",
  },
  {
    title: "Surface model",
    description:
      "A digital surface model showing relative elevation across visible terrain, structures, and stockpiles.",
  },
  {
    title: "Point cloud and 3D model",
    description:
      "A dense spatial dataset and textured model for review, visualization, and compatible design workflows.",
  },
  {
    title: "Capture record",
    description:
      "Organized source photos and flight details so the receiving professional knows how the dataset was produced.",
  },
];

const SCOPE_FACTORS = [
  "Acreage and site geometry",
  "Required ground resolution",
  "Airspace and site access",
  "Terrain and vertical structures",
  "Required file formats",
  "Licensed-surveyor involvement, if required",
];

export default function MappingPage() {
  return (
    <>
      <section className="border-b border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ServiceBreadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Aerial Documentation", href: "/services/drone" },
              { label: "Mapping" },
            ]}
          />
          <ServiceHeroImage
          src="/images/services/06_mapping.jpg"
          alt="Top-down orthomosaic-style aerial of fields and a creek"
          />

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Aerial Mapping & Reality Capture.
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-gray-400">
            Autonomous grid flights processed into orthomosaics, surface
            models, point clouds, and textured site models. Deliverables are
            scoped to the people and software using them next.
          </p>
          <DroneDisclaimer className="mb-8 max-w-2xl" />
          <Link
            href="/contact?topic=drone-mapping"
            className="inline-block rounded-lg bg-[#DC2626] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Scope a mapping job
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              Deliverables
            </p>
            <h2 className="mb-3 text-3xl font-bold">
              Useful files, not a photo dump.
            </h2>
            <p className="text-gray-400">
              The output is selected before flight so the capture plan matches
              the required resolution, overlap, and file format.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {DELIVERABLES.map((deliverable) => (
              <article
                key={deliverable.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="mb-3 text-xl font-semibold">
                  {deliverable.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {deliverable.description}
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
              Quote inputs
            </p>
            <h2 className="mb-4 text-3xl font-bold">
              Scoped by the site and files.
            </h2>
            <p className="leading-relaxed text-gray-400">
              Mapping is quoted after reviewing the location and intended use.
              Boundary, positional, or regulated deliverables require the
              appropriate licensed professional.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {SCOPE_FACTORS.map((factor) => (
              <li
                key={factor}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm text-gray-300"
              >
                {factor}
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
              title: "Define the output",
              desc: "Confirm the site, use case, coordinate needs, resolution, and receiving software.",
            },
            {
              step: "02",
              title: "Capture the grid",
              desc: "Fly the overlap and coverage required for the selected deliverables.",
            },
            {
              step: "03",
              title: "Process and deliver",
              desc: "Run the photogrammetry pipeline, review the outputs, and deliver organized files.",
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
          <h2 className="mb-4 text-3xl font-bold">Have a site to map?</h2>
          <p className="mb-8 text-gray-400">
            Send the address, acreage, intended use, and required file types.
          </p>
          <Link
            href="/contact?topic=drone-mapping"
            className="inline-block rounded-lg bg-[#DC2626] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Request a mapping quote
          </Link>
        </div>
      </section>
    </>
  );
}
