import type { Metadata } from "next";
import Link from "next/link";
import DroneDisclaimer from "@/components/services/DroneDisclaimer";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";

export const metadata: Metadata = {
  title: "Commercial Drone Video",
  description:
    "Commercial aerial video in Northeast Ohio for properties, developments, campaigns, events, and brand storytelling.",
  alternates: { canonical: "/services/drone/commercial-video" },
  openGraph: {
    title: "Commercial Drone Video | Dean Diego Drone",
    description:
      "Shot-to-brief aerial capture and edited deliverables for properties, developments, and campaigns.",
    url: "https://deandiego.com/services/drone/commercial-video",
    type: "website",
  },
};

const USE_CASES = [
  {
    title: "Property showcases",
    description:
      "Establish the property, access, scale, and surrounding area in one clear visual sequence.",
  },
  {
    title: "Development updates",
    description:
      "Show the current site and completed work for investors, stakeholders, customers, or the public.",
  },
  {
    title: "Brand campaigns",
    description:
      "Capture locations, crews, events, and finished work around a defined campaign message.",
  },
  {
    title: "Event coverage",
    description:
      "Add aerial establishing shots and movement to approved outdoor events and activations.",
  },
];

const DELIVERABLES = [
  "Shot list aligned before the flight",
  "Cinematic aerial capture",
  "Color-corrected edit",
  "Licensed music when requested",
  "Horizontal and vertical exports",
  "Clean source clips available by scope",
];

export default function CommercialVideoPage() {
  return (
    <>
      <section className="border-b border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ServiceBreadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Aerial Documentation", href: "/services/drone" },
              { label: "Commercial Video" },
            ]}
          />
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Commercial Drone Video.
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-gray-400">
            Aerial footage for properties, developments, events, and campaigns.
            The flight follows a brief, and delivery matches the channels where
            the work will run.
          </p>
          <DroneDisclaimer className="mb-8 max-w-2xl" />
          <Link
            href="/contact?topic=drone-video"
            className="inline-block rounded-lg bg-[#DC2626] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Commission a video
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              Use cases
            </p>
            <h2 className="mb-3 text-3xl font-bold">
              Built around the message.
            </h2>
            <p className="text-gray-400">
              A useful aerial sequence starts with what the viewer needs to
              understand, not a collection of unrelated flyovers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {USE_CASES.map((useCase) => (
              <article
                key={useCase.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="mb-3 text-xl font-semibold">{useCase.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {useCase.description}
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
              Deliverables
            </p>
            <h2 className="mb-4 text-3xl font-bold">
              Quoted from the brief.
            </h2>
            <p className="leading-relaxed text-gray-400">
              Location, flight complexity, edit length, number of formats, and
              delivery deadline determine the quote. The agreed shot list and
              exports are written down before capture.
            </p>
          </div>
          <ul className="space-y-3">
            {DELIVERABLES.map((deliverable) => (
              <li
                key={deliverable}
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
                {deliverable}
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
              title: "Brief",
              desc: "Confirm the audience, message, location, must-have shots, formats, and deadline.",
            },
            {
              step: "02",
              title: "Capture",
              desc: "Fly the approved shot list within site, airspace, weather, and safety limits.",
            },
            {
              step: "03",
              title: "Edit",
              desc: "Assemble the sequence, finish color and audio, and export the agreed formats.",
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
          <h2 className="mb-4 text-3xl font-bold">Have a campaign brief?</h2>
          <p className="mb-8 text-gray-400">
            Send the location, audience, desired length, formats, and deadline.
          </p>
          <Link
            href="/contact?topic=drone-video"
            className="inline-block rounded-lg bg-[#DC2626] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Request a video quote
          </Link>
        </div>
      </section>
    </>
  );
}
